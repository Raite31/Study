// 定义一个立即执行函数，传入生成的依赖关系图
(function (graph) {
	// 重写require函数
	function require(moduleId) {
        // 找到对应moduleId的依赖对象，调用require函数，eval执行，拿到exports对象
		function localRequire(relativePath) {
			return require(graph[moduleId], dependencies[relativePath]);
		}
        // 定义export对象
		var exports = {};
		(function (require, exports, code) {
            // commonjs语法使用module.exports暴露实现，我们传入的exports对象会捕获依赖对象(hello.js)暴露的实现（exprts.say = say）并写入
			eval(code);
		})(localRequire, exports, graph[moduleId].code);
        // 暴露exports对象，即暴露依赖对象应用的实现
		return exports;
	}
	// 从入口文件开始执行
	require('./src/index.js');
})({
	'./src/index.js': {
		dependencies: { './hello.js': './src/hello.js' },
		code: '"use strict";\n\nvar _hello = require("./hello.js");\n\ndocument.write((0,_hello.say)("webpack"));',
	},
	'./src/hello.js': {
		dependencies: {},
		code: '"use strict";\n\nObject.defineProperty(exports,"_esModule",{\n value: true\n});\nexports.say = say;\n\nfunction say(name) {\n retutn "hello ".concat(name);\n}',
	},
});
