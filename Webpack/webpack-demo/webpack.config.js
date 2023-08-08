const { type } = require('os');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		// filename: 'main.js',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				// 应保证 loader 的先后顺序
				// 如果不遵守此约定，webpack 可能会抛出错误
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|wofff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			}
		],
	},
};
