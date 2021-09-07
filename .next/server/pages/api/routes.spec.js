"use strict";
(() => {
var exports = {};
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

jest.mock('next/router', () => __webpack_require__(6014));
describe('router', () => {
  it('supports the `push` and `login` router', () => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push('/api/login');
    expect((next_router__WEBPACK_IMPORTED_MODULE_0___default())).toMatchObject({
      asPath: '/api/login',
      pathname: '/api/login',
      query: {}
    });
  });
  it('supports the `push` and `file` router', () => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push({
      pathname: '/api/[file]',
      query: {
        file: '73a0c76b-f452-4e72-8436-f90e85f03712'
      }
    });
    expect((next_router__WEBPACK_IMPORTED_MODULE_0___default())).toMatchObject({
      asPath: '/api/73a0c76b-f452-4e72-8436-f90e85f03712',
      pathname: '/api/[file]',
      query: {
        file: '73a0c76b-f452-4e72-8436-f90e85f03712'
      }
    });
  });
  it('supports the `push` and `location` router', () => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push({
      pathname: '/api/location'
    });
    expect((next_router__WEBPACK_IMPORTED_MODULE_0___default())).toMatchObject({
      asPath: '/api/location',
      pathname: '/api/location'
    });
  });
  it('supports the `push` and `locations` router', () => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push({
      pathname: '/api/locations'
    });
    expect((next_router__WEBPACK_IMPORTED_MODULE_0___default())).toMatchObject({
      asPath: '/api/locations',
      pathname: '/api/locations'
    });
  });
  it('supports the `push` and `edit` router', () => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push({
      pathname: '/api/edit'
    });
    expect((next_router__WEBPACK_IMPORTED_MODULE_0___default())).toMatchObject({
      asPath: '/api/edit',
      pathname: '/api/edit'
    });
  });
  it('supports the `push` and `create` router', () => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push({
      pathname: '/api/create'
    });
    expect((next_router__WEBPACK_IMPORTED_MODULE_0___default())).toMatchObject({
      asPath: '/api/create',
      pathname: '/api/create'
    });
  });
});

/***/ }),

/***/ 6014:
/***/ ((module) => {

module.exports = require("next-router-mock");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7084));
module.exports = __webpack_exports__;

})();