const { type } = require('os');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: './src/index.js',
	mode: 'development',
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	devtool: 'inline-source-map',
	// 告知 dev server，从什么位置查找文件
	// 以上配置告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下
	devServer: {
		static: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			// title: '管理输出',
			title: 'Development',
		}),
	],
	output: {
		// filename: 'main.js',
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	// 因为在这个示例中单个 HTML 页面有多个入口，所以添加了下面这个
	optimization: {
		runtimeChunk: 'single',
	},
};
