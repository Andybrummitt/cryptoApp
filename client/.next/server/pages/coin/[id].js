"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/coin/[id]";
exports.ids = ["pages/coin/[id]"];
exports.modules = {

/***/ "./components/CoinChart/CoinChart.js":
/*!*******************************************!*\
  !*** ./components/CoinChart/CoinChart.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"chart.js/auto\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js_auto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-adapter-date-fns */ \"chartjs-adapter-date-fns\");\n/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ \"date-fns/locale\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst CoinChart = ({ dayChartData , weekChartData , monthChartData  })=>{\n    const { 0: timeFormat , 1: setTimeFormat  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"1d\");\n    const dataTimeFormat = ()=>{\n        switch(timeFormat){\n            case \"1d\":\n                return dayChartData;\n            case \"7d\":\n                return weekChartData;\n            case \"30d\":\n                return monthChartData;\n        }\n    };\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const config = {\n        type: \"line\",\n        data: {\n            datasets: [\n                {\n                    label: `${timeFormat} price ($)`,\n                    backgroundColor: \"red\",\n                    borderColor: \"red\",\n                    pointRadius: 0,\n                    data: dataTimeFormat()\n                }, \n            ]\n        },\n        options: {\n            lineHeightAnnotation: {\n                always: true,\n                hover: false,\n                lineWeight: 1.5\n            },\n            responsive: true,\n            maintainAspectRatio: false,\n            adapters: {\n                date: {\n                    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__.enUS\n                }\n            },\n            scales: {\n                x: {\n                    type: \"time\"\n                }\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        let chart;\n        if (canvasRef && canvasRef.current && dayChartData && weekChartData && monthChartData) {\n            const ctx = canvasRef.current.getContext(\"2d\");\n            chart = new (chart_js_auto__WEBPACK_IMPORTED_MODULE_1___default())(ctx, config);\n        }\n        return ()=>{\n            chart.destroy();\n        };\n    }, [\n        timeFormat\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setTimeFormat(\"1d\"),\n                        children: \"Day\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\components\\\\CoinChart\\\\CoinChart.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setTimeFormat(\"7d\"),\n                        children: \"Week\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\components\\\\CoinChart\\\\CoinChart.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setTimeFormat(\"30d\"),\n                        children: \"Month\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\components\\\\CoinChart\\\\CoinChart.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\components\\\\CoinChart\\\\CoinChart.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                className: \"price-history-chart\",\n                width: \"400\",\n                height: \"400\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\components\\\\CoinChart\\\\CoinChart.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\components\\\\CoinChart\\\\CoinChart.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinChart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvaW5DaGFydC9Db2luQ2hhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNBO0FBQ0s7QUFDb0I7QUFFM0QsTUFBTU0sU0FBUyxHQUFHLENBQUMsRUFBRUMsWUFBWSxHQUFFQyxhQUFhLEdBQUVDLGNBQWMsR0FBRSxHQUFLO0lBQ3JFLE1BQU0sS0FBQ0MsVUFBVSxNQUFFQyxhQUFhLE1BQUlOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRWxELE1BQU1PLGNBQWMsR0FBRyxJQUFNO1FBQzNCLE9BQVFGLFVBQVU7WUFDaEIsS0FBSyxJQUFJO2dCQUNQLE9BQU9ILFlBQVksQ0FBQztZQUN0QixLQUFLLElBQUk7Z0JBQ1AsT0FBT0MsYUFBYSxDQUFDO1lBQ3ZCLEtBQUssS0FBSztnQkFDUixPQUFPQyxjQUFjLENBQUM7U0FDekI7S0FDRjtJQUVELE1BQU1JLFNBQVMsR0FBR1QsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFOUIsTUFBTVUsTUFBTSxHQUFHO1FBQ2JDLElBQUksRUFBRSxNQUFNO1FBQ1pDLElBQUksRUFBRTtZQUNKQyxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0VDLEtBQUssRUFBRSxDQUFDLEVBQUVSLFVBQVUsQ0FBQyxVQUFVLENBQUM7b0JBQ2hDUyxlQUFlLEVBQUUsS0FBSztvQkFDdEJDLFdBQVcsRUFBRSxLQUFLO29CQUNsQkMsV0FBVyxFQUFFLENBQUM7b0JBQ2RMLElBQUksRUFBRUosY0FBYyxFQUFFO2lCQUN2QjthQUNGO1NBQ0Y7UUFDRFUsT0FBTyxFQUFFO1lBQ1BDLG9CQUFvQixFQUFFO2dCQUNwQkMsTUFBTSxFQUFFLElBQUk7Z0JBQ1pDLEtBQUssRUFBRSxLQUFLO2dCQUNaQyxVQUFVLEVBQUUsR0FBRzthQUNoQjtZQUNEQyxVQUFVLEVBQUUsSUFBSTtZQUNoQkMsbUJBQW1CLEVBQUUsS0FBSztZQUMxQkMsUUFBUSxFQUFFO2dCQUNSQyxJQUFJLEVBQUU7b0JBQ0pDLE1BQU0sRUFBRTlCLGlEQUFJO2lCQUNiO2FBQ0Y7WUFDRCtCLE1BQU0sRUFBRTtnQkFDTkMsQ0FBQyxFQUFFO29CQUNEbEIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7YUFDRjtTQUNGO0tBQ0Y7SUFFRFosZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSStCLEtBQUs7UUFDVCxJQUFJckIsU0FBUyxJQUFJQSxTQUFTLENBQUNzQixPQUFPLElBQUk1QixZQUFZLElBQUlDLGFBQWEsSUFBSUMsY0FBYyxFQUFFO1lBQ3ZGLE1BQU0yQixHQUFHLEdBQUd2QixTQUFTLENBQUNzQixPQUFPLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDOUNILEtBQUssR0FBRyxJQUFJbEMsc0RBQUssQ0FBQ29DLEdBQUcsRUFBRXRCLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFNO1lBQ1RvQixLQUFLLENBQUNJLE9BQU8sRUFBRSxDQUFDO1NBQ25CO0tBQ0YsRUFBRTtRQUFDNUIsVUFBVTtLQUFDLENBQUMsQ0FBQztJQUVqQixxQkFDRSw4REFBQzZCLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOztrQ0FDN0IsOERBQUNDLFFBQU07d0JBQUNDLE9BQU8sRUFBRSxJQUFNL0IsYUFBYSxDQUFDLElBQUksQ0FBQztrQ0FBRSxLQUFHOzs7OztpQ0FBUztrQ0FDeEQsOERBQUM4QixRQUFNO3dCQUFDQyxPQUFPLEVBQUUsSUFBTS9CLGFBQWEsQ0FBQyxJQUFJLENBQUM7a0NBQUUsTUFBSTs7Ozs7aUNBQVM7a0NBQ3pELDhEQUFDOEIsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFLElBQU0vQixhQUFhLENBQUMsS0FBSyxDQUFDO2tDQUFFLE9BQUs7Ozs7O2lDQUFTOzs7Ozs7eUJBQ3ZEOzBCQUNOLDhEQUFDZ0MsUUFBTTtnQkFDTEMsR0FBRyxFQUFFL0IsU0FBUztnQkFDZDJCLFNBQVMsRUFBQyxxQkFBcUI7Z0JBQy9CSyxLQUFLLEVBQUMsS0FBSztnQkFDWEMsTUFBTSxFQUFDLEtBQUs7Ozs7O3lCQUNKOzs7Ozs7aUJBQ04sQ0FDTjtDQUNIO0FBRUQsaUVBQWV4QyxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0NvaW5DaGFydC9Db2luQ2hhcnQuanM/MjhjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IFwiY2hhcnRqcy1hZGFwdGVyLWRhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGVuVVMgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvaW5DaGFydCA9ICh7IGRheUNoYXJ0RGF0YSwgd2Vla0NoYXJ0RGF0YSwgbW9udGhDaGFydERhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFt0aW1lRm9ybWF0LCBzZXRUaW1lRm9ybWF0XSA9IHVzZVN0YXRlKFwiMWRcIik7XHJcblxyXG4gIGNvbnN0IGRhdGFUaW1lRm9ybWF0ID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoICh0aW1lRm9ybWF0KSB7XHJcbiAgICAgIGNhc2UgXCIxZFwiOlxyXG4gICAgICAgIHJldHVybiBkYXlDaGFydERhdGE7XHJcbiAgICAgIGNhc2UgXCI3ZFwiOlxyXG4gICAgICAgIHJldHVybiB3ZWVrQ2hhcnREYXRhO1xyXG4gICAgICBjYXNlIFwiMzBkXCI6XHJcbiAgICAgICAgcmV0dXJuIG1vbnRoQ2hhcnREYXRhO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IGAke3RpbWVGb3JtYXR9IHByaWNlICgkKWAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxyXG4gICAgICAgICAgZGF0YTogZGF0YVRpbWVGb3JtYXQoKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgbGluZUhlaWdodEFubm90YXRpb246IHtcclxuICAgICAgICBhbHdheXM6IHRydWUsXHJcbiAgICAgICAgaG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGxpbmVXZWlnaHQ6IDEuNSxcclxuICAgICAgfSxcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgIGFkYXB0ZXJzOiB7XHJcbiAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgbG9jYWxlOiBlblVTLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHg6IHtcclxuICAgICAgICAgIHR5cGU6IFwidGltZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnQ7XHJcbiAgICBpZiAoY2FudmFzUmVmICYmIGNhbnZhc1JlZi5jdXJyZW50ICYmIGRheUNoYXJ0RGF0YSAmJiB3ZWVrQ2hhcnREYXRhICYmIG1vbnRoQ2hhcnREYXRhKSB7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9LCBbdGltZUZvcm1hdF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGltZUZvcm1hdChcIjFkXCIpfT5EYXk8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRpbWVGb3JtYXQoXCI3ZFwiKX0+V2VlazwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGltZUZvcm1hdChcIjMwZFwiKX0+TW9udGg8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICBjbGFzc05hbWU9XCJwcmljZS1oaXN0b3J5LWNoYXJ0XCJcclxuICAgICAgICB3aWR0aD1cIjQwMFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcclxuICAgICAgPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvaW5DaGFydDtcclxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZW5VUyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDb2luQ2hhcnQiLCJkYXlDaGFydERhdGEiLCJ3ZWVrQ2hhcnREYXRhIiwibW9udGhDaGFydERhdGEiLCJ0aW1lRm9ybWF0Iiwic2V0VGltZUZvcm1hdCIsImRhdGFUaW1lRm9ybWF0IiwiY2FudmFzUmVmIiwiY29uZmlnIiwidHlwZSIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJwb2ludFJhZGl1cyIsIm9wdGlvbnMiLCJsaW5lSGVpZ2h0QW5ub3RhdGlvbiIsImFsd2F5cyIsImhvdmVyIiwibGluZVdlaWdodCIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwiYWRhcHRlcnMiLCJkYXRlIiwibG9jYWxlIiwic2NhbGVzIiwieCIsImNoYXJ0IiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJkZXN0cm95IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImNhbnZhcyIsInJlZiIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CoinChart/CoinChart.js\n");

