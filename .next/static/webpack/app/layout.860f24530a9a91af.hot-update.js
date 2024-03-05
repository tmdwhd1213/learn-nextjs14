"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _styles_navigation_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/navigation.module.css */ \"(app-pages-browser)/./styles/navigation.module.css\");\n/* harmony import */ var _styles_navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_navigation_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// * Render in the 백엔드, interactive or hydrate in 프론트엔드\n// hydrate -> 실행하면 SSR을 실행하는데, 이는 자바스크립트를 지원하지 않는 html을 백엔드에서 만듬.\n// use client를 컴포넌트 상단에 쓰면 interactive한 자바스크립트(리액트)기능을 사용할 수 있음.\n// use server로 쓸 필요없이 나머지는 다 서버단에서 랜더링되고\n// 심지어 use client를 써도 랜더링은 서버단에서! 그 이후에 자바스크립트 다운로드\n// 효과!: 자바스크립트를 무작정 다운받는 것이 아닌 선택적으로 받을 수 있어 속도 측면에서 좋음\n\n\n\nfunction Navigation() {\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    console.log(path);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\osjProject\\\\learn-nextjs14\\\\components\\\\navigation.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        \" \",\n                        path === \"/\" && \"✔\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\osjProject\\\\learn-nextjs14\\\\components\\\\navigation.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/about-us\",\n                            children: \"About Us\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\osjProject\\\\learn-nextjs14\\\\components\\\\navigation.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        \" \",\n                        path === \"/about-us\" && \"✔\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\osjProject\\\\learn-nextjs14\\\\components\\\\navigation.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\osjProject\\\\learn-nextjs14\\\\components\\\\navigation.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\osjProject\\\\learn-nextjs14\\\\components\\\\navigation.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"kx72sda92+XlSh1QiZvq/YVQxpY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1REFBdUQ7QUFDdkQsaUVBQWlFO0FBQ2pFLGdFQUFnRTtBQUNoRSx3Q0FBd0M7QUFDeEMsbURBQW1EO0FBQ25ELHVEQUF1RDtBQUUxQjtBQUNpQjtBQUNPO0FBRXRDLFNBQVNHOztJQUN0QixNQUFNQyxPQUFPSCw0REFBV0E7SUFDeEJJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV04sMEVBQVU7a0JBQ3hCLDRFQUFDTzs7OEJBQ0MsOERBQUNDOztzQ0FDQyw4REFBQ1YsaURBQUlBOzRCQUFDVyxNQUFLO3NDQUFJOzs7Ozs7d0JBQVc7d0JBQUVQLFNBQVMsT0FBTzs7Ozs7Ozs4QkFFOUMsOERBQUNNOztzQ0FDQyw4REFBQ1YsaURBQUlBOzRCQUFDVyxNQUFLO3NDQUFZOzs7Ozs7d0JBQWU7d0JBQUVQLFNBQVMsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFFO0dBaEJ3QkQ7O1FBQ1RGLHdEQUFXQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3g/ZWRkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuLy8gKiBSZW5kZXIgaW4gdGhlIOuwseyXlOuTnCwgaW50ZXJhY3RpdmUgb3IgaHlkcmF0ZSBpbiDtlITroaDtirjsl5Trk5xcclxuLy8gaHlkcmF0ZSAtPiDsi6TtlontlZjrqbQgU1NS7J2EIOyLpO2Wie2VmOuKlOuNsCwg7J2064qUIOyekOuwlOyKpO2BrOumve2KuOulvCDsp4Dsm5DtlZjsp4Ag7JWK64qUIGh0bWzsnYQg67Cx7JeU65Oc7JeQ7IScIOunjOuTrC5cclxuLy8gdXNlIGNsaWVudOulvCDsu7Ttj6zrhIztirgg7IOB64uo7JeQIOyTsOuptCBpbnRlcmFjdGl2Ze2VnCDsnpDrsJTsiqTtgazrpr3tirgo66as7JWh7Yq4Keq4sOuKpeydhCDsgqzsmqntlaAg7IiYIOyeiOydjC5cclxuLy8gdXNlIHNlcnZlcuuhnCDsk7gg7ZWE7JqU7JeG7J20IOuCmOuouOyngOuKlCDri6Qg7ISc67KE64uo7JeQ7IScIOuenOuNlOungeuQmOqzoFxyXG4vLyDsi6zsp4DslrQgdXNlIGNsaWVudOulvCDsjajrj4Qg656c642U66eB7J2AIOyEnOuyhOuLqOyXkOyEnCEg6re4IOydtO2bhOyXkCDsnpDrsJTsiqTtgazrpr3tirgg64uk7Jq066Gc65OcXHJcbi8vIO2aqOqzvCE6IOyekOuwlOyKpO2BrOumve2KuOulvCDrrLTsnpHsoJUg64uk7Jq067Cb64qUIOqyg+ydtCDslYTri4wg7ISg7YOd7KCB7Jy866GcIOuwm+ydhCDsiJgg7J6I7Ja0IOyGjeuPhCDsuKHrqbTsl5DshJwg7KKL7J2MXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IHBhdGggPSB1c2VQYXRobmFtZSgpO1xyXG4gIGNvbnNvbGUubG9nKHBhdGgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPiB7cGF0aCA9PT0gXCIvXCIgJiYgXCLinJRcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQtdXNcIj5BYm91dCBVczwvTGluaz4ge3BhdGggPT09IFwiL2Fib3V0LXVzXCIgJiYgXCLinJRcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwic3R5bGVzIiwiTmF2aWdhdGlvbiIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwibmF2IiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navigation.tsx\n"));

/***/ })

});