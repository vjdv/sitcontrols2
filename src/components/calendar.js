import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDays, addMonths, addYears, getDate } from "./util";

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
    this.state.selection = this.state.value;
  }
  render() {
    const { value, selection } = this.state;
    const months = this.monthslang[this.props.lang];
    const daysofweek = this.daysofweeklang[this.props.lang];
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    return (
      <div tabIndex="0" className={"sitcontrol_calendar " + (this.state.index === 0 ? "pickday" : "pickmonth")} onKeyUp={this.keyHandler}>
        {this.state.index === 0 ? (
          <div className="sitcontrol_header">
            <div className="sitcontrol_title">
              <FontAwesomeIcon className="angle left" icon="angle-left" onClick={e => this.setState({ selection: addMonths(selection, -1) })} />
              <span onClick={this.showMonths}>{months[selection.getMonth()] + " " + selection.getFullYear()}</span>
              <FontAwesomeIcon className="angle right" icon="angle-right" onClick={e => this.setState({ selection: addMonths(selection, 1) })} />
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
          <div>
            <FontAwesomeIcon className="angle left" icon="angle-left" onClick={e => this.setState({ selection: addYears(selection, -1) })} />
            {this.state.selectionYear}
            <FontAwesomeIcon className="angle right" icon="angle-right" onClick={e => this.setState({ selection: addYears(selection, 1) })} />
          </div>
        )}
        {this.state.index === 0 ? (
          <div className="sitcontrol_month" onClick={this.selectValue}>
            {this.renderWeeks()}
          </div>
        ) : (
          <ul onClick={this.selectValue}>
            {months.map((y, i) => (
              <li className={this.state.month === i + 1 && this.state.selectionYear === this.state.year ? "selected" : undefined} data-value={i + 1} key={i}>
                {y.substring(0, 3)}
              </li>
            ))}
            <br style={{ clear: "both" }} />
          </ul>
        )}
      </div>
    );
  }
  keyHandler = e => {
    const key = e.keyCode;
    e.preventDefault();
    if (!(key >= 33 && key <= 40)) return;
    this.setState(newstate => {
      if (key === 33) newstate.selection = addMonths(newstate.selection, -1);
      else if (key === 34) newstate.selection = addMonths(newstate.selection, 1);
      else if (key === 35) newstate.selection = addYears(newstate.selection, 1);
      else if (key === 36) newstate.selection = addYears(newstate.selection, -1);
      else if (key === 37) newstate.selection = addDays(newstate.selection, -1);
      else if (key === 38) newstate.selection = addDays(newstate.selection, -7);
      else if (key === 39) newstate.selection = addDays(newstate.selection, 1);
      else if (key === 40) newstate.selection = addDays(newstate.selection, 7);
      return newstate;
    });
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
        <div key={i} className={cx("sitcontrol_day", this.state.selection.getDate() === i && "picked")}>
          {i}
        </div>
      );
    return array;
  }
  selectValue = e => {
    if (e.target.nodeName !== "LI") return;
    const value = e.target.dataset.value;
    if (value === undefined) return;
    if (this.state.index === 0) {
      this.setState({ show: false, year: this.state.selectionYear, month: this.state.selectionMonth, day: Number(value) });
    } else if (this.state.index === 1) {
      this.setState({ index: 0, selectionMonth: Number(value) });
    }
  };
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = {};
    console.log("x");
    if (props.value !== undefined) {
      var y = props.value.substring(0, 4);
      var m = props.value.substring(5, 7);
      var d = props.value.substring(8, 10);
      newstate.year = Number(y);
      newstate.month = Number(m);
      newstate.day = Number(d);
      console.log("y");
    }
    console.log(newstate);
    return newstate;
  }
}

Calendar.defaultProps = {
  style: {},
  defaultValue: new Date(),
  onChange: () => {},
  lang: (navigator.language || navigator.userLanguage || "en").substring(0, 2),
  format: "yyyy-mm-dd"
};

Calendar.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  format: PropTypes.string
};
