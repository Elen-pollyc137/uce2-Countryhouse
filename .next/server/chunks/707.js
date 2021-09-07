"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 6707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



class TypeWriter extends (react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent) {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.period = 2000;
    this.isDeleting = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const {
      data: toRotate
    } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];
    let newText = '';

    if (this.isDeleting) {
      newText = fullTxt.substring(0, this.state.text.length - 1);
    } else {
      newText = fullTxt.substring(0, this.state.text.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && newText === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && newText === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.setState({
      text: newText
    });
    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "typewriter",
      children: this.state.text
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeWriter);

/***/ })

};
;