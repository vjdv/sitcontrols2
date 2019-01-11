import React from "react";
import PropTypes from "prop-types";
import Calendar from "./calendar";
import Clock from "./clock";
import { getDate, stringFromDate, dayEquals, timeEquals } from "./../utils/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const clock_icon = { prefix: "far", iconName: "clock" };

export default class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: getDate(props.defaultValue, props.format),
      showCalendar: false
    };
    this.count = DateTimePicker.counter || 1;
    DateTimePicker.counter = this.count + 1;
  }
  render() {
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    const text = stringFromDate(this.state.value, this.props.format);
    return (
      <div className={"sitcontrol_datetimepicker"} style={style}>
        <FontAwesomeIcon id={`sitcalendar_icon_${this.count}`} className="sitcontrol_calendar_icon" icon="calendar-alt" onClick={this.showCalendar} tabIndex="0" />
        <FontAwesomeIcon id={`sitclock_icon_${this.count}`} className="sitcontrol_clock_icon" icon={clock_icon} onClick={this.showClock} tabIndex="0" />
        <input className="sitcontrol" ref={this.setInput} name={this.props.name} value={text} onChange={this.changeHandler} readOnly={this.props.readOnly} disabled={this.props.disabled} />
        {this.state.showCalendar && <Calendar defaultValue={this.state.value} onChange={this.calendarHandler} autoFocus />}
        {this.state.showClock && <Clock defaultValue={this.state.value} onChange={this.clockHandler} autoFocus editOnly />}
      </div>
    );
  }
  setInput = o => (this.input = o);
  calendarHandler = e => {
    const oldValue = this.state.value;
    const newValue = new Date(e.newValue);
    newValue.setHours(oldValue.getHours());
    newValue.setMinutes(oldValue.getMinutes());
    newValue.setSeconds(oldValue.getSeconds());
    this.setState({ value: e.newValue, showCalendar: false }, () => {
      if (this.props.onChange !== undefined && !dayEquals(oldValue, newValue)) {
        this.props.onChange({ oldValue, newValue, oldStringValue: stringFromDate(oldValue, this.props.format), newStringValue: stringFromDate(newValue, this.props.format) });
      }
      document.getElementById(`sitcalendar_icon_${this.count}`).focus();
    });
  };
  clockHandler = e => {
    const oldValue = this.state.value;
    const newValue = new Date(e.newValue);
    newValue.setFullYear(oldValue.getFullYear());
    newValue.setMonth(oldValue.getMonth());
    newValue.setDate(oldValue.getDate());
    this.setState({ value: e.newValue, showClock: false }, () => {
      if (this.props.onChange !== undefined && !timeEquals(oldValue, newValue)) {
        this.props.onChange({ oldValue, newValue, oldStringValue: stringFromDate(oldValue, this.props.format), newStringValue: stringFromDate(newValue, this.props.format) });
      }
      document.getElementById(`sitclock_icon_${this.count}`).focus();
    });
  };
  changeHandler = e => {
    const ss = e.target.selectionStart || 0;
    this.setState({ showCalendar: ss < 10, showClock: ss >= 10 });
  };
  showCalendar = () => {
    if (this.props.readOnly || this.props.disabled) return;
    this.setState({ showCalendar: !this.state.showCalendar, showClock: false }, () => {
      if (!this.state.showCalendar) {
        document.getElementById(`sitcalendar_icon_${this.count}`).focus();
      }
    });
  };
  showClock = () => {
    if (this.props.readOnly || this.props.disabled) return;
    this.setState({ showClock: !this.state.showClock, showCalendar: false }, () => {
      if (!this.state.showClock) {
        document.getElementById(`sitclock_icon_${this.count}`).focus();
      }
    });
  };
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = {};
    if (props.value !== undefined) newstate.value = getDate(props.value, props.format);
    return newstate;
  }
}

DateTimePicker.defaultProps = {
  style: {},
  defaultValue: new Date(),
  format: "yyyy-mm-dd hh:ii:ss",
  readOnly: false,
  disabled: false
};

DateTimePicker.propTypes = {
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  format: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool
};
