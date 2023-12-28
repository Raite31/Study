/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-28 16:01:26
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-28 16:15:06
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/17-props函数式组件.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class App extends Component {
	render() {
		return (
			<div>
				{/* 类组件 */}
				<Navbar title="导航"></Navbar>
				{/* 函数式组件 */}
				<Sidebar bg="yellow" position="left"></Sidebar>
			</div>
		);
	}
}
