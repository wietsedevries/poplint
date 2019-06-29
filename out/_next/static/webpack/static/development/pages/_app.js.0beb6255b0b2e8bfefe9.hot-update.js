webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./ui/Division.js":
/*!************************!*\
  !*** ./ui/Division.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/Jarvis/projects/poplint/ui/Division.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: ", ";\n  width: ", ";\n  background-color: ", ";\n  line-height: ", ";\n  border-radius: ", ";\n  margin-left: 3px;\n  font-size: 10px;\n  color: ", ";\n  box-sizing: border-box;\n  position: relative;\n  border: ", ";\n\n  &:after {\n    content: ", ";\n    opacity: 0;\n    transition: .1s;\n    display: block;\n    top: -16px;\n    line-height: 16px;\n    position: absolute;\n    width: 100px;\n    text-align: center;\n    transform: translateX(-50%);\n    left: 50%;\n    pointer-events: none;\n    height: 0;\n    white-space: nowrap;\n  }\n\n  &:hover {\n\n    border-color: rgba(0,0,0,0.2);\n    &:after {\n      opacity: 1;\n    }\n\n  }\n  @media (max-width: 768px) {\n    &:after {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 150px;\n  height: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.theme.fn.spacing(2);
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return !!props.nada && props.theme.color.lightGrey;
});
var Unit = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), function (props) {
  return !props.share && 'none';
}, function (props) {
  return "".concat(props.share, "%");
}, function (props) {
  return props.theme.color[props.color];
}, function (props) {
  return props.theme.fn.spacing(2);
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.color.darkGrey;
}, function (props) {
  return !!props.share && '1px solid transparent';
}, function (props) {
  return !!props.share && "\"".concat(props.label, "\"");
});

var Division = function Division(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? 0 : _ref$error,
      _ref$warn = _ref.warn,
      warn = _ref$warn === void 0 ? 0 : _ref$warn,
      _ref$off = _ref.off,
      off = _ref$off === void 0 ? 0 : _ref$off;

  var reducer = function reducer(accumulator, current) {
    return accumulator + current;
  };

  var total = [error, warn, off].reduce(reducer);
  var nada = !error && !warn && !off;
  var units = [{
    id: 'off',
    color: 'yellow',
    share: off / total * 100 || 0
  }, {
    id: 'warn',
    color: 'orange',
    share: warn / total * 100 || 0
  }, {
    id: 'error',
    color: 'red',
    share: error / total * 100 || 0
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    nada: nada,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, units.map(function (unit) {
    var id = unit.id,
        color = unit.color,
        share = unit.share;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Unit, {
      key: id,
      share: share,
      color: color,
      label: "".concat(id, ": ").concat(share.toFixed(0), "%"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    });
  }));
};

Division.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  warn: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  off: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Division);

/***/ })

})
//# sourceMappingURL=_app.js.0beb6255b0b2e8bfefe9.hot-update.js.map