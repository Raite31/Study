/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-24 22:37:12
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-24 22:52:41
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/05-事件绑定-1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	a = 100;

	render() {
		return (
			<div>
				<input></input>
				<button
					onClick={() => {
						console.log('add', this.a);
					}}
				>
					add1
				</button>

				{/* 这两种要留意this指向 */}
				<button onClick={this.handleClick2}>add2</button>
				<button onClick={this.handleClick3}>add3</button>
				<button
					onClick={() => {
						this.handleClick4(); // 比较推荐
					}}
				>
					add4
				</button>
			</div>
		);
	}
	handleClick2() {
		console.log('add2');
	}
	handleClick3 = () => {
		console.log('add3');
	};
	handleClick4 = () => {
		console.log('add4');
	};
}
