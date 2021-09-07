"use strict";
(() => {
var exports = {};
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 1707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

// EXTERNAL MODULE: ./lib/database.ts
var database = __webpack_require__(995);
// EXTERNAL MODULE: ./model/user.ts
var model_user = __webpack_require__(1527);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(6552);
;// CONCATENATED MODULE: ./utils/validate.ts
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(String(email).toLowerCase());
}
// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(479);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);
// EXTERNAL MODULE: ./lib/init-middleware.ts
var init_middleware = __webpack_require__(3448);
;// CONCATENATED MODULE: ./src/pages/api/create.ts






const cors = (0,init_middleware/* default */.Z)(external_cors_default()({
  methods: ['GET', 'POST', 'OPTIONS', 'PUT']
}));
async function create(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    try {
      await (0,database/* default */.Z)();
      const {
        email,
        password,
        name,
        passwordConfirm,
        phone
      } = req.body;
      const isEmail = validateEmail(email);

      if (!isEmail) {
        return res.status(401).json({
          message: 'email inválido'
        });
      }

      const [user] = await model_user/* User.find */.n.find({
        email: {
          $in: [email.toLowerCase()]
        }
      });

      if (user) {
        return res.status(401).json({
          message: 'email já cadastrado'
        });
      }

      if (password !== passwordConfirm) {
        return res.status(401).json({
          message: 'senhas não confere'
        });
      }

      const hashPassword = await (0,external_bcrypt_.hash)(password, 10);
      await model_user/* User.create */.n.create({
        email,
        password: hashPassword,
        name,
        phone
      });
      return res.status(201).json({
        message: 'criado com Sucesso'
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send('error servidor');
    }
  } else {
    return res.status(405).json({
      message: 'method not allowed'
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
var __webpack_exports__ = __webpack_require__.X(0, [512], () => (__webpack_exec__(1707)));
module.exports = __webpack_exports__;

})();