const { Parser } = require('webpack');

// 1. =========================== 定义Compiler类
class Compiler {
	constructor(options) {
		// webpack配置
		const { entry, output } = options;
		// 入口
		this.entry = entry;
		// 出口
		this.output = output;
		// 模块
		this.modules = [];
	}
	// 构建启动
	run() {
		// 解析入口文件
		const info = this.build(this.entry);
		this.modules.push(info);
		this.modules.forEach(({ dependencies }) => {
			// 判断有依赖对象，递归解析所有依赖项
			if (dependencies) {
				for (const dependency in dependencies) {
					this.modules.push(this.build(dependencies[dependency]));
				}
			}
		});
		// 生成依赖关系图
		const dependencyGraph = this.modules.reduce(
			(graph, item) => ({
				...graph,
				[item.filename]: {
					dependencies: item.dependencies,
					code: item.code,
				},
			}),
			{}
		);
		this.generate(dependencyGraph);
	}

	build(filename) {
		const { getAst, getDependecies, getCode } = Parser;
		const ast = getAst(this.entry);
		const dependencies = getDependecies(ast, this.entry);
		const code = getCode(ast);
		return {
			// 文件路径，可以作为每个模块的唯一标识符
			filename,
			// 依赖对象，保存着依赖模块路径
			dependencies,
			// 文件内容
			code,
		};
	}

	// 6. 重写require函数，输出bundle
	generate(code) {
		// 输出文件路径
		const filePath = path.join(this.output.path, this.output.filename);
		const bundle = `(function(graph){
			function require(module){
				function localRequire(relativePath){
					return require(graph[module].dependecies[relativePath]);
				}
				var exports = {}
				(function(require,exports,code){
					eval(code)
				})(localRequire,exports,graph[module].code)
				return exports
			}
			require('${this.entry}')
		})(${JSON.stringify(code)})`;
		// 把文件内容写入到文件系统
		fs.writeFileSync(filePath, bundle, 'utf8');
	}
}

new Compiler(options).run();
