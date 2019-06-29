webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./ui/Badge.js":
/*!*********************!*\
  !*** ./ui/Badge.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/Users/Jarvis/projects/poplint/ui/Badge.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 18px;\n  height: 18px;\n  margin: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  background-image: url('../static/guides.png');\n  background-size: 400%;\n  background-position-x: ", ";\n  background-position-y: ", ";\n  position: relative;\n  opacity: ", ";\n  transition: opacity .1s;\n\n  &:after {\n    content: ", ";\n    opacity: ", ";\n    transition: .1s;\n    display: block;\n    bottom: ", ";\n    line-height: 16px;\n    position: absolute;\n    width: 100px;\n    text-align: ", ";\n    transform: ", ";\n    left: ", ";\n    pointer-events: none;\n    height: ", ";\n    white-space: nowrap;\n    font-size: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-position-y: -18px;\n    opacity: 1;\n\n    &:after {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BadgeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), function (props) {
  return props.noMargin ? '0' : "".concat(props.theme.fn.spacing(), " 0 0 ").concat(props.theme.fn.spacing());
}, function (props) {
  return !props.type && props.theme.color.lightGrey;
}, function (props) {
  return !props.type && '50%';
}, function (props) {
  return "-".concat(props.position, "px");
}, function (props) {
  return props.active ? '-18px' : 0;
}, function (props) {
  return props.active ? 1 : 0.6;
}, function (props) {
  return props.label && "\"".concat(props.type, "\"");
}, function (props) {
  return props.large ? 1 : 0;
}, function (props) {
  return props.large ? '-20px' : 0;
}, function (props) {
  return !props.large && 'center';
}, function (props) {
  return !props.large && 'translateX(-50%)';
}, function (props) {
  return props.large ? 0 : '50%';
}, function (props) {
  return !props.large && 0;
}, function (props) {
  return props.large ? props.theme.font.regular : '10px';
}, function (props) {
  return props.theme.color.darkGrey;
});

var Badge = function Badge(_ref) {
  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 18 : _ref$size,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "size"]);

  var map = {
    eslint: {
      index: 0,
      url: 'https://github.com/eslint/eslint'
    },
    google: {
      index: 1,
      url: 'https://github.com/google/styleguide'
    },
    standardJs: {
      index: 2,
      url: 'https://github.com/standard/standard'
    },
    airBnb: {
      index: 3,
      url: 'https://github.com/airbnb/javascript'
    }
  };

  var redirect = function redirect(e) {
    e.stopPropagation();
    window.location.href = map[type].url;
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(BadgeWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: redirect,
    position: map[type].index * size,
    type: type
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

Badge.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ })

})
//# sourceMappingURL=_app.js.89981f9b1acf3c540c58.hot-update.js.map