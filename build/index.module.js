import React from 'react';
import PropTypes from 'prop-types';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

var s = {"sitcontrol":"sitcontrol_sitcontrol__1XpeW","right":"sitcontrol_right__2fESG"};

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
  ss: s
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

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
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

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray$1(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = _objectSpread$1({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config = _objectSpread$1({}, _default);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread$1({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread$1({}, trans.inner),
    children: [{
      tag: 'path',
      attributes: _objectSpread$1({}, mainPath.attributes, trans.path, {
        fill: 'black'
      })
    }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread$1({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread$1({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: [maskPath]
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread$1({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread$1({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread$1({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread$1({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread$1({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread$1({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread$1({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread$1({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;
    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();

var styles$1 = namespace.styles;
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread$1({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread$1({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread$1({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread$1({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread$1({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread$1({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread$1({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread$1({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread$1({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};

var styles$2 = namespace.styles;

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread$1({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck$1(this, Library);

    this.definitions = {};
  }

  _createClass$1(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread$1({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);
  return {
    found: true,
    width: width,
    height: height,
    icon: {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData[0]
      }
    }
  };
}

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === void 0 ? 'fa' : _params$prefix,
      iconName = params.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread$1({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var _cssInserted = false;
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread$1({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread$1({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule$1(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal$1);
});

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var defineProperty = function (obj, key, value) {
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
};

var _extends$1 = Object.assign || function (target) {
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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;

    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var children = (element.children || []).map(convert.bind(null, createElement));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;
      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;
      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[humps.camelize(key)] = val;
        }
    }

    return acc;
  }, { attrs: {} });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === undefined ? {} : _extraProps$style,
      remaining = objectWithoutProperties(extraProps, ['style']);


  mixins.attrs['style'] = _extends$1({}, mixins.attrs['style'], existingStyle);

  return createElement.apply(undefined, [element.tag, _extends$1({}, mixins.attrs, remaining)].concat(toConsumableArray(children)));
}

var PRODUCTION$1 = false;

try {
  PRODUCTION$1 = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION$1 && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-inverse': props.inverse,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function normalizeIconArgs(icon$$1) {
  if (icon$$1 === null) {
    return null;
  }

  if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof$1(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
    return icon$$1;
  }

  if (Array.isArray(icon$$1) && icon$$1.length === 2) {
    return { prefix: icon$$1[0], iconName: icon$$1[1] };
  }

  if (typeof icon$$1 === 'string') {
    return { prefix: 'fas', iconName: icon$$1 };
  }
}

function FontAwesomeIcon(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className;


  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(toConsumableArray(classList(props)), toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

  var renderedIcon = icon(iconLookup, _extends$1({}, classes, transform, mask, {
    symbol: symbol
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;

  var extraProps = {};

  Object.keys(props).forEach(function (key) {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });

  return convertCurry(abstract[0], extraProps);
}

FontAwesomeIcon.displayName = 'FontAwesomeIcon';

FontAwesomeIcon.propTypes = {
  border: PropTypes.bool,

  className: PropTypes.string,

  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

  fixedWidth: PropTypes.bool,

  inverse: PropTypes.bool,

  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

  listItem: PropTypes.bool,

  pull: PropTypes.oneOf(['right', 'left']),

  pulse: PropTypes.bool,

  rotation: PropTypes.oneOf([90, 180, 270]),

  size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),

  spin: PropTypes.bool,

  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  transform: null
};

var convertCurry = convert.bind(null, React.createElement);

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function addMonths(date, months) {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}
function addYears(date, years) {
  var result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}
function getDate(date, format) {
  if (typeof date === "string") {
    return dateFromString(date, format);
  }

  return date;
}
function dateFromString(datestr, format) {
  var normalized = datestr.replace(/[^a-zA-Z0-9]/g, "-");
  var normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
  var formatItems = normalizedFormat.split("-");
  var dateItems = normalized.split("-");
  var monthIndex = formatItems.indexOf("mm");
  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var hourIndex = formatItems.indexOf("hh");
  var minutesIndex = formatItems.indexOf("ii");
  var secondsIndex = formatItems.indexOf("ss");
  var today = new Date();
  var year = yearIndex > -1 ? dateItems[yearIndex] : today.getFullYear();
  var month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
  var day = dayIndex > -1 ? dateItems[dayIndex] : today.getDate();
  var hour = hourIndex > -1 ? dateItems[hourIndex] : today.getHours();
  var minute = minutesIndex > -1 ? dateItems[minutesIndex] : today.getMinutes();
  var second = secondsIndex > -1 ? dateItems[secondsIndex] : today.getSeconds();
  return new Date(year, month, day, hour, minute, second);
}
function stringFromDate(date, format) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/mm/g, prependZero(date.getMonth() + 1));
  format = format.replace(/dd/g, prependZero(date.getDate()));
  format = format.replace(/hh/g, prependZero(date.getHours()));
  format = format.replace(/ii/g, prependZero(date.getMinutes()));
  format = format.replace(/ss/g, prependZero(date.getSeconds()));
  return format;
}
function dayEquals(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}
function timeEquals(d1, d2) {
  return d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes() && d1.getSeconds() === d2.getSeconds();
}
function prependZero(val) {
  return (val < 10 ? "0" : "") + val;
}

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyHandler", function (e) {
      var key = e.keyCode;
      if (key !== 13 && !(key >= 33 && key <= 40)) return;
      e.preventDefault();
      var oldValue = _this.state.value;
      var newValue = oldValue;

      _this.setState(function (newstate) {
        if (newstate.index === 1 && key === 37) newstate.selection = addMonths(newstate.selection, -1);else if (newstate.index === 1 && key === 38) newstate.selection = addMonths(newstate.selection, -3);else if (newstate.index === 1 && key === 39) newstate.selection = addMonths(newstate.selection, 1);else if (newstate.index === 1 && key === 40) newstate.selection = addMonths(newstate.selection, 3);else if (key === 33) newstate.selection = addMonths(newstate.selection, -1);else if (key === 34) newstate.selection = addMonths(newstate.selection, 1);else if (key === 35) newstate.selection = addYears(newstate.selection, 1);else if (key === 36) newstate.selection = addYears(newstate.selection, -1);else if (key === 37) newstate.selection = addDays(newstate.selection, -1);else if (key === 38) newstate.selection = addDays(newstate.selection, -7);else if (key === 39) newstate.selection = addDays(newstate.selection, 1);else if (key === 40) newstate.selection = addDays(newstate.selection, 7);else if (newstate.index === 1 && key === 13) newstate.index = 0;else if (key === 13) newstate.value = newstate.selection;
        newValue = newstate.value;
        return newstate;
      }, function () {
        if (!dayEquals(oldValue, newValue) && _this.props.onChange !== undefined) _this.props.onChange({
          target: _assertThisInitialized(_assertThisInitialized(_this)),
          oldValue: oldValue,
          newValue: newValue
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showMonths", function (e) {
      _this.setState({
        index: 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderWeeks", function () {
      var weeks = [];

      var startofweek = _this.calculateDayOfWeek(_this.state.selection.getFullYear(), _this.state.selection.getMonth() + 1, 1);

      var days_month = _this.state.selection.getMonth() === 1 && _this.state.selection.getFullYear() % 4 === 0 ? 29 : _this.days[_this.state.selection.getMonth()];
      var cur_day = 1;
      var total_weeks = Math.round((days_month + startofweek) / 7 + 0.5);

      for (var i = 1; i <= total_weeks; i++) {
        var to = cur_day + 6 + (cur_day === 1 ? -startofweek : 0);
        weeks.push(React.createElement("div", {
          key: i,
          className: "sitcontrol_week"
        }, cur_day === 1 && _this.renderEmpty(startofweek), _this.renderDays(cur_day, Math.min(to, days_month)), i === total_weeks && _this.renderEmpty(i * 7 - days_month - startofweek)));
        cur_day = to + 1;
      }

      return weeks;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectDay", function (e) {
      var dayvalue = e.target.dataset.value;
      if (dayvalue === undefined) return;
      var oldValue = new Date(_this.state.value);
      var newValue = new Date(_this.state.selection);
      newValue.setDate(Number(dayvalue));

      _this.setState({
        value: newValue
      }, function () {
        if (!dayEquals(oldValue, newValue) && _this.props.onChange !== undefined) _this.props.onChange({
          target: _assertThisInitialized(_assertThisInitialized(_this)),
          oldValue: oldValue,
          newValue: newValue
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectMonth", function (e) {
      var monthvalue = e.target.dataset.value;
      if (monthvalue === undefined) return;
      var newSelection = new Date(_this.state.selection);
      newSelection.setMonth(Number(monthvalue));

      _this.setState({
        selection: newSelection,
        index: 0
      });
    });

    _this.today = new Date();
    _this.monthslang = {
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    };
    _this.daysofweeklang = {
      en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      es: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
    };
    _this.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    _this.state = {
      value: getDate(props.defaultValue, props.format),
      index: 0
    };
    if (props.value !== undefined) _this.state.value = getDate(props.value, props.format);
    _this.state.selection = _this.state.value;
    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          selection = _this$state.selection;
      var months = this.monthslang[this.props.lang];
      var daysofweek = this.daysofweeklang[this.props.lang];
      var style = {
        width: this.props.width
      };
      Object.assign(style, this.props.style);
      return React.createElement("div", {
        ref: function ref(o) {
          return _this2.root = o;
        },
        tabIndex: "0",
        className: "sitcontrol_calendar " + (this.state.index === 0 ? "pickday" : "pickmonth"),
        onKeyUp: this.keyHandler
      }, this.state.index === 0 ? React.createElement("div", {
        className: "sitcontrol_header"
      }, React.createElement("div", {
        className: "sitcontrol_title"
      }, React.createElement(FontAwesomeIcon, {
        className: "sitcontrol_left",
        icon: "caret-left",
        onClick: function onClick(e) {
          return _this2.setState({
            selection: addMonths(selection, -1)
          });
        }
      }), React.createElement("span", {
        onClick: this.showMonths
      }, months[selection.getMonth()] + " " + selection.getFullYear()), React.createElement(FontAwesomeIcon, {
        className: "sitcontrol_right",
        icon: "caret-right",
        onClick: function onClick(e) {
          return _this2.setState({
            selection: addMonths(selection, 1)
          });
        }
      })), React.createElement("div", {
        className: "sitcontrol_week"
      }, daysofweek.map(function (o, i) {
        return React.createElement("div", {
          className: "sitcontrol_day",
          key: i
        }, o);
      }))) : React.createElement("div", {
        className: "sitcontrol_header"
      }, React.createElement("div", {
        className: "sitcontrol_title"
      }, React.createElement(FontAwesomeIcon, {
        className: "sitcontrol_left",
        icon: "caret-left",
        onClick: function onClick(e) {
          return _this2.setState({
            selection: addYears(selection, -1)
          });
        }
      }), selection.getFullYear(), React.createElement(FontAwesomeIcon, {
        className: "sitcontrol_right",
        icon: "caret-right",
        onClick: function onClick(e) {
          return _this2.setState({
            selection: addYears(selection, 1)
          });
        }
      }))), this.state.index === 0 ? React.createElement("div", {
        className: "sitcontrol_month",
        onClick: this.selectDay
      }, this.renderWeeks()) : React.createElement("div", {
        className: "sitcontrol_year",
        onClick: this.selectMonth
      }, months.map(function (o, i) {
        return React.createElement("div", {
          className: classnames("sitcontrol_month2", selection.getMonth() === i && "picked", value.getMonth() === i && value.getFullYear() === selection.getFullYear() && "selected"),
          "data-value": i,
          key: i
        }, o.substring(0, 3));
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) this.root.focus();
    }
  }, {
    key: "calculateDayOfWeek",
    value: function calculateDayOfWeek(y, m, d) {
      var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
      y -= m < 3;
      return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
    }
  }, {
    key: "renderEmpty",
    value: function renderEmpty(count) {
      var array = [];

      for (var i = 0; i < count; i++) {
        array.push(React.createElement("div", {
          key: i,
          className: "sitcontrol_day"
        }));
      }

      return array;
    }
  }, {
    key: "renderDays",
    value: function renderDays(from, to) {
      var array = [];

      for (var i = from; i <= to; i++) {
        array.push(React.createElement("div", {
          key: i,
          className: classnames("sitcontrol_day", this.state.selection.getDate() === i && "picked", this.state.value.getFullYear() === this.state.selection.getFullYear() && this.state.value.getMonth() === this.state.selection.getMonth() && this.state.value.getDate() === i && "selected"),
          "data-value": i
        }, i));
      }

      return array;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevstate) {
      var newstate = {};
      if (props.value !== undefined) newstate.value = getDate(props.value, props.format);
      return newstate;
    }
  }]);

  return Calendar;
}(React.Component);
Calendar.defaultProps = {
  style: {},
  defaultValue: new Date(),
  onChange: function onChange() {},
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

var DatePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setInput", function (o) {
      return _this.input = o;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calendarHandler", function (e) {
      var oldValue = _this.state.value;
      var newValue = e.newValue;

      _this.setState({
        value: e.newValue,
        showCalendar: false
      }, function () {
        if (_this.props.onChange !== undefined && !dayEquals(oldValue, newValue)) {
          _this.props.onChange({
            oldValue: oldValue,
            newValue: newValue,
            oldStringValue: stringFromDate(oldValue, _this.props.format),
            newStringValue: stringFromDate(newValue, _this.props.format)
          });
        }

        document.getElementById("sitcalendar_icon_".concat(_this.count)).focus();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeHandler", function (e) {
      return _this.setState({
        showCalendar: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showCalendar", function () {
      if (_this.props.readOnly || _this.props.disabled) return;

      _this.setState({
        showCalendar: !_this.state.showCalendar
      }, function () {
        if (!_this.state.showCalendar) {
          document.getElementById("sitcalendar_icon_".concat(_this.count)).focus();
        }
      });
    });

    _this.state = {
      value: getDate(props.defaultValue, props.format),
      showCalendar: false
    };
    _this.count = DatePicker.counter || 1;
    DatePicker.counter = _this.count + 1;
    return _this;
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        width: this.props.width
      };
      Object.assign(style, this.props.style);
      var text = stringFromDate(this.state.value, this.props.format);
      return React.createElement("div", {
        className: "sitcontrol_datepicker",
        style: style
      }, this.props.navigable && React.createElement(FontAwesomeIcon, {
        className: "sitcontrol_left",
        icon: "caret-left",
        onClick: function onClick(e) {
          return _this2.plusDay(-1);
        }
      }), React.createElement(FontAwesomeIcon, {
        id: "sitcalendar_icon_".concat(this.count),
        className: "sitcontrol_calendar_icon",
        icon: "calendar-alt",
        onClick: this.showCalendar,
        tabIndex: "0"
      }), React.createElement("input", {
        className: "sitcontrol",
        ref: this.setInput,
        name: this.props.name,
        value: text,
        onChange: this.changeHandler,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled
      }), this.props.navigable && React.createElement(FontAwesomeIcon, {
        className: "sitcontrol_right",
        icon: "caret-right",
        onClick: function onClick(e) {
          return _this2.plusDay(1);
        }
      }), this.state.showCalendar && React.createElement(Calendar, {
        defaultValue: this.state.value,
        onChange: this.calendarHandler,
        lang: this.props.lang,
        autoFocus: true
      }));
    }
  }, {
    key: "plusDay",
    value: function plusDay(n) {
      var _this3 = this;

      var oldValue = this.state.value;
      var newValue = addDays(oldValue, n);
      this.setState({
        value: newValue
      }, function () {
        if (_this3.props.onChange !== undefined) {
          _this3.props.onChange({
            target: _this3,
            oldValue: oldValue,
            newValue: newValue,
            oldStringValue: stringFromDate(oldValue, _this3.props.format),
            newStringValue: stringFromDate(newValue, _this3.props.format)
          });
        }
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevstate) {
      var newstate = {};
      if (props.value !== undefined) newstate.value = getDate(props.value, props.format);
      return newstate;
    }
  }]);

  return DatePicker;
}(React.Component);
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

function calculateAngle(mouse_angle, step) {
  var half = step / 2;
  var angle = -1;

  for (var i = 0; i <= 360; i += step) {
    if (mouse_angle >= i - half && mouse_angle <= i + half) {
      angle = i;
      break;
    }
  }

  return (angle + 270) % 360;
}

var Clock =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    var _this;

    _classCallCheck(this, Clock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Clock).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "edit", function () {
      if (_this.state.index === 0 && !(_this.props.readOnly || _this.props.disabled)) _this.setState({
        index: 1,
        selection: _this.state.value
      });else if (_this.state.index !== 0) {
        var oldValue = _this.state.value;
        var newValue = _this.state.selection;

        _this.setState({
          index: 0,
          value: newValue
        }, function () {
          if (_this.props.onChange && !timeEquals(oldValue, newValue)) _this.props.onChange({
            target: _assertThisInitialized(_assertThisInitialized(_this)),
            oldValue: oldValue,
            newValue: newValue
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAM", function () {
      var selection = new Date(_this.state.selection);
      selection.setHours(selection.getHours() % 12);

      _this.setState({
        selection: selection
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPM", function () {
      var selection = new Date(_this.state.selection);
      selection.setHours(selection.getHours() % 12 + 12);

      _this.setState({
        selection: selection
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateMouseAngle", function (e) {
      var bcr = _this.root.getBoundingClientRect();

      var x1 = bcr.x + bcr.width / 2;
      var y1 = bcr.y + bcr.height / 2;
      var x2 = e.pageX;
      var y2 = e.pageY;
      return Math.round((Math.atan2(y2 - y1, x2 - x1) + Math.PI) * (180 / Math.PI));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mdownHandler", function (e) {
      if (_this.state.index === 0) return;

      var mouse_angle = _this.calculateMouseAngle(e);

      if (_this.state.index === 1) {
        var selectionAngle = calculateAngle(mouse_angle, 30);
        var selection = new Date(_this.state.selection);
        selection.setHours(selectionAngle / 30 + (selection.getHours() < 12 ? 0 : 12));

        _this.setState({
          mousedown: true,
          selection: selection
        });
      } else if (_this.state.index === 2) {
        var _selectionAngle = calculateAngle(mouse_angle, 6);

        var _selection = new Date(_this.state.selection);

        _selection.setMinutes(_selectionAngle / 6);

        _this.setState({
          mousedown: true,
          selection: _selection
        });
      } else if (_this.state.index === 3) ;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "muphandler", function () {
      if (_this.state.index === 0) return;
      var index = _this.state.index === 1 ? 2 : 1;

      _this.setState({
        mousedown: false,
        index: index
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mmoveHandler", function (e) {
      if (!_this.state.mousedown) return;

      var mouse_angle = _this.calculateMouseAngle(e);

      var selection = new Date(_this.state.selection);

      if (_this.state.index === 1) {
        var selectionAngle = calculateAngle(mouse_angle, 30);
        selection.setHours(selectionAngle / 30 + (selection.getHours() < 12 ? 0 : 12));

        _this.setState({
          selectionAngle: selectionAngle,
          selection: selection
        });
      } else if (_this.state.index === 2) {
        var _selectionAngle2 = calculateAngle(mouse_angle, 6);

        selection.setMinutes(_selectionAngle2 / 6);

        _this.setState({
          selectionAngle: _selectionAngle2,
          selection: selection
        });
      }
    });

    _this.hours12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    _this.hours24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    _this.minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    _this.state = {
      value: props.defaultValue,
      selectionAngle: 40,
      index: 0
    };
    if (props.value !== undefined) _this.state.value = getDate(props.value, props.format);
    if (props.editOnly) _this.state.index = 1;
    _this.state.selection = _this.state.value;
    return _this;
  }

  _createClass(Clock, [{
    key: "render",
    value: function render() {
      var _value_style_props,
          _this2 = this;

      var date = this.state.index === 0 ? this.state.value : this.state.selection;
      var value_style_props = (_value_style_props = {}, _defineProperty(_value_style_props, "--start-hours", date.getHours() % 12), _defineProperty(_value_style_props, "--start-minutes", date.getMinutes() || 60), _defineProperty(_value_style_props, "--start-seconds", date.getSeconds() || 60), _value_style_props);
      var selection_class = this.state.index === 1 ? "sitcontrol_selection_h" : this.state.index === 2 ? "sitcontrol_selection_ms" : undefined;
      return React.createElement("div", {
        ref: function ref(o) {
          return _this2.root = o;
        },
        tabIndex: "0",
        className: "sitcontrol_clock " + (this.state.index === 0 ? "pickday" : "pickmonth"),
        onKeyUp: this.keyHandler
      }, React.createElement("div", {
        className: "sitcontrol_header"
      }, React.createElement("div", {
        style: {
          flex: 1
        }
      }, React.createElement("span", {
        className: classnames((this.state.index === 0 || this.state.index === 1) && "sitcontrol_active")
      }, prependZero(date.getHours() % 12)), React.createElement("span", {
        className: classnames(this.state.index === 0 && "sitcontrol_active")
      }, ":"), React.createElement("span", {
        className: classnames((this.state.index === 0 || this.state.index === 2) && "sitcontrol_active")
      }, prependZero(date.getMinutes())), this.state.index === 0 && React.createElement("span", {
        className: classnames((this.state.index === 0 || this.state.index === 3) && "sitcontrol_active")
      }, date.getHours() < 12 ? "AM" : "PM"), this.state.index !== 0 && React.createElement("div", {
        className: "sitcontrol_ampm"
      }, React.createElement("span", {
        className: classnames(date.getHours() < 12 && "sitcontrol_active"),
        onClick: this.setAM
      }, "AM"), React.createElement("span", {
        className: classnames(date.getHours() >= 12 && "sitcontrol_active"),
        onClick: this.setPM
      }, "PM"))), React.createElement("div", {
        className: "sitcontrol_actionbtn",
        onClick: this.edit
      }, React.createElement(FontAwesomeIcon, {
        icon: this.state.index === 0 ? "pencil-alt" : "check"
      }))), React.createElement("div", {
        className: "sitcontrol_numbers",
        onMouseDown: this.mdownHandler,
        onMouseUp: this.muphandler,
        onMouseMove: this.mmoveHandler
      }, React.createElement("svg", {
        className: "sitcontrol_clock_svg",
        viewBox: "0 0 40 40",
        style: value_style_props
      }, React.createElement("circle", {
        cx: "20",
        cy: "20",
        r: "19"
      }), React.createElement("g", {
        className: classnames("sitcontrol_clock_marks", this.state.index === 0 && "active")
      }, React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      }), React.createElement("line", {
        x1: "15",
        y1: "0",
        x2: "16",
        y2: "0"
      })), React.createElement("g", {
        className: classnames("sitcontrol_hidden", (this.state.index === 1 || this.state.index === 2) && "sitcontrol_active")
      }, React.createElement("line", {
        x1: "16",
        y1: "0",
        x2: "0",
        y2: "0",
        className: classnames("sitcontrol_selection_hand", selection_class)
      }), React.createElement("circle", {
        cx: "15",
        cy: "0",
        r: "2.5",
        className: classnames("sitcontrol_selection_pin", selection_class)
      })), React.createElement("g", {
        className: classnames("sitcontrol_clock_numbers1", this.state.index === 1 && "active")
      }, React.createElement("text", null, "10"), React.createElement("text", null, "11"), React.createElement("text", null, "12"), React.createElement("text", null, "1"), React.createElement("text", null, "2"), React.createElement("text", null, "3"), React.createElement("text", null, "4"), React.createElement("text", null, "5"), React.createElement("text", null, "6"), React.createElement("text", null, "7"), React.createElement("text", null, "8"), React.createElement("text", null, "9")), React.createElement("g", {
        className: classnames("sitcontrol_clock_numbers2", this.state.index === 2 && "active")
      }, React.createElement("text", null, "50"), React.createElement("text", null, "55"), React.createElement("text", null, "0"), React.createElement("text", null, "5"), React.createElement("text", null, "10"), React.createElement("text", null, "15"), React.createElement("text", null, "20"), React.createElement("text", null, "25"), React.createElement("text", null, "30"), React.createElement("text", null, "35"), React.createElement("text", null, "40"), React.createElement("text", null, "45")), React.createElement("g", {
        className: classnames("sitcontrol_ampm", "sitcontrol_hidden", this.state.index === 3 && "sitcontrol_active")
      }, React.createElement("text", {
        x: "14.5",
        y: "-25",
        className: classnames(this.state.selection.getHours() < 12 && "sitcontrol_active")
      }, "AM"), React.createElement("text", {
        x: "14",
        y: "-12",
        className: classnames(this.state.selection.getHours() >= 12 && "sitcontrol_active")
      }, "PM")), React.createElement("g", {
        className: classnames("sitcontrol_hidden", this.state.index === 0 && "sitcontrol_active")
      }, React.createElement("line", {
        x1: "0",
        y1: "0",
        x2: "9",
        y2: "0",
        className: "sitcontrol_hours_hand"
      }), React.createElement("line", {
        x1: "0",
        y1: "0",
        x2: "13",
        y2: "0",
        className: "sitcontrol_minutes_hand"
      }), React.createElement("line", {
        x1: "0",
        y1: "0",
        x2: "16",
        y2: "0",
        className: "sitcontrol_seconds_hand"
      }), React.createElement("circle", {
        cx: "20",
        cy: "20",
        r: "0.7",
        className: "sitcontrol_pin"
      })))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.autoFocus) this.root.focus();
      if (this.props.autoUpdate) this.interval = setInterval(function () {
        return _this3.setState({
          value: new Date()
        });
      }, 1000);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevstate) {
      var newstate = {};
      if (props.value !== undefined) newstate.value = props.value;
      return newstate;
    }
  }]);

  return Clock;
}(React.Component);
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

var clock_icon = {
  prefix: "far",
  iconName: "clock"
};

var DateTimePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    var _this;

    _classCallCheck(this, DateTimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setInput", function (o) {
      return _this.input = o;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calendarHandler", function (e) {
      var oldValue = _this.state.value;
      var newValue = new Date(e.newValue);
      newValue.setHours(oldValue.getHours());
      newValue.setMinutes(oldValue.getMinutes());
      newValue.setSeconds(oldValue.getSeconds());

      _this.setState({
        value: e.newValue,
        showCalendar: false
      }, function () {
        if (_this.props.onChange !== undefined && !dayEquals(oldValue, newValue)) {
          _this.props.onChange({
            oldValue: oldValue,
            newValue: newValue,
            oldStringValue: stringFromDate(oldValue, _this.props.format),
            newStringValue: stringFromDate(newValue, _this.props.format)
          });
        }

        document.getElementById("sitcalendar_icon_".concat(_this.count)).focus();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clockHandler", function (e) {
      var oldValue = _this.state.value;
      var newValue = new Date(e.newValue);
      newValue.setFullYear(oldValue.getFullYear());
      newValue.setMonth(oldValue.getMonth());
      newValue.setDate(oldValue.getDate());

      _this.setState({
        value: e.newValue,
        showClock: false
      }, function () {
        if (_this.props.onChange !== undefined && !timeEquals(oldValue, newValue)) {
          _this.props.onChange({
            oldValue: oldValue,
            newValue: newValue,
            oldStringValue: stringFromDate(oldValue, _this.props.format),
            newStringValue: stringFromDate(newValue, _this.props.format)
          });
        }

        document.getElementById("sitclock_icon_".concat(_this.count)).focus();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeHandler", function (e) {
      var ss = e.target.selectionStart || 0;

      _this.setState({
        showCalendar: ss < 10,
        showClock: ss >= 10
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showCalendar", function () {
      if (_this.props.readOnly || _this.props.disabled) return;

      _this.setState({
        showCalendar: !_this.state.showCalendar,
        showClock: false
      }, function () {
        if (!_this.state.showCalendar) {
          document.getElementById("sitcalendar_icon_".concat(_this.count)).focus();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showClock", function () {
      if (_this.props.readOnly || _this.props.disabled) return;

      _this.setState({
        showClock: !_this.state.showClock,
        showCalendar: false
      }, function () {
        if (!_this.state.showClock) {
          document.getElementById("sitclock_icon_".concat(_this.count)).focus();
        }
      });
    });

    _this.state = {
      value: getDate(props.defaultValue, props.format),
      showCalendar: false
    };
    _this.count = DateTimePicker.counter || 1;
    DateTimePicker.counter = _this.count + 1;
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "render",
    value: function render() {
      var style = {
        width: this.props.width
      };
      Object.assign(style, this.props.style);
      var text = stringFromDate(this.state.value, this.props.format);
      return React.createElement("div", {
        className: "sitcontrol_datetimepicker",
        style: style
      }, React.createElement(FontAwesomeIcon, {
        id: "sitcalendar_icon_".concat(this.count),
        className: "sitcontrol_calendar_icon",
        icon: "calendar-alt",
        onClick: this.showCalendar,
        tabIndex: "0"
      }), React.createElement(FontAwesomeIcon, {
        id: "sitclock_icon_".concat(this.count),
        className: "sitcontrol_clock_icon",
        icon: clock_icon,
        onClick: this.showClock,
        tabIndex: "0"
      }), React.createElement("input", {
        className: "sitcontrol",
        ref: this.setInput,
        name: this.props.name,
        value: text,
        onChange: this.changeHandler,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled
      }), this.state.showCalendar && React.createElement(Calendar, {
        defaultValue: this.state.value,
        onChange: this.calendarHandler,
        autoFocus: true
      }), this.state.showClock && React.createElement(Clock, {
        defaultValue: this.state.value,
        onChange: this.clockHandler,
        autoFocus: true,
        editOnly: true
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevstate) {
      var newstate = {};
      if (props.value !== undefined) newstate.value = getDate(props.value, props.format);
      return newstate;
    }
  }]);

  return DateTimePicker;
}(React.Component);
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

function Selection(props) {}

Selection.defaultProps = {
  mode: "single"
};
Selection.propTypes = {
  mode: PropTypes.oneOf(["single", "multiple"]),
  onBeforeChange: PropTypes.func,
  onChange: PropTypes.func,
  selected: PropTypes.array
};

var ScrollBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollBar, _React$Component);

  function ScrollBar(props) {
    var _this;

    _classCallCheck(this, ScrollBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollBar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScrollBarContainerClick", function (e) {
      e.preventDefault();

      var multiplier = _this.computeMultiplier();

      var clientPosition = _this.isVertical() ? e.clientY : e.clientX;

      var _this$scrollbarContai = _this.scrollbarContainer.getBoundingClientRect(),
          top = _this$scrollbarContai.top,
          left = _this$scrollbarContai.left;

      var clientScrollPosition = _this.isVertical() ? top : left;
      var position = clientPosition - clientScrollPosition;
      var proportionalToPageScrollSize = _this.props.containerSize * _this.props.containerSize / _this.props.realSize;

      _this.setState({
        isDragging: true,
        lastClientPosition: clientPosition
      });

      _this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseDown", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var lastClientPosition = _this.isVertical() ? e.clientY : e.clientX;

      _this.setState({
        isDragging: true,
        lastClientPosition: lastClientPosition
      });

      _this.props.onFocus();
    });

    var newState = _this.calculateState(props);

    _this.state = {
      position: newState.position,
      scrollSize: newState.scrollSize,
      isDragging: false,
      lastClientPosition: 0
    };

    if (props.type === "vertical") {
      _this.bindedHandleMouseMove = _this.handleMouseMoveForVertical.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    } else {
      _this.bindedHandleMouseMove = _this.handleMouseMoveForHorizontal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    }

    _this.bindedHandleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ownerDocument) {
        this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
        this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.calculateState(nextProps));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.ownerDocument) {
        this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
        this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
      }
    }
  }, {
    key: "calculateFractionalPosition",
    value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
      var relativeSize = realContentSize - containerSize;
      return 1 - (relativeSize - contentPosition) / relativeSize;
    }
  }, {
    key: "calculateState",
    value: function calculateState(props) {
      var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
      var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
      var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
      var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
      return {
        scrollSize: scrollSize,
        position: Math.round(scrollPosition)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var s = this.props.ss;
      var _this$props = this.props,
          isDragging = _this$props.isDragging,
          type = _this$props.type,
          scrollbarStyle = _this$props.scrollbarStyle,
          containerStyle = _this$props.containerStyle;
      var isVoriziontal = type === "horizontal";
      var isVertical = type === "vertical";
      var scrollStyles = this.createScrollStyles();
      return React.createElement("div", {
        className: classnames(s.scrollbar_container, isDragging && s.active, isVoriziontal && s.horizontal, isVertical && s.vertical),
        style: containerStyle,
        onMouseDown: this.handleScrollBarContainerClick,
        ref: function ref(x) {
          return _this2.scrollbarContainer = x;
        }
      }, React.createElement("div", {
        className: s.scrollbar,
        style: _objectSpread({}, scrollbarStyle, scrollStyles),
        onMouseDown: this.handleMouseDown
      }));
    }
  }, {
    key: "handleMouseMoveForHorizontal",
    value: function handleMouseMoveForHorizontal(e) {
      var multiplier = this.computeMultiplier();

      if (this.state.isDragging) {
        e.preventDefault();
        var deltaX = this.state.lastClientPosition - e.clientX;
        this.setState({
          lastClientPosition: e.clientX
        });
        this.props.onMove(0, deltaX / multiplier);
      }
    }
  }, {
    key: "handleMouseMoveForVertical",
    value: function handleMouseMoveForVertical(e) {
      var multiplier = this.computeMultiplier();

      if (this.state.isDragging) {
        e.preventDefault();
        var deltaY = this.state.lastClientPosition - e.clientY;
        this.setState({
          lastClientPosition: e.clientY
        });
        this.props.onMove(deltaY / multiplier, 0);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      if (this.state.isDragging) {
        e.preventDefault();
        this.setState({
          isDragging: false
        });
      }
    }
  }, {
    key: "createScrollStyles",
    value: function createScrollStyles() {
      if (this.props.type === "vertical") {
        return {
          height: this.state.scrollSize,
          marginTop: this.state.position
        };
      } else {
        return {
          width: this.state.scrollSize,
          marginLeft: this.state.position
        };
      }
    }
  }, {
    key: "computeMultiplier",
    value: function computeMultiplier() {
      return this.props.containerSize / this.props.realSize;
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.type === "vertical";
    }
  }]);

  return ScrollBar;
}(React.Component);

ScrollBar.propTypes = {
  onMove: PropTypes.func,
  onPositionChange: PropTypes.func,
  onFocus: PropTypes.func,
  realSize: PropTypes.number,
  containerSize: PropTypes.number,
  position: PropTypes.number,
  containerStyle: PropTypes.object,
  scrollbarStyle: PropTypes.object,
  type: PropTypes.oneOf(["vertical", "horizontal"]),
  ownerDocument: PropTypes.any,
  minScrollSize: PropTypes.number
};
ScrollBar.defaultProps = {
  type: "vertical"
};

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

var computedStyle_commonjs = computedStyle;

// Load in dependencies


/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle_commonjs(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle_commonjs(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle_commonjs(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
var lineHeight_1 = lineHeight;

var ScrollBar$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollBar, _React$Component);

  function ScrollBar(props) {
    var _this;

    _classCallCheck(this, ScrollBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollBar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScrollBarContainerClick", function (e) {
      e.preventDefault();

      var multiplier = _this.computeMultiplier();

      var clientPosition = _this.isVertical() ? e.clientY : e.clientX;

      var _this$scrollbarContai = _this.scrollbarContainer.getBoundingClientRect(),
          top = _this$scrollbarContai.top,
          left = _this$scrollbarContai.left;

      var clientScrollPosition = _this.isVertical() ? top : left;
      var position = clientPosition - clientScrollPosition;
      var proportionalToPageScrollSize = _this.props.containerSize * _this.props.containerSize / _this.props.realSize;

      _this.setState({
        isDragging: true,
        lastClientPosition: clientPosition
      });

      _this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseDown", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var lastClientPosition = _this.isVertical() ? e.clientY : e.clientX;

      _this.setState({
        isDragging: true,
        lastClientPosition: lastClientPosition
      });

      _this.props.onFocus();
    });

    var newState = _this.calculateState(props);

    _this.state = {
      position: newState.position,
      scrollSize: newState.scrollSize,
      isDragging: false,
      lastClientPosition: 0
    };

    if (props.type === "vertical") {
      _this.bindedHandleMouseMove = _this.handleMouseMoveForVertical.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    } else {
      _this.bindedHandleMouseMove = _this.handleMouseMoveForHorizontal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    }

    _this.bindedHandleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ownerDocument) {
        this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
        this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.calculateState(nextProps));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.ownerDocument) {
        this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
        this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
      }
    }
  }, {
    key: "calculateFractionalPosition",
    value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
      var relativeSize = realContentSize - containerSize;
      return 1 - (relativeSize - contentPosition) / relativeSize;
    }
  }, {
    key: "calculateState",
    value: function calculateState(props) {
      var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
      var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
      var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
      var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
      return {
        scrollSize: scrollSize,
        position: Math.round(scrollPosition)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var s = this.props.ss;
      var _this$props = this.props,
          isDragging = _this$props.isDragging,
          type = _this$props.type,
          scrollbarStyle = _this$props.scrollbarStyle,
          containerStyle = _this$props.containerStyle;
      var isVoriziontal = type === "horizontal";
      var isVertical = type === "vertical";
      var scrollStyles = this.createScrollStyles();
      return React.createElement("div", {
        className: classnames(s.scrollbar_container, isDragging && s.active, isVoriziontal && s.horizontal, isVertical && s.vertical),
        style: containerStyle,
        onMouseDown: this.handleScrollBarContainerClick,
        ref: function ref(x) {
          return _this2.scrollbarContainer = x;
        }
      }, React.createElement("div", {
        className: s.scrollbar,
        style: _objectSpread({}, scrollbarStyle, scrollStyles),
        onMouseDown: this.handleMouseDown
      }));
    }
  }, {
    key: "handleMouseMoveForHorizontal",
    value: function handleMouseMoveForHorizontal(e) {
      var multiplier = this.computeMultiplier();

      if (this.state.isDragging) {
        e.preventDefault();
        var deltaX = this.state.lastClientPosition - e.clientX;
        this.setState({
          lastClientPosition: e.clientX
        });
        this.props.onMove(0, deltaX / multiplier);
      }
    }
  }, {
    key: "handleMouseMoveForVertical",
    value: function handleMouseMoveForVertical(e) {
      var multiplier = this.computeMultiplier();

      if (this.state.isDragging) {
        e.preventDefault();
        var deltaY = this.state.lastClientPosition - e.clientY;
        this.setState({
          lastClientPosition: e.clientY
        });
        this.props.onMove(deltaY / multiplier, 0);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      if (this.state.isDragging) {
        e.preventDefault();
        this.setState({
          isDragging: false
        });
      }
    }
  }, {
    key: "createScrollStyles",
    value: function createScrollStyles() {
      if (this.props.type === "vertical") {
        return {
          height: this.state.scrollSize,
          marginTop: this.state.position
        };
      } else {
        return {
          width: this.state.scrollSize,
          marginLeft: this.state.position
        };
      }
    }
  }, {
    key: "computeMultiplier",
    value: function computeMultiplier() {
      return this.props.containerSize / this.props.realSize;
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.type === "vertical";
    }
  }]);

  return ScrollBar;
}(React.Component);

ScrollBar$1.propTypes = {
  onMove: PropTypes.func,
  onPositionChange: PropTypes.func,
  onFocus: PropTypes.func,
  realSize: PropTypes.number,
  containerSize: PropTypes.number,
  position: PropTypes.number,
  containerStyle: PropTypes.object,
  scrollbarStyle: PropTypes.object,
  type: PropTypes.oneOf(["vertical", "horizontal"]),
  ownerDocument: PropTypes.any,
  minScrollSize: PropTypes.number
};
ScrollBar$1.defaultProps = {
  type: "vertical"
};

var eventTypes = {
  wheel: "wheel",
  api: "api",
  touch: "touch",
  touchEnd: "touchEnd",
  mousemove: "mousemove",
  keyPress: "keypress"
};

var ScrollArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollArea, _React$Component);

  function ScrollArea(props) {
    var _this;

    _classCallCheck(this, ScrollArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollArea).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchStart", function (e) {
      var touches = e.touches;

      if (touches.length === 1) {
        var _touches$ = touches[0],
            clientX = _touches$.clientX,
            clientY = _touches$.clientY;
        _this.eventPreviousValues = _objectSpread({}, _this.eventPreviousValues, {
          clientY: clientY,
          clientX: clientX,
          timestamp: Date.now()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchMove", function (e) {
      if (_this.canScroll()) {
        e.preventDefault();
        e.stopPropagation();
      }

      var touches = e.touches;

      if (touches.length === 1) {
        var _touches$2 = touches[0],
            clientX = _touches$2.clientX,
            clientY = _touches$2.clientY;
        var deltaY = _this.eventPreviousValues.clientY - clientY;
        var deltaX = _this.eventPreviousValues.clientX - clientX;
        _this.eventPreviousValues = _objectSpread({}, _this.eventPreviousValues, {
          deltaY: deltaY,
          deltaX: deltaX,
          clientY: clientY,
          clientX: clientX,
          timestamp: Date.now()
        });

        _this.setStateFromEvent(_this.composeNewState(-deltaX, -deltaY));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchEnd", function (e) {
      var _this$eventPreviousVa = _this.eventPreviousValues,
          deltaX = _this$eventPreviousVa.deltaX,
          deltaY = _this$eventPreviousVa.deltaY,
          timestamp = _this$eventPreviousVa.timestamp;
      if (typeof deltaX === "undefined") deltaX = 0;
      if (typeof deltaY === "undefined") deltaY = 0;

      if (Date.now() - timestamp < 200) {
        _this.setStateFromEvent(_this.composeNewState(-deltaX * 10, -deltaY * 10), eventTypes.touchEnd);
      }

      _this.eventPreviousValues = _objectSpread({}, _this.eventPreviousValues, {
        deltaY: 0,
        deltaX: 0
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScrollbarMove", function (deltaY, deltaX) {
      _this.setStateFromEvent(_this.composeNewState(deltaX, deltaY));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScrollbarYPositionChange", function (position) {
      _this.scrollYTo(position);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (e) {
      // only handle if scroll area is in focus
      if (e.target.tagName.toLowerCase() !== "input" && e.target.tagName.toLowerCase() !== "textarea" && !e.target.isContentEditable) {
        var deltaY = 0;
        var deltaX = 0;

        var _lineHeight = _this.lineHeightPx ? _this.lineHeightPx : 10;

        switch (e.keyCode) {
          case 33:
            // page up
            deltaY = _this.state.containerHeight - _lineHeight;
            break;

          case 34:
            // page down
            deltaY = -_this.state.containerHeight + _lineHeight;
            break;

          case 37:
            // left
            deltaX = _lineHeight;
            break;

          case 38:
            // up
            deltaY = _lineHeight;
            break;

          case 39:
            // right
            deltaX = -_lineHeight;
            break;

          case 40:
            // down
            deltaY = -_lineHeight;
            break;
        } // only compose new state if key code matches those above


        if (deltaY !== 0 || deltaX !== 0) {
          var newState = _this.composeNewState(deltaX, deltaY);

          e.preventDefault();
          e.stopPropagation();

          _this.setStateFromEvent(newState, eventTypes.keyPress);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusContent", function () {
      if (_this.content) {
        _this.content.focus();
      }
    });

    _this.state = {
      topPosition: 0,
      leftPosition: 0,
      realHeight: 0,
      containerHeight: 0,
      realWidth: 0,
      containerWidth: 0
    };
    _this.scrollArea = {
      refresh: function refresh() {
        _this.setSizesToState();
      },
      scrollTop: function scrollTop() {
        _this.scrollTop();
      },
      scrollBottom: function scrollBottom() {
        _this.scrollBottom();
      },
      scrollYTo: function scrollYTo(position) {
        _this.scrollYTo(position);
      },
      scrollLeft: function scrollLeft() {
        _this.scrollLeft();
      },
      scrollRight: function scrollRight() {
        _this.scrollRight();
      },
      scrollXTo: function scrollXTo(position) {
        _this.scrollXTo(position);
      }
    };
    _this.evntsPreviousValues = {
      clientX: 0,
      clientY: 0,
      deltaX: 0,
      deltaY: 0
    };
    _this.bindedHandleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ScrollArea, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        scrollArea: this.scrollArea
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.contentWindow) {
        this.props.contentWindow.addEventListener("resize", this.bindedHandleWindowResize);
      }

      this.lineHeightPx = lineHeight_1(this.content);
      this.setSizesToState();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.contentWindow) {
        this.props.contentWindow.removeEventListener("resize", this.bindedHandleWindowResize);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setSizesToState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          ownerDocument = _this$props.ownerDocument;
      var scrollbarY = this.canScrollY() ? React.createElement(ScrollBar$1, {
        ownerDocument: ownerDocument,
        realSize: this.state.realHeight,
        containerSize: this.state.containerHeight,
        position: this.state.topPosition,
        onMove: this.handleScrollbarMove,
        onPositionChange: this.handleScrollbarYPositionChange,
        containerStyle: this.props.verticalContainerStyle,
        scrollbarStyle: this.props.verticalScrollbarStyle,
        minScrollSize: this.props.minScrollSize,
        onFocus: this.focusContent,
        type: "vertical"
      }) : null;
      var scrollbarX = this.canScrollX() ? React.createElement(ScrollBar$1, {
        ownerDocument: ownerDocument,
        realSize: this.state.realWidth,
        containerSize: this.state.containerWidth,
        position: this.state.leftPosition,
        onMove: this.handleScrollbarMove.bind(this),
        onPositionChange: this.handleScrollbarXPositionChange.bind(this),
        containerStyle: this.props.horizontalContainerStyle,
        scrollbarStyle: this.props.horizontalScrollbarStyle,
        minScrollSize: this.props.minScrollSize,
        onFocus: this.focusContent.bind(this),
        type: "horizontal"
      }) : null;
      var classes = "scrollarea " + (className || "");
      var contentClasses = "scrollarea-content " + (contentClassName || "");
      var contentStyle = {
        marginTop: -this.state.topPosition,
        marginLeft: -this.state.leftPosition
      };
      return React.createElement("div", {
        ref: function ref(x) {
          return _this2.wrapper = x;
        },
        className: classes,
        style: this.props.style,
        onWheel: this.handleWheel.bind(this)
      }, React.createElement("div", {
        ref: function ref(x) {
          return _this2.content = x;
        },
        style: _objectSpread({}, this.props.contentStyle, contentStyle),
        className: contentClasses,
        onTouchStart: this.handleTouchStart.bind(this),
        onTouchMove: this.handleTouchMove.bind(this),
        onTouchEnd: this.handleTouchEnd.bind(this),
        onKeyDown: this.handleKeyDown.bind(this),
        tabIndex: this.props.focusableTabIndex
      }, children), scrollbarY, scrollbarX);
    }
  }, {
    key: "setStateFromEvent",
    value: function setStateFromEvent(newState, eventType) {
      if (this.props.onScroll) {
        this.props.onScroll(newState);
      }

      this.setState(_objectSpread({}, newState, {
        eventType: eventType
      }));
    }
  }, {
    key: "handleScrollbarXPositionChange",
    value: function handleScrollbarXPositionChange(position) {
      this.scrollXTo(position);
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var deltaY = e.deltaY;
      var deltaX = e.deltaX;

      if (this.props.swapWheelAxes) {
        var _ref = [deltaX, deltaY];
        deltaY = _ref[0];
        deltaX = _ref[1];
      }
      /*
       * WheelEvent.deltaMode can differ between browsers and must be normalized
       * e.deltaMode === 0: The delta values are specified in pixels
       * e.deltaMode === 1: The delta values are specified in lines
       * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
       */


      if (e.deltaMode === 1) {
        deltaY = deltaY * this.lineHeightPx;
        deltaX = deltaX * this.lineHeightPx;
      }

      deltaY = deltaY * this.props.speed;
      deltaX = deltaX * this.props.speed;
      var newState = this.composeNewState(-deltaX, -deltaY);

      if (newState.topPosition && this.state.topPosition !== newState.topPosition || newState.leftPosition && this.state.leftPosition !== newState.leftPosition || this.props.stopScrollPropagation) {
        e.preventDefault();
        e.stopPropagation();
      }

      this.setStateFromEvent(newState, eventTypes.wheel);
      this.focusContent();
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      var newState = this.computeSizes();
      newState = this.getModifiedPositionsIfNeeded(newState);
      this.setStateFromEvent(newState);
    }
  }, {
    key: "composeNewState",
    value: function composeNewState(deltaX, deltaY) {
      var newState = this.computeSizes();

      if (this.canScrollY(newState)) {
        newState.topPosition = this.computeTopPosition(deltaY, newState);
      } else {
        newState.topPosition = 0;
      }

      if (this.canScrollX(newState)) {
        newState.leftPosition = this.computeLeftPosition(deltaX, newState);
      }

      return newState;
    }
  }, {
    key: "computeTopPosition",
    value: function computeTopPosition(deltaY, sizes) {
      var newTopPosition = this.state.topPosition - deltaY;
      return this.normalizeTopPosition(newTopPosition, sizes);
    }
  }, {
    key: "computeLeftPosition",
    value: function computeLeftPosition(deltaX, sizes) {
      var newLeftPosition = this.state.leftPosition - deltaX;
      return this.normalizeLeftPosition(newLeftPosition, sizes);
    }
  }, {
    key: "normalizeTopPosition",
    value: function normalizeTopPosition(newTopPosition, sizes) {
      if (newTopPosition > sizes.realHeight - sizes.containerHeight) {
        newTopPosition = sizes.realHeight - sizes.containerHeight;
      }

      if (newTopPosition < 0) {
        newTopPosition = 0;
      }

      return newTopPosition;
    }
  }, {
    key: "normalizeLeftPosition",
    value: function normalizeLeftPosition(newLeftPosition, sizes) {
      if (newLeftPosition > sizes.realWidth - sizes.containerWidth) {
        newLeftPosition = sizes.realWidth - sizes.containerWidth;
      } else if (newLeftPosition < 0) {
        newLeftPosition = 0;
      }

      return newLeftPosition;
    }
  }, {
    key: "computeSizes",
    value: function computeSizes() {
      var realHeight = this.content.offsetHeight;
      var containerHeight = this.wrapper.offsetHeight;
      var realWidth = this.content.offsetWidth;
      var containerWidth = this.wrapper.offsetWidth;
      return {
        realHeight: realHeight,
        containerHeight: containerHeight,
        realWidth: realWidth,
        containerWidth: containerWidth
      };
    }
  }, {
    key: "setSizesToState",
    value: function setSizesToState() {
      var sizes = this.computeSizes();

      if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
        this.setStateFromEvent(this.getModifiedPositionsIfNeeded(sizes));
      }
    }
  }, {
    key: "scrollTop",
    value: function scrollTop() {
      this.scrollYTo(0);
    }
  }, {
    key: "scrollBottom",
    value: function scrollBottom() {
      this.scrollYTo(this.state.realHeight - this.state.containerHeight);
    }
  }, {
    key: "scrollLeft",
    value: function scrollLeft() {
      this.scrollXTo(0);
    }
  }, {
    key: "scrollRight",
    value: function scrollRight() {
      this.scrollXTo(this.state.realWidth - this.state.containerWidth);
    }
  }, {
    key: "scrollYTo",
    value: function scrollYTo(topPosition) {
      if (this.canScrollY()) {
        var position = this.normalizeTopPosition(topPosition, this.computeSizes());
        this.setStateFromEvent({
          topPosition: position
        }, eventTypes.api);
      }
    }
  }, {
    key: "scrollXTo",
    value: function scrollXTo(leftPosition) {
      if (this.canScrollX()) {
        var position = this.normalizeLeftPosition(leftPosition, this.computeSizes());
        this.setStateFromEvent({
          leftPosition: position
        }, eventTypes.api);
      }
    }
  }, {
    key: "canScrollY",
    value: function canScrollY() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      var scrollableY = state.realHeight > state.containerHeight;
      return scrollableY && this.props.vertical;
    }
  }, {
    key: "canScrollX",
    value: function canScrollX() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      var scrollableX = state.realWidth > state.containerWidth;
      return scrollableX && this.props.horizontal;
    }
  }, {
    key: "canScroll",
    value: function canScroll() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return this.canScrollY(state) || this.canScrollX(state);
    }
  }, {
    key: "getModifiedPositionsIfNeeded",
    value: function getModifiedPositionsIfNeeded(newState) {
      var bottomPosition = newState.realHeight - newState.containerHeight;

      if (this.state.topPosition >= bottomPosition) {
        newState.topPosition = this.canScrollY(newState) ? bottomPosition < 0 ? 0 : bottomPosition : 0;
      }

      var rightPosition = newState.realWidth - newState.containerWidth;

      if (this.state.leftPosition >= rightPosition) {
        newState.leftPosition = this.canScrollX(newState) ? rightPosition < 0 ? 0 : rightPosition : 0;
      }

      return newState;
    }
  }]);

  return ScrollArea;
}(React.Component);
ScrollArea.childContextTypes = {
  scrollArea: PropTypes.object
};
ScrollArea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  speed: PropTypes.number,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  vertical: PropTypes.bool,
  verticalContainerStyle: PropTypes.object,
  verticalScrollbarStyle: PropTypes.object,
  horizontal: PropTypes.bool,
  horizontalContainerStyle: PropTypes.object,
  horizontalScrollbarStyle: PropTypes.object,
  onScroll: PropTypes.func,
  contentWindow: PropTypes.any,
  ownerDocument: PropTypes.any,
  smoothScrolling: PropTypes.bool,
  minScrollSize: PropTypes.number,
  swapWheelAxes: PropTypes.bool,
  stopScrollPropagation: PropTypes.bool,
  focusableTabIndex: PropTypes.number
};
ScrollArea.defaultProps = {
  speed: 1,
  vertical: true,
  horizontal: true,
  smoothScrolling: false,
  swapWheelAxes: false,
  contentWindow: (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : undefined,
  ownerDocument: (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" ? document : undefined,
  focusableTabIndex: 1
};

var s$1 = {"scrollarea_content":"list_scrollarea_content__174Eh","scrollarea":"list_scrollarea__2PpSO","scrollbar_container":"list_scrollbar_container__1mUtL","horizontal":"list_horizontal__1jHED","scrollbar":"list_scrollbar__Nxbsi","vertical":"list_vertical__1Gnyy","active":"list_active__3078D","sitcontrol_list":"list_sitcontrol_list__1jWGO","sitcontrol_selected":"list_sitcontrol_selected__2ljGV"};

var _List$defaultProps, _List$propTypes;

var List =
/*#__PURE__*/
function (_ScrollArea) {
  _inherits(List, _ScrollArea);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "itemsRenderer", function (from, to) {
      var items = [];
      var count = 0;

      for (var i = from; i <= to; i++) {
        var item = _this.itemRenderer({
          index: i,
          key: count,
          style: {
            height: _this.props.rowHeight
          },
          s: s$1
        });

        items.push(item);
        count++;
      }

      return items;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickHandler", function (e) {
      e.preventDefault();
      e.persist();
      var index = Number(e.target.dataset.index);

      while (index === undefined || isNaN(index)) {
        e.target = e.target.parentNode;
        index = Number(e.target.dataset.index);
      }

      var index = Number(e.target.dataset.index);

      if (_this.state.selection_mode === "single") {
        if (_this.state.selection_beforeChange) _this.state.selection_beforeChange({
          selected: [index]
        });else _this.setState({
          selected: [index]
        }, _this.changed);
      } else if (_this.state.selection_mode === "multiple") {
        if (e.type !== "click" || e.ctrlKey) {
          _this.setState(function (newstate) {
            var ix = newstate.selected.indexOf(index);
            ix === -1 ? newstate.selected.push(index) : newstate.selected.splice(ix, 1);
            if (_this.state.selection_beforeChange) _this.state.selection_beforeChange({
              selected: newstate.selected
            });else return newstate;
          }, _this.changed);
        } else if (e.shiftKey) {
          var from = _this.state.selected[_this.state.selected.length - 1];
          var array = [];
          if (from < index) for (var i = from; i <= index; i++) {
            array.push(i);
          } else if (from > index) for (var _i = index; _i <= from; _i++) {
            array.push(_i);
          } else array.push(index);
          if (_this.state.selection_beforeChange) _this.state.selection_beforeChange({
            selected: array
          });else _this.setState({
            selected: array
          });
        } else if (_this.state.selection_beforeChange) _this.state.selection_beforeChange({
          selected: [index]
        });else _this.setState({
          selected: [index]
        }, _this.changed);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changed", function () {
      if (_this.selection_onChange) _this.selection_onChange({
        selected: _this.state.selected
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleKeyDown", function (e) {
      e.persist();

      if (e.keyCode === 65 && e.ctrlKey) {
        _this.setState(function (newstate) {
          newstate.selected = _this.state.data.map(function (o, i) {
            return i;
          });
          if (_this.state.selection_beforeChange) _this.state.selection_beforeChange({
            selected: newstate.selected
          });
          return newstate;
        }, _this.changed);

        e.preventDefault();
        e.stopPropagation();
      } else _this.handleKeyDown(e);
    });

    _this.state.selected = [];
    _this.state.selection_mode = "";
    _this.itemRenderer = props.itemRenderer.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.containerPropsFunc = function (_ref) {
      var onDragOver = _ref.onDragOver,
          onDrop = _ref.onDrop;
      return {
        onDragOver: onDragOver,
        onDrop: onDrop
      };
    };

    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.selected_obj = {};
      this.state.selected.forEach(function (i) {
        return _this2.selected_obj[i] = true;
      });
      var containerProps = this.containerPropsFunc(this.props);
      var _this$props = this.props,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          ownerDocument = _this$props.ownerDocument;
      var withMotion = false;
      var contentStyle = {
        marginTop: -this.state.topPosition,
        marginLeft: -this.state.leftPosition
      };
      var from = Math.floor(this.state.topPosition / this.props.rowHeight);
      var to = Math.min(this.state.data.length - 1, Math.floor((this.state.containerHeight + this.state.topPosition - 1) / this.props.rowHeight));
      return React.createElement("div", _extends({
        ref: function ref(x) {
          return _this2.wrapper = x;
        },
        className: classnames(s$1.scrollarea, className),
        style: this.props.style,
        onWheel: this.handleWheel.bind(this)
      }, containerProps), React.createElement("div", {
        ref: function ref(x) {
          return _this2.content = x;
        },
        style: _objectSpread({
          height: this.state.realHeight
        }, this.props.contentStyle, contentStyle),
        className: classnames(s$1.sitcontrol_list, s$1.scrollarea_content),
        onTouchStart: this.handleTouchStart.bind,
        onTouchMove: this.handleTouchMove.bind,
        onTouchEnd: this.handleTouchEnd.bind,
        onKeyDown: this._handleKeyDown,
        tabIndex: this.props.focusableTabIndex
      }, React.createElement("div", {
        style: {
          height: from * this.props.rowHeight,
          padding: 0
        }
      }), from % 2 === 0 && React.createElement("div", {
        style: {
          padding: 0
        }
      }), this.itemsRenderer(from, to)), this.canScrollY() && React.createElement(ScrollBar, {
        ownerDocument: ownerDocument,
        realSize: this.state.realHeight,
        containerSize: this.state.containerHeight,
        position: this.state.topPosition,
        onMove: this.handleScrollbarMove,
        onPositionChange: this.handleScrollbarYPositionChange,
        containerStyle: this.props.verticalContainerStyle,
        scrollbarStyle: this.props.verticalScrollbarStyle,
        smoothScrolling: withMotion,
        minScrollSize: this.props.minScrollSize,
        onFocus: this.focusContent,
        type: "vertical",
        ss: s$1
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevstate) {
      var newstate = {};

      if (prevstate.data !== props.data) {
        newstate.data = props.data;
        newstate.realHeight = props.data.length * props.rowHeight;
        if (newstate.realHeight <= prevstate.topPosition) newstate.topPosition = 0;
      }

      React.Children.map(props.children, function (child) {
        if (child.type === Selection) {
          if (child.props.selected) newstate.selected = child.props.selected;

          if (child.props.mode !== prevstate.selection_mode) {
            newstate.selection_mode = child.props.mode;
            newstate.selection_beforeChange = child.props.onBeforeChange;
            newstate.selection_onChange = child.props.onChange;
          }
        }
      });
      return newstate;
    }
  }]);

  return List;
}(ScrollArea);

List.itemRenderer = function (_ref2) {
  var index = _ref2.index,
      key = _ref2.key,
      style = _ref2.style;
  var o = this.state.data[index]; //const picked = this.state.pickedIndex === index;
  //const selected = this.state.value === o[this.props.valueField];

  var selected = !!this.state.selected[index];
  console.log(selected);
  return React.createElement("div", {
    className: classnames("sitcontrol_list_item", selected && "sitcontrol_selected"),
    "data-index": index,
    key: key,
    style: style,
    onClick: this.clickHandler,
    onTouchEnd: this.clickHandler,
    draggable: this.props.draggable
  }, o[this.props.labelField]);
};

List.defaultProps = (_List$defaultProps = {
  data: [],
  labelField: "label"
}, _defineProperty(_List$defaultProps, "data", []), _defineProperty(_List$defaultProps, "draggable", false), _defineProperty(_List$defaultProps, "droppable", false), _defineProperty(_List$defaultProps, "itemRenderer", List.itemRenderer), _defineProperty(_List$defaultProps, "rowHeight", 30), _defineProperty(_List$defaultProps, "speed", 1), _defineProperty(_List$defaultProps, "vertical", true), _defineProperty(_List$defaultProps, "horizontal", true), _defineProperty(_List$defaultProps, "smoothScrolling", false), _defineProperty(_List$defaultProps, "swapWheelAxes", false), _defineProperty(_List$defaultProps, "contentWindow", (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : undefined), _defineProperty(_List$defaultProps, "ownerDocument", (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" ? document : undefined), _defineProperty(_List$defaultProps, "focusableTabIndex", 1), _List$defaultProps);
List.propTypes = (_List$propTypes = {
  data: PropTypes.array,
  labelField: PropTypes.string
}, _defineProperty(_List$propTypes, "data", PropTypes.array), _defineProperty(_List$propTypes, "draggable", PropTypes.bool), _defineProperty(_List$propTypes, "droppable", PropTypes.bool), _defineProperty(_List$propTypes, "itemRenderer", PropTypes.func), _defineProperty(_List$propTypes, "rowHeight", PropTypes.number), _List$propTypes);

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: _this.props.defaultValue
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeHandler", function (e) {
      var oldValue = _this.state.value;
      var newValue = e.target.value;
      if (_this.props.uppercase) newValue = newValue.toUpperCase();else if (_this.props.lowercase) newValue = newValue.toLowerCase();

      if (_this.props.accept !== undefined) {
        var re = new RegExp("^" + _this.props.accept + "$");
        newValue = re.test(newValue) ? newValue : oldValue;
      }

      var _e = {
        target: _assertThisInitialized(_assertThisInitialized(_this)),
        oldValue: oldValue,
        newValue: newValue,
        event: e
      };
      if (_this.props.value !== undefined && _this.props.onChange !== undefined) _this.props.onChange(_e);else _this.setState({
        value: newValue
      }, function () {
        if (_this.props.onChange !== undefined) _this.props.onChange(_e);
      });
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          className = _this$props.className,
          onChange = _this$props.onChange,
          accept = _this$props.accept,
          style = _this$props.style,
          witdh = _this$props.witdh,
          ss = _this$props.ss,
          uppercase = _this$props.uppercase,
          lowercase = _this$props.lowercase,
          inputprops = _objectWithoutProperties(_this$props, ["value", "defaultValue", "className", "onChange", "accept", "style", "witdh", "ss", "uppercase", "lowercase"]);

      if (style !== undefined && width !== undefined) Object.assign(style, {
        width: width
      });
      return React.createElement("input", _extends({
        className: classnames(s.sitcontrol, className),
        style: style,
        value: this.state.value,
        onChange: this.changeHandler
      }, inputprops));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newstate = {};
      if (props.value !== undefined && state.value !== props.value) newstate.value = props.value;
      return newstate;
    }
  }]);

  return Input;
}(React.Component);
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

var NumberInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberInput, _React$Component);

  function NumberInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NumberInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumberInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: getNumber(_this.props.defaultValue),
      focused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeHandler", function (e) {
      var oldValue = _this.state.value;
      var text = e.target.value;
      var newValue_str = text.replace(/[^0-9.]/g, "");
      if (text.charAt(0) === "-") newValue_str = "-" + newValue_str;
      var parts = newValue_str.split(".");
      var newValue = 0;
      if (newValue_str === "" || newValue_str === "-" || newValue_str === "-0") newValue = 0;else if (_this.props.decimals === 0 || parts.length === 1) {
        newValue = Number(parts[0]);
        newValue_str = formatNumber(newValue);
      } else if (parts[1] !== "") {
        if (parts[1].length > _this.props.decimals) parts[1] = parts[1].substring(0, _this.props.decimals);
        newValue = Number(parts[0] + "." + parts[1]);
        newValue_str = formatNumber(newValue, parts[1].length);
      }

      if (_this.props.value !== undefined) {
        _this.state.text = newValue_str;

        _this.props.onChange({
          target: _assertThisInitialized(_assertThisInitialized(_this)),
          oldValue: oldValue,
          newValue: newValue
        });
      } else {
        _this.setState({
          value: newValue,
          text: newValue_str
        }, function () {
          if (_this.props.onChange !== undefined && oldValue !== newValue) {
            _this.props.onChange({
              target: _assertThisInitialized(_assertThisInitialized(_this)),
              oldValue: oldValue,
              newValue: newValue
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focused", function (e) {
      e.persist();
      var decimals = _this.state.value % 1 === 0 ? 0 : _this.props.decimals;

      _this.setState({
        focused: true,
        text: formatNumber(_this.state.value, decimals)
      }, function () {
        _this.input.select();

        if (_this.props.onFocus) _this.props.onFocus({
          target: _assertThisInitialized(_assertThisInitialized(_this)),
          event: e
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blurred", function (e) {
      e.persist();

      _this.setState({
        focused: false
      }, function () {
        if (_this.props.onBlur) _this.props.onBlur({
          target: _assertThisInitialized(_assertThisInitialized(_this)),
          event: e
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyUpHandler", function (e) {
      e.persist();

      if (_this.props.onEnter && e.keyCode === 13) {
        e.preventDefault();

        _this.props.onEnter({
          target: _assertThisInitialized(_assertThisInitialized(_this))
        });
      }

      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(e);
      }
    });

    return _this;
  }

  _createClass(NumberInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyUp = _this$props.onKeyUp,
          onEnter = _this$props.onEnter,
          prefix = _this$props.prefix,
          suffix = _this$props.suffix,
          ss = _this$props.ss,
          xprops = _objectWithoutProperties(_this$props, ["value", "defaultValue", "onChange", "onFocus", "onBlur", "onKeyUp", "onEnter", "prefix", "suffix", "ss"]);

      var text = this.state.focused ? this.state.text : this.props.prefix + formatNumber(this.state.value, this.props.decimals) + this.props.suffix;
      return React.createElement("input", _extends({
        ref: function ref(o) {
          return _this2.input = o;
        },
        className: classnames(ss.sitcontrol, ss.right),
        value: text,
        onChange: this.changeHandler,
        onFocus: this.focused,
        onBlur: this.blurred,
        onKeyUp: this.keyUpHandler
      }, xprops));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevstate) {
      var newstate = {};
      if (props.value !== undefined && prevstate.value !== props.value) newstate.value = getNumber(props.value);
      return newstate;
    }
  }]);

  return NumberInput;
}(React.Component);
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

var faCheck = {
  prefix: 'fas',
  iconName: 'check',
  icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
};
var faPencilAlt = {
  prefix: 'fas',
  iconName: 'pencil-alt',
  icon: [512, 512, [], "f303", "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]
};

var faClock$1 = {
  prefix: 'far',
  iconName: 'clock',
  icon: [512, 512, [], "f017", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"]
};

library.add(faCheck, faPencilAlt, faClock$1);

export { Select as CSelect, Calendar, DatePicker, Clock, DateTimePicker, List, Selection, Input, NumberInput };
//# sourceMappingURL=index.module.js.map
