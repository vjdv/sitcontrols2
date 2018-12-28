import React from 'react';
import PropTypes from 'prop-types';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var select_counter = 0;

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeHandler", function (e) {
      var oldValue = _this.state.value;
      var newValue = _this.props.readOnly ? oldValue : e.target.value;

      if (_this.props.onChange !== undefined && oldValue !== newValue) {
        var oldIndex = _this.getIndexByValue(oldValue);

        var newIndex = _this.getIndexByValue(newValue);

        var oldItem = _this.props.options[oldIndex] || null;
        var newItem = _this.props.options[newIndex] || null;

        _this.props.onChange({
          target: _assertThisInitialized(_assertThisInitialized(_this)),
          oldValue: oldValue,
          oldIndex: oldIndex,
          oldItem: oldItem,
          newValue: newValue,
          newIndex: newIndex,
          newItem: newItem
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getIndexByValue", function (value) {
      var index = -1;

      for (var i = 0; i < _this.props.options.length; i++) {
        if (_this.props.options[i][_this.props.valueField] === value) {
          index = i;
          break;
        }
      }

      return index;
    });

    _this.state = {};
    _this.id = "sitselect".concat(++select_counter);
    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          options = _this$props.options,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          className = _this$props.className,
          labelField = _this$props.labelField,
          valueField = _this$props.valueField,
          onChange = _this$props.onChange,
          style = _this$props.style,
          width = _this$props.width,
          ss = _this$props.ss,
          newprops = _objectWithoutProperties(_this$props, ["id", "options", "defaultValue", "value", "className", "labelField", "valueField", "onChange", "style", "width", "ss"]);

      style = _objectSpread({
        width: width
      }, style);
      return React.createElement("select", _extends({
        id: id || this.id,
        className: classnames(ss.sitcontrol, className),
        value: this.state.value,
        style: style,
        onChange: this.changeHandler
      }, newprops), this.state.selectedIndex === -1 && React.createElement("option", {
        value: this.state.value
      }), options.map(function (o, i) {
        return React.createElement("option", {
          value: o[_this2.props.valueField],
          key: i
        }, o[_this2.props.labelField]);
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevstate) {
      var newstate = {};

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
  }]);

  return Select;
}(React.Component);

Select.defaultProps = {
  readOnly: false,
  disabled: false,
  labelField: "label",
  valueField: "value",
  onChange: function onChange() {},
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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".sitcontrol_sitcontrol__1XpeW {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n  box-sizing: border-box; }\n  .sitcontrol_sitcontrol__1XpeW:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .sitcontrol_sitcontrol__1XpeW:disabled, .sitcontrol_sitcontrol__1XpeW[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n";
var s = {"sitcontrol":"sitcontrol_sitcontrol__1XpeW"};
styleInject(css);

function Select$1(props) {
  return React.createElement(Select, _extends({
    ss: s
  }, props));
}

export { Select as CSelect, Select$1 as SCSelect };
//# sourceMappingURL=index.module.js.map
