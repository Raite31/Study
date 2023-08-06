const webpack = require('./webpack');
const webpackOptions = require('./webpack-config.js');
const compiler = webpack(webpackOptions);

compiler.run((err, stats) => {
	console.log(err);
	console.log(
		stats.toJson({
			assets: true,
			chunks: true,
			modules: true,
		})
	);
});

class Compiler {
	constructor() {}
	run(callback) {}
}

// 第一步：搭建结构，读取配置参数，这里接受的是webpack.config.js中的参数
function webpack(webpackOptions) {
	const compiler = new Compiler();
	return compiler;
}
