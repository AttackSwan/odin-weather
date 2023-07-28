"use strict";
(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
	height: 100vh;
	width: 100vw;
	margin: 0;
}

.content {
	height: 100%;
	width: 100%;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-position: -300px;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}

.search {
	height: 30%;
	width: 75%;
	border: 1px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
}

input {
	width: 100%;
	height: 30px;
}

button {
	height: 50px;
	width: 100px;
	border-radius: 15px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,yDAAgD;CAChD,2BAA2B;CAC3B,sBAAsB;CACtB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,mBAAmB;AACpB","sourcesContent":["body {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0;\n}\n\n.content {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-image: url(\"./images/background.jpg\");\n\tbackground-position: -300px;\n\tbackground-size: cover;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.search {\n\theight: 30%;\n\twidth: 75%;\n\tborder: 1px solid white;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\ninput {\n\twidth: 100%;\n\theight: 30px;\n}\n\nbutton {\n\theight: 50px;\n\twidth: 100px;\n\tborder-radius: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");
/* harmony import */ var _modules_GUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/GUI */ "./src/modules/GUI.js");




const fetchManager = (0,_modules_weather__WEBPACK_IMPORTED_MODULE_1__["default"])();
const GUI = (0,_modules_GUI__WEBPACK_IMPORTED_MODULE_2__["default"])();
// Fetch data and process
fetchManager.fetchAndProcessWeather();
GUI.loadGUI();

function addListeners() {
	const searchButton = document.getElementById("searchButton");
	const searchInput = document.querySelector("input");

	searchButton.addEventListener("click", searchWeather);
	searchInput.addEventListener("keyup", (e) => {
		if (e.key === "Enter") {
			searchButton.click();
		}
	});
}

function searchWeather() {
	const searchInput = document.querySelector("input");
	const searchQuery = searchInput.value;

	if (searchQuery === "") {
		console.log("Error: search blank");
	} else {
		fetchManager.fetchAndProcessWeather(searchQuery);
	}
}

// addListeners();


/***/ }),

/***/ "./src/modules/GUI.js":
/*!****************************!*\
  !*** ./src/modules/GUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/modules/utility.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./src/modules/weather.js");



const guiManager = () => {
	const content = document.querySelector(".content");

	function loadGUI() {
		addDailyStats(content);
		addSearchDiv(content);
		const hoursDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("hours");
		const forecastDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("forecast");

		content.append(hoursDiv, forecastDiv);
	}

	function addSearchDiv(container) {
		const search = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("search");

		const inputDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("search_input");
		const searchInput = document.createElement("input");
		const searchButton = document.createElement("button");
		searchButton.id = "searchButton";
		const searchIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("searchIcon");
		inputDiv.append(searchInput, searchButton, searchIcon);

		const buttons = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("temperature_buttons");
		const buttonC = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createButton)("temp_button", "Celcius");
		const buttonF = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createButton)("temp_button", "Fahrenheit");
		buttons.append(buttonC, buttonF);

		search.append(inputDiv, buttons);
		container.appendChild(search);
	}

	function addDailyStats(container) {
		const dailyStats = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("dailyStats");

		const leftdiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("location");
		const rightdiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("airDetails");

		const temp = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("current_temperature");
		const name = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("location");
		const time = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("current_time");

		const conditions = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("current_conditions");
		const icon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("current_icon");
		const feelsLike = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("current_feels_like");
		const humidity = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("current_humidity");
		const chanceRain = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("chance_of_rain");
		const wind = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("current_wind_speed");

		leftdiv.append(temp, name, time);
		rightdiv.append(
			conditions,
			icon,
			feelsLike,
			humidity,
			chanceRain,
			wind
		);
		dailyStats.append(leftdiv, rightdiv);
		container.appendChild(dailyStats);
	}

	return { loadGUI };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (guiManager);


/***/ }),

/***/ "./src/modules/utility.js":
/*!********************************!*\
  !*** ./src/modules/utility.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createDiv: () => (/* binding */ createDiv)
/* harmony export */ });
const createDiv = (className) => {
	const div = document.createElement("div");
	div.classList.add(className);
	return div;
};

const createButton = (className, buttonText) => {
	const button = document.createElement("button");
	button.classList.add(className);
	button.textContent = buttonText;
	return button;
};




