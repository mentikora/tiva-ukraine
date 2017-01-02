/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve 'file' in 'P:\\Projects\\tiva-ukraine'\n    at P:\\Projects\\tiva-ukraine\\node_modules\\webpack\\lib\\Compilation.js:232:38\n    at onDoneResolving (P:\\Projects\\tiva-ukraine\\node_modules\\webpack\\lib\\NormalModuleFactory.js:40:20)\n    at P:\\Projects\\tiva-ukraine\\node_modules\\webpack\\lib\\NormalModuleFactory.js:159:21\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:726:13\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:52:16\n    at done (P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:241:17)\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:44:16\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:723:17\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:167:37\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:52:16\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:361:13\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:52:16\n    at done (P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:241:17)\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:44:16\n    at P:\\Projects\\tiva-ukraine\\node_modules\\async\\lib\\async.js:358:17\n    at P:\\Projects\\tiva-ukraine\\node_modules\\webpack\\lib\\NormalModuleFactory.js:216:19\n    at onResolved (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\Resolver.js:70:11)\n    at loggingCallbackWrapper (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (P:\\Projects\\tiva-ukraine\\node_modules\\tapable\\lib\\Tapable.js:145:46)\n    at innerCallback (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\Resolver.js:125:19)\n    at loggingCallbackWrapper (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at P:\\Projects\\tiva-ukraine\\node_modules\\tapable\\lib\\Tapable.js:247:15\n    at P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:39:4\n    at loggingCallbackWrapper (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (P:\\Projects\\tiva-ukraine\\node_modules\\tapable\\lib\\Tapable.js:145:46)\n    at innerCallback (P:\\Projects\\tiva-ukraine\\node_modules\\enhanced-resolve\\lib\\Resolver.js:125:19)");

/***/ },
/* 1 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

// require('./sass/normalize.scss');
__webpack_require__(1);
__webpack_require__(0);



/***/ }
/******/ ]);