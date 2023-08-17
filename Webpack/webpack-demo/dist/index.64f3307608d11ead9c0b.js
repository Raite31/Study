"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/print.js");
// import _ from 'lodash';


// function component() {
// function getComponent() {

// 由于 import() 会返回一个 promise，因此它可以和 async 函数一起使用。下面是如何通过 async 函数简化代码
async function getComponent() {
	const element = document.createElement('div');
	const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));
	// const element = document.createElement('div');
	const btn = document.createElement('button');

	// lodash（目前通过一个script引入）对于执行这一行是必需的
	// lodash在当前script中使用import引入
	// 看不懂：https://www.webpackjs.com/guides/getting-started/#creating-a-bundle
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'click me and check the console!';
	btn.onclick = _print__WEBPACK_IMPORTED_MODULE_0__["default"];

	element.appendChild(btn);

	// return import('lodash')
	// 	.then(({ default: _ }) => {
	// 		const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	// 	return element;
	// })
	// .catch((error) => 'An error occurred while loading the component');

	return element;
}

// document.body.appendChild(component());
getComponent().then((component) => {
	document.body.appendChild(component);
});


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjRmMzMwNzYwOGQxMWVhZDljMGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUM4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWEsUUFBUSwySkFBZ0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsOENBQU87O0FBRXRCOztBQUVBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JDYztBQUNmO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQnO1xuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG5cbi8vIOeUseS6jiBpbXBvcnQoKSDkvJrov5Tlm57kuIDkuKogcHJvbWlzZe+8jOWboOatpOWug+WPr+S7peWSjCBhc3luYyDlh73mlbDkuIDotbfkvb/nlKjjgILkuIvpnaLmmK/lpoLkvZXpgJrov4cgYXN5bmMg5Ye95pWw566A5YyW5Luj56CBXG5hc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoJ2xvZGFzaCcpO1xuXHQvLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cdC8vIGxvZGFzaO+8iOebruWJjemAmui/h+S4gOS4qnNjcmlwdOW8leWFpe+8ieWvueS6juaJp+ihjOi/meS4gOihjOaYr+W/hemcgOeahFxuXHQvLyBsb2Rhc2jlnKjlvZPliY1zY3JpcHTkuK3kvb/nlKhpbXBvcnTlvJXlhaVcblx0Ly8g55yL5LiN5oeC77yaaHR0cHM6Ly93d3cud2VicGFja2pzLmNvbS9ndWlkZXMvZ2V0dGluZy1zdGFydGVkLyNjcmVhdGluZy1hLWJ1bmRsZVxuXHQvLyBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuXHRidG4uaW5uZXJIVE1MID0gJ2NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xuXHRidG4ub25jbGljayA9IHByaW50TWU7XG5cblx0ZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG5cdC8vIHJldHVybiBpbXBvcnQoJ2xvZGFzaCcpXG5cdC8vIFx0LnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XG5cdC8vIFx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXHQvLyBcdHJldHVybiBlbGVtZW50O1xuXHQvLyB9KVxuXHQvLyAuY2F0Y2goKGVycm9yKSA9PiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyB0aGUgY29tcG9uZW50Jyk7XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==