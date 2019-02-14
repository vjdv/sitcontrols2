import React from "react";
import PropTypes from "prop-types";
import s from "./../css/sitcontrol.scss";
import cx from "classnames";

export default class Input extends React.Component {
  state = { value: this.props.defaultValue };
  changeHandler = e => {
    const oldValue = this.state.value;
    var newValue = e.target.value;
    if (this.props.uppercase) newValue = newValue.toUpperCase();
    else if (this.props.lowercase) newValue = newValue.toLowerCase();
    if (this.props.accept !== undefined) {
      var re = new RegExp("^" + this.props.accept + "$");
      newValue = re.test(newValue) ? newValue : oldValue;
    }
    const _e = { target: this, oldValue, newValue, event: e };
    if (this.props.value !== undefined && this.props.onChange !== undefined) this.props.onChange(_e);
    else
      this.setState({ value: newValue }, () => {
        if (this.props.onChange !== undefined) this.props.onChange(_e);
      });
  };
  render() {
    var { value, defaultValue, className, onChange, accept, style, witdh, ss, uppercase, lowercase, ...inputprops } = this.props;
    if (style !== undefined && width !== undefined) Object.assign(style, { width });
    return <input className={cx(s.sitcontrol, className)} style={style} value={this.state.value} onChange={this.changeHandler} {...inputprops} />;
  }
  static getDerivedStateFromProps(props, state) {
    const newstate = {};
    if (props.value !== undefined && state.value !== props.value) newstate.value = props.value;
    return newstate;
  }
}

Input.defaultProps = {
  defaultValue: "",
  uppercase: false,
  lowercase: false,
  ss: s
};
Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  accept: PropTypes.string,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  onChange: PropTypes.func,
  width: PropTypes.number,
  ss: PropTypes.object
};
