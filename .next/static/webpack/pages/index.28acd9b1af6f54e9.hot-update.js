"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/EmailSignup.js":
/*!***************************************!*\
  !*** ./src/components/EmailSignup.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst EmailSignup = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"mt-6\",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative mb-4 border-primary-red border-t-4 border-x-4 rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"rounded w-full h-[45px] p-6 shadow-none outline-none\",\n                            type: \"email\",\n                            name: \"email\",\n                            placeholder: \"john@smith.com\",\n                            pattern: \"[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$\",\n                            required: true,\n                            value: email,\n                            onChange: handleEmailChange\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, undefined),\n                        emailError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 bg-primary-red text-white text-xs italic font-semibold\",\n                            children: \"Enter your email to be subscribed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 22,\n                            columnNumber: 35\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2 bg-primary-red text-white text-xs italic font-semibold\",\n                            children: \"Whoops, make sure it's an email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                            lineNumber: 23,\n                            columnNumber: 27\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"bg-primary-red text-white w-full shadow-none\",\n                    label: \"Contact Us\"\n                }, void 0, false, {\n                    fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alfiemitchell/Documents/Coding_Projects/Frontend-Mentor/bookmark-landing-page-main/src/components/EmailSignup.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EmailSignup, \"k7cV3GYASXm+KRgi0vmgH3Jgn9w=\");\n_c = EmailSignup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSignup);\nvar _c;\n$RefreshReg$(_c, \"EmailSignup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbFNpZ251cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNWO0FBRTlCLE1BQU1HLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MscUJBQ0ksOERBQUNPO2tCQUNHLDRFQUFDQztZQUFLQyxXQUFVO1lBQU9DLFVBQVVDOzs4QkFDN0IsOERBQUNKO29CQUFJRSxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQ0dILFdBQVU7NEJBQ1ZJLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLFNBQVE7NEJBQ1JDLFFBQVE7NEJBQ1JDLE9BQU9mOzRCQUNQZ0IsVUFBVUM7Ozs7Ozt3QkFFYmYsMkJBQWEsOERBQUNFOzRCQUFJRSxXQUFVO3NDQUE2RDs7Ozs7c0RBQ3BGLDhEQUFDRjs0QkFBSUUsV0FBVTtzQ0FBNkQ7Ozs7Ozs7Ozs7Ozs4QkFFdEYsOERBQUNSLCtDQUFNQTtvQkFBQ1EsV0FBVTtvQkFBK0NZLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhGO0dBekJNbkI7S0FBQUE7QUEyQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRW1haWxTaWdudXAuanM/MTlmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmNvbnN0IEVtYWlsU2lnbnVwID0gKCkgPT4ge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTQgYm9yZGVyLXByaW1hcnktcmVkIGJvcmRlci10LTQgYm9yZGVyLXgtNCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCB3LWZ1bGwgaC1bNDVweF0gcC02IHNoYWRvdy1ub25lIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiam9obkBzbWl0aC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlthLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17Miw0fSRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2VtYWlsRXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy1wcmltYXJ5LXJlZCB0ZXh0LXdoaXRlIHRleHQteHMgaXRhbGljIGZvbnQtc2VtaWJvbGRcIj5FbnRlciB5b3VyIGVtYWlsIHRvIGJlIHN1YnNjcmliZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctcHJpbWFyeS1yZWQgdGV4dC13aGl0ZSB0ZXh0LXhzIGl0YWxpYyBmb250LXNlbWlib2xkXCI+V2hvb3BzLCBtYWtlIHN1cmUgaXQncyBhbiBlbWFpbDwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLXByaW1hcnktcmVkIHRleHQtd2hpdGUgdy1mdWxsIHNoYWRvdy1ub25lXCIgbGFiZWw9eydDb250YWN0IFVzJ30gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWFpbFNpZ251cDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkVtYWlsU2lnbnVwIiwiZW1haWwiLCJzZXRFbWFpbCIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwiZGl2IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicGF0dGVybiIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/EmailSignup.js\n"));

/***/ })

});