/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherManager = () => {
	const defaultLocation = "Melbourne, Australia";
	const forecastData = [];
	const hourlyData = [];
	let dailyData;

	class Weather {
		constructor(
			condition,
			country,
			daily_chance_of_rain,
			feelsLikeC,
			feelsLikeF,
			humidity,
			iconURL,
			location,
			temp_c,
			temp_f,
			time,
			wind_kph,
			wind_mph
		) {
			this.condition = condition;
			this.country = country;
			this.daily_chance_of_rain = daily_chance_of_rain;
			this.feelsLikeC = feelsLikeC;
			this.feelsLikeF = feelsLikeF;
			this.humidity = humidity;
			this.iconURL = iconURL;
			this.location = location;
			this.temp_c = temp_c;
			this.temp_f = temp_f;
			this.time = time;
			this.wind_kph = wind_kph;
			this.wind_mph = wind_mph;
		}
	}

	class Forecast {
		constructor(
			day,
			temp_high_c,
			temp_high_f,
			temp_low_c,
			temp_low_f,
			icon
		) {
			this.day = day;
			this.temp_high_c = temp_high_c;
			this.temp_high_f = temp_high_f;
			this.temp_low_c = temp_low_c;
			this.temp_low_f = temp_low_f;
			this.icon = icon;
		}
	}

	class Hourly {
		constructor(time, temp_c, temp_f, icon) {
			this.time = time;
			this.temp_c = temp_c;
			this.temp_f = temp_f;
			this.icon = icon;
		}
	}

	async function fetchAndProcessWeather(location) {
		try {
			const fetchedData = await fetchWeather(location);
			if (fetchedData) {
				dailyData = processDailyData(fetchedData);
				processForecastData(fetchedData);
				processHourlyData(fetchedData);

				console.log("Fetched data: ", fetchedData);
				console.log(dailyData);
				console.log(forecastData);
				console.log("Hourly data: ", hourlyData);
			} else {
				console.log("Error: No weather data to process.");
			}
		} catch (error) {
			console.log("Error fetching weather data: ", error);
		}
	}

	async function fetchWeather(location = defaultLocation) {
		const apiKey = "e768f5d83b0d4f0f89b73247232707";
		let apiURL = "";

		if (location) {
			apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=no`;
		} else {
			apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${defaultLocation}&days=3&aqi=yes&alerts=no`;
		}

		const apiResponse = await fetch(apiURL);
		const data = await apiResponse.json();
		return data;
	}

	function processDailyData(data) {
		if (!data) {
			console.log("error: no data to process");
			return;
		} else {
			// Process data for current day:
			// Deconstruct data object into desired parameters
			const {
				current: {
					condition: { text: condition, icon },
					feelslike_c,
					feelslike_f,
					humidity,
					temp_c,
					temp_f,
					wind_kph,
					wind_mph,
				},
				location: { country, name, localtime },
			} = data;

			const daily_chance_of_rain =
				data.forecast.forecastday[0].day.daily_chance_of_rain;

			const current_day_data = new Weather(
				condition,
				country,
				daily_chance_of_rain,
				feelslike_c,
				feelslike_f,
				humidity,
				icon,
				name,
				temp_c,
				temp_f,
				localtime,
				wind_kph,
				wind_mph
			);

			return current_day_data;
		}
	}

	function processForecastData(data) {
		if (!data) {
			console.log("error: no data to process");
			return;
		} else {
			const { forecast } = data;

			if (!forecast || !Array.isArray(forecast.forecastday)) {
				console.log("Error: Forecast data is not available.");
				return;
			}

			// Process forecast data
			forecast.forecastday.forEach((day) => {
				const forecastDate = day.date;
				const maxtemp_c = day.day.maxtemp_c;
				const maxtemp_f = day.day.maxtemp_f;
				const mintemp_c = day.day.mintemp_c;
				const mintemp_f = day.day.mintemp_f;
				const dailyIcon = day.day.condition.icon;

				const dailyForecastData = new Forecast(
					forecastDate,
					maxtemp_c,
					maxtemp_f,
					mintemp_c,
					mintemp_f,
					dailyIcon
				);
				forecastData.push(dailyForecastData);
			});
		}
	}

	function processHourlyData(data) {
		// 7 lots of data @ every 3 hours
		if (!data) {
			console.log("error: no data to process");
			return;
		} else {
			const hourData = data.forecast.forecastday[0].hour;

			if (!hourData || !Array.isArray(hourData)) {
				console.log("Error: Forecast data is not available.");
				return;
			}

			for (let i = 0; i < 24; i += 3) {
				const hour = hourData[i].time;
				const temp_c = hourData[i].temp_c;
				const temp_f = hourData[i].temp_f;
				const icon = hourData[i].condition.icon;

				const newHour = new Hourly(hour, temp_c, temp_f, icon);
				hourlyData.push(newHour);
			}
		}
	}

	// fetchAndProcessWeather();

	return {
		fetchAndProcessWeather,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherManager);


/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6dea7da6740319cb823.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SiwrREFBK0QsT0FBTyxLQUFLLGdCQUFnQjtBQUMzRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0JBQWdCLDBCQUEwQjtBQUMxQyxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixXQUFXLFdBQVc7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy9HVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL21vZHVsZXMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0bWFyZ2luOiAwO1xufVxuXG4uY29udGVudCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMwMHB4O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaCB7XG5cdGhlaWdodDogMzAlO1xuXHR3aWR0aDogNzUlO1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0IHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMzBweDtcbn1cblxuYnV0dG9uIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogMTAwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gseURBQWdEO0NBQ2hELDJCQUEyQjtDQUMzQixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMDBweDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaCB7XFxuXFx0aGVpZ2h0OiAzMCU7XFxuXFx0d2lkdGg6IDc1JTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgd2VhdGhlck1hbmFnZXIgZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyXCI7XG5pbXBvcnQgZ3VpTWFuYWdlciBmcm9tIFwiLi9tb2R1bGVzL0dVSVwiO1xuXG5jb25zdCBmZXRjaE1hbmFnZXIgPSB3ZWF0aGVyTWFuYWdlcigpO1xuY29uc3QgR1VJID0gZ3VpTWFuYWdlcigpO1xuLy8gRmV0Y2ggZGF0YSBhbmQgcHJvY2Vzc1xuZmV0Y2hNYW5hZ2VyLmZldGNoQW5kUHJvY2Vzc1dlYXRoZXIoKTtcbkdVSS5sb2FkR1VJKCk7XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcblx0Y29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdXR0b25cIik7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuXG5cdHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoV2VhdGhlcik7XG5cdHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuXHRcdGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0XHRzZWFyY2hCdXR0b24uY2xpY2soKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hXZWF0aGVyKCkge1xuXHRjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblx0Y29uc3Qgc2VhcmNoUXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuXHRpZiAoc2VhcmNoUXVlcnkgPT09IFwiXCIpIHtcblx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBzZWFyY2ggYmxhbmtcIik7XG5cdH0gZWxzZSB7XG5cdFx0ZmV0Y2hNYW5hZ2VyLmZldGNoQW5kUHJvY2Vzc1dlYXRoZXIoc2VhcmNoUXVlcnkpO1xuXHR9XG59XG5cbi8vIGFkZExpc3RlbmVycygpO1xuIiwiaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVCdXR0b24gfSBmcm9tIFwiLi91dGlsaXR5LmpzXCI7XG5pbXBvcnQgd2VhdGhlck1hbmFnZXIgZnJvbSBcIi4vd2VhdGhlci5qc1wiO1xuXG5jb25zdCBndWlNYW5hZ2VyID0gKCkgPT4ge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5cdGZ1bmN0aW9uIGxvYWRHVUkoKSB7XG5cdFx0YWRkRGFpbHlTdGF0cyhjb250ZW50KTtcblx0XHRhZGRTZWFyY2hEaXYoY29udGVudCk7XG5cdFx0Y29uc3QgaG91cnNEaXYgPSBjcmVhdGVEaXYoXCJob3Vyc1wiKTtcblx0XHRjb25zdCBmb3JlY2FzdERpdiA9IGNyZWF0ZURpdihcImZvcmVjYXN0XCIpO1xuXG5cdFx0Y29udGVudC5hcHBlbmQoaG91cnNEaXYsIGZvcmVjYXN0RGl2KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFNlYXJjaERpdihjb250YWluZXIpIHtcblx0XHRjb25zdCBzZWFyY2ggPSBjcmVhdGVEaXYoXCJzZWFyY2hcIik7XG5cblx0XHRjb25zdCBpbnB1dERpdiA9IGNyZWF0ZURpdihcInNlYXJjaF9pbnB1dFwiKTtcblx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdHNlYXJjaEJ1dHRvbi5pZCA9IFwic2VhcmNoQnV0dG9uXCI7XG5cdFx0Y29uc3Qgc2VhcmNoSWNvbiA9IGNyZWF0ZURpdihcInNlYXJjaEljb25cIik7XG5cdFx0aW5wdXREaXYuYXBwZW5kKHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24sIHNlYXJjaEljb24pO1xuXG5cdFx0Y29uc3QgYnV0dG9ucyA9IGNyZWF0ZURpdihcInRlbXBlcmF0dXJlX2J1dHRvbnNcIik7XG5cdFx0Y29uc3QgYnV0dG9uQyA9IGNyZWF0ZUJ1dHRvbihcInRlbXBfYnV0dG9uXCIsIFwiQ2VsY2l1c1wiKTtcblx0XHRjb25zdCBidXR0b25GID0gY3JlYXRlQnV0dG9uKFwidGVtcF9idXR0b25cIiwgXCJGYWhyZW5oZWl0XCIpO1xuXHRcdGJ1dHRvbnMuYXBwZW5kKGJ1dHRvbkMsIGJ1dHRvbkYpO1xuXG5cdFx0c2VhcmNoLmFwcGVuZChpbnB1dERpdiwgYnV0dG9ucyk7XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGREYWlseVN0YXRzKGNvbnRhaW5lcikge1xuXHRcdGNvbnN0IGRhaWx5U3RhdHMgPSBjcmVhdGVEaXYoXCJkYWlseVN0YXRzXCIpO1xuXG5cdFx0Y29uc3QgbGVmdGRpdiA9IGNyZWF0ZURpdihcImxvY2F0aW9uXCIpO1xuXHRcdGNvbnN0IHJpZ2h0ZGl2ID0gY3JlYXRlRGl2KFwiYWlyRGV0YWlsc1wiKTtcblxuXHRcdGNvbnN0IHRlbXAgPSBjcmVhdGVEaXYoXCJjdXJyZW50X3RlbXBlcmF0dXJlXCIpO1xuXHRcdGNvbnN0IG5hbWUgPSBjcmVhdGVEaXYoXCJsb2NhdGlvblwiKTtcblx0XHRjb25zdCB0aW1lID0gY3JlYXRlRGl2KFwiY3VycmVudF90aW1lXCIpO1xuXG5cdFx0Y29uc3QgY29uZGl0aW9ucyA9IGNyZWF0ZURpdihcImN1cnJlbnRfY29uZGl0aW9uc1wiKTtcblx0XHRjb25zdCBpY29uID0gY3JlYXRlRGl2KFwiY3VycmVudF9pY29uXCIpO1xuXHRcdGNvbnN0IGZlZWxzTGlrZSA9IGNyZWF0ZURpdihcImN1cnJlbnRfZmVlbHNfbGlrZVwiKTtcblx0XHRjb25zdCBodW1pZGl0eSA9IGNyZWF0ZURpdihcImN1cnJlbnRfaHVtaWRpdHlcIik7XG5cdFx0Y29uc3QgY2hhbmNlUmFpbiA9IGNyZWF0ZURpdihcImNoYW5jZV9vZl9yYWluXCIpO1xuXHRcdGNvbnN0IHdpbmQgPSBjcmVhdGVEaXYoXCJjdXJyZW50X3dpbmRfc3BlZWRcIik7XG5cblx0XHRsZWZ0ZGl2LmFwcGVuZCh0ZW1wLCBuYW1lLCB0aW1lKTtcblx0XHRyaWdodGRpdi5hcHBlbmQoXG5cdFx0XHRjb25kaXRpb25zLFxuXHRcdFx0aWNvbixcblx0XHRcdGZlZWxzTGlrZSxcblx0XHRcdGh1bWlkaXR5LFxuXHRcdFx0Y2hhbmNlUmFpbixcblx0XHRcdHdpbmRcblx0XHQpO1xuXHRcdGRhaWx5U3RhdHMuYXBwZW5kKGxlZnRkaXYsIHJpZ2h0ZGl2KTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlTdGF0cyk7XG5cdH1cblxuXHRyZXR1cm4geyBsb2FkR1VJIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBndWlNYW5hZ2VyO1xuIiwiY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRyZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKGNsYXNzTmFtZSwgYnV0dG9uVGV4dCkgPT4ge1xuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVCdXR0b24gfTtcbiIsImNvbnN0IHdlYXRoZXJNYW5hZ2VyID0gKCkgPT4ge1xuXHRjb25zdCBkZWZhdWx0TG9jYXRpb24gPSBcIk1lbGJvdXJuZSwgQXVzdHJhbGlhXCI7XG5cdGNvbnN0IGZvcmVjYXN0RGF0YSA9IFtdO1xuXHRjb25zdCBob3VybHlEYXRhID0gW107XG5cdGxldCBkYWlseURhdGE7XG5cblx0Y2xhc3MgV2VhdGhlciB7XG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRjb25kaXRpb24sXG5cdFx0XHRjb3VudHJ5LFxuXHRcdFx0ZGFpbHlfY2hhbmNlX29mX3JhaW4sXG5cdFx0XHRmZWVsc0xpa2VDLFxuXHRcdFx0ZmVlbHNMaWtlRixcblx0XHRcdGh1bWlkaXR5LFxuXHRcdFx0aWNvblVSTCxcblx0XHRcdGxvY2F0aW9uLFxuXHRcdFx0dGVtcF9jLFxuXHRcdFx0dGVtcF9mLFxuXHRcdFx0dGltZSxcblx0XHRcdHdpbmRfa3BoLFxuXHRcdFx0d2luZF9tcGhcblx0XHQpIHtcblx0XHRcdHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXHRcdFx0dGhpcy5jb3VudHJ5ID0gY291bnRyeTtcblx0XHRcdHRoaXMuZGFpbHlfY2hhbmNlX29mX3JhaW4gPSBkYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblx0XHRcdHRoaXMuZmVlbHNMaWtlQyA9IGZlZWxzTGlrZUM7XG5cdFx0XHR0aGlzLmZlZWxzTGlrZUYgPSBmZWVsc0xpa2VGO1xuXHRcdFx0dGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuXHRcdFx0dGhpcy5pY29uVVJMID0gaWNvblVSTDtcblx0XHRcdHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblx0XHRcdHRoaXMudGVtcF9jID0gdGVtcF9jO1xuXHRcdFx0dGhpcy50ZW1wX2YgPSB0ZW1wX2Y7XG5cdFx0XHR0aGlzLnRpbWUgPSB0aW1lO1xuXHRcdFx0dGhpcy53aW5kX2twaCA9IHdpbmRfa3BoO1xuXHRcdFx0dGhpcy53aW5kX21waCA9IHdpbmRfbXBoO1xuXHRcdH1cblx0fVxuXG5cdGNsYXNzIEZvcmVjYXN0IHtcblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdGRheSxcblx0XHRcdHRlbXBfaGlnaF9jLFxuXHRcdFx0dGVtcF9oaWdoX2YsXG5cdFx0XHR0ZW1wX2xvd19jLFxuXHRcdFx0dGVtcF9sb3dfZixcblx0XHRcdGljb25cblx0XHQpIHtcblx0XHRcdHRoaXMuZGF5ID0gZGF5O1xuXHRcdFx0dGhpcy50ZW1wX2hpZ2hfYyA9IHRlbXBfaGlnaF9jO1xuXHRcdFx0dGhpcy50ZW1wX2hpZ2hfZiA9IHRlbXBfaGlnaF9mO1xuXHRcdFx0dGhpcy50ZW1wX2xvd19jID0gdGVtcF9sb3dfYztcblx0XHRcdHRoaXMudGVtcF9sb3dfZiA9IHRlbXBfbG93X2Y7XG5cdFx0XHR0aGlzLmljb24gPSBpY29uO1xuXHRcdH1cblx0fVxuXG5cdGNsYXNzIEhvdXJseSB7XG5cdFx0Y29uc3RydWN0b3IodGltZSwgdGVtcF9jLCB0ZW1wX2YsIGljb24pIHtcblx0XHRcdHRoaXMudGltZSA9IHRpbWU7XG5cdFx0XHR0aGlzLnRlbXBfYyA9IHRlbXBfYztcblx0XHRcdHRoaXMudGVtcF9mID0gdGVtcF9mO1xuXHRcdFx0dGhpcy5pY29uID0gaWNvbjtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaEFuZFByb2Nlc3NXZWF0aGVyKGxvY2F0aW9uKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGZldGNoZWREYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGxvY2F0aW9uKTtcblx0XHRcdGlmIChmZXRjaGVkRGF0YSkge1xuXHRcdFx0XHRkYWlseURhdGEgPSBwcm9jZXNzRGFpbHlEYXRhKGZldGNoZWREYXRhKTtcblx0XHRcdFx0cHJvY2Vzc0ZvcmVjYXN0RGF0YShmZXRjaGVkRGF0YSk7XG5cdFx0XHRcdHByb2Nlc3NIb3VybHlEYXRhKGZldGNoZWREYXRhKTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkZldGNoZWQgZGF0YTogXCIsIGZldGNoZWREYXRhKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZGFpbHlEYXRhKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJIb3VybHkgZGF0YTogXCIsIGhvdXJseURhdGEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogTm8gd2VhdGhlciBkYXRhIHRvIHByb2Nlc3MuXCIpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTogXCIsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIobG9jYXRpb24gPSBkZWZhdWx0TG9jYXRpb24pIHtcblx0XHRjb25zdCBhcGlLZXkgPSBBUElfS0VZO1xuXHRcdGxldCBhcGlVUkwgPSBcIlwiO1xuXG5cdFx0aWYgKGxvY2F0aW9uKSB7XG5cdFx0XHRhcGlVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPW5vYDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXBpVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7ZGVmYXVsdExvY2F0aW9ufSZkYXlzPTMmYXFpPXllcyZhbGVydHM9bm9gO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVVJMKTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJvY2Vzc0RhaWx5RGF0YShkYXRhKSB7XG5cdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImVycm9yOiBubyBkYXRhIHRvIHByb2Nlc3NcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFByb2Nlc3MgZGF0YSBmb3IgY3VycmVudCBkYXk6XG5cdFx0XHQvLyBEZWNvbnN0cnVjdCBkYXRhIG9iamVjdCBpbnRvIGRlc2lyZWQgcGFyYW1ldGVyc1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRjdXJyZW50OiB7XG5cdFx0XHRcdFx0Y29uZGl0aW9uOiB7IHRleHQ6IGNvbmRpdGlvbiwgaWNvbiB9LFxuXHRcdFx0XHRcdGZlZWxzbGlrZV9jLFxuXHRcdFx0XHRcdGZlZWxzbGlrZV9mLFxuXHRcdFx0XHRcdGh1bWlkaXR5LFxuXHRcdFx0XHRcdHRlbXBfYyxcblx0XHRcdFx0XHR0ZW1wX2YsXG5cdFx0XHRcdFx0d2luZF9rcGgsXG5cdFx0XHRcdFx0d2luZF9tcGgsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxvY2F0aW9uOiB7IGNvdW50cnksIG5hbWUsIGxvY2FsdGltZSB9LFxuXHRcdFx0fSA9IGRhdGE7XG5cblx0XHRcdGNvbnN0IGRhaWx5X2NoYW5jZV9vZl9yYWluID1cblx0XHRcdFx0ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cblx0XHRcdGNvbnN0IGN1cnJlbnRfZGF5X2RhdGEgPSBuZXcgV2VhdGhlcihcblx0XHRcdFx0Y29uZGl0aW9uLFxuXHRcdFx0XHRjb3VudHJ5LFxuXHRcdFx0XHRkYWlseV9jaGFuY2Vfb2ZfcmFpbixcblx0XHRcdFx0ZmVlbHNsaWtlX2MsXG5cdFx0XHRcdGZlZWxzbGlrZV9mLFxuXHRcdFx0XHRodW1pZGl0eSxcblx0XHRcdFx0aWNvbixcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dGVtcF9jLFxuXHRcdFx0XHR0ZW1wX2YsXG5cdFx0XHRcdGxvY2FsdGltZSxcblx0XHRcdFx0d2luZF9rcGgsXG5cdFx0XHRcdHdpbmRfbXBoXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gY3VycmVudF9kYXlfZGF0YTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwcm9jZXNzRm9yZWNhc3REYXRhKGRhdGEpIHtcblx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3I6IG5vIGRhdGEgdG8gcHJvY2Vzc1wiKTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgeyBmb3JlY2FzdCB9ID0gZGF0YTtcblxuXHRcdFx0aWYgKCFmb3JlY2FzdCB8fCAhQXJyYXkuaXNBcnJheShmb3JlY2FzdC5mb3JlY2FzdGRheSkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogRm9yZWNhc3QgZGF0YSBpcyBub3QgYXZhaWxhYmxlLlwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQcm9jZXNzIGZvcmVjYXN0IGRhdGFcblx0XHRcdGZvcmVjYXN0LmZvcmVjYXN0ZGF5LmZvckVhY2goKGRheSkgPT4ge1xuXHRcdFx0XHRjb25zdCBmb3JlY2FzdERhdGUgPSBkYXkuZGF0ZTtcblx0XHRcdFx0Y29uc3QgbWF4dGVtcF9jID0gZGF5LmRheS5tYXh0ZW1wX2M7XG5cdFx0XHRcdGNvbnN0IG1heHRlbXBfZiA9IGRheS5kYXkubWF4dGVtcF9mO1xuXHRcdFx0XHRjb25zdCBtaW50ZW1wX2MgPSBkYXkuZGF5Lm1pbnRlbXBfYztcblx0XHRcdFx0Y29uc3QgbWludGVtcF9mID0gZGF5LmRheS5taW50ZW1wX2Y7XG5cdFx0XHRcdGNvbnN0IGRhaWx5SWNvbiA9IGRheS5kYXkuY29uZGl0aW9uLmljb247XG5cblx0XHRcdFx0Y29uc3QgZGFpbHlGb3JlY2FzdERhdGEgPSBuZXcgRm9yZWNhc3QoXG5cdFx0XHRcdFx0Zm9yZWNhc3REYXRlLFxuXHRcdFx0XHRcdG1heHRlbXBfYyxcblx0XHRcdFx0XHRtYXh0ZW1wX2YsXG5cdFx0XHRcdFx0bWludGVtcF9jLFxuXHRcdFx0XHRcdG1pbnRlbXBfZixcblx0XHRcdFx0XHRkYWlseUljb25cblx0XHRcdFx0KTtcblx0XHRcdFx0Zm9yZWNhc3REYXRhLnB1c2goZGFpbHlGb3JlY2FzdERhdGEpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcHJvY2Vzc0hvdXJseURhdGEoZGF0YSkge1xuXHRcdC8vIDcgbG90cyBvZiBkYXRhIEAgZXZlcnkgMyBob3Vyc1xuXHRcdGlmICghZGF0YSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJlcnJvcjogbm8gZGF0YSB0byBwcm9jZXNzXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBob3VyRGF0YSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcblxuXHRcdFx0aWYgKCFob3VyRGF0YSB8fCAhQXJyYXkuaXNBcnJheShob3VyRGF0YSkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogRm9yZWNhc3QgZGF0YSBpcyBub3QgYXZhaWxhYmxlLlwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDMpIHtcblx0XHRcdFx0Y29uc3QgaG91ciA9IGhvdXJEYXRhW2ldLnRpbWU7XG5cdFx0XHRcdGNvbnN0IHRlbXBfYyA9IGhvdXJEYXRhW2ldLnRlbXBfYztcblx0XHRcdFx0Y29uc3QgdGVtcF9mID0gaG91ckRhdGFbaV0udGVtcF9mO1xuXHRcdFx0XHRjb25zdCBpY29uID0gaG91ckRhdGFbaV0uY29uZGl0aW9uLmljb247XG5cblx0XHRcdFx0Y29uc3QgbmV3SG91ciA9IG5ldyBIb3VybHkoaG91ciwgdGVtcF9jLCB0ZW1wX2YsIGljb24pO1xuXHRcdFx0XHRob3VybHlEYXRhLnB1c2gobmV3SG91cik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gZmV0Y2hBbmRQcm9jZXNzV2VhdGhlcigpO1xuXG5cdHJldHVybiB7XG5cdFx0ZmV0Y2hBbmRQcm9jZXNzV2VhdGhlcixcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJNYW5hZ2VyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9