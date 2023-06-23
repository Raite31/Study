(function () {
	var moduleList = [
		function (require, module, exports) {
			console.log('moduleA', moduleA);
			module.exports = 'hello world';
		},
	];

	var module = { exports: {} };
	moduleList[0](null, module, module.exports);
});
