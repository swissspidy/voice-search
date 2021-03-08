/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/voice-search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: capitalize, getNumber, initializeVoiceSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumber", function() { return getNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeVoiceSearch", function() { return initializeVoiceSearch; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
 // Courtesy of Material icons.

var MICROPOHNE = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"30\" viewBox=\"0 0 24 24\" width=\"30\">\n\t<path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n\t<path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"/>\n</svg>";
/**
 * Capitalize a string.
 *
 * @param {string} str Input string.
 * @return {string} Capitalized string.
 */

function capitalize(str) {
  return str.length ? str[0].toUpperCase() + str.slice(1) : str;
}
function getNumber(number) {
  number = parseInt(number, 10);
  return isNaN(number) || number === null || typeof number === 'undefined' ? 0 : number;
}
var PATIENCE = 3;
function initializeVoiceSearch(speechInputWrapper) {
  // Ensure search form is visible so we can calculate the sizes
  var speechInputWrapperStyle = speechInputWrapper.style.cssText || '';
  speechInputWrapper.style.display = 'block !important'; // Find the search input

  var inputEl = speechInputWrapper.querySelector('input[name=s]') || speechInputWrapper.querySelector('input[name=search]');

  if (null === inputEl) {
    // Reset form style again.
    speechInputWrapper.style.cssText = speechInputWrapperStyle;
    return;
  }

  speechInputWrapper.classList.add('voice-search-wrapper');
  inputEl.classList.add('voice-search-input'); // Pressing enter should submit the search, not press the voice search button

  speechInputWrapper.addEventListener('keypress', function (e) {
    if (e.keyCode && e.keyCode === 13) {
      speechInputWrapper.submit();
      return false;
    }
  }, {
    capture: true
  }); // Add some markup to the search form

  var voiceSearchButton = document.createElement('button');
  voiceSearchButton.setAttribute('class', 'voice-search-button');
  var screenReaderText = document.createElement('span');
  screenReaderText.setAttribute('class', 'voice-search-screen-reader-text');
  screenReaderText.appendChild(document.createTextNode(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Speech Input', 'voice-search')));
  voiceSearchButton.appendChild(screenReaderText);
  var microphoneIcon = document.createElement('span');
  microphoneIcon.setAttribute('class', 'voice-search-mic');
  microphoneIcon.innerHTML = MICROPOHNE;
  voiceSearchButton.appendChild(microphoneIcon); // Size and position the microphone button.

  var wrapperPosition = speechInputWrapper.getBoundingClientRect();
  var inputPosition = inputEl.getBoundingClientRect();
  var relativePosition = {
    top: inputPosition.top - wrapperPosition.top,
    right: inputPosition.right - wrapperPosition.right,
    bottom: inputPosition.bottom - wrapperPosition.bottom,
    left: inputPosition.left - wrapperPosition.left
  };
  console.log(relativePosition, inputPosition.right, wrapperPosition.right);
  var inputHeight = getNumber(inputEl.offsetHeight);
  var buttonSize = getNumber(0.8 * inputHeight);
  var buttonOffsetTop = getNumber(0.1 * inputHeight) + getNumber(window.getComputedStyle(speechInputWrapper).getPropertyValue('padding-top'));
  voiceSearchButton.style.cssText = "\n\t\ttop: ".concat(buttonOffsetTop + relativePosition.top, "px;\n\t\theight: ").concat(buttonSize, "px !important;\n\t\twidth: ").concat(buttonSize, "px !important;\n\t\tright: ").concat(Math.abs(relativePosition.right), "px !important;\n\t");

  if (document.documentElement.dir === 'rtl') {
    voiceSearchButton.style.right = null;
    voiceSearchButton.style.left = "left: ".concat(relativePosition.left, "px !important;");
  }

  speechInputWrapper.appendChild(voiceSearchButton); // Reset form style again.

  speechInputWrapper.cssText = speechInputWrapperStyle; // Setup recognition

  var finalTranscript = '';
  var recognizing = false;
  var timeout;
  var oldPlaceholder = null;
  var recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;

  function restartTimer() {
    timeout = setTimeout(function () {
      recognition.stop();
    }, PATIENCE * 1000);
  }

  recognition.onstart = function () {
    oldPlaceholder = inputEl.placeholder;
    inputEl.placeholder = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Start Talking…', 'voice-search');
    recognizing = true;
    voiceSearchButton.classList.add('listening');
    restartTimer();
  };

  recognition.onend = function () {
    recognizing = false;
    clearTimeout(timeout);
    voiceSearchButton.classList.remove('listening');

    if (oldPlaceholder !== null) {
      inputEl.placeholder = oldPlaceholder;
    }
  };

  recognition.onresult = function (event) {
    clearTimeout(timeout);

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      }
    }

    finalTranscript = capitalize(finalTranscript);
    inputEl.value = finalTranscript;
    restartTimer();
  };

  voiceSearchButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (recognizing) {
      recognition.stop();
      return;
    }

    inputEl.value = finalTranscript = '';
    recognition.start();
  }, false);
}

/***/ }),

/***/ "./src/voice-search.css":
/*!******************************!*\
  !*** ./src/voice-search.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/voice-search.js":
/*!*****************************!*\
  !*** ./src/voice-search.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _voice_search_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voice-search.css */ "./src/voice-search.css");
/* harmony import */ var _voice_search_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_voice_search_css__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Voice Search
 *
 * Copyright (c) 2015 Pascal Birchler
 * Licensed under the GPLv2+ license.
 *
 * The original script was released by Daniel Hug under the MIT license.
 */



_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  if (!('webkitSpeechRecognition' in window)) {
    return;
  } // Get all search forms


  var speechInputWrappers = document.querySelectorAll('form[role=search]');

  if (speechInputWrappers.length === 0) {
    speechInputWrappers = document.querySelectorAll('form[class=searchform]');
  }

  if (speechInputWrappers.length === 0) {
    speechInputWrappers = document.querySelectorAll('form[id=searchform]');
  }

  _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(speechInputWrappers).forEach(function (speechInputWrapper) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["initializeVoiceSearch"])(speechInputWrapper);
  });
});

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=voice-search.js.map