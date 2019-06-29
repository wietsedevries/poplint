webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ui/Text.js":
/*!********************!*\
  !*** ./ui/Text.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/Users/Jarvis/projects/poplint/ui/Text.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: ", ";\n  font-size: ", ";\n  padding: 0;\n  margin: 0 ", ";\n  font-weight: 400;\n  margin-bottom: ", ";\n  text-align: ", ";\n  max-width: 500px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n  padding: 0;\n  margin: 0;\n  font-weight: 600;\n  margin-bottom: ", ";\n  text-align: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: ", ";\n  font-size: ", ";\n  padding: 0;\n  margin: 0;\n  font-weight: 400;\n  margin-bottom: ", ";\n  text-align: ", ";\n\n  @media (max-width: 768px) {\n    font-size: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: ", ";\n  font-size: ", ";\n  padding: 0;\n  margin: 0;\n  font-weight: 500;\n  margin-bottom: ", ";\n  text-align: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Header1 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h1(_templateObject(), function (props) {
  return props.theme.color[props.color || 'darkGrey'];
}, function (props) {
  return props.theme.font[props.font || 'jumbo'];
}, function (props) {
  return props.margin && props.theme.fn.spacing(4);
}, function (props) {
  return props.align;
});
var Header2 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h2(_templateObject2(), function (props) {
  return props.theme.color[props.color || 'darkGrey'];
}, function (props) {
  return props.theme.font[props.font || 'large'];
}, function (props) {
  return props.margin && props.theme.fn.spacing(3);
}, function (props) {
  return props.align;
}, function (props) {
  return props.theme.font[props.font || 'regular'];
});
var Header3 = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h3(_templateObject3(), function (props) {
  return props.theme.color[props.color || 'grey'];
}, function (props) {
  return props.theme.font[props.font || 'tiny'];
}, function (props) {
  return props.margin && props.theme.fn.spacing(2);
}, function (props) {
  return props.align;
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p(_templateObject4(), function (props) {
  return props.theme.color[props.color || 'darkGrey'];
}, function (props) {
  return props.theme.font[props.font || 'small'];
}, function (props) {
  return props.align === 'center' && 'auto';
}, function (props) {
  return props.margin ? props.theme.fn.spacing(2) : 0;
}, function (props) {
  return props.align;
});

var Text = function Text(_ref) {
  var type = _ref.type,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? true : _ref$margin,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "margin"]);

  var map = {
    h1: Header1,
    h2: Header2,
    h3: Header3,
    p: Paragraph
  };
  var Component = map[type || 'p'];
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    margin: margin
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
};

Text.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.23d119aa8ef606295f7b.hot-update.js.map