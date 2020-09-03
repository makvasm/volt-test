(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Table; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRow */ \"./src/components/TableRow.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\nfunction Table(_ref) {\n  var cols = _ref.cols,\n      rows = _ref.rows,\n      config = _ref.config,\n      _ref$canEdit = _ref.canEdit,\n      canEdit = _ref$canEdit === void 0 ? false : _ref$canEdit;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    striped: true,\n    bordered: true,\n    hover: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, cols.map(function (col, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n      key: index\n    }, col);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, rows.map(function (row, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      obj: row,\n      key: index,\n      config: config,\n      canEdit: canEdit\n    });\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/Table.js?");

/***/ }),

/***/ "./src/components/TableRow.js":
/*!************************************!*\
  !*** ./src/components/TableRow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TableRow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nfunction TableRow(_ref) {\n  var obj = _ref.obj,\n      config = _ref.config,\n      canEdit = _ref.canEdit;\n  if (_typeof(obj) !== \"object\") return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    \"data-id\": obj.id\n  }, _utils__WEBPACK_IMPORTED_MODULE_1__[\"fields\"][config].map(function (field, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      key: index\n    }, obj[field.input_name]);\n  }), canEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\".concat(config, \"/\").concat(obj.id, \"/edit\")\n  }, \"Edit\")) : null);\n}\n\n//# sourceURL=webpack:///./src/components/TableRow.js?");

/***/ }),

/***/ "./src/components/products/ProductPage.js":
/*!************************************************!*\
  !*** ./src/components/products/ProductPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Table */ \"./src/components/Table.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction ProductPage() {\n  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useParams\"])(),\n      id = _useParams.product_id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      productInfo = _useState2[0],\n      setInfo = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"GET\"])(\"/api/products/\".concat(id)).then(function (data) {\n      return setInfo(data);\n    });\n  }, []);\n  if (!productInfo) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    cols: [\"Name\", \"Price\"],\n    config: \"products\",\n    rows: [productInfo]\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/products/ProductPage.js?");

/***/ })

}]);