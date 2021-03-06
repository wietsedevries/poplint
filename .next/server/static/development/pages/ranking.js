module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActiveItem.js":
/*!**********************************!*\
  !*** ./components/ActiveItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui */ "./ui/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./components/index.js");



var _jsxFileName = "/Users/Jarvis/projects/poplint/components/ActiveItem.js";





var ActiveItem = function ActiveItem(_ref) {
  var rule = _ref.rule;
  var description = rule.description,
      _rule$options = rule.options,
      options = _rule$options === void 0 ? {} : _rule$options,
      url = rule.url,
      google = rule.google,
      airBnb = rule.airBnb,
      standardJs = rule.standardJs,
      eslint = rule.eslint;
  var isIncluded = [google, airBnb, standardJs, eslint].filter(Boolean).length;
  /**
   * Filter the extra option, so it doesn't
   * show in the options list.
   */

  var filterCondition = function filterCondition(_, index) {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(options)[index] !== 'extra';
  };

  var filteredValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(options).filter(filterCondition);

  var filteredKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(options).filter(filterCondition);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    type: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), !!filteredValues.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    type: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Options"), filteredValues.map(function (option, i) {
    var key = filteredKeys[i];
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(___WEBPACK_IMPORTED_MODULE_6__["Option"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: key,
      title: key
    }, option, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), !!isIncluded && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    type: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Included in:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, !!eslint && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    type: "eslint",
    active: true,
    label: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), !!google && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    type: "google",
    active: true,
    label: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), !!airBnb && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    type: "airBnb",
    active: true,
    label: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), !!standardJs && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    type: "standardJs",
    active: true,
    label: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Anchor"], {
    rel: "noopener noreferrer",
    target: "_blank",
    href: url,
    font: "tiny",
    colored: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, url));
};

ActiveItem.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  url: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  google: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  airBnb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  standardJs: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  eslint: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  rule: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ActiveItem);

/***/ }),

/***/ "./components/DataSet.js":
/*!*******************************!*\
  !*** ./components/DataSet.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui */ "./ui/index.js");

var _jsxFileName = "/Users/Jarvis/projects/poplint/components/DataSet.js";




var DataSet = function DataSet(_ref) {
  var data = _ref.data,
      src = _ref.src;
  var tableRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var rowRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      overflow = _useState2[0],
      setOverflow = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (tableRef.current.clientWidth < rowRef.current.clientWidth) {
      setOverflow(true);
    }
  }, [data]);
  var horizontalTable = data.headers[0] === '';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    ref: tableRef,
    overflow: overflow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Table"].Tr, {
    ref: rowRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.headers.map(function (header, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Table"].Th, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, header);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, data.rows.map(function () {
    var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var index = arguments.length > 1 ? arguments[1] : undefined;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Table"].Tr, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, row.map(function (value, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Table"].Td, {
        key: i,
        horizontal: horizontalTable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, value);
    }));
  }))), !!src && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Table"].Source, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Source: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: src,
    blank: true,
    colored: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, src)));
};

DataSet.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (DataSet);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/grid */ "./utils/grid.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui */ "./ui/index.js");
var _jsxFileName = "/Users/Jarvis/projects/poplint/components/Footer.js";




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["FooterBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_1__["Center"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    href: "/ranking",
    colored: true,
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Popularity ranking of eslint rules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    href: "/tabs-vs-spaces",
    colored: true,
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Indentation: tabs vs spaces"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    href: "/semi-vs-no-semi",
    colored: true,
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Semicolon: semi vs no-semi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    href: "/style-guides",
    colored: true,
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Javascript guide comparison"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
    small: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui */ "./ui/index.js");
/* harmony import */ var _utils_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/grid */ "./utils/grid.js");
var _jsxFileName = "/Users/Jarvis/projects/poplint/components/Header.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_2__["Center"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/portal */ "./utils/portal.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui */ "./ui/index.js");
var _jsxFileName = "/Users/Jarvis/projects/poplint/components/Modal.js";





var Modal = function Modal(_ref) {
  var title = _ref.title,
      content = _ref.content,
      _ref$close = _ref.close,
      close = _ref$close === void 0 ? function () {} : _ref$close,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open;

  if (!open) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_portal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Popup"].Curtain, {
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Popup"].Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Popup"].Head, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    type: "h2",
    margin: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Popup"].Close, {
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Popup"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, content))));
};

Modal.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/Option.js":
/*!******************************!*\
  !*** ./components/Option.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui */ "./ui/index.js");
var _jsxFileName = "/Users/Jarvis/projects/poplint/components/Option.js";



var Option = function Option(option) {
  var title = option.title,
      warn = option.warn,
      error = option.error,
      off = option.off;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_1__["OptionRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_1__["Division"], {
    error: error,
    warn: warn,
    off: off,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./components/Paginator.js":
/*!*********************************!*\
  !*** ./components/Paginator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui */ "./ui/index.js");


var _jsxFileName = "/Users/Jarvis/projects/poplint/components/Paginator.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin: ", " 0 ", ";\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var PaginatorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject(), function (props) {
  return props.theme.fn.spacing(4);
}, function (props) {
  return props.theme.fn.spacing(10);
});

var Paginator = function Paginator(_ref) {
  var loadMore = _ref.loadMore,
      defaultSpin = _ref.spin;

  /**
   * Check if browser supperts intersection observer
   * Will no be using a polyfill.
   */
  var observerExists = typeof window !== 'undefined' && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
  var paginatorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultSpin),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      spin = _useState2[0],
      setSpin = _useState2[1];

  Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_5__["useIntersectionObserver"])({
    onIntersect: function onIntersect(_ref2) {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 1),
          isIntersecting = _ref3[0].isIntersecting;

      if (isIntersecting) {
        setSpin(true);
        loadMore(isIntersecting);
      } else if (spin) {
        setSpin(false);
      }
    },
    target: paginatorRef
  });
  /**
   * If intersection observer is not present
   * allow function to be triggered manually
   */

  var manualTrigger = function manualTrigger() {
    loadMore(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PaginatorWrapper, {
    ref: paginatorRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, observerExists ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Loader"], {
    spin: spin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: manualTrigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Load more"));
};

Paginator.propTypes = {
  loadMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  spin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Paginator);

/***/ }),

/***/ "./components/PercentageGraph.js":
/*!***************************************!*\
  !*** ./components/PercentageGraph.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui */ "./ui/index.js");
var _jsxFileName = "/Users/Jarvis/projects/poplint/components/PercentageGraph.js";




var PercentageGraph = function PercentageGraph(_ref) {
  var data = _ref.data;

  var color = function color(index) {
    var map = {
      0: '#2B59C3',
      1: '#BDD358',
      2: '#59CD90',
      3: '#E5E059',
      4: '#FA7268'
    };
    return map[index];
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data.map(function (_ref2, index) {
    var label = _ref2.label,
        value = _ref2.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__["Bar"].Item, {
      key: label,
      value: value.toFixed(1),
      label: label,
      style: {
        backgroundColor: color(index)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }));
};

PercentageGraph.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (PercentageGraph);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Modal, ActiveItem, Option, Paginator, DataSet, PercentageGraph, Footer, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ActiveItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveItem */ "./components/ActiveItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveItem", function() { return _ActiveItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./components/Option.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paginator */ "./components/Paginator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return _Paginator__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DataSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataSet */ "./components/DataSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSet", function() { return _DataSet__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _PercentageGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PercentageGraph */ "./components/PercentageGraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentageGraph", function() { return _PercentageGraph__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/ranking.js":
/*!**************************!*\
  !*** ./pages/ranking.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_eslintRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/eslintRules */ "./utils/eslintRules.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui */ "./ui/index.js");
/* harmony import */ var _utils_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/grid */ "./utils/grid.js");



var _jsxFileName = "/Users/Jarvis/projects/poplint/pages/ranking.js";






var Ranking = function Ranking() {
  var _useRules = Object(_utils_eslintRules__WEBPACK_IMPORTED_MODULE_4__["useRules"])(),
      rules = _useRules.rules;

  var sortedRules = rules.sort(function (a, b) {
    return b.error - a.error;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(15),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      limit = _useState2[0],
      setLimit = _useState2[1];

  var paginatedRules = sortedRules.slice(0, limit);

  var increaseLimit = function increaseLimit(shouldIncrease) {
    if (shouldIncrease) {
      setLimit(limit + 10);
    }
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      activeKey = _useState4[0],
      setActiveKey = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      showModal = _useState6[0],
      setShowModal = _useState6[1];

  var renderModal = function renderModal() {
    if (!showModal) {
      return;
    }

    var activeItem = rules.find(function (rule) {
      return rule.key === activeKey;
    });
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      title: activeKey,
      content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["ActiveItem"], {
        rule: activeItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }),
      close: function close() {
        return setShowModal(false);
      },
      open: showModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  };

  var toggleKey = function toggleKey(key) {
    return function () {
      setActiveKey(key);
      setShowModal(true);
    };
  };

  var renderList = function renderList() {
    return paginatedRules.map(function (rule, index) {
      var key = rule.key,
          error = rule.error,
          warn = rule.warn,
          off = rule.off,
          category = rule.category,
          eslint = rule.eslint,
          google = rule.google,
          standardJs = rule.standardJs,
          airBnb = rule.airBnb;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
        key: key,
        onClick: toggleKey(key),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["ListItem"].Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["ListItem"].Rank, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, index + 1), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["ListItem"].HeadItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        type: "h2",
        color: "darkGrey",
        margin: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, key), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        type: "h3",
        margin: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, category)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["ListItem"].HeadItem, {
        end: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Division"], {
        off: off,
        warn: warn,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()({
        eslint: eslint,
        google: google,
        standardJs: standardJs,
        airBnb: airBnb
      }).map(function (guideKey, i) {
        var isPresent = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()({
          eslint: eslint,
          google: google,
          standardJs: standardJs,
          airBnb: airBnb
        })[i];

        return isPresent ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
          key: guideKey,
          type: guideKey,
          label: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }) : null;
      })))));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utils_eslintRules__WEBPACK_IMPORTED_MODULE_4__["RulesProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_7__["Center"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utils_grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    type: "h1",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Popularity ranking of eslint rules"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\n                View which rules are used the most and how strict.\n                "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_6__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, renderList(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Paginator"], {
    loadMore: increaseLimit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))), renderModal())));
};

/* harmony default export */ __webpack_exports__["default"] = (Ranking);

/***/ }),

/***/ "./scripts/output/guides.json":
/*!************************************!*\
  !*** ./scripts/output/guides.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, default */
