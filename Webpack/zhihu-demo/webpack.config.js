const path = require('path');
const fs = require('fs');
const options = require('./webpack.config');
const parser = require('@babel/parser');
// @babel/traverse(遍历)方法维护这 AST 树的整体状态,我们这里使用它来帮我们找出依赖模块。
const traverse = require('@babel/traverse').default;
// 将 AST 语法树转换为浏览器可执行代码,我们这里使用 @babel/core 和 @babel/preset-env。
const { transformFromAst } = require('@babel/core');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
	},
};

const fs = require('fs');
// @babel/parser，解析入口文件，获取AST
const parser = require('@babel/parser');
const options = require('./webpack.config');
const { dependencies } = require('webpack');

const Parser = {
	// 2. =========================== 解析入口文件,获取 AST
	getAst: (path) => {
		// 读取入口文件
		const content = fs.readFileSync(path, 'utf8');
		// 将文件内容转为AST抽象语法树
		return parser.parse(content, {
			sourceType: 'module',
		});
	},
	// 3. =========================== 找出所有依赖模块
	getDependecies: (ast, filename) => {
		const dependecies = {};
		// 遍历所有的import模块，存入dependecies
		traverse(ast, {
			// 类型为ImportDeclaration的AST节点（即为import语句）
			ImportDeclaration({ node }) {
				const dirname = path.dirname(filename);
				// 保存依赖模块路径，之后生成依赖关系图需要用到
				const filepath = './' + path.join(dirname, node.source.value);
				dependecies[node.source.value] = filepath;
			},
		});
		return dependencies;
	},
	// 4. =========================== AST 转换为 code
	getCode: (ast) => {
		// AST转换为code
		const { code } = transformFromAst(ast, null, {
			presets: ['@babel/preset-env'],
		});
		return code;
	},
};
