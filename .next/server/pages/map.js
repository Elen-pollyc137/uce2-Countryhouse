(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 4985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Location),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "google-map-react"
var external_google_map_react_ = __webpack_require__(5403);
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/pages/map/styles.module.scss
var styles_module = __webpack_require__(7037);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/Local/index.tsx + 2 modules
var Local = __webpack_require__(8601);
// EXTERNAL MODULE: ./src/services/Api.ts
var Api = __webpack_require__(6349);
// EXTERNAL MODULE: ./src/components/LocalTour/index.tsx + 1 modules
var LocalTour = __webpack_require__(905);
// EXTERNAL MODULE: ./src/components/House/index.tsx
var House = __webpack_require__(1327);
;// CONCATENATED MODULE: ./lib/dato.ts
const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, {
  variables
} = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

async function getAllLocals() {
  const data = await fetchCmsAPI(`

  {
    allLocals {
      img {
        url
      }
      name
      localization {
        latitude
        longitude
      }
      description
      id
    }
  }
  `);
  return data.allLocals;
}
// EXTERNAL MODULE: ./src/hooks/useUser.tsx
var useUser = __webpack_require__(5896);
// EXTERNAL MODULE: ./utils/defaultProps.ts
var defaultProps = __webpack_require__(328);
;// CONCATENATED MODULE: ./src/pages/map/index.tsx






const key = "AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek";








function Location({
  pointer
}) {
  const {
    0: locals,
    1: setLocals
  } = (0,external_react_.useState)(false);
  const {
    0: local,
    1: setLocal
  } = (0,external_react_.useState)(false);
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(false);
  const {
    setError
  } = (0,useUser/* useUser */.a)();

  function mapClickedLocal(data) {
    setData(data);
    setLocal(true);
  }

  async function fetchLocal() {
    try {
      const {
        data
      } = await (0,Api/* apiGet */.R1)('/api/locations');
      setLocals(data);
      console.log(data);
    } catch (error) {
      setError('Não foi possível pegar os Locais');
    }
  }

  (0,external_react_.useEffect)(() => {
    fetchLocal(); // eslint-disable-next-line
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Country House | Map"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (styles_module_default()).container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (styles_module_default()).map,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_google_map_react_default()), {
          bootstrapURLKeys: {
            key,
            language: 'pt-br'
          },
          defaultCenter: defaultProps/* defaultProps.center */.l.center,
          defaultZoom: defaultProps/* defaultProps.zoom */.l.zoom,
          options: map => ({
            mapTypeId: map.MapTypeId.SATELLITE
          }),
          children: [locals && locals.map(local => /*#__PURE__*/jsx_runtime_.jsx(Local/* default */.Z, {
            onClick: () => mapClickedLocal(local),
            lat: local.lat,
            lng: local.lng,
            text: local.name,
            img: local.img,
            available: local.available
          }, local.id)), pointer.map(local => {
            var _local$localization, _local$localization2;

            return /*#__PURE__*/jsx_runtime_.jsx(LocalTour/* default */.Z, {
              onClick: () => mapClickedLocal(local),
              lat: (_local$localization = local.localization) === null || _local$localization === void 0 ? void 0 : _local$localization.latitude,
              lng: (_local$localization2 = local.localization) === null || _local$localization2 === void 0 ? void 0 : _local$localization2.longitude,
              text: local.name,
              img: local.img[0].url
            }, local.id);
          })]
        })
      }), local && /*#__PURE__*/jsx_runtime_.jsx(House/* default */.Z, {
        setLocal: setLocal,
        data: data
      }), !local && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (styles_module_default()).painel,
        children: pointer.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => mapClickedLocal(item),
          className: (styles_module_default()).card,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: item.img[0].url,
            alt: item.name,
            className: (styles_module_default()).img
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (styles_module_default()).texts,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: item.name
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: item.description
            })]
          })]
        }, item.name))
      })]
    })]
  });
}
const getServerSideProps = async () => {
  const pointer = await getAllLocals();
  return {
    props: {
      pointer
    }
  };
};

/***/ }),

/***/ 7037:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__1NBQS",
	"map": "styles_map__ydfB3",
	"containerForm": "styles_containerForm__D9JMG",
	"card": "styles_card__2Q-GE",
	"img": "styles_img__1dpMj",
	"painel": "styles_painel__2Rj21",
	"texts": "styles_texts__2-rzk",
	"button": "styles_button__25Jm6"
};


/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 5403:
/***/ ((module) => {

"use strict";
module.exports = require("google-map-react");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5527:
/***/ ((module) => {

"use strict";
module.exports = require("react-switch");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 8993:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [127,739,896,601,450,905], () => (__webpack_exec__(4985)));
module.exports = __webpack_exports__;

})();