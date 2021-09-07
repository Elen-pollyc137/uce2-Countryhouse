"use strict";
exports.id = 64;
exports.ids = [64];
exports.modules = {

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ secret)
/* harmony export */ });
const secret = '0e900be1-0ac5-4e6a-bf4b-38f8b21a189b';

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

/***/ 3722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3480);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8633);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multer_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1465);
/* harmony import */ var multer_s3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer_s3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6417);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);




aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY_APP,
  accessKeyId: process.env.AWS_ACCESS_KEY_APP,
  region: process.env.AWS_REGION_APP
});
var s3 = new (aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().S3)();
const upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({
  storage: multer_s3__WEBPACK_IMPORTED_MODULE_2___default()({
    s3: s3,
    bucket: process.env.AWS_BUCKET_APP,
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },

    key(req, file, cb) {
      crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const fileName = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, fileName);
      });
    }

  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upload);

/***/ })

};
;