/***/ (function(module) {

module.exports = [{"key":"accessor-pairs","eslint":false,"description":"enforce getter and setter pairs in objects","category":"Best Practices","url":"https://eslint.org/docs/rules/accessor-pairs","options":{"getWithoutSet":{"error":2,"warn":0,"off":3,"google":0,"airBnb":0,"standardJs":2},"extra":{},"setWithoutGet":{"error":2,"warn":0,"off":3,"google":0,"airBnb":0,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"array-bracket-newline","eslint":false,"description":"enforce linebreaks after opening and before closing array brackets","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/array-bracket-newline","fixable":"whitespace","options":{"always":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"never":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"consistent":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"multiline":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"minItems":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"array-bracket-spacing","eslint":false,"description":"enforce consistent spacing inside array brackets","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/array-bracket-spacing","fixable":"whitespace","options":{"always":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":4,"warn":0,"off":0,"google":2,"airBnb":2,"standardJs":0},"singleValue":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"objectsInArrays":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"arraysInArrays":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"array-callback-return","eslint":false,"description":"enforce `return` statements in callbacks of array methods","category":"Best Practices","url":"https://eslint.org/docs/rules/array-callback-return","options":{"allowImplicit":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"array-element-newline","eslint":false,"description":"enforce line breaks after each array element","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/array-element-newline","fixable":"whitespace","options":{"always":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"never":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"consistent":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"multiline":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"minItems":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"arrow-body-style","eslint":false,"description":"require braces around arrow function bodies","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/arrow-body-style","fixable":"code","options":{"always":{"error":3,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":3,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":0},"as-needed":{"error":3,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"requireReturnForObjectLiteral":{"error":3,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"arrow-parens","eslint":false,"description":"require parentheses around arrow function arguments","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/arrow-parens","fixable":"code","options":{"always":{"error":6,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":0},"extra":{},"as-needed":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"requireForBlockBody":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":6,"warn":0,"off":10},{"key":"arrow-spacing","eslint":false,"description":"enforce consistent spacing before and after the arrow in arrow functions","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/arrow-spacing","fixable":"whitespace","options":{"before":{"error":4,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"extra":{},"after":{"error":4,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"block-scoped-var","eslint":false,"description":"enforce the use of variables within the scope they are defined","category":"Best Practices","url":"https://eslint.org/docs/rules/block-scoped-var","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"block-spacing","eslint":false,"description":"disallow or enforce spaces inside of blocks after opening block and before closing block","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/block-spacing","fixable":"whitespace","options":{"always":{"error":4,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":4,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"brace-style","eslint":false,"description":"enforce consistent brace style for blocks","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/brace-style","fixable":"whitespace","options":{"1tbs":{"error":6,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"extra":{},"stroustrup":{"error":6,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"allman":{"error":6,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"allowSingleLine":{"error":6,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"callback-return","eslint":false,"description":"require `return` statements after callbacks","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/callback-return","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"camelcase","eslint":false,"description":"enforce camelcase naming convention","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/camelcase","options":{"ignoreDestructuring":{"error":6,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"extra":{},"properties":{"error":6,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"capitalized-comments","eslint":false,"description":"enforce or disallow capitalization of the first letter of a comment","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/capitalized-comments","fixable":"code","options":{"always":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"never":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignorePattern":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignoreInlineComments":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignoreConsecutiveComments":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"line":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"block":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"class-methods-use-this","eslint":false,"description":"enforce that class methods utilize `this`","category":"Best Practices","url":"https://eslint.org/docs/rules/class-methods-use-this","options":{"exceptMethods":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"comma-dangle","eslint":false,"description":"require or disallow trailing commas","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/comma-dangle","fixable":"code","options":{"always-multiline":{"error":9,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"extra":{},"always":{"error":9,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"never":{"error":9,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"only-multiline":{"error":9,"warn":0,"off":9,"google":2,"airBnb":2,"standardJs":2},"arrays":{"error":9,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"objects":{"error":9,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"imports":{"error":9,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"exports":{"error":9,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"functions":{"error":9,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":9,"warn":0,"off":7},{"key":"comma-spacing","eslint":false,"description":"enforce consistent spacing before and after commas","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/comma-spacing","fixable":"whitespace","options":{"before":{"error":5,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"extra":{},"after":{"error":5,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"comma-style","eslint":false,"description":"enforce consistent comma style","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/comma-style","fixable":"code","options":{"first":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"extra":{},"last":{"error":5,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"exceptions":{"error":5,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"complexity","eslint":false,"description":"enforce a maximum cyclomatic complexity allowed in a program","category":"Best Practices","url":"https://eslint.org/docs/rules/complexity","options":{"maximum":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"max":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"computed-property-spacing","eslint":false,"description":"enforce consistent spacing inside computed property brackets","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/computed-property-spacing","fixable":"whitespace","options":{"always":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":3,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"consistent-return","eslint":false,"description":"require `return` statements to either always or never specify values","category":"Best Practices","url":"https://eslint.org/docs/rules/consistent-return","options":{"treatUndefinedAsUnspecified":{"error":2,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"consistent-this","eslint":false,"description":"enforce consistent naming when capturing the current execution context","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/consistent-this","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"constructor-super","eslint":true,"description":"require `super()` calls in constructors","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/constructor-super","options":{},"google":true,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"curly","eslint":false,"description":"enforce consistent brace style for all control statements","category":"Best Practices","url":"https://eslint.org/docs/rules/curly","fixable":"code","options":{"all":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"extra":{},"multi":{"error":6,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"multi-line":{"error":6,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"multi-or-nest":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"consistent":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"default-case","eslint":false,"description":"require `default` cases in `switch` statements","category":"Best Practices","url":"https://eslint.org/docs/rules/default-case","options":{"commentPattern":{"error":3,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"dot-location","eslint":false,"description":"enforce consistent newlines before and after dots","category":"Best Practices","url":"https://eslint.org/docs/rules/dot-location","fixable":"code","options":{"object":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":2},"extra":{},"property":{"error":4,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"dot-notation","eslint":false,"description":"enforce dot notation whenever possible","category":"Best Practices","url":"https://eslint.org/docs/rules/dot-notation","fixable":"code","options":{"allowKeywords":{"error":4,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{},"allowPattern":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"eol-last","eslint":false,"description":"require or disallow newline at the end of files","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/eol-last","fixable":"whitespace","options":{"always":{"error":9,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":9,"warn":0,"off":9,"google":2,"airBnb":2,"standardJs":2},"unix":{"error":9,"warn":0,"off":9,"google":2,"airBnb":2,"standardJs":2},"windows":{"error":9,"warn":0,"off":9,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":9,"warn":0,"off":7},{"key":"eqeqeq","eslint":false,"description":"require the use of `===` and `!==`","category":"Best Practices","url":"https://eslint.org/docs/rules/eqeqeq","fixable":"code","options":{"always":{"error":8,"warn":0,"off":6,"google":0,"airBnb":2,"standardJs":2},"extra":{},"null":{"error":8,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"smart":{"error":8,"warn":0,"off":8,"google":0,"airBnb":2,"standardJs":2},"allow-null":{"error":8,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":8,"warn":0,"off":8},{"key":"for-direction","eslint":true,"description":"enforce \"for\" loop update clause moving the counter in the right direction.","category":"Possible Errors","url":"https://eslint.org/docs/rules/for-direction","fixable":null,"options":{},"google":false,"airBnb":false,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"func-call-spacing","eslint":false,"description":"require or disallow spacing between function identifiers and their invocations","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/func-call-spacing","fixable":"whitespace","options":{"never":{"error":4,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"extra":{},"always":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"allowNewlines":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"func-name-matching","eslint":false,"description":"require function names to match the name of the variable or property to which they are assigned","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/func-name-matching","options":{"always":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"never":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"considerPropertyDescriptor":{"error":0,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0},"includeCommonJSModuleExports":{"error":0,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"func-names","eslint":false,"description":"require or disallow named `function` expressions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/func-names","options":{"always":{"error":0,"warn":2,"off":3,"google":0,"airBnb":1,"standardJs":0},"extra":{},"as-needed":{"error":0,"warn":2,"off":3,"google":0,"airBnb":1,"standardJs":0},"never":{"error":0,"warn":2,"off":3,"google":0,"airBnb":1,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":2,"off":14},{"key":"func-style","eslint":false,"description":"enforce the consistent use of either `function` declarations or expressions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/func-style","options":{"declaration":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"expression":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowArrowFunctions":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"function-paren-newline","eslint":false,"description":"enforce consistent line breaks inside function parentheses","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/function-paren-newline","fixable":"whitespace","options":{"always":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"consistent":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"multiline":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"minItems":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"generator-star-spacing","eslint":false,"description":"enforce consistent spacing around `*` operators in generator functions","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/generator-star-spacing","fixable":"whitespace","options":{"before":{"error":3,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"extra":{},"after":{"error":3,"warn":0,"off":0,"google":2,"airBnb":2,"standardJs":2},"both":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"neither":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"named":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"anonymous":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"method":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"getter-return","eslint":true,"description":"enforce `return` statements in getters","category":"Possible Errors","url":"https://eslint.org/docs/rules/getter-return","fixable":null,"options":{},"google":false,"airBnb":false,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"global-require","eslint":false,"description":"require `require()` calls to be placed at top-level module scope","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/global-require","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"guard-for-in","eslint":false,"description":"require `for-in` loops to include an `if` statement","category":"Best Practices","url":"https://eslint.org/docs/rules/guard-for-in","options":{},"google":true,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"handle-callback-err","eslint":false,"description":"require error handling in callbacks","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/handle-callback-err","options":{},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"id-blacklist","eslint":false,"description":"disallow specified identifiers","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/id-blacklist","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"id-length","eslint":false,"description":"enforce minimum and maximum identifier lengths","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/id-length","options":{"min":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"max":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"exceptions":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"properties":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"id-match","eslint":false,"description":"require identifiers to match a specified regular expression","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/id-match","options":{"properties":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"implicit-arrow-linebreak","eslint":false,"description":"enforce the location of arrow function bodies","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/implicit-arrow-linebreak","fixable":"whitespace","options":{"beside":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"extra":{},"below":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"indent-legacy","eslint":false,"description":"enforce consistent indentation","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/indent-legacy","fixable":"whitespace","options":{"tab":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"SwitchCase":{"error":1,"warn":0,"off":0,"google":0,"airBnb":0,"standardJs":0},"VariableDeclarator":{"error":1,"warn":0,"off":0,"google":0,"airBnb":0,"standardJs":0},"outerIIFEBody":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"MemberExpression":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"FunctionDeclaration":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"FunctionExpression":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"CallExpression":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ArrayExpression":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ObjectExpression":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":false,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"indent","eslint":false,"description":"enforce consistent indentation","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/indent","fixable":"whitespace","options":{"tab":{"error":6,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"extra":{"name":"Spaces vs. tabs","values":{"spaces2":6,"spaces4":0,"tabs":0}},"SwitchCase":{"error":6,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"VariableDeclarator":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"outerIIFEBody":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"MemberExpression":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"FunctionDeclaration":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"FunctionExpression":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"CallExpression":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"ArrayExpression":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"ObjectExpression":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"ImportDeclaration":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"flatTernaryExpressions":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"ignoredNodes":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"ignoreComments":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"init-declarations","eslint":false,"description":"require or disallow initialization in variable declarations","category":"Variables","url":"https://eslint.org/docs/rules/init-declarations","options":{"always":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"never":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignoreForLoopInit":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"jsx-quotes","eslint":false,"description":"enforce the consistent use of either double or single quotes in JSX attributes","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/jsx-quotes","fixable":"whitespace","options":{"prefer-single":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0},"extra":{},"prefer-double":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"key-spacing","eslint":false,"description":"enforce consistent spacing between keys and values in object literal properties","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/key-spacing","fixable":"whitespace","options":{"align":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"extra":{},"mode":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"beforeColon":{"error":5,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"afterColon":{"error":5,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"singleLine":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"multiLine":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"keyword-spacing","eslint":false,"description":"enforce consistent spacing before and after keywords","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/keyword-spacing","fixable":"whitespace","options":{"before":{"error":7,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"extra":{},"after":{"error":7,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"overrides":{"error":7,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":7,"warn":0,"off":9},{"key":"line-comment-position","eslint":false,"description":"enforce position of line comments","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/line-comment-position","options":{"above":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"beside":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"position":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignorePattern":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"applyDefaultPatterns":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"applyDefaultIgnorePatterns":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"linebreak-style","eslint":false,"description":"enforce consistent linebreak style","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/linebreak-style","fixable":"whitespace","options":{"unix":{"error":4,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":0},"extra":{},"windows":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"lines-around-comment","eslint":false,"description":"require empty lines around comments","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/lines-around-comment","fixable":"whitespace","options":{"beforeBlockComment":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"afterBlockComment":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"beforeLineComment":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"afterLineComment":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowBlockStart":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowBlockEnd":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowClassStart":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowClassEnd":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowObjectStart":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowObjectEnd":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowArrayStart":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allowArrayEnd":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignorePattern":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"applyDefaultIgnorePatterns":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"lines-around-directive","eslint":false,"description":"require or disallow newlines around directives","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/lines-around-directive","fixable":"whitespace","options":{"always":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"before":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"after":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"lines-between-class-members","eslint":false,"description":"require or disallow an empty line between class members","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/lines-between-class-members","fixable":"whitespace","options":{"always":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"exceptAfterSingleLine":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"max-classes-per-file","eslint":false,"description":"enforce a maximum number of classes per file","category":"Best Practices","url":"https://eslint.org/docs/rules/max-classes-per-file","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"max-depth","eslint":false,"description":"enforce a maximum depth that blocks can be nested","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-depth","options":{"maximum":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"max":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"max-len","eslint":false,"description":"enforce a maximum line length","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-len","options":{"code":{"error":8,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"extra":{},"comments":{"error":8,"warn":0,"off":8,"google":2,"airBnb":2,"standardJs":0},"tabWidth":{"error":8,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":0},"ignorePattern":{"error":8,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":0},"ignoreComments":{"error":8,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"ignoreStrings":{"error":8,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":0},"ignoreUrls":{"error":8,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"ignoreTemplateLiterals":{"error":8,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":0},"ignoreRegExpLiterals":{"error":8,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"ignoreTrailingComments":{"error":8,"warn":0,"off":8,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"max-lines-per-function","eslint":false,"description":"enforce a maximum number of line of code in a function","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-lines-per-function","options":{"max":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"skipComments":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"skipBlankLines":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"IIFEs":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"max-lines","eslint":false,"description":"enforce a maximum number of lines per file","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-lines","options":{"max":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"skipComments":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"skipBlankLines":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"max-nested-callbacks","eslint":false,"description":"enforce a maximum depth that callbacks can be nested","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-nested-callbacks","options":{"maximum":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0},"extra":{},"max":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"max-params","eslint":false,"description":"enforce a maximum number of parameters in function definitions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-params","options":{"maximum":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"max":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"max-statements-per-line","eslint":false,"description":"enforce a maximum number of statements allowed per line","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-statements-per-line","options":{"max":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"max-statements","eslint":false,"description":"enforce a maximum number of statements allowed in function blocks","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/max-statements","options":{"maximum":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0},"extra":{},"max":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0},"ignoreTopLevelFunctions":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"multiline-comment-style","eslint":false,"description":"enforce a particular style for multiline comments","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/multiline-comment-style","fixable":"whitespace","options":{"starred-block":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"separate-lines":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"bare-block":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"multiline-ternary","eslint":false,"description":"enforce newlines between operands of ternary expressions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/multiline-ternary","options":{"always":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"always-multiline":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"never":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"new-cap","eslint":false,"description":"require constructor names to begin with a capital letter","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/new-cap","options":{"newIsCap":{"error":6,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"extra":{},"capIsNew":{"error":6,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"newIsCapExceptions":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"newIsCapExceptionPattern":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"capIsNewExceptions":{"error":6,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"capIsNewExceptionPattern":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"properties":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"new-parens","eslint":false,"description":"require parentheses when invoking a constructor with no arguments","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/new-parens","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"newline-after-var","eslint":false,"description":"require or disallow an empty line after variable declarations","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/newline-after-var","fixable":"whitespace","options":{"never":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"always":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"newline-before-return","eslint":false,"description":"require an empty line before `return` statements","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/newline-before-return","fixable":"whitespace","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"newline-per-chained-call","eslint":false,"description":"require a newline after each call in a method chain","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/newline-per-chained-call","fixable":"whitespace","options":{"ignoreChainWithDepth":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-alert","eslint":false,"description":"disallow the use of `alert`, `confirm`, and `prompt`","category":"Best Practices","url":"https://eslint.org/docs/rules/no-alert","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":3,"off":11},{"key":"no-array-constructor","eslint":false,"description":"disallow `Array` constructors","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-array-constructor","options":{},"google":true,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-async-promise-executor","eslint":false,"description":"disallow using an async function as a Promise executor","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-async-promise-executor","fixable":null,"options":{},"google":false,"airBnb":false,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-await-in-loop","eslint":false,"description":"disallow `await` inside of loops","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-await-in-loop","options":{},"google":false,"airBnb":false,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-bitwise","eslint":false,"description":"disallow bitwise operators","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-bitwise","options":{"allow":{"error":1,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{},"int32Hint":{"error":1,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-buffer-constructor","eslint":false,"description":"disallow use of the `Buffer()` constructor","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-buffer-constructor","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-caller","eslint":false,"description":"disallow the use of `arguments.caller` or `arguments.callee`","category":"Best Practices","url":"https://eslint.org/docs/rules/no-caller","options":{},"google":true,"airBnb":true,"standardJs":true,"error":7,"warn":0,"off":9},{"key":"no-case-declarations","eslint":true,"description":"disallow lexical declarations in case clauses","category":"Best Practices","url":"https://eslint.org/docs/rules/no-case-declarations","options":{},"google":false,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"no-catch-shadow","eslint":false,"description":"disallow `catch` clause parameters from shadowing variables in the outer scope","category":"Variables","url":"https://eslint.org/docs/rules/no-catch-shadow","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-class-assign","eslint":true,"description":"disallow reassigning class members","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-class-assign","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-compare-neg-zero","eslint":true,"description":"disallow comparing against -0","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-compare-neg-zero","fixable":null,"options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-cond-assign","eslint":true,"description":"disallow assignment operators in conditional expressions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-cond-assign","options":{"except-parens":{"error":3,"warn":0,"off":3,"google":0,"airBnb":0,"standardJs":2},"extra":{},"always":{"error":3,"warn":0,"off":4,"google":0,"airBnb":0,"standardJs":2}},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-confusing-arrow","eslint":false,"description":"disallow arrow functions where they could be confused with comparisons","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-confusing-arrow","fixable":"code","options":{"allowParens":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-console","eslint":true,"description":"disallow the use of `console`","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-console","options":{"allow":{"error":2,"warn":1,"off":3,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":false,"standardJs":false,"error":2,"warn":1,"off":13},{"key":"no-const-assign","eslint":true,"description":"disallow reassigning `const` variables","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-const-assign","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-constant-condition","eslint":true,"description":"disallow constant expressions in conditions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-constant-condition","options":{"checkLoops":{"error":2,"warn":1,"off":2,"google":0,"airBnb":0,"standardJs":2},"extra":{}},"google":false,"airBnb":false,"standardJs":true,"error":2,"warn":1,"off":13},{"key":"no-continue","eslint":false,"description":"disallow `continue` statements","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-continue","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-control-regex","eslint":true,"description":"disallow control characters in regular expressions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-control-regex","options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-debugger","eslint":true,"description":"disallow the use of `debugger`","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-debugger","fixable":null,"options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":1,"off":12},{"key":"no-delete-var","eslint":true,"description":"disallow deleting variables","category":"Variables","url":"https://eslint.org/docs/rules/no-delete-var","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-div-regex","eslint":false,"description":"disallow division operators explicitly at the beginning of regular expressions","category":"Best Practices","url":"https://eslint.org/docs/rules/no-div-regex","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-dupe-args","eslint":true,"description":"disallow duplicate arguments in `function` definitions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-dupe-args","options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-dupe-class-members","eslint":true,"description":"disallow duplicate class members","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-dupe-class-members","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-dupe-keys","eslint":true,"description":"disallow duplicate keys in object literals","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-dupe-keys","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-duplicate-case","eslint":true,"description":"disallow duplicate case labels","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-duplicate-case","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-duplicate-imports","eslint":false,"description":"disallow duplicate module imports","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-duplicate-imports","options":{"includeExports":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-else-return","eslint":false,"description":"disallow `else` blocks after `return` statements in `if` statements","category":"Best Practices","url":"https://eslint.org/docs/rules/no-else-return","fixable":"code","options":{"allowElseIf":{"error":6,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":6,"warn":0,"off":10},{"key":"no-empty-character-class","eslint":true,"description":"disallow empty character classes in regular expressions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-empty-character-class","options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-empty-function","eslint":false,"description":"disallow empty functions","category":"Best Practices","url":"https://eslint.org/docs/rules/no-empty-function","options":{"allow":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-empty-pattern","eslint":true,"description":"disallow empty destructuring patterns","category":"Best Practices","url":"https://eslint.org/docs/rules/no-empty-pattern","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-empty","eslint":true,"description":"disallow empty block statements","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-empty","options":{"allowEmptyCatch":{"error":3,"warn":0,"off":3,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":false,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"no-eq-null","eslint":false,"description":"disallow `null` comparisons without type-checking operators","category":"Best Practices","url":"https://eslint.org/docs/rules/no-eq-null","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-eval","eslint":false,"description":"disallow the use of `eval()`","category":"Best Practices","url":"https://eslint.org/docs/rules/no-eval","options":{"allowIndirect":{"error":5,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-ex-assign","eslint":true,"description":"disallow reassigning exceptions in `catch` clauses","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-ex-assign","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-extend-native","eslint":false,"description":"disallow extending native types","category":"Best Practices","url":"https://eslint.org/docs/rules/no-extend-native","options":{"exceptions":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"extra":{}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"no-extra-bind","eslint":false,"description":"disallow unnecessary calls to `.bind()`","category":"Best Practices","url":"https://eslint.org/docs/rules/no-extra-bind","fixable":"code","options":{},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":1,"off":9},{"key":"no-extra-boolean-cast","eslint":true,"description":"disallow unnecessary boolean casts","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-extra-boolean-cast","fixable":"code","options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-extra-label","eslint":false,"description":"disallow unnecessary labels","category":"Best Practices","url":"https://eslint.org/docs/rules/no-extra-label","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-extra-parens","eslint":false,"description":"disallow unnecessary parentheses","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-extra-parens","fixable":"code","options":{"functions":{"error":2,"warn":0,"off":0,"google":0,"airBnb":0,"standardJs":2},"extra":{},"all":{"error":2,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":2},"conditionalAssign":{"error":2,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":2},"nestedBinaryExpressions":{"error":2,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":2},"returnAssign":{"error":2,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":2},"ignoreJSX":{"error":2,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":2},"enforceForArrowConditionals":{"error":2,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":2}},"google":false,"airBnb":false,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"no-extra-semi","eslint":true,"description":"disallow unnecessary semicolons","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-extra-semi","fixable":"code","options":{},"google":false,"airBnb":false,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"no-fallthrough","eslint":true,"description":"disallow fallthrough of `case` statements","category":"Best Practices","url":"https://eslint.org/docs/rules/no-fallthrough","options":{"commentPattern":{"error":5,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-floating-decimal","eslint":false,"description":"disallow leading or trailing decimal points in numeric literals","category":"Best Practices","url":"https://eslint.org/docs/rules/no-floating-decimal","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-func-assign","eslint":true,"description":"disallow reassigning `function` declarations","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-func-assign","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-global-assign","eslint":true,"description":"disallow assignments to native objects or read-only global variables","category":"Best Practices","url":"https://eslint.org/docs/rules/no-global-assign","options":{"exceptions":{"error":3,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-implicit-coercion","eslint":false,"description":"disallow shorthand type conversions","category":"Best Practices","url":"https://eslint.org/docs/rules/no-implicit-coercion","fixable":"code","options":{"boolean":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"number":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"string":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"allow":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-implicit-globals","eslint":false,"description":"disallow variable and `function` declarations in the global scope","category":"Best Practices","url":"https://eslint.org/docs/rules/no-implicit-globals","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-implied-eval","eslint":false,"description":"disallow the use of `eval()`-like methods","category":"Best Practices","url":"https://eslint.org/docs/rules/no-implied-eval","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-inline-comments","eslint":false,"description":"disallow inline comments after code","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-inline-comments","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-inner-declarations","eslint":true,"description":"disallow variable or `function` declarations in nested blocks","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-inner-declarations","options":{"functions":{"error":4,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":2},"extra":{},"both":{"error":4,"warn":0,"off":4,"google":0,"airBnb":0,"standardJs":2}},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-invalid-regexp","eslint":true,"description":"disallow invalid regular expression strings in `RegExp` constructors","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-invalid-regexp","options":{"allowConstructorFlags":{"error":4,"warn":0,"off":4,"google":0,"airBnb":0,"standardJs":2},"extra":{}},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-invalid-this","eslint":false,"description":"disallow `this` keywords outside of classes or class-like objects","category":"Best Practices","url":"https://eslint.org/docs/rules/no-invalid-this","options":{},"google":true,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-irregular-whitespace","eslint":true,"description":"disallow irregular whitespace outside of strings and comments","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-irregular-whitespace","options":{"skipComments":{"error":4,"warn":0,"off":4,"google":2,"airBnb":0,"standardJs":2},"extra":{},"skipStrings":{"error":4,"warn":0,"off":4,"google":2,"airBnb":0,"standardJs":2},"skipTemplates":{"error":4,"warn":0,"off":4,"google":2,"airBnb":0,"standardJs":2},"skipRegExps":{"error":4,"warn":0,"off":4,"google":2,"airBnb":0,"standardJs":2}},"google":true,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-iterator","eslint":false,"description":"disallow the use of the `__iterator__` property","category":"Best Practices","url":"https://eslint.org/docs/rules/no-iterator","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-label-var","eslint":false,"description":"disallow labels that share a name with a variable","category":"Variables","url":"https://eslint.org/docs/rules/no-label-var","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-labels","eslint":false,"description":"disallow labeled statements","category":"Best Practices","url":"https://eslint.org/docs/rules/no-labels","options":{"allowLoop":{"error":4,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2},"extra":{},"allowSwitch":{"error":4,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-lone-blocks","eslint":false,"description":"disallow unnecessary nested blocks","category":"Best Practices","url":"https://eslint.org/docs/rules/no-lone-blocks","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-lonely-if","eslint":false,"description":"disallow `if` statements as the only statement in `else` blocks","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-lonely-if","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"no-loop-func","eslint":false,"description":"disallow `function` declarations and expressions inside loop statements","category":"Best Practices","url":"https://eslint.org/docs/rules/no-loop-func","options":{},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":1,"off":11},{"key":"no-magic-numbers","eslint":false,"description":"disallow magic numbers","category":"Best Practices","url":"https://eslint.org/docs/rules/no-magic-numbers","options":{"detectObjects":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"enforceConst":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignore":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignoreArrayIndexes":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-misleading-character-class","eslint":false,"description":"disallow characters which are made with multiple code points in character class syntax","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-misleading-character-class","options":{},"google":false,"airBnb":false,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-mixed-operators","eslint":false,"description":"disallow mixed binary operators","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-mixed-operators","options":{"groups":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2},"extra":{},"allowSamePrecedence":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"no-mixed-requires","eslint":false,"description":"disallow `require` calls to be mixed with regular variable declarations","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-mixed-requires","options":{"grouping":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"allowCall":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-mixed-spaces-and-tabs","eslint":true,"description":"disallow mixed spaces and tabs for indentation","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-mixed-spaces-and-tabs","options":{"smart-tabs":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"extra":{},"true":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"false":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-multi-assign","eslint":false,"description":"disallow use of chained assignment expressions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-multi-assign","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-multi-spaces","eslint":false,"description":"disallow multiple spaces","category":"Best Practices","url":"https://eslint.org/docs/rules/no-multi-spaces","fixable":"whitespace","options":{"exceptions":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"extra":{},"ignoreEOLComments":{"error":5,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-multi-str","eslint":false,"description":"disallow multiline strings","category":"Best Practices","url":"https://eslint.org/docs/rules/no-multi-str","options":{},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"no-multiple-empty-lines","eslint":false,"description":"disallow multiple empty lines","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-multiple-empty-lines","fixable":"whitespace","options":{"max":{"error":6,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"extra":{},"maxEOF":{"error":6,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"maxBOF":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"no-native-reassign","eslint":false,"description":"disallow assignments to native objects or read-only global variables","category":"Best Practices","url":"https://eslint.org/docs/rules/no-native-reassign","options":{"exceptions":{"error":2,"warn":0,"off":3,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-negated-condition","eslint":false,"description":"disallow negated conditions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-negated-condition","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-negated-in-lhs","eslint":false,"description":"disallow negating the left operand in `in` expressions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-negated-in-lhs","options":{},"google":false,"airBnb":false,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"no-nested-ternary","eslint":false,"description":"disallow nested ternary expressions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-nested-ternary","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-new-func","eslint":false,"description":"disallow `new` operators with the `Function` object","category":"Best Practices","url":"https://eslint.org/docs/rules/no-new-func","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-new-object","eslint":false,"description":"disallow `Object` constructors","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-new-object","options":{},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-new-require","eslint":false,"description":"disallow `new` operators with calls to `require`","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-new-require","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-new-symbol","eslint":true,"description":"disallow `new` operators with the `Symbol` object","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-new-symbol","options":{},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-new-wrappers","eslint":false,"description":"disallow `new` operators with the `String`, `Number`, and `Boolean` objects","category":"Best Practices","url":"https://eslint.org/docs/rules/no-new-wrappers","options":{},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"no-new","eslint":false,"description":"disallow `new` operators outside of assignments or comparisons","category":"Best Practices","url":"https://eslint.org/docs/rules/no-new","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-obj-calls","eslint":true,"description":"disallow calling global object properties as functions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-obj-calls","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-octal-escape","eslint":false,"description":"disallow octal escape sequences in string literals","category":"Best Practices","url":"https://eslint.org/docs/rules/no-octal-escape","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-octal","eslint":true,"description":"disallow octal literals","category":"Best Practices","url":"https://eslint.org/docs/rules/no-octal","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-param-reassign","eslint":false,"description":"disallow reassigning `function` parameters","category":"Best Practices","url":"https://eslint.org/docs/rules/no-param-reassign","options":{"props":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{},"ignorePropertyModificationsFor":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-path-concat","eslint":false,"description":"disallow string concatenation with `__dirname` and `__filename`","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-path-concat","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-plusplus","eslint":false,"description":"disallow the unary operators `++` and `--`","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-plusplus","options":{"allowForLoopAfterthoughts":{"error":1,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-process-env","eslint":false,"description":"disallow the use of `process.env`","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-process-env","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-process-exit","eslint":false,"description":"disallow the use of `process.exit()`","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-process-exit","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":1,"off":15},{"key":"no-proto","eslint":false,"description":"disallow the use of the `__proto__` property","category":"Best Practices","url":"https://eslint.org/docs/rules/no-proto","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-prototype-builtins","eslint":false,"description":"disallow calling some `Object.prototype` methods directly on objects","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-prototype-builtins","options":{},"google":false,"airBnb":false,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-redeclare","eslint":true,"description":"disallow variable redeclaration","category":"Best Practices","url":"https://eslint.org/docs/rules/no-redeclare","options":{"builtinGlobals":{"error":5,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-regex-spaces","eslint":true,"description":"disallow multiple spaces in regular expressions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-regex-spaces","fixable":"code","options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-restricted-globals","eslint":false,"description":"disallow specified global variables","category":"Variables","url":"https://eslint.org/docs/rules/no-restricted-globals","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-restricted-imports","eslint":false,"description":"disallow specified modules when loaded by `import`","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-restricted-imports","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-restricted-modules","eslint":false,"description":"disallow specified modules when loaded by `require`","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-restricted-modules","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-restricted-properties","eslint":false,"description":"disallow certain properties on certain objects","category":"Best Practices","url":"https://eslint.org/docs/rules/no-restricted-properties","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-restricted-syntax","eslint":false,"description":"disallow specified syntax","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-restricted-syntax","options":{"selector":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{},"message":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-return-assign","eslint":false,"description":"disallow assignment operators in `return` statements","category":"Best Practices","url":"https://eslint.org/docs/rules/no-return-assign","options":{"except-parens":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"extra":{},"always":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-return-await","eslint":false,"description":"disallow unnecessary `return await`","category":"Best Practices","url":"https://eslint.org/docs/rules/no-return-await","fixable":null,"options":{},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"no-script-url","eslint":false,"description":"disallow `javascript:` urls","category":"Best Practices","url":"https://eslint.org/docs/rules/no-script-url","options":{},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"no-self-assign","eslint":true,"description":"disallow assignments where both sides are exactly the same","category":"Best Practices","url":"https://eslint.org/docs/rules/no-self-assign","options":{"props":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-self-compare","eslint":false,"description":"disallow comparisons where both sides are exactly the same","category":"Best Practices","url":"https://eslint.org/docs/rules/no-self-compare","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-sequences","eslint":false,"description":"disallow comma operators","category":"Best Practices","url":"https://eslint.org/docs/rules/no-sequences","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-shadow-restricted-names","eslint":false,"description":"disallow identifiers from shadowing restricted names","category":"Variables","url":"https://eslint.org/docs/rules/no-shadow-restricted-names","options":{},"google":false,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-shadow","eslint":false,"description":"disallow variable declarations from shadowing variables declared in the outer scope","category":"Variables","url":"https://eslint.org/docs/rules/no-shadow","options":{"builtinGlobals":{"error":4,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":0},"extra":{},"hoist":{"error":4,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":0},"allow":{"error":4,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"no-spaced-func","eslint":false,"description":"disallow spacing between function identifiers and their applications (deprecated)","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-spaced-func","fixable":"whitespace","options":{},"google":false,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"no-sparse-arrays","eslint":true,"description":"disallow sparse arrays","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-sparse-arrays","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-sync","eslint":false,"description":"disallow synchronous methods","category":"Node.js and CommonJS","url":"https://eslint.org/docs/rules/no-sync","options":{"allowAtRootLevel":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-tabs","eslint":false,"description":"disallow all tabs","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-tabs","options":{},"google":true,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-template-curly-in-string","eslint":false,"description":"disallow template literal placeholder syntax in regular strings","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-template-curly-in-string","options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-ternary","eslint":false,"description":"disallow ternary operators","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-ternary","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-this-before-super","eslint":true,"description":"disallow `this`/`super` before calling `super()` in constructors","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-this-before-super","options":{},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"no-throw-literal","eslint":false,"description":"disallow throwing literals as exceptions","category":"Best Practices","url":"https://eslint.org/docs/rules/no-throw-literal","options":{},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"no-trailing-spaces","eslint":false,"description":"disallow trailing whitespace at the end of lines","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-trailing-spaces","fixable":"whitespace","options":{"skipBlankLines":{"error":7,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"extra":{},"ignoreComments":{"error":7,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":7,"warn":0,"off":9},{"key":"no-undef-init","eslint":false,"description":"disallow initializing variables to `undefined`","category":"Variables","url":"https://eslint.org/docs/rules/no-undef-init","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-undef","eslint":true,"description":"disallow the use of undeclared variables unless mentioned in `/*global */` comments","category":"Variables","url":"https://eslint.org/docs/rules/no-undef","options":{"typeof":{"error":6,"warn":0,"off":6,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"no-undefined","eslint":false,"description":"disallow the use of `undefined` as an identifier","category":"Variables","url":"https://eslint.org/docs/rules/no-undefined","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"no-underscore-dangle","eslint":false,"description":"disallow dangling underscores in identifiers","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-underscore-dangle","options":{"allow":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{},"allowAfterThis":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"allowAfterSuper":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"enforceInMethodNames":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"no-unexpected-multiline","eslint":true,"description":"disallow confusing multiline expressions","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-unexpected-multiline","options":{},"google":true,"airBnb":false,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"no-unmodified-loop-condition","eslint":false,"description":"disallow unmodified loop conditions","category":"Best Practices","url":"https://eslint.org/docs/rules/no-unmodified-loop-condition","options":{},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"no-unneeded-ternary","eslint":false,"description":"disallow ternary operators when simpler alternatives exist","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-unneeded-ternary","fixable":"code","options":{"defaultAssignment":{"error":4,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-unreachable","eslint":true,"description":"disallow unreachable code after `return`, `throw`, `continue`, and `break` statements","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-unreachable","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-unsafe-finally","eslint":true,"description":"disallow control flow statements in `finally` blocks","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-unsafe-finally","options":{},"google":false,"airBnb":false,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"no-unsafe-negation","eslint":true,"description":"disallow negating the left operand of relational operators","category":"Possible Errors","url":"https://eslint.org/docs/rules/no-unsafe-negation","fixable":"code","options":{},"google":false,"airBnb":false,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-unused-expressions","eslint":false,"description":"disallow unused expressions","category":"Best Practices","url":"https://eslint.org/docs/rules/no-unused-expressions","options":{"allowShortCircuit":{"error":4,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2},"extra":{},"allowTernary":{"error":4,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2},"allowTaggedTemplates":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-unused-labels","eslint":true,"description":"disallow unused labels","category":"Best Practices","url":"https://eslint.org/docs/rules/no-unused-labels","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-unused-vars","eslint":true,"description":"disallow unused variables","category":"Variables","url":"https://eslint.org/docs/rules/no-unused-vars","options":{"all":{"error":12,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"extra":{},"local":{"error":12,"warn":0,"off":10,"google":2,"airBnb":2,"standardJs":2},"vars":{"error":12,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"varsIgnorePattern":{"error":12,"warn":0,"off":12,"google":2,"airBnb":2,"standardJs":2},"args":{"error":12,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"ignoreRestSiblings":{"error":12,"warn":0,"off":8,"google":2,"airBnb":2,"standardJs":2},"argsIgnorePattern":{"error":12,"warn":0,"off":12,"google":2,"airBnb":2,"standardJs":2},"caughtErrors":{"error":12,"warn":0,"off":12,"google":2,"airBnb":2,"standardJs":2},"caughtErrorsIgnorePattern":{"error":12,"warn":0,"off":12,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":12,"warn":0,"off":4},{"key":"no-use-before-define","eslint":false,"description":"disallow the use of variables before they are defined","category":"Variables","url":"https://eslint.org/docs/rules/no-use-before-define","options":{"nofunc":{"error":4,"warn":0,"off":6,"google":0,"airBnb":2,"standardJs":2},"extra":{},"functions":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"classes":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":2},"variables":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-useless-call","eslint":false,"description":"disallow unnecessary calls to `.call()` and `.apply()`","category":"Best Practices","url":"https://eslint.org/docs/rules/no-useless-call","options":{},"google":false,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-useless-computed-key","eslint":false,"description":"disallow unnecessary computed property keys in object literals","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-useless-computed-key","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-useless-concat","eslint":false,"description":"disallow unnecessary concatenation of literals or template literals","category":"Best Practices","url":"https://eslint.org/docs/rules/no-useless-concat","options":{},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"no-useless-constructor","eslint":false,"description":"disallow unnecessary constructors","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-useless-constructor","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-useless-escape","eslint":true,"description":"disallow unnecessary escape characters","category":"Best Practices","url":"https://eslint.org/docs/rules/no-useless-escape","options":{},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-useless-rename","eslint":false,"description":"disallow renaming import, export, and destructured assignments to the same name","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-useless-rename","fixable":"code","options":{"ignoreDestructuring":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"extra":{},"ignoreImport":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"ignoreExport":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"no-useless-return","eslint":false,"description":"disallow redundant return statements","category":"Best Practices","url":"https://eslint.org/docs/rules/no-useless-return","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-var","eslint":false,"description":"require `let` or `const` instead of `var`","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/no-var","fixable":"code","options":{},"google":true,"airBnb":true,"standardJs":false,"error":8,"warn":0,"off":8},{"key":"no-void","eslint":false,"description":"disallow `void` operators","category":"Best Practices","url":"https://eslint.org/docs/rules/no-void","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"no-warning-comments","eslint":false,"description":"disallow specified warning terms in comments","category":"Best Practices","url":"https://eslint.org/docs/rules/no-warning-comments","options":{"terms":{"error":0,"warn":1,"off":2,"google":0,"airBnb":0,"standardJs":0},"extra":{},"location":{"error":0,"warn":1,"off":2,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":1,"off":15},{"key":"no-whitespace-before-property","eslint":false,"description":"disallow whitespace before properties","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/no-whitespace-before-property","fixable":"whitespace","options":{},"google":false,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"no-with","eslint":false,"description":"disallow `with` statements","category":"Best Practices","url":"https://eslint.org/docs/rules/no-with","options":{},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"nonblock-statement-body-position","eslint":false,"description":"enforce the location of single-line statements","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/nonblock-statement-body-position","fixable":"whitespace","options":{"beside":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"extra":{},"below":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"any":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"overrides":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"object-curly-newline","eslint":false,"description":"enforce consistent line breaks inside braces","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/object-curly-newline","fixable":"whitespace","options":{"always":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":1,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"multiline":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"minProperties":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"consistent":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"ObjectExpression":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"ObjectPattern":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"ImportDeclaration":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"ExportDeclaration":{"error":1,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"object-curly-spacing","eslint":false,"description":"enforce consistent spacing inside braces","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/object-curly-spacing","fixable":"whitespace","options":{"always":{"error":4,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"arraysInObjects":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"objectsInObjects":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"object-property-newline","eslint":false,"description":"enforce placing object properties on separate lines","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/object-property-newline","fixable":"whitespace","options":{"allowAllPropertiesOnSameLine":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"extra":{},"allowMultiplePropertiesPerLine":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"object-shorthand","eslint":false,"description":"require or disallow method and property shorthand syntax for object literals","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/object-shorthand","fixable":"code","options":{"always":{"error":9,"warn":0,"off":6,"google":0,"airBnb":2,"standardJs":0},"extra":{},"methods":{"error":9,"warn":0,"off":12,"google":0,"airBnb":2,"standardJs":0},"properties":{"error":6,"warn":0,"off":8,"google":0,"airBnb":2,"standardJs":0},"never":{"error":3,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0},"consistent":{"error":3,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0},"consistent-as-needed":{"error":3,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0},"avoidQuotes":{"error":6,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0},"ignoreConstructors":{"error":3,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"avoidExplicitReturnArrows":{"error":3,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"one-var-declaration-per-line","eslint":false,"description":"require or disallow newlines around variable declarations","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/one-var-declaration-per-line","fixable":"whitespace","options":{"always":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{},"initializations":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"one-var","eslint":false,"description":"enforce variables to be declared either together or separately in functions","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/one-var","fixable":"code","options":{"always":{"error":5,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":5,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"consecutive":{"error":5,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"separateRequires":{"error":5,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"var":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"let":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"const":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"initialized":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"uninitialized":{"error":5,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"operator-assignment","eslint":false,"description":"require or disallow assignment operator shorthand where possible","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/operator-assignment","fixable":"code","options":{"always":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":0},"extra":{},"never":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"operator-linebreak","eslint":false,"description":"enforce consistent linebreak style for operators","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/operator-linebreak","fixable":"code","options":{"after":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"extra":{},"before":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2},"none":{"error":2,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"null":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2},"overrides":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"padded-blocks","eslint":false,"description":"require or disallow padding within blocks","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/padded-blocks","fixable":"whitespace","options":{"always":{"error":5,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":5,"warn":0,"off":0,"google":2,"airBnb":2,"standardJs":2},"blocks":{"error":5,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"switches":{"error":5,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"classes":{"error":5,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"padding-line-between-statements","eslint":false,"description":"require or disallow padding lines between statements","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/padding-line-between-statements","fixable":"whitespace","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"prefer-arrow-callback","eslint":false,"description":"require using arrow functions for callbacks","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-arrow-callback","fixable":"code","options":{"allowNamedFunctions":{"error":4,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{},"allowUnboundThis":{"error":4,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"prefer-const","eslint":false,"description":"require `const` declarations for variables that are never reassigned after declared","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-const","fixable":"code","options":{"destructuring":{"error":5,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":0},"extra":{},"ignoreReadBeforeAssign":{"error":5,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":5,"warn":0,"off":11},{"key":"prefer-destructuring","eslint":false,"description":"require destructuring from arrays and/or objects","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-destructuring","options":{"VariableDeclarator":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"extra":{},"AssignmentExpression":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"array":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"object":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0},"enforceForRenamedProperties":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"prefer-numeric-literals","eslint":false,"description":"disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-numeric-literals","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"prefer-object-spread","eslint":false,"description":"disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/prefer-object-spread","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"prefer-promise-reject-errors","eslint":false,"description":"require using Error objects as Promise rejection reasons","category":"Best Practices","url":"https://eslint.org/docs/rules/prefer-promise-reject-errors","fixable":null,"options":{"allowEmptyReject":{"error":3,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"extra":{}},"google":true,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"prefer-reflect","eslint":false,"description":"require `Reflect` methods where applicable","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-reflect","options":{"exceptions":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"prefer-rest-params","eslint":false,"description":"require rest parameters instead of `arguments`","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-rest-params","options":{},"google":true,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"prefer-spread","eslint":false,"description":"require spread operators instead of `.apply()`","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-spread","fixable":"code","options":{},"google":true,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"prefer-template","eslint":false,"description":"require template literals instead of string concatenation","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/prefer-template","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"quote-props","eslint":false,"description":"require quotes around object literal property names","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/quote-props","fixable":"code","options":{"always":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":0},"extra":{},"as-needed":{"error":6,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":0},"consistent":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":0},"consistent-as-needed":{"error":6,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":0},"keywords":{"error":3,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":0},"unnecessary":{"error":3,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":0},"numbers":{"error":3,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"quotes","eslint":false,"description":"enforce the consistent use of either backticks, double, or single quotes","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/quotes","fixable":"code","options":{"single":{"error":7,"warn":0,"off":0,"google":2,"airBnb":2,"standardJs":2},"extra":{},"double":{"error":7,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"backtick":{"error":7,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"avoid-escape":{"error":7,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"avoidEscape":{"error":7,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"allowTemplateLiterals":{"error":7,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":7,"warn":0,"off":9},{"key":"radix","eslint":false,"description":"enforce the consistent use of the radix argument when using `parseInt()`","category":"Best Practices","url":"https://eslint.org/docs/rules/radix","options":{"always":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0},"extra":{},"as-needed":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":4,"warn":0,"off":12},{"key":"require-atomic-updates","eslint":false,"description":"disallow assignments that can lead to race conditions due to usage of `await` or `yield`","category":"Possible Errors","url":"https://eslint.org/docs/rules/require-atomic-updates","fixable":null,"options":{},"google":false,"airBnb":false,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"require-await","eslint":false,"description":"disallow async functions which have no `await` expression","category":"Best Practices","url":"https://eslint.org/docs/rules/require-await","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"require-jsdoc","eslint":false,"description":"require JSDoc comments","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/require-jsdoc","options":{"require":{"error":1,"warn":0,"off":1,"google":2,"airBnb":0,"standardJs":0},"extra":{}},"google":true,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"require-unicode-regexp","eslint":false,"description":"enforce the use of `u` flag on RegExp","category":"Best Practices","url":"https://eslint.org/docs/rules/require-unicode-regexp","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"require-yield","eslint":true,"description":"require generator functions to contain `yield`","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/require-yield","options":{},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"rest-spread-spacing","eslint":false,"description":"enforce spacing between rest and spread operators and their expressions","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/rest-spread-spacing","fixable":"whitespace","options":{"always":{"error":4,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":4,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"semi-spacing","eslint":false,"description":"enforce consistent spacing before and after semicolons","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/semi-spacing","fixable":"whitespace","options":{"before":{"error":5,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"extra":{},"after":{"error":5,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":5,"warn":0,"off":11},{"key":"semi-style","eslint":false,"description":"enforce location of semicolons","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/semi-style","fixable":"whitespace","options":{"last":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":0},"extra":{},"first":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"semi","eslint":false,"description":"require or disallow semicolons instead of ASI","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/semi","fixable":"code","options":{"never":{"error":8,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2},"extra":{"name":"Semi vs. No-semi","values":{"always":5,"never":2}},"beforeStatementContinuationChars":{"error":8,"warn":0,"off":8,"google":2,"airBnb":2,"standardJs":2},"always":{"error":8,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"omitLastInOneLineBlock":{"error":8,"warn":0,"off":8,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":8,"warn":0,"off":8},{"key":"sort-imports","eslint":false,"description":"enforce sorted import declarations within modules","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/sort-imports","fixable":"code","options":{"ignoreCase":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"memberSyntaxSortOrder":{"error":1,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"ignoreMemberSort":{"error":1,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"sort-keys","eslint":false,"description":"require object keys to be sorted","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/sort-keys","options":{"asc":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{},"desc":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"caseSensitive":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"natural":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"sort-vars","eslint":false,"description":"require variables within the same declaration block to be sorted","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/sort-vars","fixable":"code","options":{"ignoreCase":{"error":0,"warn":0,"off":1,"google":0,"airBnb":0,"standardJs":0},"extra":{}},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"space-before-blocks","eslint":false,"description":"enforce consistent spacing before blocks","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/space-before-blocks","fixable":"whitespace","options":{"always":{"error":7,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":7,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"keywords":{"error":7,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"functions":{"error":7,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"classes":{"error":7,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":7,"warn":0,"off":9},{"key":"space-before-function-paren","eslint":false,"description":"enforce consistent spacing before `function` definition opening parenthesis","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/space-before-function-paren","fixable":"whitespace","options":{"always":{"error":8,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":8,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"anonymous":{"error":8,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"named":{"error":8,"warn":0,"off":5,"google":2,"airBnb":2,"standardJs":2},"asyncArrow":{"error":8,"warn":0,"off":6,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":8,"warn":0,"off":8},{"key":"space-in-parens","eslint":false,"description":"enforce consistent spacing inside parentheses","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/space-in-parens","fixable":"whitespace","options":{"always":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":4,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"exceptions":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"space-infix-ops","eslint":false,"description":"require spacing around infix operators","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/space-infix-ops","fixable":"whitespace","options":{"int32Hint":{"error":4,"warn":0,"off":4,"google":0,"airBnb":2,"standardJs":2},"extra":{}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"space-unary-ops","eslint":false,"description":"enforce consistent spacing before or after unary operators","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/space-unary-ops","fixable":"whitespace","options":{"words":{"error":4,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"extra":{},"nonwords":{"error":4,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"overrides":{"error":4,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"spaced-comment","eslint":false,"description":"enforce consistent spacing after the `//` or `/*` in a comment","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/spaced-comment","fixable":"whitespace","options":{"always":{"error":6,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":6,"warn":0,"off":7,"google":2,"airBnb":2,"standardJs":2},"exceptions":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"markers":{"error":6,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"line":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2},"block":{"error":6,"warn":0,"off":4,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10},{"key":"strict","eslint":false,"description":"require or disallow strict mode directives","category":"Strict Mode","url":"https://eslint.org/docs/rules/strict","fixable":"code","options":{"never":{"error":5,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":0},"extra":{},"global":{"error":5,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":0},"function":{"error":5,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":0},"safe":{"error":5,"warn":0,"off":5,"google":0,"airBnb":2,"standardJs":0}},"google":false,"airBnb":true,"standardJs":false,"error":5,"warn":0,"off":11},{"key":"switch-colon-spacing","eslint":false,"description":"enforce spacing around colons of switch statements","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/switch-colon-spacing","fixable":"whitespace","options":{"before":{"error":3,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":0},"extra":{},"after":{"error":3,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":0}},"google":true,"airBnb":true,"standardJs":false,"error":3,"warn":0,"off":13},{"key":"symbol-description","eslint":false,"description":"require symbol descriptions","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/symbol-description","options":{},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"template-curly-spacing","eslint":false,"description":"require or disallow spacing around embedded expressions of template strings","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/template-curly-spacing","fixable":"whitespace","options":{"always":{"error":4,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":4,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"template-tag-spacing","eslint":false,"description":"require or disallow spacing between template tags and their literals","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/template-tag-spacing","fixable":"whitespace","options":{"always":{"error":2,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":2,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":2,"warn":0,"off":14},{"key":"unicode-bom","eslint":false,"description":"require or disallow Unicode byte order mark (BOM)","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/unicode-bom","fixable":"whitespace","options":{"always":{"error":3,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":3,"warn":0,"off":0,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"use-isnan","eslint":true,"description":"require calls to `isNaN()` when checking for `NaN`","category":"Possible Errors","url":"https://eslint.org/docs/rules/use-isnan","options":{},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"valid-jsdoc","eslint":false,"description":"enforce valid JSDoc comments","category":"Possible Errors","url":"https://eslint.org/docs/rules/valid-jsdoc","fixable":"code","options":{"prefer":{"error":2,"warn":0,"off":0,"google":2,"airBnb":0,"standardJs":0},"extra":{},"preferType":{"error":2,"warn":0,"off":1,"google":2,"airBnb":0,"standardJs":0},"requireReturn":{"error":2,"warn":0,"off":0,"google":2,"airBnb":0,"standardJs":0},"requireParamDescription":{"error":2,"warn":0,"off":1,"google":2,"airBnb":0,"standardJs":0},"requireReturnDescription":{"error":2,"warn":0,"off":1,"google":2,"airBnb":0,"standardJs":0},"matchDescription":{"error":2,"warn":0,"off":2,"google":2,"airBnb":0,"standardJs":0},"requireReturnType":{"error":2,"warn":0,"off":1,"google":2,"airBnb":0,"standardJs":0},"requireParamType":{"error":2,"warn":0,"off":2,"google":2,"airBnb":0,"standardJs":0}},"google":true,"airBnb":false,"standardJs":false,"error":2,"warn":0,"off":14},{"key":"valid-typeof","eslint":true,"description":"enforce comparing `typeof` expressions against valid strings","category":"Possible Errors","url":"https://eslint.org/docs/rules/valid-typeof","options":{"requireStringLiterals":{"error":4,"warn":0,"off":2,"google":0,"airBnb":0,"standardJs":2},"extra":{}},"google":false,"airBnb":false,"standardJs":true,"error":4,"warn":0,"off":12},{"key":"vars-on-top","eslint":false,"description":"require `var` declarations be placed at the top of their containing scope","category":"Best Practices","url":"https://eslint.org/docs/rules/vars-on-top","options":{},"google":false,"airBnb":true,"standardJs":false,"error":1,"warn":0,"off":15},{"key":"wrap-iife","eslint":false,"description":"require parentheses around immediate `function` invocations","category":"Best Practices","url":"https://eslint.org/docs/rules/wrap-iife","fixable":"code","options":{"outside":{"error":3,"warn":0,"off":2,"google":0,"airBnb":2,"standardJs":2},"extra":{},"inside":{"error":3,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"any":{"error":3,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2},"functionPrototypeMethods":{"error":3,"warn":0,"off":1,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"wrap-regex","eslint":false,"description":"require parenthesis around regex literals","category":"Stylistic Issues","url":"https://eslint.org/docs/rules/wrap-regex","fixable":"code","options":{},"google":false,"airBnb":true,"standardJs":false,"error":0,"warn":0,"off":16},{"key":"yield-star-spacing","eslint":false,"description":"require or disallow spacing around the `*` in `yield*` expressions","category":"ECMAScript 6","url":"https://eslint.org/docs/rules/yield-star-spacing","fixable":"whitespace","options":{"before":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2},"extra":{},"after":{"error":3,"warn":0,"off":1,"google":2,"airBnb":2,"standardJs":2},"both":{"error":3,"warn":0,"off":2,"google":2,"airBnb":2,"standardJs":2},"neither":{"error":3,"warn":0,"off":3,"google":2,"airBnb":2,"standardJs":2}},"google":true,"airBnb":true,"standardJs":true,"error":3,"warn":0,"off":13},{"key":"yoda","eslint":false,"description":"require or disallow \"Yoda\" conditions","category":"Best Practices","url":"https://eslint.org/docs/rules/yoda","fixable":"code","options":{"always":{"error":6,"warn":0,"off":6,"google":0,"airBnb":2,"standardJs":2},"extra":{},"never":{"error":6,"warn":0,"off":3,"google":0,"airBnb":2,"standardJs":2},"exceptRange":{"error":6,"warn":0,"off":6,"google":0,"airBnb":2,"standardJs":2},"onlyEquality":{"error":6,"warn":0,"off":6,"google":0,"airBnb":2,"standardJs":2}},"google":false,"airBnb":true,"standardJs":true,"error":6,"warn":0,"off":10}];

/***/ }),

/***/ "./ui/Anchor.js":
/*!**********************!*\
  !*** ./ui/Anchor.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/Jarvis/projects/poplint/ui/Anchor.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  a {\n    text-decoration: ", ";\n    font-size: ", ";\n    color: ", ";\n    cursor:  ", ";\n    display: ", ";\n    padding: ", ";\n    margin: ", ";\n    border-radius: ", ";\n    transition: .1s;\n\n    &:hover {\n      text-decoration: none;\n      color: ", " !important;\n      background-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var AnchorSpan = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.span(_templateObject(), function (props) {
  return (props.href || props.link) && 'underline';
}, function (props) {
  return props.font ? props.theme.font[props.font] : 'inherit';
}, function (props) {
  return props.theme.color[props.colored ? 'primary' : 'inherit'];
}, function (props) {
  return (props.href || props.link) && 'pointer';
}, function (props) {
  return props.button && 'table';
}, function (props) {
  return props.button && '12px 20px';
}, function (props) {
  return props.button && '0 auto';
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.color[props.href || props.link ? 'primary' : 'black'];
}, function (props) {
  return props.button && 'rgba(0,0,0,0.05)';
});

var Anchor = function Anchor(_ref) {
  var href = _ref.href,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["href", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AnchorSpan, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: href || '#',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children)));
};

Anchor.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Anchor);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/Users/Jarvis/projects/poplint/ui/Badge.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 18px;\n  height: 18px;\n  margin: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  background-image: url('../static/guides.png');\n  background-size: 400%;\n  background-position-x: ", ";\n  background-position-y: ", ";\n  position: relative;\n  opacity: ", ";\n  transition: opacity .1s;\n\n  &:after {\n    content: ", ";\n    opacity: ", ";\n    transition: .1s;\n    display: block;\n    bottom: ", ";\n    line-height: 16px;\n    position: absolute;\n    width: 100px;\n    text-align: ", ";\n    transform: ", ";\n    left: ", ";\n    pointer-events: none;\n    height: ", ";\n    white-space: nowrap;\n    font-size: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-position-y: -18px;\n    opacity: 1;\n\n    &:after {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BadgeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject(), function (props) {
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

/***/ }),

/***/ "./ui/Bar.js":
/*!*******************!*\
  !*** ./ui/Bar.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 40px;\n  position: relative;\n  min-height: 3px;\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  background-color: ", ";\n  height: ", ";\n\n  &:before {\n    content: ", ";\n    display: block;\n    position: absolute;\n    color: ", ";\n    left: 50%;\n    transform: translateX(-50%);\n    top: -25px;\n    white-space: nowrap;\n  }\n\n  &:after {\n    content: ", ";\n    display: block;\n    position: absolute;\n    color: ", ";\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: -25px;\n    white-space: nowrap;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-bottom: ", ";\n  height: 200px;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  padding: 50px 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.theme.fn.border();
});
Bar.Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.color;
}, function (props) {
  return "".concat(props.value, "%");
}, function (props) {
  return "\"".concat(props.value, "%\"");
}, function (props) {
  return props.theme.color.darkGrey;
}, function (props) {
  return "\"".concat(props.label, "\"");
}, function (props) {
  return props.theme.color.darkGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "./ui/Button.js":
/*!**********************!*\
  !*** ./ui/Button.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  appearance: none;\n  background-color: ", ";\n  border-radius: ", ";\n  border: 0;\n  outline: 0;\n  color: #FFF;\n  line-height: 48px;\n  padding: 0 ", ";\n  font-size: ", ";\n  margin-bottom: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    background-color: rgba(0,0,0,0.1);\n    transform: scale(0) translate(-50%, -50%);\n    transition: transform .2s linear, opacity .2s linear;\n    transform-origin: top left;\n    z-index: -1;\n    opacity: 0;\n  }\n\n  &:hover {\n    &:before {\n      opacity: 1;\n      transform: scale(1) translate(-50%, -50%);\n    }\n  }\n  &:active {\n    &:before {\n      background-color: rgba(0,0,0,0.2);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject(), function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.fn.spacing(4);
}, function (props) {
  return props.theme.font.regular;
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./ui/Division.js":
/*!************************!*\
  !*** ./ui/Division.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

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




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (props) {
  return props.theme.fn.spacing(2);
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return !!props.nada && props.theme.color.lightGrey;
});
var Unit = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), function (props) {
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

/***/ }),

/***/ "./ui/FooterBar.js":
/*!*************************!*\
  !*** ./ui/FooterBar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 120px;\n  background: rgba(0,0,0,0.04);\n  padding: 40px 0;\n  border-bottom: 20px solid rgba(0,0,0,0.04);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FooterBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (FooterBar);

/***/ }),

