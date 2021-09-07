"use strict";
exports.id = 896;
exports.ids = [896];
exports.modules = {

/***/ 6007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AuthContext),
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const {
  Provider
} = AuthContext;
function AuthProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: login,
    1: setLogin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: myLocal,
    1: setMyLocal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  if (error || message) {
    setTimeout(() => {
      setError(false);
      setMessage(false);
    }, 4000);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Provider, {
    value: {
      user,
      setUser,
      login,
      setLogin,
      loading,
      setLoading,
      error,
      setError,
      message,
      setMessage,
      myLocal,
      setMyLocal,
      form,
      setForm
    },
    children: children
  });
}

/***/ }),

/***/ 7750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vM": () => (/* binding */ getCookUser),
  "LP": () => (/* binding */ getToken),
  "NC": () => (/* binding */ removeCookUser),
  "gy": () => (/* binding */ removeToken),
  "RZ": () => (/* binding */ setCookUser),
  "o4": () => (/* binding */ setToken)
});

// UNUSED EXPORTS: COOKIE_TOKEN, COOKIE_USER

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(8993);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
;// CONCATENATED MODULE: ./src/helpers/Store.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cookie = new (external_universal_cookie_default())();
const defaultOptions = {
  path: '/'
};
const getCookie = (name, options) => {
  if (!name) return null;
  return cookie.get(name, _objectSpread(_objectSpread({}, defaultOptions), options));
};
const setCookie = (name, value, options) => {
  if (!name || value === undefined) return null;
  cookie.set(name, value, _objectSpread(_objectSpread({}, defaultOptions), options));
  return true;
};
const removeCookie = (name, options) => {
  if (!name) return null;
  cookie.remove(name, _objectSpread(_objectSpread({}, defaultOptions), options));
};
;// CONCATENATED MODULE: ./src/helpers/Cookies.ts

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);
const options = {
  expires
};
const optionsExpires = {
  expires
};
const COOKIE_USER = 'user_next';
const COOKIE_TOKEN = 'tk_netx';
const setCookUser = account => {
  setCookie(COOKIE_USER, account, optionsExpires);
};
const getCookUser = () => {
  return getCookie(COOKIE_USER, options);
};
const removeCookUser = () => removeCookie(COOKIE_USER, optionsExpires);
const setToken = token => setCookie(COOKIE_TOKEN, token, optionsExpires);
const getToken = () => getCookie(COOKIE_TOKEN, options);
const removeToken = () => removeCookie(COOKIE_TOKEN, optionsExpires);

/***/ }),

/***/ 5896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6007);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6349);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7750);





