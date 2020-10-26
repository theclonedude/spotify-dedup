webpackHotUpdate_N_E("pages/stats",{

/***/ "./pages/stats/index.js":
/*!******************************!*\
  !*** ./pages/stats/index.js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stats; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/main */ \"./layouts/main.tsx\");\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/head */ \"./components/head.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_chartkick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartkick */ \"./node_modules/react-chartkick/dist/react-chartkick.esm.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\nvar _jsxFileName = \"/Users/jmperez/github/spotify-dedup/pages/stats/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction MyChart(_ref) {\n  var data = _ref.data;\n  var d = {};\n  data.forEach(function (dat) {\n    d[dat.name] = dat.value;\n  });\n  return __jsx(react_chartkick__WEBPACK_IMPORTED_MODULE_4__[\"LineChart\"], {\n    data: d,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  });\n}\n\n_c = MyChart;\n\nvar trimRightZeros = function trimRightZeros(array, fn) {\n  if (array === null) return array;\n  var index = array.length - 1;\n  var skipped = 0;\n\n  while (index >= 0) {\n    if (fn(array[index]) !== 0) {\n      if (skipped === 0) return array;\n      return array.slice(0, -skipped);\n    }\n\n    skipped++;\n    index--;\n  }\n\n  return [];\n};\n\nvar __N_SSG = true;\nfunction Stats(_ref2) {\n  var data = _ref2.data;\n  var maus = trimRightZeros(data.mau, function (item) {\n    return item.number_of_maus;\n  });\n  var daus = trimRightZeros(data.dau, function (item) {\n    return item.number_of_daus;\n  });\n  var total_requests = trimRightZeros(data.total_requests, function (item) {\n    return item.number_of_requests;\n  });\n  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"Stats for Spotify Dedup\"), __jsx(\"meta\", {\n    name: \"og:title\",\n    content: \"Stats for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:title\",\n    content: \"Stats for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Monthly Active Users, Daily Active Users, Number of Requests for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"og:description\",\n    content: \"Monthly Active Users, Daily Active Users, Number of Requests for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:description\",\n    content: \"Monthly Active Users, Daily Active Users, Number of Requests for Spotify Dedup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), data === null ? null : __jsx(\"div\", {\n    className: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Stats about Spotify Dedup\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"This page lists shows open data about Spotify Dedup. The metrics are gathered using \", ' ', __jsx(\"a\", {\n    href: \"https://github.com/JMPerez/spotify-app-stats\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, \"spotify-app-stats\"), \", a npm package to read data from a Spotify app in Spotify's developer site dashboard.\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Monthly Active Users (MAU)\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"The most recent value for MAU is\", ' ', __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, Intl.NumberFormat('en-US').format(maus[maus.length - 1].number_of_maus)), ' ', \"users\"), __jsx(MyChart, {\n    data: maus.map(function (a) {\n      return {\n        name: a.date,\n        value: a.number_of_maus\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, \"Daily Active Users (DAU)\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, \"This chart shows how many users are logging in on Spotify Dedup with their Spotify accounts every day. The most recent value for DAU is\", ' ', __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, Intl.NumberFormat('en-US').format(daus[daus.length - 1].number_of_daus)), \".\"), __jsx(MyChart, {\n    data: daus.map(function (a) {\n      return {\n        name: a.date,\n        value: a.number_of_daus\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"Number of Requests\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"This chart shows how many requests to the Spotify Web API are made to read the list of playlists ans saved songs, get the list of songs in a playlist, and remove duplicates. The most recent value is\", ' ', __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, Intl.NumberFormat('en-US').format(total_requests[total_requests.length - 1].number_of_requests)), \".\"), __jsx(MyChart, {\n    data: total_requests.map(function (a) {\n      return {\n        name: a.date,\n        value: a.number_of_requests\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }))));\n}\n_c2 = Stats;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyChart\");\n$RefreshReg$(_c2, \"Stats\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RhdHMvaW5kZXguanM/YmViOCJdLCJuYW1lcyI6WyJNeUNoYXJ0IiwiZGF0YSIsImQiLCJmb3JFYWNoIiwiZGF0IiwibmFtZSIsInZhbHVlIiwidHJpbVJpZ2h0WmVyb3MiLCJhcnJheSIsImZuIiwiaW5kZXgiLCJsZW5ndGgiLCJza2lwcGVkIiwic2xpY2UiLCJTdGF0cyIsIm1hdXMiLCJtYXUiLCJpdGVtIiwibnVtYmVyX29mX21hdXMiLCJkYXVzIiwiZGF1IiwibnVtYmVyX29mX2RhdXMiLCJ0b3RhbF9yZXF1ZXN0cyIsIm51bWJlcl9vZl9yZXF1ZXN0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJtYXAiLCJhIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxPQUFULE9BQTJCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3pCLE1BQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0FELE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUFDLEdBQUcsRUFBSTtBQUNsQkYsS0FBQyxDQUFDRSxHQUFHLENBQUNDLElBQUwsQ0FBRCxHQUFjRCxHQUFHLENBQUNFLEtBQWxCO0FBQ0QsR0FGRDtBQUdBLFNBQ0UsTUFBQyx5REFBRDtBQUFXLFFBQUksRUFBRUosQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBR0Q7O0tBUlFGLE87O0FBVVQsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLEVBQVIsRUFBZTtBQUNwQyxNQUFJRCxLQUFLLEtBQUssSUFBZCxFQUFvQixPQUFPQSxLQUFQO0FBQ3BCLE1BQUlFLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFOLEdBQWUsQ0FBM0I7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFDQSxTQUFPRixL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Q0YsRUFzQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrTUFBME0sR0FBMU0sRUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tHLElBQUksQ0FBQ0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQkMsTUFBM0IsQ0FDQ0osY0FBYyxDQUFDQSxjQUFjLENBQUNYLE1BQWYsR0FBd0IsQ0FBekIsQ0FBZCxDQUEwQ1ksa0JBRDNDLENBREwsQ0FEQSxNQXRDRixFQTZDRSxNQUFDLE9BQUQ7QUFDRSxRQUFJLEVBQUVELGNBQWMsQ0FBQ0ssR0FBZixDQUFtQixVQUFDQyxDQUFEO0FBQUEsYUFBUTtBQUMvQnZCLFlBQUksRUFBRXVCLENBQUMsQ0FBQ0MsSUFEdUI7QUFFL0J2QixhQUFLLEVBQUVzQixDQUFDLENBQUNMO0FBRnNCLE9BQVI7QUFBQSxLQUFuQixDQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3Q0YsQ0FISixDQW5CRixDQURGO0FBK0VEO01BdkZ1QlQsSyIsImZpbGUiOiIuL3BhZ2VzL3N0YXRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwb3RpZnlBcHBTdGF0cyBmcm9tICdzcG90aWZ5LWFwcC1zdGF0cyc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9sYXlvdXRzL21haW4nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSAncmVhY3QtY2hhcnRraWNrJztcbmltcG9ydCAnY2hhcnQuanMnXG5cbmltcG9ydCAnLi4vLi4vaTE4bic7XG5cbmZ1bmN0aW9uIE15Q2hhcnQoeyBkYXRhIH0pIHtcbiAgY29uc3QgZCA9IHt9O1xuICBkYXRhLmZvckVhY2goZGF0ID0+IHtcbiAgICBkW2RhdC5uYW1lXSA9IGRhdC52YWx1ZTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPExpbmVDaGFydCBkYXRhPXtkfSAvPlxuICApO1xufVxuXG5jb25zdCB0cmltUmlnaHRaZXJvcyA9IChhcnJheSwgZm4pID0+IHtcbiAgaWYgKGFycmF5ID09PSBudWxsKSByZXR1cm4gYXJyYXk7XG4gIGxldCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gIGxldCBza2lwcGVkID0gMDtcbiAgd2hpbGUgKGluZGV4ID49IDApIHtcbiAgICBpZiAoZm4oYXJyYXlbaW5kZXhdKSAhPT0gMCkge1xuICAgICAgaWYgKHNraXBwZWQgPT09IDApIHJldHVybiBhcnJheTtcbiAgICAgIHJldHVybiBhcnJheS5zbGljZSgwLCAtc2tpcHBlZCk7XG4gICAgfVxuICAgIHNraXBwZWQrKztcbiAgICBpbmRleC0tO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRzKHsgZGF0YSB9KSB7XG4gIGNvbnN0IG1hdXMgPSB0cmltUmlnaHRaZXJvcyhkYXRhLm1hdSwgKGl0ZW0pID0+IGl0ZW0ubnVtYmVyX29mX21hdXMpO1xuICBjb25zdCBkYXVzID0gdHJpbVJpZ2h0WmVyb3MoZGF0YS5kYXUsIChpdGVtKSA9PiBpdGVtLm51bWJlcl9vZl9kYXVzKTtcbiAgY29uc3QgdG90YWxfcmVxdWVzdHMgPSB0cmltUmlnaHRaZXJvcyhcbiAgICBkYXRhLnRvdGFsX3JlcXVlc3RzLFxuICAgIChpdGVtKSA9PiBpdGVtLm51bWJlcl9vZl9yZXF1ZXN0c1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlN0YXRzIGZvciBTcG90aWZ5IERlZHVwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlN0YXRzIGZvciBTcG90aWZ5IERlZHVwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiU3RhdHMgZm9yIFNwb3RpZnkgRGVkdXBcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIk1vbnRobHkgQWN0aXZlIFVzZXJzLCBEYWlseSBBY3RpdmUgVXNlcnMsIE51bWJlciBvZiBSZXF1ZXN0cyBmb3IgU3BvdGlmeSBEZWR1cFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTW9udGhseSBBY3RpdmUgVXNlcnMsIERhaWx5IEFjdGl2ZSBVc2VycywgTnVtYmVyIG9mIFJlcXVlc3RzIGZvciBTcG90aWZ5IERlZHVwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIk1vbnRobHkgQWN0aXZlIFVzZXJzLCBEYWlseSBBY3RpdmUgVXNlcnMsIE51bWJlciBvZiBSZXF1ZXN0cyBmb3IgU3BvdGlmeSBEZWR1cFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7ZGF0YSA9PT0gbnVsbCA/IG51bGwgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMT5TdGF0cyBhYm91dCBTcG90aWZ5IERlZHVwPC9oMT5cbiAgICAgICAgICAgIDxwPlRoaXMgcGFnZSBsaXN0cyBzaG93cyBvcGVuIGRhdGEgYWJvdXQgU3BvdGlmeSBEZWR1cC4gVGhlIG1ldHJpY3MgYXJlIGdhdGhlcmVkIHVzaW5nIHsnICd9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSk1QZXJlei9zcG90aWZ5LWFwcC1zdGF0c1wiPlxuICAgICAgICAgICAgICAgIHNwb3RpZnktYXBwLXN0YXRzXG4gICAgICAgICAgICAgIDwvYT4sIGEgbnBtIHBhY2thZ2UgdG8gcmVhZCBkYXRhIGZyb20gYSBTcG90aWZ5IGFwcCBpbiBTcG90aWZ5J3MgZGV2ZWxvcGVyIHNpdGUgZGFzaGJvYXJkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyPk1vbnRobHkgQWN0aXZlIFVzZXJzIChNQVUpPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgbW9zdCByZWNlbnQgdmFsdWUgZm9yIE1BVSBpc3snICd9XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAge0ludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgIG1hdXNbbWF1cy5sZW5ndGggLSAxXS5udW1iZXJfb2ZfbWF1c1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPnsnICd9XG4gICAgICAgICAgICAgIHVzZXJzXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TXlDaGFydFxuICAgICAgICAgICAgICBkYXRhPXttYXVzLm1hcCgoYSkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBhLmRhdGUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGEubnVtYmVyX29mX21hdXMsXG4gICAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDI+RGFpbHkgQWN0aXZlIFVzZXJzIChEQVUpPC9oMj5cbiAgICAgICAgICAgIDxwPlRoaXMgY2hhcnQgc2hvd3MgaG93IG1hbnkgdXNlcnMgYXJlIGxvZ2dpbmcgaW4gb24gU3BvdGlmeSBEZWR1cCB3aXRoIHRoZWlyIFNwb3RpZnkgYWNjb3VudHMgZXZlcnkgZGF5LiBUaGUgbW9zdCByZWNlbnQgdmFsdWUgZm9yIERBVSBpc3snICd9XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAge0ludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgIGRhdXNbZGF1cy5sZW5ndGggLSAxXS5udW1iZXJfb2ZfZGF1c1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxNeUNoYXJ0XG4gICAgICAgICAgICAgIGRhdGE9e2RhdXMubWFwKChhKSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGEuZGF0ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYS5udW1iZXJfb2ZfZGF1cyxcbiAgICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMj5OdW1iZXIgb2YgUmVxdWVzdHM8L2gyPlxuICAgICAgICAgICAgPHA+VGhpcyBjaGFydCBzaG93cyBob3cgbWFueSByZXF1ZXN0cyB0byB0aGUgU3BvdGlmeSBXZWIgQVBJIGFyZSBtYWRlIHRvIHJlYWQgdGhlIGxpc3Qgb2YgcGxheWxpc3RzIGFucyBzYXZlZCBzb25ncywgZ2V0IHRoZSBsaXN0IG9mIHNvbmdzIGluIGEgcGxheWxpc3QsIGFuZCByZW1vdmUgZHVwbGljYXRlcy4gVGhlIG1vc3QgcmVjZW50IHZhbHVlIGlzeycgJ31cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAge0ludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgIHRvdGFsX3JlcXVlc3RzW3RvdGFsX3JlcXVlc3RzLmxlbmd0aCAtIDFdLm51bWJlcl9vZl9yZXF1ZXN0c1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxNeUNoYXJ0XG4gICAgICAgICAgICAgIGRhdGE9e3RvdGFsX3JlcXVlc3RzLm1hcCgoYSkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBhLmRhdGUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGEubnVtYmVyX29mX3JlcXVlc3RzLFxuICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGxldCBkYXRhID0gbnVsbDtcbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52LlNQT1RJRllfVVNFUk5BTUUgJiZcbiAgICBwcm9jZXNzLmVudi5TUE9USUZZX1BBU1NXT1JEICYmXG4gICAgcHJvY2Vzcy5lbnYuU1BPVElGWV9BUFBfSURcbiAgKSB7XG4gICAgY29uc3Qgc3BvdGlmeUFwcFN0YXRzID0gbmV3IFNwb3RpZnlBcHBTdGF0cygpO1xuICAgIGF3YWl0IHNwb3RpZnlBcHBTdGF0cy5pbml0KCk7XG4gICAgYXdhaXQgc3BvdGlmeUFwcFN0YXRzLmxvZ2luKFxuICAgICAgcHJvY2Vzcy5lbnYuU1BPVElGWV9VU0VSTkFNRSxcbiAgICAgIHByb2Nlc3MuZW52LlNQT1RJRllfUEFTU1dPUkRcbiAgICApO1xuICAgIGRhdGEgPSBhd2FpdCBzcG90aWZ5QXBwU3RhdHMuZ2V0U3RhdHMocHJvY2Vzcy5lbnYuU1BPVElGWV9BUFBfSUQpO1xuICAgIHNwb3RpZnlBcHBTdGF0cy5kZXN0cm95KCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/stats/index.js\n");

/***/ })

})