/***/ "./ui/List.js":
/*!********************!*\
  !*** ./ui/List.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: ", ";\n  border-radius: ", ";\n  background-color: #FFF;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.theme.fn.border();
}, function (props) {
  return props.theme.borderRadius;
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./ui/ListItem.js":
/*!************************!*\
  !*** ./ui/ListItem.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: ", ";\n  transform: ", ";\n  opacity: ", ";\n  transition: .2s ease-out;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: ", ";\n  overflow: hidden;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  padding: 12px 0;\n\n  h2 {\n    line-height: ", ";\n  }\n  h3 {\n    line-height: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: ", ";\n  border-right: ", ";\n  border-bottom: ", ";\n  border-bottom-right-radius: ", ";\n  line-height: 14px;\n  padding: 0 6px;\n  color: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  padding: ", ";\n  line-height: 3.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n\n  &:after {\n    content: \"\";\n    display: block;\n    border-bottom: ", ";\n    bottom: -1px;\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: sans-serif;\n  border-bottom: ", ";\n  transition: .1s;\n\n  &:hover {\n    background: linear-gradient(to right,  rgba(242,242,242,0.65) 0%,rgba(0,0,0,0) 100%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.theme.fn.border();
});
ListItem.Head = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {
  return "0 ".concat(props.theme.fn.spacing(3));
}, function (props) {
  return props.theme.fn.border(props.theme.color.lightGrey);
});
ListItem.Rank = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (props) {
  return props.theme.font.tiny;
}, function (props) {
  return props.theme.fn.border();
}, function (props) {
  return props.theme.fn.border();
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.color.grey;
});
ListItem.HeadItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), function (props) {
  return !!props.end && 'flex-end';
}, function (props) {
  return props.theme.font.jumbo;
}, function (props) {
  return props.theme.font.small;
});
ListItem.Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), function (props) {
  return props.open ? 'auto' : 0;
});
ListItem.Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6(), function (props) {
  return "".concat(props.theme.fn.spacing(2), " ").concat(props.theme.fn.spacing(3));
}, function (props) {
  return props.open ? 'translateY(0)' : 'translateY(-10px)';
}, function (props) {
  return props.open ? 1 : 0;
});
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./ui/Loader.js":
/*!**********************!*\
  !*** ./ui/Loader.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n  display: block;\n  animation: ", ";\n  border-top: 7px solid transparent;\n  border-right: 7px solid ", ";\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid ", ";\n  border-radius: 50%;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["", " 3s linear infinite"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var spin = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());

var animation = function animation(props) {
  if (!props.spin) {
    return;
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), spin);
};

var Loader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), animation, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.color.primary;
});
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./ui/Logo.js":
/*!********************!*\
  !*** ./ui/Logo.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Jarvis/projects/poplint/ui/Logo.js";




var Logo = function Logo(_ref) {
  var small = _ref.small;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/poplint.svg",
    alt: "popLint",
    style: {
      margin: '40px auto 20px',
      display: 'table',
      maxWidth: '70vw',
      cursor: 'pointer',
      height: small ? 40 : 80
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

Logo.propTypes = {
  small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./ui/OptionRow.js":
/*!*************************!*\
  !*** ./ui/OptionRow.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var OptionRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (OptionRow);

/***/ }),

