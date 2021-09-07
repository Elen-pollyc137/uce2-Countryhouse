"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ secret)
/* harmony export */ });
const secret = '0e900be1-0ac5-4e6a-bf4b-38f8b21a189b';

/***/ }),

/***/ 1417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6552);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_secret__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2917);
/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(995);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3448);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1527);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);







const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_4___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'PUT']
}));
async function login(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    try {
      await (0,_lib_database__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
      const {
        email,
        password
      } = req.body;
      const [user] = await _model_user__WEBPACK_IMPORTED_MODULE_3__/* .User.find */ .n.find({
        email: {
          $in: [email.toLowerCase()]
        }
      });

      if (!user) {
        return res.status(401).json({
          message: 'usuário não existente'
        });
      }

      const isValidPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.compare)(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({
          message: 'senha incorreta'
        });
      }

      const token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign)({
        id: user.id
      }, _api_secret__WEBPACK_IMPORTED_MODULE_6__/* .secret */ .z, {
        expiresIn: '4h'
      });
      return res.status(201).json({
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone
        },
        token
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error servidor'
      });
    }
  } else {
    return res.status(405).json({
      message: 'We only support POST'
    });
  }
}

/***/ }),

/***/ 6552:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [512], () => (__webpack_exec__(1417)));
module.exports = __webpack_exports__;

})();