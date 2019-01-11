import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDate, prependZero, timeEquals } from "./../utils/date";

function calculateAngle(mouse_angle, step) {
  const half = step / 2;
  var angle = -1;
  for (var i = 0; i <= 360; i += step) {
    if (mouse_angle >= i - half && mouse_angle <= i + half) {
      angle = i;
      break;
    }
  }
  return (angle + 270) % 360;
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.hours12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.hours24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    this.minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    this.state = { value: props.defaultValue, selectionAngle: 40, index: 0 };
    if (props.value !== undefined) this.state.value = getDate(props.value, props.format);
    if (props.editOnly) this.state.index = 1;
    this.state.selection = this.state.value;
  }
  render() {
    const date = this.state.index === 0 ? this.state.value : this.state.selection;
    const value_style_props = { ["--start-hours"]: date.getHours() % 12, ["--start-minutes"]: date.getMinutes() || 60, ["--start-seconds"]: date.getSeconds() || 60 };
    const selection_class = this.state.index === 1 ? "sitcontrol_selection_h" : this.state.index === 2 ? "sitcontrol_selection_ms" : undefined;
    return (
      <div ref={o => (this.root = o)} tabIndex="0" className={"sitcontrol_clock " + (this.state.index === 0 ? "pickday" : "pickmonth")} onKeyUp={this.keyHandler}>
        <div className="sitcontrol_header">
          <div style={{ flex: 1 }}>
            <span className={cx((this.state.index === 0 || this.state.index === 1) && "sitcontrol_active")}>{prependZero(date.getHours() % 12)}</span>
            <span className={cx(this.state.index === 0 && "sitcontrol_active")}>:</span>
            <span className={cx((this.state.index === 0 || this.state.index === 2) && "sitcontrol_active")}>{prependZero(date.getMinutes())}</span>
            {this.state.index === 0 && <span className={cx((this.state.index === 0 || this.state.index === 3) && "sitcontrol_active")}>{date.getHours() < 12 ? "AM" : "PM"}</span>}
            {this.state.index !== 0 && (
              <div className="sitcontrol_ampm">
                <span className={cx(date.getHours() < 12 && "sitcontrol_active")} onClick={this.setAM}>
                  AM
                </span>
                <span className={cx(date.getHours() >= 12 && "sitcontrol_active")} onClick={this.setPM}>
                  PM
                </span>
              </div>
            )}
          </div>
          <div className="sitcontrol_actionbtn" onClick={this.edit}>
            <FontAwesomeIcon icon={this.state.index === 0 ? "pencil-alt" : "check"} />
          </div>
        </div>
        <div className="sitcontrol_numbers" onMouseDown={this.mdownHandler} onMouseUp={this.muphandler} onMouseMove={this.mmoveHandler}>
          <svg className="sitcontrol_clock_svg" viewBox="0 0 40 40" style={value_style_props}>
            <circle cx="20" cy="20" r="19" />
            <g className={cx("sitcontrol_clock_marks", this.state.index === 0 && "active")}>
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
              <line x1="15" y1="0" x2="16" y2="0" />
            </g>
            <g className={cx("sitcontrol_hidden", (this.state.index === 1 || this.state.index === 2) && "sitcontrol_active")}>
              <line x1="16" y1="0" x2="0" y2="0" className={cx("sitcontrol_selection_hand", selection_class)} />
              <circle cx="15" cy="0" r="2.5" className={cx("sitcontrol_selection_pin", selection_class)} />
            </g>
            <g className={cx("sitcontrol_clock_numbers1", this.state.index === 1 && "active")}>
              <text>10</text>
              <text>11</text>
              <text>12</text>
              <text>1</text>
              <text>2</text>
              <text>3</text>
              <text>4</text>
              <text>5</text>
              <text>6</text>
              <text>7</text>
              <text>8</text>
              <text>9</text>
            </g>
            <g className={cx("sitcontrol_clock_numbers2", this.state.index === 2 && "active")}>
              <text>50</text>
              <text>55</text>
              <text>0</text>
              <text>5</text>
              <text>10</text>
              <text>15</text>
              <text>20</text>
              <text>25</text>
              <text>30</text>
              <text>35</text>
              <text>40</text>
              <text>45</text>
            </g>
            <g className={cx("sitcontrol_ampm", "sitcontrol_hidden", this.state.index === 3 && "sitcontrol_active")}>
              <text x="14.5" y="-25" className={cx(this.state.selection.getHours() < 12 && "sitcontrol_active")}>
                AM
              </text>
              <text x="14" y="-12" className={cx(this.state.selection.getHours() >= 12 && "sitcontrol_active")}>
                PM
              </text>
            </g>
            <g className={cx("sitcontrol_hidden", this.state.index === 0 && "sitcontrol_active")}>
              <line x1="0" y1="0" x2="9" y2="0" className="sitcontrol_hours_hand" />
              <line x1="0" y1="0" x2="13" y2="0" className="sitcontrol_minutes_hand" />
              <line x1="0" y1="0" x2="16" y2="0" className="sitcontrol_seconds_hand" />
              <circle cx="20" cy="20" r="0.7" className="sitcontrol_pin" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.autoFocus) this.root.focus();
    if (this.props.autoUpdate) this.interval = setInterval(() => this.setState({ value: new Date() }), 1000);
  }
  edit = () => {
    if (this.state.index === 0 && !(this.props.readOnly || this.props.disabled)) this.setState({ index: 1, selection: this.state.value });
    else if (this.state.index !== 0) {
      const oldValue = this.state.value;
      const newValue = this.state.selection;
      this.setState({ index: 0, value: newValue }, () => {
        if (this.props.onChange && !timeEquals(oldValue, newValue)) this.props.onChange({ target: this, oldValue, newValue });
      });
    }
  };
  setAM = () => {
    const selection = new Date(this.state.selection);
    selection.setHours(selection.getHours() % 12);
    this.setState({ selection });
  };
  setPM = () => {
    const selection = new Date(this.state.selection);
    selection.setHours((selection.getHours() % 12) + 12);
    this.setState({ selection });
  };
  calculateMouseAngle = e => {
    const bcr = this.root.getBoundingClientRect();
    const x1 = bcr.x + bcr.width / 2;
    const y1 = bcr.y + bcr.height / 2;
    const x2 = e.pageX;
    const y2 = e.pageY;
    return Math.round((Math.atan2(y2 - y1, x2 - x1) + Math.PI) * (180 / Math.PI));
  };
  mdownHandler = e => {
    if (this.state.index === 0) return;
    const mouse_angle = this.calculateMouseAngle(e);
    if (this.state.index === 1) {
      const selectionAngle = calculateAngle(mouse_angle, 30);
      const selection = new Date(this.state.selection);
      selection.setHours(selectionAngle / 30 + (selection.getHours() < 12 ? 0 : 12));
      this.setState({ mousedown: true, selection });
    } else if (this.state.index === 2) {
      const selectionAngle = calculateAngle(mouse_angle, 6);
      const selection = new Date(this.state.selection);
      selection.setMinutes(selectionAngle / 6);
      this.setState({ mousedown: true, selection });
    } else if (this.state.index === 3) {
    }
  };
  muphandler = () => {
    if (this.state.index === 0) return;
    const index = this.state.index === 1 ? 2 : 1;
    this.setState({ mousedown: false, index });
  };
  mmoveHandler = e => {
    if (!this.state.mousedown) return;
    const mouse_angle = this.calculateMouseAngle(e);
    const selection = new Date(this.state.selection);
    if (this.state.index === 1) {
      const selectionAngle = calculateAngle(mouse_angle, 30);
      selection.setHours(selectionAngle / 30 + (selection.getHours() < 12 ? 0 : 12));
      this.setState({ selectionAngle, selection });
    } else if (this.state.index === 2) {
      const selectionAngle = calculateAngle(mouse_angle, 6);
      selection.setMinutes(selectionAngle / 6);
      this.setState({ selectionAngle, selection });
    }
  };
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = {};
    if (props.value !== undefined) newstate.value = props.value;
    return newstate;
  }
}

Clock.defaultProps = {
  defaultValue: new Date(),
  autoFocus: false,
  editOnly: false,
  readOnly: false,
  disabled: false
};

Clock.propTypes = {
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  editOnly: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool
};
