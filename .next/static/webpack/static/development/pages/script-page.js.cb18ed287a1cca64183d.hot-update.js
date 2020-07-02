webpackHotUpdate("static/development/pages/script-page.js",{

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    mutation scriptTagDelete($id: ID!) {\\n        scriptTagDelete(id: $id) {\\n            deletedScriptTagId\\n            userErrors {\\n                field\\n                message\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    query {\\n        scriptTags(first: 5) {\\n            edges {\\n                node {\\n                    id\\n                    src\\n                    displayScope\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    mutation scriptTagCreate($input: ScriptTagInput!) {\\n        scriptTagCreate(input: $input) {\\n            scriptTag {\\n                id\\n            }\\n            userErrors {\\n                field\\n                message\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar CREATE_SCRIPT_TAG = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nvar QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());\nvar DELETE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());\n\nfunction ScriptPage() {\n  _s();\n\n  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(CREATE_SCRIPT_TAG),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 1),\n      createScripts = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(DELETE_SCRIPTTAG),\n      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3, 1),\n      deleteScripts = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(QUERY_SCRIPTTAGS),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"div\", null, \"Loading\\u2026\");\n  if (error) return __jsx(\"div\", null, error.message);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n    title: \"These are the Script Tags:\",\n    sectioned: true\n  }, __jsx(\"p\", null, \"Create or Delete a Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"].Section, {\n    secondary: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n    title: \"Delete Tag\",\n    sectioned: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    primary: true,\n    size: \"slim\",\n    type: \"submit\",\n    onClick: function onClick() {\n      createScripts({\n        variables: {\n          input: {\n            src: \"https://4b913a5ed961.ngrok.io/test-script.js\",\n            displayScope: \"ALL\"\n          }\n        },\n        refetchQueries: [{\n          query: QUERY_SCRIPTTAGS\n        }]\n      });\n    }\n  }, \"Create Script Tag\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"ResourceList\"], {\n    showHeader: true,\n    resourceName: {\n      singular: 'Script',\n      plural: 'Scripts'\n    },\n    items: data.scriptTags.edges,\n    renderItem: function renderItem(item) {\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"ResourceList\"].Item, {\n        id: item.id\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, null, __jsx(\"p\", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n        type: \"submit\",\n        onClick: function onClick() {\n          deleteScripts({\n            variables: {\n              id: item.node.id\n            },\n            refetchQueries: [{\n              query: QUERY_SCRIPTTAGS\n            }]\n          });\n        }\n      }, \"Delete Script Tag\"))));\n    }\n  })))));\n}\n\n_s(ScriptPage, \"vEez66HRLTXVYhV5eSzb2nSu0zc=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = ScriptPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ScriptPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcz9jYzkwIl0sIm5hbWVzIjpbIkNSRUFURV9TQ1JJUFRfVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJTY3JpcHRQYWdlIiwidXNlTXV0YXRpb24iLCJjcmVhdGVTY3JpcHRzIiwiZGVsZXRlU2NyaXB0cyIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInNyYyIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJzaW5ndWxhciIsInBsdXJhbCIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsIml0ZW0iLCJpZCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQWNBLElBQU1DLGdCQUFnQixHQUFHRCxrREFBSCxvQkFBdEI7QUFjQSxJQUFNRSxnQkFBZ0IsR0FBR0Ysa0RBQUgsb0JBQXRCOztBQWFBLFNBQVNHLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxxQkFDTUMsdUVBQVcsQ0FBQ0wsaUJBQUQsQ0FEakI7QUFBQTtBQUFBLE1BQ1hNLGFBRFc7O0FBQUEsc0JBRU1ELHVFQUFXLENBQUNGLGdCQUFELENBRmpCO0FBQUE7QUFBQSxNQUVYSSxhQUZXOztBQUFBLGtCQUdhQyxvRUFBUSxDQUFDTixnQkFBRCxDQUhyQjtBQUFBLE1BR1hPLE9BSFcsYUFHWEEsT0FIVztBQUFBLE1BR0ZDLEtBSEUsYUFHRkEsS0FIRTtBQUFBLE1BR0tDLElBSEwsYUFHS0EsSUFITDs7QUFLbEIsTUFBSUYsT0FBSixFQUFhLE9BQU8sbUNBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDRSxPQUFaLENBQVA7QUFFWCxTQUNJLE1BQUMscURBQUQsUUFDSSxNQUFDLHVEQUFELFFBQ0ksTUFBQyx1REFBRCxDQUFRLE9BQVIsUUFDSSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDLDRCQUFaO0FBQXlDLGFBQVM7QUFBbEQsS0FDSSxpREFESixDQURKLENBREosRUFRSSxNQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixhQUFTO0FBQXpCLEtBQ0ksTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxZQUFaO0FBQXlCLGFBQVM7QUFBbEMsS0FDSSxNQUFDLHVEQUFEO0FBQ0ksV0FBTyxNQURYO0FBRUksUUFBSSxFQUFDLE1BRlQ7QUFHSSxRQUFJLEVBQUMsUUFIVDtBQUdrQixXQUFPLEVBQUUsbUJBQU07QUFDN0JOLG1CQUFhLENBQUM7QUFDVk8saUJBQVMsRUFBRTtBQUNQQyxlQUFLLEVBQUU7QUFDSEMsZUFBRyxFQUFFLDhDQURGO0FBRUhDLHdCQUFZLEVBQUU7QUFGWDtBQURBLFNBREQ7QUFPVkMsc0JBQWMsRUFBRSxDQUFDO0FBQUNDLGVBQUssRUFBRWhCO0FBQVIsU0FBRDtBQVBOLE9BQUQsQ0FBYjtBQVNIO0FBYkQseUJBREosQ0FESixDQVJKLEVBNkJJLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0ksTUFBQyxxREFBRCxRQUNJLE1BQUMsNkRBQUQ7QUFDSSxjQUFVLE1BRGQ7QUFFSSxnQkFBWSxFQUFFO0FBQUNpQixjQUFRLEVBQUUsUUFBWDtBQUFxQkMsWUFBTSxFQUFFO0FBQTdCLEtBRmxCO0FBR0ksU0FBSyxFQUFFVCxJQUFJLENBQUNVLFVBQUwsQ0FBZ0JDLEtBSDNCO0FBSUksY0FBVSxFQUFFLG9CQUFBQyxJQUFJLEVBQUk7QUFDaEIsYUFDSSxNQUFDLDZEQUFELENBQWMsSUFBZDtBQUNJLFVBQUUsRUFBRUEsSUFBSSxDQUFDQztBQURiLFNBR0ksTUFBQyxzREFBRCxRQUNJLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksaUJBQ0tELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxFQURmLENBREosQ0FESixFQU1JLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksTUFBQyx1REFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxtQkFBTTtBQUNqQ2pCLHVCQUFhLENBQUM7QUFDVk0scUJBQVMsRUFBRTtBQUNQVyxnQkFBRSxFQUFFRCxJQUFJLENBQUNFLElBQUwsQ0FBVUQ7QUFEUCxhQUREO0FBSVZQLDBCQUFjLEVBQUUsQ0FBQztBQUFDQyxtQkFBSyxFQUFFaEI7QUFBUixhQUFEO0FBSk4sV0FBRCxDQUFiO0FBTUg7QUFQRCw2QkFESixDQU5KLENBSEosQ0FESjtBQXlCSDtBQTlCTCxJQURKLENBREosQ0E3QkosQ0FESixDQURKO0FBc0VIOztHQTlFUUUsVTtVQUNtQkMsK0QsRUFDQUEsK0QsRUFDT0csNEQ7OztLQUgxQkosVTtBQWdGTUEseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zY3JpcHQtcGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHt1c2VRdWVyeSwgdXNlTXV0YXRpb259IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExheW91dCwgUGFnZSwgUmVzb3VyY2VMaXN0LCBTdGFjayB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuXG5jb25zdCBDUkVBVEVfU0NSSVBUX1RBRyA9IGdxbGBcbiAgICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcbiAgICAgICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgICAgICAgIHNjcmlwdFRhZyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZXJFcnJvcnMge1xuICAgICAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgUVVFUllfU0NSSVBUVEFHUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICAgIHNjcmlwdFRhZ3MoZmlyc3Q6IDUpIHtcbiAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgc3JjXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IERFTEVURV9TQ1JJUFRUQUcgPSBncWxgXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XG4gICAgICAgIHNjcmlwdFRhZ0RlbGV0ZShpZDogJGlkKSB7XG4gICAgICAgICAgICBkZWxldGVkU2NyaXB0VGFnSWRcbiAgICAgICAgICAgIHVzZXJFcnJvcnMge1xuICAgICAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuXG5mdW5jdGlvbiBTY3JpcHRQYWdlKCkge1xuICAgIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRfVEFHKTtcbiAgICBjb25zdCBbZGVsZXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihERUxFVEVfU0NSSVBUVEFHKTtcbiAgICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XG5cbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPVwiVGhlc2UgYXJlIHRoZSBTY3JpcHQgVGFnczpcIiBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgb3IgRGVsZXRlIGEgU2NyaXB0IFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIkRlbGV0ZSBUYWdcIiBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vNGI5MTNhNWVkOTYxLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbe3F1ZXJ5OiBRVUVSWV9TQ1JJUFRUQUdTfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgU2NyaXB0IFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17e3Npbmd1bGFyOiAnU2NyaXB0JywgcGx1cmFsOiAnU2NyaXB0cyd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLnNjcmlwdFRhZ3MuZWRnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU2NyaXB0cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubm9kZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3txdWVyeTogUVVFUllfU0NSSVBUVEFHU31dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBTY3JpcHQgVGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvUGFnZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/script-page.js\n");

/***/ })

})