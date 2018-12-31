import React from "react";
import cx from "classnames";
//import s from "./datepicker.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DatePicker extends React.Component {
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
    this.days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var lang = props.lang || navigator.language || navigator.userLanguage || "en";

    this.state = {
      year: props.defaultYear || this.today.getFullYear(),
      month: props.defaultMonth || this.today.getMonth() + 1,
      day: props.defaultDay || this.today.getDate(),
      index: 0
    };
    this.state.selectionYear = this.state.year;
    this.state.selectionMonth = this.state.month;
    this.state.selectionDay = this.state.day;
    if (props.defaultValue) {
      this.state.year = Number(props.defaultValue.substring(0, 4));
      this.state.month = Number(props.defaultValue.substring(5, 7));
      this.state.day = Number(props.defaultValue.substring(8, 10));
    }
    if (props.onChange) this.onChange = props.onChange;
    this.oldValue = this.value;
  }
  render() {
    const months = this.monthslang[this.props.lang];
    const daysofweek = this.daysofweeklang[this.props.lang];
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    return (
      <div className={"sitcontrol_calendar " + (this.state.index === 0 ? "pickday" : "pickmonth")}>
        {this.state.index === 0 ? (
          <div className="sitcontrol_header">
            <div className="sitcontrol_title">
              <FontAwesomeIcon className="angle left" icon="angle-left" onClick={e => this.plusMonth(-1)} />
              <span onClick={this.showMonths}>{months[this.state.selectionMonth - 1] + " " + this.state.selectionYear}</span>
              <FontAwesomeIcon className="angle right" icon="angle-right" onClick={e => this.plusMonth(1)} />
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
            <FontAwesomeIcon className="angle left" icon="angle-left" onClick={e => this.plusYear(-1)} />
            {this.state.selectionYear}
            <FontAwesomeIcon className="angle right" icon="angle-right" onClick={e => this.plusYear(1)} />
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
  changeHandler = e => this.setState({ value: this.value });
  keyHandler = e => {
    const key = e.keyCode;
    e.preventDefault();
    if (key === 37 && this.selectionMode > 1) this.selectionMode--;
    else if (key === 39 && this.selectionMode < 3) this.selectionMode++;
    else if (key === 38 && this.selectionMode === 1) this.year++;
    else if (key === 38 && this.selectionMode === 2) this.month++;
    else if (key === 38 && this.selectionMode === 3) this.day++;
    else if (key === 40 && this.selectionMode === 1) this.year--;
    else if (key === 40 && this.selectionMode === 2) this.month--;
    else if (key === 40 && this.selectionMode === 3) this.day--;
    else if (key >= 96 && key <= 105) {
      if (key >= 96 && key <= 98 && this.month === 1 && this.selectionMode === 2) this.month = key - 86;
      else if (key >= 96 && key <= 97 && this.selectionMode === 2) this.month = 1;
      else if (key > 97 && this.selectionMode === 2) this.month = key - 96;
      else if (key >= 96 && this.day === 1 && this.selectionMode === 3) this.day = key - 86;
      else if (key >= 96 && this.day === 2 && this.selectionMode === 3) this.day = key - 76;
      else if (key >= 96 && this.day === 3 && this.selectionMode === 3) this.day = Math.min(key - 66, this.days[this.month]);
      else if (key >= 97 && this.selectionMode === 3) this.day = key - 96;
    }
    setTimeout(this.selectText, 100);
  };
  selectText = () => {
    if (this.selectionMode === 1) {
      this.input.selectionStart = 0;
      this.input.selectionEnd = 4;
    } else if (this.selectionMode === 2) {
      this.input.selectionStart = 5;
      this.input.selectionEnd = 7;
    } else if (this.selectionMode === 3) {
      this.input.selectionStart = 8;
      this.input.selectionEnd = 10;
    }
  };
  calculateDayOfWeek(y, m, d) {
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= m < 3;
    return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
  }
  showMonths = e => {
    this.setState({ index: 1 });
  };
  plusYear(n) {
    this.setState({ selectionYear: this.state.selectionYear + n });
  }
  plusMonth(n) {
    var month = this.state.selectionMonth + n;
    var year = this.state.selectionYear;
    if (month <= 0) {
      month = 12;
      year--;
    }
    if (month >= 13) {
      month = 1;
      year++;
    }
    this.setState({ selectionYear: year, selectionMonth: month });
  }
  plusDay(n) {
    var day = this.state.day + n;
    var month = this.state.month;
    var year = this.state.year;
    if (day <= 0) {
      month--;
      if (month === 0) {
        month = 12;
        year--;
      }
      day = this.days[month];
    }
    if (day > this.days[month]) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }
    this.setState({ year, month, day, selectionYear: year, selectionMonth: month });
  }
  renderDaysList = () => {
    const daysofweek = this.daysofweeklang[this.props.lang];
    const firstday = this.calculateDayOfWeek(this.state.selectionYear, this.state.selectionMonth, 1);
    var list = [];
    for (let i = 0; i < daysofweek.length; i++) {
      list.push(
        <li className={"header"} key={i}>
          {daysofweek[i]}
        </li>
      );
    }
    for (let i = 1; i <= firstday; i++) {
      list.push(<li key={7 + i} />);
    }
    for (let i = 1; i <= this.days[this.state.selectionMonth]; i++) {
      let selected = this.state.year === this.state.selectionYear && this.state.month === this.state.selectionMonth && this.state.day === i;
      let today = this.state.selectionYear === this.today.getFullYear() && this.state.selectionMonth === this.today.getMonth() + 1 && this.today.getDate() === i;
      list.push(
        <li className={cx(selected && "selected", today && "today")} key={14 + i} data-value={i}>
          {i}
        </li>
      );
    }
    return list;
  };
  renderWeeks = () => {
    const weeks = [];
    const startofweek = this.calculateDayOfWeek(this.state.selectionYear, this.state.selectionMonth, 1);
    const days_month = this.state.selectionMonth === 2 && this.state.selectionMonth % 4 === 0 ? 29 : this.days[this.state.selectionMonth];
    var cur_day = 1;
    var total_weeks = Math.round((days_month + startofweek) / 7 + 0.5);
    for (var i = 0; i < total_weeks; i++) {
      const to = cur_day + 6 + (cur_day === 1 ? -startofweek : 0);
      weeks.push(
        <div className="sitcontrol_week">
          {cur_day === 1 && this.renderEmpty(startofweek)}
          {this.renderDays(cur_day, Math.min(to, days_month))}
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
        <div key={i} className="sitcontrol_day">
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

DatePicker.defaultProps = {
  style: {},
  onChange: () => {},
  lang: (navigator.language || navigator.userLanguage || "en").substring(0, 2),
  format: "yyyy-MM-dd"
};

DatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  format: PropTypes.string
};
