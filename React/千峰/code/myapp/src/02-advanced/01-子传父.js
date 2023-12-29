/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 10:13:35
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-29 10:43:38
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/01-子传父.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div style={{ background: 'red' }}>
				<button
					onClick={() => {
						console.log('子传父，让父的状态取反');
						console.log(this.props.event);
						// 调用父组件传来的回调函数
						this.props.event();
					}}
				>
					click
				</button>
				<span>navbar</span>
			</div>
		);
	}
}

class Sidebar extends Component {
	render() {
		return (
			<div style={{ background: 'yellow', width: '200px' }}>
				<ul>
					<li>1111111</li>
					<li>1111111</li>
					<li>1111111</li>
					<li>1111111</li>
					<li>1111111</li>
					<li>1111111</li>
					<li>1111111</li>
					<li>1111111</li>
				</ul>
			</div>
		);
	}
}

export default class App extends Component {
	state = {
		isShow: true,
	};
	render() {
		return (
			<div>
				<Navbar
					event={() => {
						this.setState({
							isShow: !this.state.isShow,
						});
						// console.log('父组件定义的event事件');
					}}
				></Navbar>
				{this.state.isShow && <Sidebar></Sidebar>}
			</div>
		);
	}
}

// 父传子：属性
// 子传父：回调函数
