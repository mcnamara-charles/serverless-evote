module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/session-term.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/session-term.js":
/*!***********************************!*\
  !*** ./pages/api/session-term.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_iron_session__WEBPACK_IMPORTED_MODULE_0__[\"withIronSession\"])(async (req, res) => {\n  if (req.method === \"POST\") {\n    req.session.destroy();\n    return res.status(201).send(\"\");\n  }\n\n  return res.status(404).send(\"\");\n}, {\n  cookieName: \"LOGIN\",\n  cookieOptions: {\n    secure: false ? undefined : false,\n    cacheControl: \"no-store\",\n    maxAge: -1\n  },\n  password: process.env.APPLICATION_SECRET\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2Vzc2lvbi10ZXJtLmpzPzFiNGYiXSwibmFtZXMiOlsid2l0aElyb25TZXNzaW9uIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImRlc3Ryb3kiLCJzdGF0dXMiLCJzZW5kIiwiY29va2llTmFtZSIsImNvb2tpZU9wdGlvbnMiLCJzZWN1cmUiLCJjYWNoZUNvbnRyb2wiLCJtYXhBZ2UiLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJBUFBMSUNBVElPTl9TRUNSRVQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLHdJQUFlLENBQzVCLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QkYsT0FBRyxDQUFDRyxPQUFKLENBQVlDLE9BQVo7QUFDQSxXQUFPSCxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0wsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBckIsQ0FBUDtBQUNELENBUDJCLEVBUTVCO0FBQ0VDLFlBQVUsRUFBRSxPQURkO0FBRUVDLGVBQWEsRUFBRTtBQUNiQyxVQUFNLEVBQUUsUUFBd0MsU0FBeEMsR0FBK0MsS0FEMUM7QUFFYkMsZ0JBQVksRUFBRSxVQUZEO0FBR2JDLFVBQU0sRUFBRSxDQUFDO0FBSEksR0FGakI7QUFPRUMsVUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFQeEIsQ0FSNEIsQ0FBOUIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2Vzc2lvbi10ZXJtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhJcm9uU2Vzc2lvbihcbiAgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICByZXEuc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoXCJcIik7XG4gICAgfVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZChcIlwiKTtcbiAgfSxcbiAge1xuICAgIGNvb2tpZU5hbWU6IFwiTE9HSU5cIixcbiAgICBjb29raWVPcHRpb25zOiB7XG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHRydWUgOiBmYWxzZSxcbiAgICAgIGNhY2hlQ29udHJvbDogXCJuby1zdG9yZVwiLFxuICAgICAgbWF4QWdlOiAtMSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5BUFBMSUNBVElPTl9TRUNSRVRcbiAgfVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/session-term.js\n");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-iron-session\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWlyb24tc2Vzc2lvblwiP2JlMWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1pcm9uLXNlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWlyb24tc2Vzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-iron-session\n");

/***/ })

/******/ });