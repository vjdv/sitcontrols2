import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDays, addMonths, addYears, getDate, dayEquals } from "./../utils/date";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.monthslang = {
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    };
    this.daysofweeklang = {
      en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      es: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
    };
    this.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.state = { value: getDate(props.defaultValue, props.format), index: 0 };
    if (props.value !== undefined) this.state.value = getDate(props.value, props.format);
    this.state.selection = this.state.value;
  }
  render() {
    const { value, selection } = this.state;
    const months = this.monthslang[this.props.lang];
    const daysofweek = this.daysofweeklang[this.props.lang];
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    return (
      <div ref={o => (this.root = o)} tabIndex="0" className={"sitcontrol_calendar " + (this.state.index === 0 ? "pickday" : "pickmonth")} onKeyUp={this.keyHandler}>
        {this.state.index === 0 ? (
          <div className="sitcontrol_header">
            <div className="sitcontrol_title">
              <FontAwesomeIcon className="sitcontrol_left" icon="caret-left" onClick={e => this.setState({ selection: addMonths(selection, -1) })} />
              <span onClick={this.showMonths}>{months[selection.getMonth()] + " " + selection.getFullYear()}</span>
              <FontAwesomeIcon className="sitcontrol_right" icon="caret-right" onClick={e => this.setState({ selection: addMonths(selection, 1) })} />
            </div>
            <div className="sitcontrol_week">
              {daysofweek.map((o, i) => (
                <div className="sitcontrol_day" key={i}>
                  {o}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="sitcontrol_header">
            <div className="sitcontrol_title">
              <FontAwesomeIcon className="sitcontrol_left" icon="caret-left" onClick={e => this.setState({ selection: addYears(selection, -1) })} />
              {selection.getFullYear()}
              <FontAwesomeIcon className="sitcontrol_right" icon="caret-right" onClick={e => this.setState({ selection: addYears(selection, 1) })} />
            </div>
          </div>
        )}
        {this.state.index === 0 ? (
          <div className="sitcontrol_month" onClick={this.selectDay}>
            {this.renderWeeks()}
          </div>
        ) : (
          <div className="sitcontrol_year" onClick={this.selectMonth}>
            {months.map((o, i) => (
              <div
                className={cx("sitcontrol_month2", selection.getMonth() === i && "picked", value.getMonth() === i && value.getFullYear() === selection.getFullYear() && "selected")}
                data-value={i}
                key={i}
              >
                {o.substring(0, 3)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    if (this.props.autoFocus) this.root.focus();
  }
  keyHandler = e => {
    const key = e.keyCode;
    if (key !== 13 && !(key >= 33 && key <= 40)) return;
    e.preventDefault();
    var oldValue = this.state.value;
    var newValue = oldValue;
    this.setState(
      newstate => {
        if (newstate.index === 1 && key === 37) newstate.selection = addMonths(newstate.selection, -1);
        else if (newstate.index === 1 && key === 38) newstate.selection = addMonths(newstate.selection, -3);
        else if (newstate.index === 1 && key === 39) newstate.selection = addMonths(newstate.selection, 1);
        else if (newstate.index === 1 && key === 40) newstate.selection = addMonths(newstate.selection, 3);
        else if (key === 33) newstate.selection = addMonths(newstate.selection, -1);
        else if (key === 34) newstate.selection = addMonths(newstate.selection, 1);
        else if (key === 35) newstate.selection = addYears(newstate.selection, 1);
        else if (key === 36) newstate.selection = addYears(newstate.selection, -1);
        else if (key === 37) newstate.selection = addDays(newstate.selection, -1);
        else if (key === 38) newstate.selection = addDays(newstate.selection, -7);
        else if (key === 39) newstate.selection = addDays(newstate.selection, 1);
        else if (key === 40) newstate.selection = addDays(newstate.selection, 7);
        else if (newstate.index === 1 && key === 13) newstate.index = 0;
        else if (key === 13) newstate.value = newstate.selection;
        newValue = newstate.value;
        return newstate;
      },
      () => {
        if (!dayEquals(oldValue, newValue) && this.props.onChange !== undefined) this.props.onChange({ target: this, oldValue, newValue });
      }
    );
  };
  calculateDayOfWeek(y, m, d) {
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= m < 3;
    return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
  }
  showMonths = e => {
    this.setState({ index: 1 });
  };
  renderWeeks = () => {
    const weeks = [];
    const startofweek = this.calculateDayOfWeek(this.state.selection.getFullYear(), this.state.selection.getMonth() + 1, 1);
    const days_month = this.state.selection.getMonth() === 1 && this.state.selection.getFullYear() % 4 === 0 ? 29 : this.days[this.state.selection.getMonth()];
    var cur_day = 1;
    var total_weeks = Math.round((days_month + startofweek) / 7 + 0.5);
    for (var i = 1; i <= total_weeks; i++) {
      const to = cur_day + 6 + (cur_day === 1 ? -startofweek : 0);
      weeks.push(
        <div key={i} className="sitcontrol_week">
          {cur_day === 1 && this.renderEmpty(startofweek)}
          {this.renderDays(cur_day, Math.min(to, days_month))}
          {i === total_weeks && this.renderEmpty(i * 7 - days_month - startofweek)}
        </div>
      );
      cur_day = to + 1;
    }
    return weeks;
  };
  renderEmpty(count) {
    const array = [];
    for (var i = 0; i < count; i++) array.push(<div key={i} className="sitcontrol_day" />);
    return array;
  }
  renderDays(from, to) {
    const array = [];
    for (var i = from; i <= to; i++)
      array.push(
        <div
          key={i}
          className={cx(
            "sitcontrol_day",
            this.state.selection.getDate() === i && "picked",
            this.state.value.getFullYear() === this.state.selection.getFullYear() && this.state.value.getMonth() === this.state.selection.getMonth() && this.state.value.getDate() === i && "selected"
          )}
          data-value={i}
        >
          {i}
        </div>
      );
    return array;
  }
  selectDay = e => {
    const dayvalue = e.target.dataset.value;
    if (dayvalue === undefined) return;
    const oldValue = new Date(this.state.value);
    const newValue = new Date(this.state.selection);
    newValue.setDate(Number(dayvalue));
    this.setState({ value: newValue }, () => {
      if (!dayEquals(oldValue, newValue) && this.props.onChange !== undefined) this.props.onChange({ target: this, oldValue, newValue });
    });
  };
  selectMonth = e => {
    const monthvalue = e.target.dataset.value;
    if (monthvalue === undefined) return;
    const newSelection = new Date(this.state.selection);
    newSelection.setMonth(Number(monthvalue));
    this.setState({ selection: newSelection, index: 0 });
  };
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = {};
    if (props.value !== undefined) newstate.value = getDate(props.value, props.format);
    return newstate;
  }
}

Calendar.defaultProps = {
  style: {},
  defaultValue: new Date(),
  onChange: () => {},
  lang: (navigator.language || navigator.userLanguage || "en").substring(0, 2),
  format: "yyyy-mm-dd",
  autoFocus: false
};

Calendar.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  format: PropTypes.string,
  autoFocus: PropTypes.bool
};
