"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./api/secret.ts":
/*!***********************!*\
  !*** ./api/secret.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"secret\": () => (/* binding */ secret)\n/* harmony export */ });\nconst secret = '0e900be1-0ac5-4e6a-bf4b-38f8b21a189b';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvc2VjcmV0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUcsc0NBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudHJ5Ly4vYXBpL3NlY3JldC50cz83MWFmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZWNyZXQgPSAnMGU5MDBiZTEtMGFjNS00ZTZhLWJmNGItMzhmOGIyMWExODliJztcbiJdLCJuYW1lcyI6WyJzZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/secret.ts\n");

/***/ }),

/***/ "./lib/database.ts":
/*!*************************!*\
  !*** ./lib/database.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ database)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst option = {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true,\n  useFindAndModify: false\n};\nasync function database(URI = MONGODB_URI) {\n  return await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URI, option);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFoQztBQUVBLE1BQU1HLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxlQUFlLEVBQUUsSUFESjtBQUViQyxFQUFBQSxrQkFBa0IsRUFBRSxJQUZQO0FBR2JDLEVBQUFBLGNBQWMsRUFBRSxJQUhIO0FBSWJDLEVBQUFBLGdCQUFnQixFQUFFO0FBSkwsQ0FBZjtBQU9lLGVBQWVDLFFBQWYsQ0FBd0JDLEdBQUcsR0FBR1QsV0FBOUIsRUFBMkM7QUFDeEQsU0FBTyxNQUFNRCx1REFBQSxDQUFpQlUsR0FBakIsRUFBc0JOLE1BQXRCLENBQWI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdW50cnkvLi9saWIvZGF0YWJhc2UudHM/YjczYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZztcblxuY29uc3Qgb3B0aW9uID0ge1xuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGF0YWJhc2UoVVJJID0gTU9OR09EQl9VUkkpIHtcbiAgcmV0dXJuIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoVVJJLCBvcHRpb24pO1xufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52Iiwib3B0aW9uIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiZGF0YWJhc2UiLCJVUkkiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/database.ts\n");

/***/ }),

/***/ "./lib/init-middleware.ts":
/*!********************************!*\
  !*** ./lib/init-middleware.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMiddleware)\n/* harmony export */ });\nfunction initMiddleware(middleware) {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaW5pdC1taWRkbGV3YXJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxTQUFTQSxjQUFULENBQXdCQyxVQUF4QixFQUF5QztBQUN0RCxTQUFPLENBQUNDLEdBQUQsRUFBc0JDLEdBQXRCLEtBQ0wsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUMvQkwsSUFBQUEsVUFBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWUksTUFBRCxJQUFpQjtBQUNwQyxVQUFJQSxNQUFNLFlBQVlDLEtBQXRCLEVBQTZCO0FBQzNCLGVBQU9GLE1BQU0sQ0FBQ0MsTUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsYUFBT0YsT0FBTyxDQUFDRSxNQUFELENBQWQ7QUFDRCxLQUxTLENBQVY7QUFNRCxHQVBELENBREY7QUFTRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdW50cnkvLi9saWIvaW5pdC1taWRkbGV3YXJlLnRzP2QyYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmU6IGFueSkge1xuICByZXR1cm4gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/init-middleware.ts\n");

/***/ }),