/***/ "./ui/Popup.js":
/*!*********************!*\
  !*** ./ui/Popup.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50px;\n  border-left: ", ";\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  font-size: ", ";\n  cursor: pointer;\n  transition: .2s;\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 0 0 ", ";\n  border-bottom: ", ";\n  height: 50px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transform:scale(.8) translateY(-1000px);\n  opacity:0;\n  box-sizing: border-box;\n  background: #FFF;\n  width: 400px;\n  position: relative;\n  display:inline-block;\n  z-index: 1;\n  text-align: left;\n  border-radius: ", ";\n  top: 30%;\n  animation: ", " .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;\n  overflow: hidden;\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    transform:scale(.8) translateY(-250%);\n    opacity:0;\n  }\n  100% {\n    transform:scale(1) translateY(-30%);\n    opacity:1;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height:100%;\n  width:100%;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(0,0,0,.7);\n  animation: ", " 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    opacity: 0\n  }\n  100% {\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  z-index: 9;\n  height:100%;\n  width:100%;\n  left: 0;\n  right: 0;\n  overflow: scroll;\n  display:table-cell;\n  text-align:center;\n  vertical-align:middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Popup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject2());
Popup.Curtain = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), fadeIn);
var scaleUp = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject4());
Popup.Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), function (props) {
  return props.theme.borderRadius;
}, scaleUp, function (_ref) {
  var theme = _ref.theme;
  return theme.media.tablet(_templateObject6());
});
Popup.Head = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7(), function (props) {
  return props.theme.fn.spacing(4);
}, function (props) {
  return props.theme.fn.border();
});
Popup.Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject8(), function (props) {
  return props.theme.fn.spacing(4);
});
Popup.Close = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject9(), function (props) {
  return props.theme.fn.border();
}, function (props) {
  return props.theme.font.large;
}, function (props) {
  return props.theme.color.lightGrey;
});
/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./ui/Table.js":
/*!*********************!*\
  !*** ./ui/Table.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: right;\n  color: ", ";\n  font-size: ", ";\n  padding: ", " ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: ", ";\n  font-size: ", ";\n  border-bottom: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  &:first-of-type {\n    color: ", ";\n    font-weight: ", ";\n    padding-left: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: 500;\n  font-size: ", ";\n  border-bottom: ", ";\n  padding: ", ";\n  color: ", ";\n  transition: .1s;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 85px;\n\n  &:first-of-type {\n    padding-left: ", ";\n    max-width: 25%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: left;\n\n  &:hover td {\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: ", ";\n  margin: 20px auto 35px;\n  border-radius: ", ";\n  background-color: #FFF;\n  color: ", ";\n  overflow: ", ";\n  display: grid;\n  max-width: 100%;\n\n  table {\n    border-spacing: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.theme.fn.border();
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.color.darkGrey;
}, function (props) {
  return props.overflow ? 'scroll' : 'hidden';
});
Table.Tr = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tr(_templateObject2(), function (props) {
  return props.theme.color.lightGrey;
});
Table.Th = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.th(_templateObject3(), function (props) {
  return props.theme.font.regular;
}, function (props) {
  return props.theme.fn.border();
}, function (props) {
  return props.theme.fn.spacing();
}, function (props) {
  return props.theme.color.black;
}, function (props) {
  return props.theme.fn.spacing(2);
});
Table.Td = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.td(_templateObject4(), function (props) {
  return props.theme.fn.spacing();
}, function (props) {
  return props.theme.font.small;
}, function (props) {
  return props.theme.fn.border('lightGrey');
}, function (props) {
  return props.horizontal && props.theme.color.black;
}, function (props) {
  return props.horizontal && 500;
}, function (props) {
  return props.theme.fn.spacing(2);
});
Table.Source = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), function (props) {
  return props.theme.color.grey;
}, function (props) {
  return props.theme.font.tiny;
}, function (props) {
  return props.theme.fn.spacing();
}, function (props) {
  return props.theme.fn.spacing(2);
});
/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);



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




var Header1 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h1(_templateObject(), function (props) {
  return props.theme.color[props.color || 'darkGrey'];
}, function (props) {
  return props.theme.font[props.font || 'jumbo'];
}, function (props) {
  return props.margin && props.theme.fn.spacing(4);
}, function (props) {
  return props.align;
});
var Header2 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h2(_templateObject2(), function (props) {
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
var Header3 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h3(_templateObject3(), function (props) {
  return props.theme.color[props.color || 'grey'];
}, function (props) {
  return props.theme.font[props.font || 'tiny'];
}, function (props) {
  return props.margin && props.theme.fn.spacing(2);
}, function (props) {
  return props.align;
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p(_templateObject4(), function (props) {
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

/***/ }),

