import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

var select_counter = 0;

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.id = `sitselect${++select_counter}`;
  }
  changeHandler = e => {
    var oldValue = this.state.value;
    var newValue = this.props.readOnly ? oldValue : e.target.value;
    if (this.props.onChange !== undefined && oldValue !== newValue) {
      const oldIndex = this.getIndexByValue(oldValue);
      const newIndex = this.getIndexByValue(newValue);
      const oldItem = this.props.options[oldIndex] || null;
      const newItem = this.props.options[newIndex] || null;
      this.props.onChange({ target: this, oldValue, oldIndex, oldItem, newValue, newIndex, newItem });
    }
  };
  static getDerivedStateFromProps(props, prevstate) {
    const newstate = {};
    if (props.value !== undefined && (props.value !== prevstate.value || props.options !== prevstate.options)) {
      var index = -1;
      for (var i = 0; i < props.options.length; i++) {
        if (props.options[i][props.valueField] === props.value) {
          index = i;
          break;
        }
      }
      newstate.value = props.value;
      newstate.selectedIndex = index;
    }
    return newstate;
  }
  render() {
    var { id, options, defaultValue, value, className, labelField, valueField, onChange, style, width, ss, ...newprops } = this.props;
    style = { width, ...style };
    return (
      <select id={id || this.id} className={cx(ss.sitcontrol, className)} value={this.state.value} style={style} onChange={this.changeHandler} {...newprops}>
        {this.state.selectedIndex === -1 && <option value={this.state.value} />}
        {options.map((o, i) => (
          <option value={o[this.props.valueField]} key={i}>
            {o[this.props.labelField]}
          </option>
        ))}
      </select>
    );
  }
  getIndexByValue = value => {
    var index = -1;
    for (var i = 0; i < this.props.options.length; i++) {
      if (this.props.options[i][this.props.valueField] === value) {
        index = i;
        break;
      }
    }
    return index;
  };
}

Select.defaultProps = {
  readOnly: false,
  disabled: false,
  labelField: "label",
  valueField: "value",
  onChange: () => {},
  style: {},
  options: [],
  ss: {}
};
Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  labelField: PropTypes.string,
  valueField: PropTypes.string,
  style: PropTypes.object,
  ss: PropTypes.object
};

export default Select;