function useUser() {
  const {
    0: local,
    1: setLocal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    user,
    setUser,
    login,
    setLogin,
    loading,
    setLoading,
    error,
    setError,
    message,
    setMessage,
    myLocal,
    setMyLocal,
    form,
    setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .V);

  async function fetchLocal() {
    try {
      setLoading({
        local: true
      });
      setError(false);
      const {
        data
      } = await (0,_services_Api__WEBPACK_IMPORTED_MODULE_2__/* .apiGet */ .R1)('/api/location');
      setMyLocal(data);
    } catch (error) {
      const {
        data,
        status
      } = await error.response;
      const {
        message
      } = await data;

      if (status === 500) {
        setError('Error servidor');
      }

      if (status === 401) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
        setError(message);
      }

      setError(message);
    } finally {
      setLoading({
        local: false
      });
    }
  }

  async function fetchLocalEdit(body, id) {
    try {
      setLoading({
        edit: true
      });
      setError(false);
      const formData = new FormData();
      formData.append('available', body === true ? '1' : '0');
      const {
        data
      } = await (0,_services_Api__WEBPACK_IMPORTED_MODULE_2__/* .apiFormDataPut */ .$v)(`/api/fileupdate?file=${id}`, formData);
      setMessage('Alterado com sucesso!');
      fetchLocal();
    } catch (err) {
      const {
        data,
        status
      } = await err.response;
      const {
        message
      } = await data;

      if (status === 500) {
        setError('Error servidor');
      }

      if (status === 401) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
        setError(message);
      }

      setError(message);
    } finally {
      setLoading({
        edit: false
      });
    }
  }

  async function fetchLocalDelete(id) {
    try {
      setLoading({
        delete: true
      });
      setError(false);
      const {
        data
      } = await (0,_services_Api__WEBPACK_IMPORTED_MODULE_2__/* .apiDelete */ .QW)(`/api/filedelete?file=${id}`);
      data && setMessage('Deletado com sucesso!');
      fetchLocal();
    } catch (err) {
      const {
        data,
        status
      } = await err.response;
      const {
        message
      } = await data;

      if (status === 500) {
        setError('Error servidor');
      }

      if (status === 401) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
        setError(message);
      }

      setLocal(false);
      setError(message);
    } finally {
      setLoading({
        delete: false
      });
    }
  }

  async function fetchCreateLocal(body, lat, lng, file) {
    try {
      setLoading({
        create: true
      });
      setError(false);
      const formData = new FormData();
      formData.append('file', file.raw);
      formData.append('name', body.name);
      formData.append('description', body.description);
      formData.append('lat', lat === null || lat === void 0 ? void 0 : lat.toString());
      formData.append('lng', lng === null || lng === void 0 ? void 0 : lng.toString());
      formData.append('price', String(body.price));
      formData.append('available', body.available === true ? '1' : '0');
      const {
        data
      } = await (0,_services_Api__WEBPACK_IMPORTED_MODULE_2__/* .apiFormData */ .U8)('/api/filecreate', formData);

      if (data) {
        setMessage('Criado com sucesso!');
        setForm(false);
        fetchLocal();
      }
    } catch (err) {
      const {
        data,
        status
      } = await err.response;
      const {
        message
      } = await data;

      if (status === 500) {
        setError('Error servidor');
      }

      if (status === 401) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
        setError(message);
      }

      setError(message);
    } finally {
      setLoading({
        create: false
      });
    }
  }

  async function userLogin({
    email,
    password
  }) {
    try {
      setLoading({
        login: true
      });
      setError(false);
      const {
        data
      } = await (0,_services_Api__WEBPACK_IMPORTED_MODULE_2__/* .apiPost */ .sg)('/api/login', {
        email,
        password
      });
      const {
        user,
        token
      } = await data;
      setLogin(true);
      setUser(user);
      (0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_4__/* .setToken */ .o4)(token);
      (0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_4__/* .setCookUser */ .RZ)(user);
      setMessage('Login efetuado com sucesso');
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/register');
    } catch (error) {
      const {
        data,
        status
      } = await error.response;
      const {
        message
      } = await data;

      if (status === 500) {
        setError('Error servidor');
      }

      if (status === 401) {
        setError(message);
      }

      setError(message);
    } finally {
      setLoading({
        login: false
      });
    }
  }

  async function userCreate({
    email,
    password,
    phone,
    name,
    passwordConfirm
  }) {
    try {
      setLoading(true);
      setError(false);
      setMessage(false);
      const {
        data
      } = await (0,_services_Api__WEBPACK_IMPORTED_MODULE_2__/* .apiPost */ .sg)('/api/create', {
        email,
        password,
        passwordConfirm,
        name,
        phone
      });
      const {
        message
      } = await data;
      setMessage(message);
      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
      }, 4000);
    } catch (error) {
      const {
        data,
        status
      } = await error.response;
      const {
        message
      } = await data;

      if (status === 500) {
        setError('Error servidor');
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  function userLogout() {
    setError(false);
    setUser(null);
    setLoading(false);
    setLocal(false);
    setMyLocal(false);
    setUser(null);
    setLogin(false);
    (0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_4__/* .removeCookUser */ .NC)();
    (0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_4__/* .removeToken */ .gy)();
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
  }

  async function AutoLogin() {
    if ((0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_4__/* .getToken */ .LP)()) {
      try {
        setLoading(true);
        setError(false);
        const {
          data
        } = await (0,_services_Api__WEBPACK_IMPORTED_MODULE_2__/* .apiGet */ .R1)('/api/location');
        setMyLocal(data);
        setUser((0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_4__/* .getCookUser */ .vM)());
        setLogin(true);
      } catch (error) {
        const {
          data,
          status
        } = await error.response;
        const {
          message
        } = await data;

        if (status === 500) {
          setError('Error servidor');
        }

        if (status === 401) {
          next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
          userLogout();
          setError(message);
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    AutoLogin(); // eslint-disable-next-line
  }, []);
  return {
    user,
    userLogin,
    login,
    userLogout,
    // userLogout,
    loading,
    error,
    userCreate,
    message,
    setError,
    // userResetPassword,
    // setError,
    myLocal,
    fetchLocal,
    fetchLocalEdit,
    fetchLocalDelete,
    fetchCreateLocal,
    setLocal,
    local,
    setForm,
    form
  };
}

/***/ }),

/***/ 6349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R1": () => (/* binding */ apiGet),
/* harmony export */   "sg": () => (/* binding */ apiPost),
/* harmony export */   "QW": () => (/* binding */ apiDelete),
/* harmony export */   "U8": () => (/* binding */ apiFormData),
/* harmony export */   "$v": () => (/* binding */ apiFormDataPut)
/* harmony export */ });
/* unused harmony exports getApiUrl, getHeaders, apiPut */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7750);


const URI = "http://localhost:3000";
const getApiUrl = path => {
  return `${URI}${path}`;
};
const getHeaders = () => {
  const token = (0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)();
  if (!token) return {};
  return {
    Authorization: `Bearer ${token}`
  };
};
const apiGet = path => {
  const url = getApiUrl(path);
  console.log('*** url api', url);
  const options = {
    headers: getHeaders()
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, options);
};
const apiPost = (path, data) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders()
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, data, options);
};
const apiPut = (path, data) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders()
  };
  return axios.put(url, data, options);
};
const apiDelete = path => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders()
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete(url, options);
};
const apiFormData = (path, data) => {
  const url = getApiUrl(path);
  const token = (0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)();
  const options = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': `multipart/form-data`,
      Authorization: `Bearer ${token}`
    }
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, data, options);
};
const apiFormDataPut = (path, data) => {
  const url = getApiUrl(path);
  const token = (0,_helpers_Cookies__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)();
  const options = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': `multipart/form-data`,
      Authorization: `Bearer ${token}`
    }
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put(url, data, options);
};

/***/ })

};
;