/***/ "./ui/index.js":
/*!*********************!*\
  !*** ./ui/index.js ***!
  \*********************/
/*! exports provided: Text, Anchor, List, ListItem, Division, Popup, OptionRow, Badge, Button, Loader, Logo, Table, Bar, FooterBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./ui/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Anchor */ "./ui/Anchor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return _Anchor__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ "./ui/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItem */ "./ui/ListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Division__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Division */ "./ui/Division.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Division", function() { return _Division__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup */ "./ui/Popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _OptionRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptionRow */ "./ui/OptionRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionRow", function() { return _OptionRow__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Badge */ "./ui/Badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./ui/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loader */ "./ui/Loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Logo */ "./ui/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table */ "./ui/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Bar */ "./ui/Bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _Bar__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _FooterBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FooterBar */ "./ui/FooterBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterBar", function() { return _FooterBar__WEBPACK_IMPORTED_MODULE_13__["default"]; });

// UI components















/***/ }),

/***/ "./utils/eslintRules.js":
/*!******************************!*\
  !*** ./utils/eslintRules.js ***!
  \******************************/
/*! exports provided: RulesProvider, useRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesProvider", function() { return RulesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRules", function() { return useRules; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_output_guides_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/output/guides.json */ "./scripts/output/guides.json");
var _scripts_output_guides_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../scripts/output/guides.json */ "./scripts/output/guides.json", 1);

