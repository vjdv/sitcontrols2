import React from "react";
import PropTypes from "prop-types";
import Calendar from "./calendar";
import { getDate, stringFromDate, addDays, dayEquals } from "./../utils/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: getDate(props.defaultValue, props.format),
      showCalendar: false
    };
    this.count = DatePicker.counter || 1;
    DatePicker.counter = this.count + 1;
  }
  render() {
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    const text = stringFromDate(this.state.value, this.props.format);
    return (
      <div className={"sitcontrol_datepicker"} style={style}>
        {this.props.navigable && <FontAwesomeIcon className="sitcontrol_left" icon="caret-left" onClick={e => this.plusDay(-1)} />}
        <FontAwesomeIcon id={`sitcalendar_icon_${this.count}`} className="sitcontrol_calendar_icon" icon="calendar-alt" onClick={this.showCalendar} tabIndex="0" />
        <input className="sitcontrol" ref={this.setInput} name={this.props.name} value={text} onChange={this.changeHandler} readOnly={this.props.readOnly} disabled={this.props.disabled} />
        {this.props.navigable && <FontAwesomeIcon className="sitcontrol_right" icon="caret-right" onClick={e => this.plusDay(1)} />}
        {this.state.showCalendar && <Calendar defaultValue={this.state.value} onChange={this.calendarHandler} autoFocus />}
      </div>
    );
  }
  setInput = o => (this.input = o);
  calendarHandler = e => {
    const oldValue = this.state.value;
    const newValue = e.newValue;
    this.setState({ value: e.newValue, showCalendar: false }, () => {
      if (this.props.onChange !== undefined && !dayEquals(oldValue, newValue)) {
        this.props.onChange({ oldValue, newValue, oldStringValue: stringFromDate(oldValue, this.props.format), newStringValue: stringFromDate(newValue, this.props.format) });
      }
      document.getElementById(`sitcalendar_icon_${this.count}`).focus();
    });
  };
  changeHandler = e => this.setState({ showCalendar: true });
  showCalendar = () => {
    if (this.props.readOnly || this.props.disabled) return;
    this.setState({ showCalendar: !this.state.showCalendar }, () => {
      if (!this.state.showCalendar) {
        document.getElementById(`sitcalendar_icon_${this.count}`).focus();
      }
    });
  };
  plusDay(n) {
    const oldValue = this.state.value;
    const newValue = addDays(oldValue, n);
    this.setState({ value: newValue }, () => {
      if (this.props.onChange !== undefined) {
        this.props.onChange({ target: this, oldValue, newValue, oldStringValue: stringFromDate(oldValue, this.props.format), newStringValue: stringFromDate(newValue, this.props.format) });
      }
    });
  }
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = {};
    if (props.value !== undefined) newstate.value = getDate(props.value, props.format);
    return newstate;
  }
}

DatePicker.defaultProps = {
  style: {},
  defaultValue: new Date(),
  format: "yyyy-mm-dd",
  readOnly: false,
  disabled: false,
  navigable: false
};

DatePicker.propTypes = {
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  format: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  navigable: PropTypes.bool
};
