/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-20 23:31:24
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-30 21:00:09
 * @FilePath: /Study/React/千峰/code/myapp/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-20 23:31:24
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-28 15:17:27
 * @FilePath: /Study/React/千峰/code/myapp/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 17版本之后 可以不引入React
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01-base/01-class组件';
import App from './02-advanced/08-订阅发布模式案例';

// 17版本
// 不需要引入React，在babel编译的时候会自动引入
// 使用jsx语法，不需要再用React.createElement语法
ReactDOM.render(
	// jsx 不要加引号
	// <div>111111</div>
	<React.StrictMode>
		{/* 要保证首字母大写 */}
		<App></App>
	</React.StrictMode>,

	document.getElementById('root')
);
