/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/modules/adaptive.js":
/*!************************************!*\
  !*** ./src/JS/modules/adaptive.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ adaptive; }
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/JS/modules/menu.js");

function adaptive() {
  var scrollPos;
  var oldInnerWidth = window.innerWidth;
  window.addEventListener('scroll', function () {
    scrollPos = window.scrollTop;
  });

  window.onresize = function () {
    if (window.innerWidth != oldInnerWidth) {
      location.reload();
      window.scrollTo(scrollPos);
    }
  };

  if (window.innerWidth < 768) {
    var menuInstance = new _menu__WEBPACK_IMPORTED_MODULE_0__["default"]();
    menuInstance.render();
  }
}

/***/ }),

/***/ "./src/JS/modules/menu.js":
/*!********************************!*\
  !*** ./src/JS/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    var _this = this;

    _classCallCheck(this, Menu);

    _defineProperty(this, "openMenu", function () {
      _this.menuBody.classList.add('header-menu_active');

      _this.menuBtn.classList.add('burger-menu_active');
    });

    _defineProperty(this, "closeMenu", function () {
      _this.menuBody.classList.remove('header-menu_active');

      _this.menuBtn.classList.remove('burger-menu_active');
    });

    this.menuBody = document.querySelector(".header-menu");
    this.menuBtn = document.querySelector(".burger-menu");
    this.menuOpenedFlag = this.menuBtn.classList.contains('burger-menu_active') && this.menuBody.classList.contains('header-menu_active') ? true : false;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.menuBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this2.menuOpenedFlag) {
          _this2.closeMenu();
        } else {
          _this2.openMenu();
        }
      });
    }
  }]);

  return Menu;
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_adaptive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/adaptive */ "./src/JS/modules/adaptive.js");



document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_adaptive__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map