/***/ }),

/***/ "./pages/coin/[id].js":
/*!****************************!*\
  !*** ./pages/coin/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! coingecko-api */ \"coingecko-api\");\n/* harmony import */ var coingecko_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coingecko_api__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CoinChart_CoinChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CoinChart/CoinChart */ \"./components/CoinChart/CoinChart.js\");\n/* harmony import */ var _utils_convertToInternationalCurrencySystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/convertToInternationalCurrencySystem */ \"./utils/convertToInternationalCurrencySystem.js\");\n\n\n\n\n\nconst CoinGeckoClient = new (coingecko_api__WEBPACK_IMPORTED_MODULE_1___default())();\nconst id = ({ coinData , chartData  })=>{\n    const htmlTagRegex = /(<([^>]+)>)/gi;\n    const { name , image , symbol , description  } = coinData;\n    const { current_price , market_cap_rank , market_cap , circulating_supply , max_supply , price_change_24h ,  } = coinData.market_data;\n    const reformatChartData = (chartData)=>{\n        return chartData.map((array)=>{\n            return {\n                x: array[0],\n                y: array[1]\n            };\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: market_cap_rank\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image.large,\n                        alt: \"crypto-logo-image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    `${name} ${symbol.toUpperCase()}`\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: `$${current_price.usd.toFixed(2)}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: `$${price_change_24h.toFixed(2)}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: `${name}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: `$${(0,_utils_convertToInternationalCurrencySystem__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Math.round(market_cap.usd))}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: (0,_utils_convertToInternationalCurrencySystem__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Math.round(circulating_supply))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: max_supply || \"N/A\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinChart_CoinChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dayChartData: reformatChartData(chartData.day),\n                weekChartData: reformatChartData(chartData.week),\n                monthChartData: reformatChartData(chartData.month)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: description.en.replace(htmlTagRegex, \"\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"bullish/bearish\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Russell\\\\Documents\\\\coding\\\\crypto-app\\\\client\\\\pages\\\\coin\\\\[id].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    const coinData = await CoinGeckoClient.coins.fetch(context.params.id);\n    const chartData1day = await CoinGeckoClient.coins.fetchMarketChart(context.params.id, {\n        days: 1\n    });\n    const chartData7day = await CoinGeckoClient.coins.fetchMarketChart(context.params.id, {\n        days: 7\n    });\n    const chartData30day = await CoinGeckoClient.coins.fetchMarketChart(context.params.id, {\n        days: 30\n    });\n    return {\n        props: {\n            coinData: coinData.data,\n            chartData: {\n                day: chartData1day.data.prices,\n                week: chartData7day.data.prices,\n                month: chartData30day.data.prices\n            }\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (id);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L1tpZF0uanM/OTExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29pbkdlY2tvIGZyb20gXCJjb2luZ2Vja28tYXBpXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29pbkNoYXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvaW5DaGFydC9Db2luQ2hhcnRcIjtcclxuaW1wb3J0IGNvbnZlcnRUb0ludGVybmF0aW9uYWxDdXJyZW5jeVN5c3RlbSBmcm9tIFwiLi4vLi4vdXRpbHMvY29udmVydFRvSW50ZXJuYXRpb25hbEN1cnJlbmN5U3lzdGVtXCI7XHJcbmNvbnN0IENvaW5HZWNrb0NsaWVudCA9IG5ldyBDb2luR2Vja28oKTtcclxuXHJcbmNvbnN0IGlkID0gKHsgY29pbkRhdGEsIGNoYXJ0RGF0YSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGh0bWxUYWdSZWdleCA9IC8oPChbXj5dKyk+KS9naTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBpbWFnZSwgc3ltYm9sLCBkZXNjcmlwdGlvbiB9ID0gY29pbkRhdGE7XHJcbiAgY29uc3Qge1xyXG4gICAgY3VycmVudF9wcmljZSxcclxuICAgIG1hcmtldF9jYXBfcmFuayxcclxuICAgIG1hcmtldF9jYXAsXHJcbiAgICBjaXJjdWxhdGluZ19zdXBwbHksXHJcbiAgICBtYXhfc3VwcGx5LFxyXG4gICAgcHJpY2VfY2hhbmdlXzI0aCxcclxuICB9ID0gY29pbkRhdGEubWFya2V0X2RhdGE7XHJcblxyXG4gIGNvbnN0IHJlZm9ybWF0Q2hhcnREYXRhID0gKGNoYXJ0RGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGNoYXJ0RGF0YS5tYXAoKGFycmF5KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogYXJyYXlbMF0sXHJcbiAgICAgICAgeTogYXJyYXlbMV0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5BZGQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+e21hcmtldF9jYXBfcmFua308L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz17aW1hZ2UubGFyZ2V9IGFsdD1cImNyeXB0by1sb2dvLWltYWdlXCIgLz5cclxuICAgICAgICB7YCR7bmFtZX0gJHtzeW1ib2wudG9VcHBlckNhc2UoKX1gfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj57YCQke2N1cnJlbnRfcHJpY2UudXNkLnRvRml4ZWQoMil9YH08L2Rpdj5cclxuICAgICAgPGRpdj57YCQke3ByaWNlX2NoYW5nZV8yNGgudG9GaXhlZCgyKX1gfTwvZGl2PlxyXG4gICAgICA8ZGl2PntgJHtuYW1lfWB9PC9kaXY+XHJcbiAgICAgIDxkaXY+e2AkJHtjb252ZXJ0VG9JbnRlcm5hdGlvbmFsQ3VycmVuY3lTeXN0ZW0oXHJcbiAgICAgICAgTWF0aC5yb3VuZChtYXJrZXRfY2FwLnVzZClcclxuICAgICAgKX1gfTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb252ZXJ0VG9JbnRlcm5hdGlvbmFsQ3VycmVuY3lTeXN0ZW0oTWF0aC5yb3VuZChjaXJjdWxhdGluZ19zdXBwbHkpKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+e21heF9zdXBwbHkgfHwgXCJOL0FcIn08L2Rpdj5cclxuICAgICAgPENvaW5DaGFydFxyXG4gICAgICAgIGRheUNoYXJ0RGF0YT17cmVmb3JtYXRDaGFydERhdGEoY2hhcnREYXRhLmRheSl9XHJcbiAgICAgICAgd2Vla0NoYXJ0RGF0YT17cmVmb3JtYXRDaGFydERhdGEoY2hhcnREYXRhLndlZWspfVxyXG4gICAgICAgIG1vbnRoQ2hhcnREYXRhPXtyZWZvcm1hdENoYXJ0RGF0YShjaGFydERhdGEubW9udGgpfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PntkZXNjcmlwdGlvbi5lbi5yZXBsYWNlKGh0bWxUYWdSZWdleCwgXCJcIil9PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PmJ1bGxpc2gvYmVhcmlzaDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvaW5EYXRhID0gYXdhaXQgQ29pbkdlY2tvQ2xpZW50LmNvaW5zLmZldGNoKGNvbnRleHQucGFyYW1zLmlkKTtcclxuXHJcbiAgY29uc3QgY2hhcnREYXRhMWRheSA9IGF3YWl0IENvaW5HZWNrb0NsaWVudC5jb2lucy5mZXRjaE1hcmtldENoYXJ0KFxyXG4gICAgY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgICB7IGRheXM6IDEgfVxyXG4gICk7XHJcbiAgY29uc3QgY2hhcnREYXRhN2RheSA9IGF3YWl0IENvaW5HZWNrb0NsaWVudC5jb2lucy5mZXRjaE1hcmtldENoYXJ0KFxyXG4gICAgY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgICB7IGRheXM6IDcgfVxyXG4gICk7XHJcbiAgY29uc3QgY2hhcnREYXRhMzBkYXkgPSBhd2FpdCBDb2luR2Vja29DbGllbnQuY29pbnMuZmV0Y2hNYXJrZXRDaGFydChcclxuICAgIGNvbnRleHQucGFyYW1zLmlkLFxyXG4gICAgeyBkYXlzOiAzMCB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvaW5EYXRhOiBjb2luRGF0YS5kYXRhLFxyXG4gICAgICBjaGFydERhdGE6IHtcclxuICAgICAgICBkYXk6IGNoYXJ0RGF0YTFkYXkuZGF0YS5wcmljZXMsXHJcbiAgICAgICAgd2VlazogY2hhcnREYXRhN2RheS5kYXRhLnByaWNlcyxcclxuICAgICAgICBtb250aDogY2hhcnREYXRhMzBkYXkuZGF0YS5wcmljZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpZDtcclxuIl0sIm5hbWVzIjpbIkNvaW5HZWNrbyIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb2luQ2hhcnQiLCJjb252ZXJ0VG9JbnRlcm5hdGlvbmFsQ3VycmVuY3lTeXN0ZW0iLCJDb2luR2Vja29DbGllbnQiLCJpZCIsImNvaW5EYXRhIiwiY2hhcnREYXRhIiwiaHRtbFRhZ1JlZ2V4IiwibmFtZSIsImltYWdlIiwic3ltYm9sIiwiZGVzY3JpcHRpb24iLCJjdXJyZW50X3ByaWNlIiwibWFya2V0X2NhcF9yYW5rIiwibWFya2V0X2NhcCIsImNpcmN1bGF0aW5nX3N1cHBseSIsIm1heF9zdXBwbHkiLCJwcmljZV9jaGFuZ2VfMjRoIiwibWFya2V0X2RhdGEiLCJyZWZvcm1hdENoYXJ0RGF0YSIsIm1hcCIsImFycmF5IiwieCIsInkiLCJkaXYiLCJoMSIsImJ1dHRvbiIsImltZyIsInNyYyIsImxhcmdlIiwiYWx0IiwidG9VcHBlckNhc2UiLCJ1c2QiLCJ0b0ZpeGVkIiwiTWF0aCIsInJvdW5kIiwiZGF5Q2hhcnREYXRhIiwiZGF5Iiwid2Vla0NoYXJ0RGF0YSIsIndlZWsiLCJtb250aENoYXJ0RGF0YSIsIm1vbnRoIiwiZW4iLCJyZXBsYWNlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvaW5zIiwiZmV0Y2giLCJwYXJhbXMiLCJjaGFydERhdGExZGF5IiwiZmV0Y2hNYXJrZXRDaGFydCIsImRheXMiLCJjaGFydERhdGE3ZGF5IiwiY2hhcnREYXRhMzBkYXkiLCJwcm9wcyIsImRhdGEiLCJwcmljZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coin/[id].js\n");

/***/ }),

