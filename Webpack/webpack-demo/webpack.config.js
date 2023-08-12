const { type } = require('os');
const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
	entry: './src/index.js',
	output: {
		// filename: 'main.js',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			// 处理css的loader
			{
				test: /\.css$/i,
				// 应保证 loader 的先后顺序
				// 如果不遵守此约定，webpack 可能会抛出错误
				use: ['style-loader', 'css-loader'],
			},
			// ===================================== Assets Modules就是webpack内置的处理器

			// 使用Assets Modules 处理图片
			// 这是内置的Asset Modules
			// 图像会被处理并添加到output目录
			// url('./my-image.png')。loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为 output 目录中图像的最终路径。而 html-loader 以相同的方式处理 <img src="./my-image.png" />。
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			// 使用 Asset Modules 可以接收并加载任何文件，然后将其输出到构建目录。
			{
				test: /\.(woff|wofff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			// 处理数据的loader
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},
			// 自定义json模块parser
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse,
				},
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse,
				},
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
};
