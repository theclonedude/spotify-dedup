webpackHotUpdate_N_E("pages/stats",{

/***/ "./pages/stats/index.js":
/*!******************************!*\
  !*** ./pages/stats/index.js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stats; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/main */ \"./layouts/main.tsx\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/head */ \"./components/head.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartkick */ \"./node_modules/react-chartkick/dist/react-chartkick.esm.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! victory */ \"./node_modules/victory/es/index.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\nvar _jsxFileName = \"/Users/jmperez/github/spotify-dedup/pages/stats/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction MyChart(_ref) {\n  var data = _ref.data;\n  console.log(data);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_4__[\"LineChart\"], {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), __jsx(victory__WEBPACK_IMPORTED_MODULE_6__[\"VictoryChart\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(victory__WEBPACK_IMPORTED_MODULE_6__[\"VictoryAxis\"], {\n    fixLabelOverlap: true,\n    style: {\n      tickLabels: {\n        padding: 10,\n        fontSize: 12\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(victory__WEBPACK_IMPORTED_MODULE_6__[\"VictoryAxis\"], {\n    dependentAxis: true,\n    style: {\n      tickLabels: {\n        padding: 10,\n        fontSize: 12\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(victory__WEBPACK_IMPORTED_MODULE_6__[\"VictoryLine\"], {\n    style: {\n      data: {\n        stroke: '#c43a31'\n      },\n      parent: {\n        border: '1px solid #ccc'\n      }\n    },\n    data: data,\n    x: \"name\",\n    y: \"value\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  })));\n}\n\n_c = MyChart;\n\nvar trimRightZeros = function trimRightZeros(array, fn) {\n  if (array === null) return array;\n  var index = array.length - 1;\n  var skipped = 0;\n\n  while (index >= 0) {\n    if (fn(array[index]) !== 0) {\n      if (skipped === 0) return array;\n      return array.slice(0, -skipped);\n    }\n\n    skipped++;\n    index--;\n  }\n\n  return [];\n};\n\nvar __N_SSG = true;\nfunction Stats(_ref2) {\n  var data = _ref2.data;\n  var maus = trimRightZeros(data.mau, function (item) {\n    return item.number_of_maus;\n  });\n  var daus = trimRightZeros(data.dau, function (item) {\n    return item.number_of_daus;\n  });\n  var total_requests = trimRightZeros(data.total_requests, function (item) {\n    return item.number_of_requests;\n  });\n  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"Stats for Spotify Dedup\"), __jsx(\"meta\", {\n    name: \"og:title\",\n    content: \"Stats for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:title\",\n    content: \"Stats for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Monthly Active Users, Daily Active Users, Number of Requests for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"og:description\",\n    content: \"Monthly Active Users, Daily Active Users, Number of Requests for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:description\",\n    content: \"Monthly Active Users, Daily Active Users, Number of Requests for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }), data === null ? null : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, \"Stats about Spotify Dedup\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, \"This page lists shows open data about Spotify Dedup. The metrics are gathered using \", ' ', __jsx(\"a\", {\n    href: \"https://github.com/JMPerez/spotify-app-stats\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, \"spotify-app-stats\"), \", a npm package to read data from a Spotify app in Spotify's developer site dashboard.\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Monthly Active Users (MAU)\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, \"The most recent value for MAU is\", ' ', __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, Intl.NumberFormat('en-US').format(maus[maus.length - 1].number_of_maus)), ' ', \"users\"), __jsx(MyChart, {\n    data: maus.map(function (a) {\n      return {\n        name: a.date,\n        value: a.number_of_maus\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, \"Daily Active Users (DAU)\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"This chart shows how many users are logging in on Spotify Dedup with their Spotify accounts every day. The most recent value for DAU is\", ' ', __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  }, Intl.NumberFormat('en-US').format(daus[daus.length - 1].number_of_daus)), \".\"), __jsx(MyChart, {\n    data: daus.map(function (a) {\n      return {\n        name: a.date,\n        value: a.number_of_daus\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  }, \"Number of Requests\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }\n  }, \"This chart shows how many requests to the Spotify Web API are made to read the list of playlists ans saved songs, get the list of songs in a playlist, and remove duplicates. The most recent value is\", ' ', __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 13\n    }\n  }, Intl.NumberFormat('en-US').format(total_requests[total_requests.length - 1].number_of_requests)), \".\"), __jsx(MyChart, {\n    data: total_requests.map(function (a) {\n      return {\n        name: a.date,\n        value: a.number_of_requests\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  }))));\n}\n_c2 = Stats;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyChart\");\n$RefreshReg$(_c2, \"Stats\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RhdHMvaW5kZXguanM/YmViOCJdLCJuYW1lcyI6WyJNeUNoYXJ0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0aWNrTGFiZWxzIiwicGFkZGluZyIsImZvbnRTaXplIiwic3Ryb2tlIiwicGFyZW50IiwiYm9yZGVyIiwidHJpbVJpZ2h0WmVyb3MiLCJhcnJheSIsImZuIiwiaW5kZXgiLCJsZW5ndGgiLCJza2lwcGVkIiwic2xpY2UiLCJTdGF0cyIsIm1hdXMiLCJtYXUiLCJpdGVtIiwibnVtYmVyX29mX21hdXMiLCJkYXVzIiwiZGF1IiwibnVtYmVyX29mX2RhdXMiLCJ0b3RhbF9yZXF1ZXN0cyIsIm51bWJlcl9vZl9yZXF1ZXN0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJtYXAiLCJhIiwibmFtZSIsImRhdGUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxTQUFTQSxPQUFULE9BQTJCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBVyxRQUFJLEVBQUVBLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVBLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSxtQkFBZSxNQURqQjtBQUVFLFNBQUssRUFBRTtBQUFFRyxnQkFBVSxFQUFFO0FBQUVDLGVBQU8sRUFBRSxFQUFYO0FBQWVDLGdCQUFRLEVBQUU7QUFBekI7QUFBZCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtF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SUFEdUI7QUFFL0JDLGFBQUssRUFBRUgsQ0FBQyxDQUFDTDtBQUZzQixPQUFSO0FBQUEsS0FBbkIsQ0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0NGLENBSEosQ0FuQkYsQ0FERjtBQStFRDtNQXZGdUJULEsiLCJmaWxlIjoiLi9wYWdlcy9zdGF0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcG90aWZ5QXBwU3RhdHMgZnJvbSAnc3BvdGlmeS1hcHAtc3RhdHMnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vbGF5b3V0cy9tYWluJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IExpbmVDaGFydCwgUGllQ2hhcnQgfSBmcm9tICdyZWFjdC1jaGFydGtpY2snXG5pbXBvcnQgJ2NoYXJ0LmpzJ1xuXG5pbXBvcnQgeyBWaWN0b3J5Q2hhcnQsIFZpY3RvcnlMaW5lLCBWaWN0b3J5QXhpcyB9IGZyb20gJ3ZpY3RvcnknO1xuXG5pbXBvcnQgJy4uLy4uL2kxOG4nO1xuXG5mdW5jdGlvbiBNeUNoYXJ0KHsgZGF0YSB9KSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluZUNoYXJ0IGRhdGE9e2RhdGF9IC8+XG4gICAgPFZpY3RvcnlDaGFydD5cbiAgICAgIDxWaWN0b3J5QXhpc1xuICAgICAgICBmaXhMYWJlbE92ZXJsYXBcbiAgICAgICAgc3R5bGU9e3sgdGlja0xhYmVsczogeyBwYWRkaW5nOiAxMCwgZm9udFNpemU6IDEyIH0gfX1cbiAgICAgIC8+XG4gICAgICA8VmljdG9yeUF4aXNcbiAgICAgICAgZGVwZW5kZW50QXhpc1xuICAgICAgICBzdHlsZT17eyB0aWNrTGFiZWxzOiB7IHBhZGRpbmc6IDEwLCBmb250U2l6ZTogMTIgfSB9fVxuICAgICAgLz5cbiAgICAgIDxWaWN0b3J5TGluZVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRhdGE6IHsgc3Ryb2tlOiAnI2M0M2EzMScgfSxcbiAgICAgICAgICBwYXJlbnQ6IHsgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnIH0sXG4gICAgICAgIH19XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIHg9XCJuYW1lXCJcbiAgICAgICAgeT1cInZhbHVlXCJcbiAgICAgIC8+XG4gICAgPC9WaWN0b3J5Q2hhcnQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHRyaW1SaWdodFplcm9zID0gKGFycmF5LCBmbikgPT4ge1xuICBpZiAoYXJyYXkgPT09IG51bGwpIHJldHVybiBhcnJheTtcbiAgbGV0IGluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgbGV0IHNraXBwZWQgPSAwO1xuICB3aGlsZSAoaW5kZXggPj0gMCkge1xuICAgIGlmIChmbihhcnJheVtpbmRleF0pICE9PSAwKSB7XG4gICAgICBpZiAoc2tpcHBlZCA9PT0gMCkgcmV0dXJuIGFycmF5O1xuICAgICAgcmV0dXJuIGFycmF5LnNsaWNlKDAsIC1za2lwcGVkKTtcbiAgICB9XG4gICAgc2tpcHBlZCsrO1xuICAgIGluZGV4LS07XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdHMoeyBkYXRhIH0pIHtcbiAgY29uc3QgbWF1cyA9IHRyaW1SaWdodFplcm9zKGRhdGEubWF1LCAoaXRlbSkgPT4gaXRlbS5udW1iZXJfb2ZfbWF1cyk7XG4gIGNvbnN0IGRhdXMgPSB0cmltUmlnaHRaZXJvcyhkYXRhLmRhdSwgKGl0ZW0pID0+IGl0ZW0ubnVtYmVyX29mX2RhdXMpO1xuICBjb25zdCB0b3RhbF9yZXF1ZXN0cyA9IHRyaW1SaWdodFplcm9zKFxuICAgIGRhdGEudG90YWxfcmVxdWVzdHMsXG4gICAgKGl0ZW0pID0+IGl0ZW0ubnVtYmVyX29mX3JlcXVlc3RzXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3RhdHMgZm9yIFNwb3RpZnkgRGVkdXA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PVwiU3RhdHMgZm9yIFNwb3RpZnkgRGVkdXBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJTdGF0cyBmb3IgU3BvdGlmeSBEZWR1cFwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTW9udGhseSBBY3RpdmUgVXNlcnMsIERhaWx5IEFjdGl2ZSBVc2VycywgTnVtYmVyIG9mIFJlcXVlc3RzIGZvciBTcG90aWZ5IERlZHVwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJNb250aGx5IEFjdGl2ZSBVc2VycywgRGFpbHkgQWN0aXZlIFVzZXJzLCBOdW1iZXIgb2YgUmVxdWVzdHMgZm9yIFNwb3RpZnkgRGVkdXBcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTW9udGhseSBBY3RpdmUgVXNlcnMsIERhaWx5IEFjdGl2ZSBVc2VycywgTnVtYmVyIG9mIFJlcXVlc3RzIGZvciBTcG90aWZ5IERlZHVwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHtkYXRhID09PSBudWxsID8gbnVsbCA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlN0YXRzIGFib3V0IFNwb3RpZnkgRGVkdXA8L2gxPlxuICAgICAgICAgICAgPHA+VGhpcyBwYWdlIGxpc3RzIHNob3dzIG9wZW4gZGF0YSBhYm91dCBTcG90aWZ5IERlZHVwLiBUaGUgbWV0cmljcyBhcmUgZ2F0aGVyZWQgdXNpbmcgeycgJ31cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KTVBlcmV6L3Nwb3RpZnktYXBwLXN0YXRzXCI+XG4gICAgICAgICAgICAgICAgc3BvdGlmeS1hcHAtc3RhdHNcbiAgICAgICAgICAgICAgPC9hPiwgYSBucG0gcGFja2FnZSB0byByZWFkIGRhdGEgZnJvbSBhIFNwb3RpZnkgYXBwIGluIFNwb3RpZnkncyBkZXZlbG9wZXIgc2l0ZSBkYXNoYm9hcmQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDI+TW9udGhseSBBY3RpdmUgVXNlcnMgKE1BVSk8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSBtb3N0IHJlY2VudCB2YWx1ZSBmb3IgTUFVIGlzeycgJ31cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICB7SW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJykuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgbWF1c1ttYXVzLmxlbmd0aCAtIDFdLm51bWJlcl9vZl9tYXVzXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9zdHJvbmc+eycgJ31cbiAgICAgICAgICAgICAgdXNlcnNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxNeUNoYXJ0XG4gICAgICAgICAgICAgIGRhdGE9e21hdXMubWFwKChhKSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGEuZGF0ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYS5udW1iZXJfb2ZfbWF1cyxcbiAgICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMj5EYWlseSBBY3RpdmUgVXNlcnMgKERBVSk8L2gyPlxuICAgICAgICAgICAgPHA+VGhpcyBjaGFydCBzaG93cyBob3cgbWFueSB1c2VycyBhcmUgbG9nZ2luZyBpbiBvbiBTcG90aWZ5IERlZHVwIHdpdGggdGhlaXIgU3BvdGlmeSBhY2NvdW50cyBldmVyeSBkYXkuIFRoZSBtb3N0IHJlY2VudCB2YWx1ZSBmb3IgREFVIGlzeycgJ31cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICB7SW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJykuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgZGF1c1tkYXVzLmxlbmd0aCAtIDFdLm51bWJlcl9vZl9kYXVzXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9zdHJvbmc+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPE15Q2hhcnRcbiAgICAgICAgICAgICAgZGF0YT17ZGF1cy5tYXAoKGEpID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogYS5kYXRlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhLm51bWJlcl9vZl9kYXVzLFxuICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGgyPk51bWJlciBvZiBSZXF1ZXN0czwvaDI+XG4gICAgICAgICAgICA8cD5UaGlzIGNoYXJ0IHNob3dzIGhvdyBtYW55IHJlcXVlc3RzIHRvIHRoZSBTcG90aWZ5IFdlYiBBUEkgYXJlIG1hZGUgdG8gcmVhZCB0aGUgbGlzdCBvZiBwbGF5bGlzdHMgYW5zIHNhdmVkIHNvbmdzLCBnZXQgdGhlIGxpc3Qgb2Ygc29uZ3MgaW4gYSBwbGF5bGlzdCwgYW5kIHJlbW92ZSBkdXBsaWNhdGVzLiBUaGUgbW9zdCByZWNlbnQgdmFsdWUgaXN7JyAnfVxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICB7SW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJykuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgdG90YWxfcmVxdWVzdHNbdG90YWxfcmVxdWVzdHMubGVuZ3RoIC0gMV0ubnVtYmVyX29mX3JlcXVlc3RzXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9zdHJvbmc+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPE15Q2hhcnRcbiAgICAgICAgICAgICAgZGF0YT17dG90YWxfcmVxdWVzdHMubWFwKChhKSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGEuZGF0ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYS5udW1iZXJfb2ZfcmVxdWVzdHMsXG4gICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgbGV0IGRhdGEgPSBudWxsO1xuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuU1BPVElGWV9VU0VSTkFNRSAmJlxuICAgIHByb2Nlc3MuZW52LlNQT1RJRllfUEFTU1dPUkQgJiZcbiAgICBwcm9jZXNzLmVudi5TUE9USUZZX0FQUF9JRFxuICApIHtcbiAgICBjb25zdCBzcG90aWZ5QXBwU3RhdHMgPSBuZXcgU3BvdGlmeUFwcFN0YXRzKCk7XG4gICAgYXdhaXQgc3BvdGlmeUFwcFN0YXRzLmluaXQoKTtcbiAgICBhd2FpdCBzcG90aWZ5QXBwU3RhdHMubG9naW4oXG4gICAgICBwcm9jZXNzLmVudi5TUE9USUZZX1VTRVJOQU1FLFxuICAgICAgcHJvY2Vzcy5lbnYuU1BPVElGWV9QQVNTV09SRFxuICAgICk7XG4gICAgZGF0YSA9IGF3YWl0IHNwb3RpZnlBcHBTdGF0cy5nZXRTdGF0cyhwcm9jZXNzLmVudi5TUE9USUZZX0FQUF9JRCk7XG4gICAgc3BvdGlmeUFwcFN0YXRzLmRlc3Ryb3koKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/stats/index.js\n");

/***/ })

})