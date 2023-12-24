/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-24 21:52:21
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-24 22:37:20
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/04-组件的样式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-24 21:52:21
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-24 22:21:44
 * @FilePath: /Study/React/千峰/code/myapp/01-base/04-组件的样式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import './css/01-index.css'; // 导入css模块   webpack的支持

export default class App extends Component {
	render() {
		var myname = 'Lee';
		var obj = {
			background: 'yellow',
			fontSize: '30px',
		};
		return (
			<div>
				{10 + 20}-{myname}
				{10 > 20 ? 'aaa' : 'bbb'}
				<div style={obj}>1111111</div>
				{/* React推荐使用行内样式，因为React觉得每个组件都是一个独立的整体 */}
				<div className="active">333333</div>
				<div id="myapp">55555555555</div>
				
				<label for="username">用户名：</label>
				<input type="text" id="username"></input>
			</div>
		);
	}
}
