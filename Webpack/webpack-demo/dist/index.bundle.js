"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");



function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	// lodash（目前通过一个script引入）对于执行这一行是必需的
	// lodash在当前script中使用import引入
	// 看不懂：https://www.webpackjs.com/guides/getting-started/#creating-a-bundle
	element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'click me and check the console!';
	btn.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"]

	element.appendChild(btn)

	return element;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    // console.log('I get called from print.js!');
    console.log('I get called from print.js!');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTzs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBTTs7QUFFM0I7QUFDQSxlQUFlLDhDQUFPOztBQUV0Qjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQmU7QUFDZjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50JztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cdC8vIGxvZGFzaO+8iOebruWJjemAmui/h+S4gOS4qnNjcmlwdOW8leWFpe+8ieWvueS6juaJp+ihjOi/meS4gOihjOaYr+W/hemcgOeahFxuXHQvLyBsb2Rhc2jlnKjlvZPliY1zY3JpcHTkuK3kvb/nlKhpbXBvcnTlvJXlhaVcblx0Ly8g55yL5LiN5oeC77yaaHR0cHM6Ly93d3cud2VicGFja2pzLmNvbS9ndWlkZXMvZ2V0dGluZy1zdGFydGVkLyNjcmVhdGluZy1hLWJ1bmRsZVxuXHRlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuXHRidG4uaW5uZXJIVE1MID0gJ2NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xuXHRidG4ub25jbGljayA9IHByaW50TWVcblxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGJ0bilcblxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEnKTtcbiAgICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9