/***/ "./model/user.ts":
/*!***********************!*\
  !*** ./model/user.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  phone: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', UserSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbC91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBUUEsTUFBTUcsVUFBa0IsR0FBRyxJQUFJRiw0Q0FBSixDQUFXO0FBQ3BDRyxFQUFBQSxLQUFLLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCQyxJQUFBQSxRQUFRLEVBQUUsSUFBMUI7QUFBZ0NDLElBQUFBLE1BQU0sRUFBRTtBQUF4QyxHQUQ2QjtBQUVwQ0MsRUFBQUEsSUFBSSxFQUFFO0FBQUVKLElBQUFBLElBQUksRUFBRUMsTUFBUjtBQUFnQkMsSUFBQUEsUUFBUSxFQUFFO0FBQTFCLEdBRjhCO0FBR3BDRyxFQUFBQSxLQUFLLEVBQUU7QUFBRUwsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCQyxJQUFBQSxRQUFRLEVBQUU7QUFBMUIsR0FINkI7QUFJcENJLEVBQUFBLFFBQVEsRUFBRTtBQUFFTixJQUFBQSxJQUFJLEVBQUVDLE1BQVI7QUFBZ0JDLElBQUFBLFFBQVEsRUFBRTtBQUExQjtBQUowQixDQUFYLENBQTNCO0FBT08sTUFBTUssSUFBa0IsR0FBR1YsaURBQUEsSUFBZUYsK0NBQUssQ0FBQyxNQUFELEVBQVNHLFVBQVQsQ0FBL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudHJ5Ly4vbW9kZWwvdXNlci50cz85ZDg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50LCBtb2RlbCwgTW9kZWwsIFNjaGVtYSwgbW9kZWxzIH0gZnJvbSAnbW9uZ29vc2UnO1xuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xufVxuXG5jb25zdCBVc2VyU2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBwaG9uZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlcjogTW9kZWw8SVVzZXI+ID0gbW9kZWxzLlVzZXIgfHwgbW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb2RlbCIsIlNjaGVtYSIsIm1vZGVscyIsIlVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsIm5hbWUiLCJwaG9uZSIsInBhc3N3b3JkIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./model/user.ts\n");

/***/ }),

