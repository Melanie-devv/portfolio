"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.jsx":
/*!***************************!*\
  !*** ./pages/contact.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ContactCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ContactCode */ \"./components/ContactCode.jsx\");\n/* harmony import */ var _styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ContactPage.module.css */ \"./styles/ContactPage.module.css\");\n/* harmony import */ var _styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ContactPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), opacity = ref[0], setOpacity = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fadeIn = setTimeout(function() {\n            setOpacity(1);\n        }, 100); // Commence à augmenter l'opacité après 0.1 seconde\n        return function() {\n            clearTimeout(fadeIn);\n        };\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), subject = ref3[0], setSubject = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref4[0], setMessage = ref4[1];\n    var resetForm = function() {\n        setName(\"\");\n        setEmail(\"\");\n        setMessage(\"\");\n        setSubject(\"\");\n    };\n    var submitForm = function(e) {\n        e.preventDefault();\n        fetch(\"http://localhost:5000/mail/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name: name,\n                email: email,\n                subject: subject,\n                message: message\n            })\n        }).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            if (data.status === \"success\") {\n                alert(\"Message Sent.\");\n                resetForm();\n            } else if (data.status === \"fail\") {\n                alert(\"Message failed to send.\");\n            }\n        }).catch(function(error) {\n            console.error(\"Error:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading),\n                        children: \"Retrouvez moi sur :\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContactCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading),\n                        children: \"Ou remplissez ce formulaire\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                        onSubmit: submitForm,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_ContactPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().flex),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"name\",\n                                                children: \"Nom\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                name: \"name\",\n                                                id: \"name\",\n                                                value: name,\n                                                onChange: function(e) {\n                                                    return setName(e.target.value);\n                                                },\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email\",\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"email\",\n                                                name: \"email\",\n                                                id: \"email\",\n                                                value: email,\n                                                onChange: function(e) {\n                                                    return setEmail(e.target.value);\n                                                },\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Sujet\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"subject\",\n                                        id: \"subject\",\n                                        value: subject,\n                                        onChange: function(e) {\n                                            return setSubject(e.target.value);\n                                        },\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"message\",\n                                        children: \"Message\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        name: \"message\",\n                                        id: \"message\",\n                                        rows: \"5\",\n                                        value: message,\n                                        onChange: function(e) {\n                                            return setMessage(e.target.value);\n                                        },\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Envoyer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Windows\\\\Downloads\\\\vscode-portfolio-main\\\\vscode-portfolio-main\\\\pages\\\\contact.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactPage, \"JE9BxfJ+LMYp/Jy1NgPwL/dl/m8=\");\n_c = ContactPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactPage);\nvar _c;\n$RefreshReg$(_c, \"ContactPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3g/Mjg3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFjdENvZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Q29kZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db250YWN0UGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbb3BhY2l0eSwgc2V0T3BhY2l0eV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZhZGVJbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0T3BhY2l0eSgxKTtcbiAgICB9LCAxMDApOyAvLyBDb21tZW5jZSDDoCBhdWdtZW50ZXIgbCdvcGFjaXTDqSBhcHLDqHMgMC4xIHNlY29uZGVcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoZmFkZUluKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgIHNldE5hbWUoJycpO1xuICAgIHNldEVtYWlsKCcnKTtcbiAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICBzZXRTdWJqZWN0KCcnKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tYWlsL3NlbmQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgc3ViamVjdDpzdWJqZWN0LFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnc3VjY2Vzcycpe1xuICAgICAgICBhbGVydChcIk1lc3NhZ2UgU2VudC5cIik7IFxuICAgICAgICByZXNldEZvcm0oKVxuICAgICAgfSBlbHNlIGlmKGRhdGEuc3RhdHVzID09PSAnZmFpbCcpe1xuICAgICAgICBhbGVydChcIk1lc3NhZ2UgZmFpbGVkIHRvIHNlbmQuXCIpXG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+UmV0cm91dmV6IG1vaSBzdXIgOjwvaDM+XG4gICAgICAgIDxDb250YWN0Q29kZSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+T3UgcmVtcGxpc3NleiBjZSBmb3JtdWxhaXJlPC9oMz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleH0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Ob208L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+U3VqZXQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxuICAgICAgICAgICAgICBpZD1cInN1YmplY3RcIlxuICAgICAgICAgICAgICB2YWx1ZT17c3ViamVjdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudm95ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGl0bGU6ICdDb250YWN0JyB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0UGFnZTtcbiJdLCJuYW1lcyI6WyJDb250YWN0Q29kZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFjdFBhZ2UiLCJvcGFjaXR5Iiwic2V0T3BhY2l0eSIsImZhZGVJbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicmVzZXRGb3JtIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJhbGVydCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDMiLCJoZWFkaW5nIiwiZm9ybSIsIm9uU3VibWl0IiwiZmxleCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.jsx\n"));

/***/ })

});