"use strict";
(() => {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 8908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(995);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1231);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8985);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4303);
/* harmony import */ var _utils_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3722);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction







const handler = next_connect__WEBPACK_IMPORTED_MODULE_1___default()().use(cors__WEBPACK_IMPORTED_MODULE_4___default()()).use(_utils_upload__WEBPACK_IMPORTED_MODULE_6__/* .default.single */ .Z.single('file')).post(async (req, res) => {
  // await cors(req, res);
  const id = await (0,_utils_jwt__WEBPACK_IMPORTED_MODULE_5__/* .JWT */ .C)(req);
  await (0,_lib_database__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();

  if (id) {
    const {
      name,
      description,
      lat,
      lng,
      price,
      available
    } = req.body;
    const parseAvailable = !!Number(available);
    const local = await _model_local__WEBPACK_IMPORTED_MODULE_3__/* .Local.create */ .w.create({
      _id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
      name,
      description,
      lat,
      lng,
      price,
      img: req.file.location,
      user: id,
      available: parseAvailable
    });
    return res.status(200).json(local);
  } else {
    return res.status(401).json({
      message: `Usuário não Autenticado`
    });
  }
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ 3480:
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8633:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 1465:
/***/ ((module) => {

module.exports = require("multer-s3");

/***/ }),

/***/ 9303:
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ 1231:
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,64], () => (__webpack_exec__(8908)));
module.exports = __webpack_exports__;

})();