/***/ "./src/pages/api/login.ts":
/*!********************************!*\
  !*** ./src/pages/api/login.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_secret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/secret */ \"./api/secret.ts\");\n/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/database */ \"./lib/database.ts\");\n/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/init-middleware */ \"./lib/init-middleware.ts\");\n/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/user */ \"./model/user.ts\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_4__.default)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options\ncors__WEBPACK_IMPORTED_MODULE_6___default()({\n  // Only allow requests with GET, POST and OPTIONS\n  methods: ['GET', 'POST', 'OPTIONS', 'PUT']\n}));\nasync function login(req, res) {\n  await cors(req, res);\n\n  if (req.method === 'POST') {\n    try {\n      await (0,_lib_database__WEBPACK_IMPORTED_MODULE_3__.default)();\n      const {\n        email,\n        password\n      } = req.body;\n      const [user] = await _model_user__WEBPACK_IMPORTED_MODULE_5__.User.find({\n        email: {\n          $in: [email.toLowerCase()]\n        }\n      });\n\n      if (!user) {\n        return res.status(401).json({\n          message: 'usuário não existente'\n        });\n      }\n\n      const isValidPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.compare)(password, user.password);\n\n      if (!isValidPassword) {\n        return res.status(401).json({\n          message: 'senha incorreta'\n        });\n      }\n\n      const token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign)({\n        id: user.id\n      }, _api_secret__WEBPACK_IMPORTED_MODULE_2__.secret, {\n        expiresIn: '4h'\n      });\n      return res.status(201).json({\n        user: {\n          name: user.name,\n          email: user.email,\n          phone: user.phone\n        },\n        token\n      });\n    } catch (error) {\n      return res.status(500).json({\n        message: 'Error servidor'\n      });\n    }\n  } else {\n    return res.status(405).json({\n      message: 'We only support POST'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2xvZ2luLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTyxJQUFJLEdBQUdILDZEQUFjLEVBQ3pCO0FBQ0FFLDJDQUFJLENBQUM7QUFDSDtBQUNBRSxFQUFBQSxPQUFPLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixTQUFoQixFQUEyQixLQUEzQjtBQUZOLENBQUQsQ0FGcUIsQ0FBM0I7QUFRZSxlQUFlQyxLQUFmLENBQXFCQyxHQUFyQixFQUEwQ0MsR0FBMUMsRUFBZ0U7QUFDN0UsUUFBTUosSUFBSSxDQUFDRyxHQUFELEVBQU1DLEdBQU4sQ0FBVjs7QUFFQSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixRQUFJO0FBQ0YsWUFBTVQsc0RBQVEsRUFBZDtBQUVBLFlBQU07QUFBRVUsUUFBQUEsS0FBRjtBQUFTQyxRQUFBQTtBQUFULFVBQXNCSixHQUFHLENBQUNLLElBQWhDO0FBRUEsWUFBTSxDQUFDQyxJQUFELElBQVMsTUFBTVgsa0RBQUEsQ0FBVTtBQUM3QlEsUUFBQUEsS0FBSyxFQUFFO0FBQUVLLFVBQUFBLEdBQUcsRUFBRSxDQUFDTCxLQUFLLENBQUNNLFdBQU4sRUFBRDtBQUFQO0FBRHNCLE9BQVYsQ0FBckI7O0FBSUEsVUFBSSxDQUFDSCxJQUFMLEVBQVc7QUFDVCxlQUFPTCxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFyQixDQUFQO0FBQ0Q7O0FBRUQsWUFBTUMsZUFBZSxHQUFHLE1BQU12QiwrQ0FBTyxDQUFDYyxRQUFELEVBQVdFLElBQUksQ0FBQ0YsUUFBaEIsQ0FBckM7O0FBRUEsVUFBSSxDQUFDUyxlQUFMLEVBQXNCO0FBQ3BCLGVBQU9aLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQXJCLENBQVA7QUFDRDs7QUFFRCxZQUFNRSxLQUFLLEdBQUd2QixrREFBSSxDQUFDO0FBQUV3QixRQUFBQSxFQUFFLEVBQUVULElBQUksQ0FBQ1M7QUFBWCxPQUFELEVBQWtCdkIsK0NBQWxCLEVBQTBCO0FBQzFDd0IsUUFBQUEsU0FBUyxFQUFFO0FBRCtCLE9BQTFCLENBQWxCO0FBR0EsYUFBT2YsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJMLFFBQUFBLElBQUksRUFBRTtBQUNKVyxVQUFBQSxJQUFJLEVBQUVYLElBQUksQ0FBQ1csSUFEUDtBQUVKZCxVQUFBQSxLQUFLLEVBQUVHLElBQUksQ0FBQ0gsS0FGUjtBQUdKZSxVQUFBQSxLQUFLLEVBQUVaLElBQUksQ0FBQ1k7QUFIUixTQURvQjtBQU0xQkosUUFBQUE7QUFOMEIsT0FBckIsQ0FBUDtBQVFELEtBOUJELENBOEJFLE9BQU9LLEtBQVAsRUFBYztBQUNkLGFBQU9sQixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQixDQUFQO0FBQ0Q7QUFDRixHQWxDRCxNQWtDTztBQUNMLFdBQU9YLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291bnRyeS8uL3NyYy9wYWdlcy9hcGkvbG9naW4udHM/OTkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IHNpZ24gfSBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgc2VjcmV0IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3NlY3JldCc7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSAnLi4vLi4vLi4vbGliL2RhdGFiYXNlJztcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi9saWIvaW5pdC1taWRkbGV3YXJlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC91c2VyJztcbmltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xuXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gIENvcnMoe1xuICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QgYW5kIE9QVElPTlNcbiAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnLCAnUFVUJ10sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBhd2FpdCBjb3JzKHJlcSwgcmVzKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRhdGFiYXNlKCk7XG5cbiAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgICAgY29uc3QgW3VzZXJdID0gYXdhaXQgVXNlci5maW5kKHtcbiAgICAgICAgZW1haWw6IHsgJGluOiBbZW1haWwudG9Mb3dlckNhc2UoKV0gfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ3VzdcOhcmlvIG7Do28gZXhpc3RlbnRlJyB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgIGlmICghaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdzZW5oYSBpbmNvcnJldGEnIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2tlbiA9IHNpZ24oeyBpZDogdXNlci5pZCB9LCBzZWNyZXQsIHtcbiAgICAgICAgZXhwaXJlc0luOiAnNGgnLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgICAgICB9LFxuICAgICAgICB0b2tlbixcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3Igc2Vydmlkb3InIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnV2Ugb25seSBzdXBwb3J0IFBPU1QnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29tcGFyZSIsInNpZ24iLCJzZWNyZXQiLCJkYXRhYmFzZSIsImluaXRNaWRkbGV3YXJlIiwiVXNlciIsIkNvcnMiLCJjb3JzIiwibWV0aG9kcyIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZCIsIiRpbiIsInRvTG93ZXJDYXNlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpc1ZhbGlkUGFzc3dvcmQiLCJ0b2tlbiIsImlkIiwiZXhwaXJlc0luIiwibmFtZSIsInBob25lIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/login.ts\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/login.ts"));
module.exports = __webpack_exports__;

})();