"use strict";
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Local)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/LocalTour/styles.ts

const Container = (external_styled_components_default()).div`
  position: absolute;
  height: 0rem;
  width: 0rem;
  z-index: 99999;

  border-left: 27px solid transparent;
  border-right: 27px solid transparent;
  border-top: 27px solid var(--yellow);
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
    background: var(--yellow);
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
    background: var(--yellow);
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
;// CONCATENATED MODULE: ./src/components/LocalTour/index.tsx


function Local({
  img,
  text,
  onClick
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: img,
      title: "img",
      alt: text
    })
  });
}

/***/ })

};
;