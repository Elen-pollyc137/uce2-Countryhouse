"use strict";
exports.id = 676;
exports.ids = [676];
exports.modules = {

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

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Local)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const LocalSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  _id: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }
});
const Local = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Local || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Local', LocalSchema);

/***/ })

};
;