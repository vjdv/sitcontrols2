import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./../css/sitcontrol.scss";

function getNumber(value_any) {
  var value = typeof value_any === "number" ? value_any : Number(value_any);
  if (isNaN(value)) {
    console.warn("NotaNumber: %s", value_any);
    value = 0;
  }
  return value;
}

function formatNumber(number, n, x) {
  var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
}

export default class NumberInput extends React.Component {
  state = { value: getNumber(this.props.defaultValue), focused: false };
  changeHandler = e => {
    const oldValue = this.state.value;
    const text = e.target.value;
    var newValue_str = text.replace(/[^0-9.]/g, "");
    if (text.charAt(0) === "-") newValue_str = "-" + newValue_str;
    const parts = newValue_str.split(".");
    var newValue = 0;
    if (newValue_str === "" || newValue_str === "-" || newValue_str === "-0") newValue = 0;
    else if (this.props.decimals === 0 || parts.length === 1) {
      newValue = Number(parts[0]);
      newValue_str = formatNumber(newValue);
    } else if (parts[1] !== "") {
      if (parts[1].length > this.props.decimals) parts[1] = parts[1].substring(0, this.props.decimals);
      newValue = Number(parts[0] + "." + parts[1]);
      newValue_str = formatNumber(newValue, parts[1].length);
    }
    if (this.props.value !== undefined) {
      this.state.text = newValue_str;
      this.props.onChange({ target: this, oldValue, newValue });
    } else {
      this.setState({ value: newValue, text: newValue_str }, () => {
        if (this.props.onChange !== undefined && oldValue !== newValue) {
          this.props.onChange({ target: this, oldValue, newValue });
        }
      });
    }
  };
  focused = e => {
    e.persist();
    const decimals = this.state.value % 1 === 0 ? 0 : this.props.decimals;
    this.setState({ focused: true, text: formatNumber(this.state.value, decimals) }, () => {
      this.input.select();
      if (this.props.onFocus) this.props.onFocus({ target: this, event: e });
    });
  };
  blurred = e => {
    e.persist();
    this.setState({ focused: false }, () => {
      if (this.props.onBlur) this.props.onBlur({ target: this, event: e });
    });
  };
  keyUpHandler = e => {
    e.persist();
    if (this.props.onEnter && e.keyCode === 13) {
      e.preventDefault();
      this.props.onEnter({ target: this });
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }
  };
  render() {
    var { value, defaultValue, onChange, onFocus, onBlur, onKeyUp, onEnter, prefix, suffix, ss, ...xprops } = this.props;
    const text = this.state.focused ? this.state.text : this.props.prefix + formatNumber(this.state.value, this.props.decimals) + this.props.suffix;
    return (
      <input
        ref={o => (this.input = o)}
        className={cx(ss.sitcontrol, ss.right)}
        value={text}
        onChange={this.changeHandler}
        onFocus={this.focused}
        onBlur={this.blurred}
        onKeyUp={this.keyUpHandler}
        {...xprops}
      />
    );
  }
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = {};
    if (props.value !== undefined && prevstate.value !== props.value) newstate.value = getNumber(props.value);
    return newstate;
  }
}

NumberInput.defaultProps = {
  defaultValue: 0,
  prefix: "",
  suffix: "",
  decimals: 0,
  ss: s
};
NumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  decimals: PropTypes.number,
  onChange: PropTypes.func,
  ss: PropTypes.object
};