var _jsxFileName = "/Users/Jarvis/projects/poplint/utils/eslintRules.js";



var RulesContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var RulesProvider = function RulesProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_scripts_output_guides_json__WEBPACK_IMPORTED_MODULE_3__),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      rules = _useState2[0],
      setRules = _useState2[1];

  var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      rules: rules,
      setRules: setRules
    };
  }, [rules]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RulesContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
};
RulesProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
var useRules = function useRules() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(RulesContext);
};

/***/ }),

/***/ "./utils/grid.js":
/*!***********************!*\
  !*** ./utils/grid.js ***!
  \***********************/
/*! exports provided: Grid, Row, Col, Center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/Jarvis/projects/poplint/utils/grid.js";



var Grid = function Grid(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_4__["Container"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), children);
};
Grid.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
var Row = function Row(_ref2) {
  var children = _ref2.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_4__["Row"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), children);
};
Row.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
var Col = function Col(_ref3) {
  var children = _ref3.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_4__["Col"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), children);
};
Col.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
var Center = function Center(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: '100%',
      maxWidth: '565px',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children);
};
Center.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./utils/hooks.js":
/*!************************!*\
  !*** ./utils/hooks.js ***!
  \************************/
/*! exports provided: useIntersectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIntersectionObserver", function() { return useIntersectionObserver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIntersectionObserver = function useIntersectionObserver(_ref) {
  var onIntersect = _ref.onIntersect,
      root = _ref.root,
      target = _ref.target,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 1.0 : _ref$threshold,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? '0px' : _ref$rootMargin;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!target) {
      return;
    }

    var observer = new IntersectionObserver(onIntersect, {
      root: root ? root.current : null,
      rootMargin: rootMargin,
      threshold: threshold
    });
    observer.observe(target.current);
    return function () {
      observer.unobserve(target.current);
    };
  });
};

/***/ }),

/***/ "./utils/portal.js":
/*!*************************!*\
  !*** ./utils/portal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Portal to use for modals
 * Currently a class, because react doesn't support
 * a hook for portals yet (16.8.6)
 */

var Portal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Portal, _Component);

  function Portal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Portal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Portal).call(this, props));
    var windowExists = typeof window !== 'undefined';
    _this.modalRoot = windowExists ? document.getElementById('modal-root') : null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Portal, [{
    key: "render",
    value: function render() {
      if (!this.modalRoot) {
        return null;
      }

      var children = this.props.children;
      var modal = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, children);
      return react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.createPortal(modal, this.modalRoot);
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Portal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/ranking.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jarvis/projects/poplint/pages/ranking.js */"./pages/ranking.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=ranking.js.map