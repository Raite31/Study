const {
	override,
	fixBabelImports, //按需加载配置函数
	addBabelPlugins, //babel插件配置函数
} = require('customize-cra');
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
	addBabelPlugins(
		// ⽀持装饰器
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		]
	)
);
