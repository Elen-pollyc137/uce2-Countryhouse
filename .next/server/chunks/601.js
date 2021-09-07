exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 8601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Local)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/hooks/useUser.tsx
var useUser = __webpack_require__(5896);
// EXTERNAL MODULE: ./src/components/LoadingBall/styles.module.scss
var styles_module = __webpack_require__(2154);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/LoadingBall/index.jsx



function LoadingBall() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (styles_module_default()).loading,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
  });
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Local/styles.ts

const Container = (external_styled_components_default()).div`
  position: absolute;
  height: 0rem;
  width: 0rem;
  z-index: 99999;

  border-left: 27px solid transparent;
  border-right: 27px solid transparent;
  border-top: 27px solid
    ${props => props.available ? '#06d6a0' : '#f56565'};
  cursor: pointer;
  img {
    position: relative;
    height: 6rem;
    width: 6rem;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -7.3rem;
    left: -3rem;
    cursor: pointer;
  }
  &::before {
    content: '';
    height: 6.5rem;
    width: 6.5rem;
    background: ${props => props.available ? '#06d6a0' : '#f56565'};
    border-radius: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: -7.5rem;
    left: -3.25rem;
    cursor: pointer;
  }
  label {
    position: relative;
    margin-top: -10rem;
    height: 8rem;
    width: 8rem;
    background: ${props => props.available ? '#06d6a0' : '#f56565'};
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 3rem;
    color: aliceblue;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    opacity: 1;
  }
`;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/Local/index.tsx






function Local({
  img,
  text,
  available,
  onClick
}) {
  const {
    loading
  } = (0,useUser/* useUser */.a)();
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    onClick: onClick,
    available: available,
    children: loading.local ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-10rem'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(LoadingBall, {})
    }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: img,
      title: "img",
      alt: text
    })
  });
}

/* harmony default export */ const components_Local = (/*#__PURE__*/(0,external_react_.memo)(Local));

/***/ }),

/***/ 2154:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "styles_loading__1F5_4",
	"dots": "styles_dots__1ru_0"
};


/***/ })

};
;