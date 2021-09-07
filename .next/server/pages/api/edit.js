"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719,512];
exports.modules = {

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ secret)
/* harmony export */ });
const secret = '0e900be1-0ac5-4e6a-bf4b-38f8b21a189b';

/***/ }),

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ database)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};
async function database(URI = MONGODB_URI) {
  return await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URI, option);
}

/***/ }),

/***/ 3448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ initMiddleware)
/* harmony export */ });
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ 1527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
const User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', UserSchema);

/***/ }),

/***/ 7887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(995);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3448);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1527);
/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4303);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction





const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(cors__WEBPACK_IMPORTED_MODULE_1___default()({
  methods: ['GET', 'POST', 'OPTIONS', 'PUT']
}));
async function handler(req, res) {
  await cors(req, res);
  const id = await (0,_utils_jwt__WEBPACK_IMPORTED_MODULE_3__/* .JWT */ .C)(req);
  await (0,_lib_database__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
  const {
    method
  } = req;

  if (id) {
    switch (method) {
      case 'PUT':
        {
          const {
            body
          } = req;
          const fields = ['name', 'email', 'phone'];
          const user = await _model_user__WEBPACK_IMPORTED_MODULE_2__/* .User.findOne */ .n.findOne({
            _id: id
          });
          fields.map(fild => {
            const newValue = body[fild];

            if (newValue != undefined) {
              user[fild] = newValue;
            }
          });
          user.save();
          return res.status(200).json(user);
        }

      default:
        res.setHeader('Allow', ['PUT']);
        return res.status(405).json({
          message: `Method ${method} Not Allowed`
        });
    }
  } else {
    return res.status(401).json({
      message: `Not user authentication`
    });
  }
}

/***/ }),

/***/ 4303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ JWT)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2917);


const JWT = async req => {
  const {
    authorization
  } = req.headers;

  if (!authorization) {
    return false;
  }

  const token = authorization.replace('Bearer', ' ').trim();

  try {
    const data = await (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, _api_secret__WEBPACK_IMPORTED_MODULE_1__/* .secret */ .z);
    if (!data) throw Error('token not user authentication');
    const {
      id
    } = data;
    return id;
  } catch (error) {
    return false;
  }
};

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
var __webpack_exports__ = (__webpack_exec__(7887));
module.exports = __webpack_exports__;

})();