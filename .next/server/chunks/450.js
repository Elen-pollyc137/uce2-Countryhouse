exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 1327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ House)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3638);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5155);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5527);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4578);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5434);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3990);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5896);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(208);











function House({
  setLocal,
  data,
  isLogin
}) {
  const {
    0: checked,
    1: setChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data === null || data === void 0 ? void 0 : data.available);
  const {
    fetchLocalEdit,
    fetchLocalDelete,
    message,
    loading
  } = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_3__/* .useUser */ .a)();

  function handleSelect() {
    setChecked(!checked);
    fetchLocalEdit(!checked, data === null || data === void 0 ? void 0 : data.id);
  }

  function handleDelete() {
    fetchLocalDelete(data === null || data === void 0 ? void 0 : data.id);
  }

  message && setTimeout(() => {
    setLocal(false);
  }, 2000);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setChecked(data === null || data === void 0 ? void 0 : data.available);
  }, [data]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().containerHouse)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().animeLeft)}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      style: loading['edit'] || loading['delete'] ? {
        opacity: 0.4
      } : {
        opacity: 1
      },
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().house),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().containerImg),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeHouse),
          onClick: () => setLocal(false),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__/* .GrFormClose */ .v8y, {
            size: 32
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().imgHouse),
          src: (data === null || data === void 0 ? void 0 : data.img[1].url) || data.img,
          alt: ""
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contentHouse),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().titleHouse),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: data && (data === null || data === void 0 ? void 0 : data.name)
          }), (data === null || data === void 0 ? void 0 : data.price) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
            children: ["R$", data && (data === null || data === void 0 ? void 0 : data.price), ",00"]
          })]
        }), isLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper__available),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_switch__WEBPACK_IMPORTED_MODULE_2___default()), {
              onChange: handleSelect,
              checked: checked,
              checkedIcon: true,
              uncheckedIcon: true,
              height: 20,
              width: 47,
              handleDiameter: 14,
              offColor: "#e6e6e6",
              onColor: "#39FF14",
              offHandleColor: "#e63a0f",
              onHandleColor: "#ffffff"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: "Dispon\xEDvel"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__/* .VscTrash */ .R6G, {
              onClick: handleDelete,
              size: 32
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__/* .MdEdit */ .zmo, {
              size: 32
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().descriptionHouse),
          children: data && (data === null || data === void 0 ? void 0 : data.description)
        }), (data === null || data === void 0 ? void 0 : data.phone) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contact),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_9__/* .ImWhatsapp */ .KXk, {
            size: 32
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: data && (data === null || data === void 0 ? void 0 : data.phone)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: loading.edit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__/* .Loading */ .g, {})
        })]
      })]
    })
  });
}

/***/ }),

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2010);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Loading() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().loading),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
  });
}

/***/ }),

/***/ 328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ defaultProps)
/* harmony export */ });
const defaultProps = {
  center: {
    lat: -15.7420889,
    lng: -43.0286046
  },
  zoom: 12
};

/***/ }),

/***/ 3638:
/***/ ((module) => {

// Exports
module.exports = {
	"house": "styles_house__SSeF2",
	"containerHouse": "styles_containerHouse__2ex_Z",
	"imgHouse": "styles_imgHouse__1pzeI",
	"containerImg": "styles_containerImg__MgMON",
	"closeHouse": "styles_closeHouse__37e5v",
	"contentHouse": "styles_contentHouse__UeS0f",
	"titleHouse": "styles_titleHouse__18jdT",
	"wrapper__available": "styles_wrapper__available__2PXzG",
	"descriptionHouse": "styles_descriptionHouse__1FRCk",
	"contact": "styles_contact__2Rc46",
	"animeLeft": "styles_animeLeft__3FQC2"
};


/***/ }),

/***/ 2010:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "styles_loading__-gkwb",
	"isRotation": "styles_isRotation__1twug"
};


/***/ })

};
;