/***/ "./utils/convertToInternationalCurrencySystem.js":
/*!*******************************************************!*\
  !*** ./utils/convertToInternationalCurrencySystem.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction convertToInternationalCurrencySystem(labelValue) {\n    // Nine Zeroes for Billions\n    return Math.abs(Number(labelValue)) >= 1.0e9 ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + \"B\" : Math.abs(Number(labelValue)) >= 1.0e6 ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + \"M\" : Math.abs(Number(labelValue)) >= 1.0e3 ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + \"K\" : Math.abs(Number(labelValue));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertToInternationalCurrencySystem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb252ZXJ0VG9JbnRlcm5hdGlvbmFsQ3VycmVuY3lTeXN0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLG9DQUFvQyxDQUFDQyxVQUFVLEVBQUU7SUFDdEQsMkJBQTJCO0lBQzNCLE9BQU9DLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNILFVBQVUsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUN4QyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDSCxVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUV6REgsSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQ25DLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNILFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBRXpESCxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDSCxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FDbkMsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0gsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FDdkRILElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNILFVBQVUsQ0FBQyxDQUFDLENBQUM7Q0FDbEM7QUFFRCxpRUFBZUQsb0NBQW9DLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi91dGlscy9jb252ZXJ0VG9JbnRlcm5hdGlvbmFsQ3VycmVuY3lTeXN0ZW0uanM/ZThhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb252ZXJ0VG9JbnRlcm5hdGlvbmFsQ3VycmVuY3lTeXN0ZW0obGFiZWxWYWx1ZSkge1xyXG4gICAgLy8gTmluZSBaZXJvZXMgZm9yIEJpbGxpb25zXHJcbiAgICByZXR1cm4gTWF0aC5hYnMoTnVtYmVyKGxhYmVsVmFsdWUpKSA+PSAxLjBlOVxyXG4gICAgICA/IChNYXRoLmFicyhOdW1iZXIobGFiZWxWYWx1ZSkpIC8gMS4wZTkpLnRvRml4ZWQoMikgKyBcIkJcIlxyXG4gICAgICA6IC8vIFNpeCBaZXJvZXMgZm9yIE1pbGxpb25zXHJcbiAgICAgIE1hdGguYWJzKE51bWJlcihsYWJlbFZhbHVlKSkgPj0gMS4wZTZcclxuICAgICAgPyAoTWF0aC5hYnMoTnVtYmVyKGxhYmVsVmFsdWUpKSAvIDEuMGU2KS50b0ZpeGVkKDIpICsgXCJNXCJcclxuICAgICAgOiAvLyBUaHJlZSBaZXJvZXMgZm9yIFRob3VzYW5kc1xyXG4gICAgICBNYXRoLmFicyhOdW1iZXIobGFiZWxWYWx1ZSkpID49IDEuMGUzXHJcbiAgICAgID8gKE1hdGguYWJzKE51bWJlcihsYWJlbFZhbHVlKSkgLyAxLjBlMykudG9GaXhlZCgyKSArIFwiS1wiXHJcbiAgICAgIDogTWF0aC5hYnMoTnVtYmVyKGxhYmVsVmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbnZlcnRUb0ludGVybmF0aW9uYWxDdXJyZW5jeVN5c3RlbTsiXSwibmFtZXMiOlsiY29udmVydFRvSW50ZXJuYXRpb25hbEN1cnJlbmN5U3lzdGVtIiwibGFiZWxWYWx1ZSIsIk1hdGgiLCJhYnMiLCJOdW1iZXIiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/convertToInternationalCurrencySystem.js\n");

/***/ }),

/***/ "chart.js/auto":
/*!********************************!*\
  !*** external "chart.js/auto" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("chart.js/auto");

/***/ }),

/***/ "chartjs-adapter-date-fns":
/*!*******************************************!*\
  !*** external "chartjs-adapter-date-fns" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("chartjs-adapter-date-fns");

/***/ }),

/***/ "coingecko-api":
/*!********************************!*\
  !*** external "coingecko-api" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("coingecko-api");

/***/ }),

/***/ "date-fns/locale":
/*!**********************************!*\
  !*** external "date-fns/locale" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/coin/[id].js"));
module.exports = __webpack_exports__;

})();