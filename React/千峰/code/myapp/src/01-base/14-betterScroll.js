/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-28 14:20:47
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-28 14:37:58
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/14.betterScroll.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import BetterScroll from 'better-scroll';

export default class App extends Component {
	state = {
		list: [],
	};
	render() {
		return (
			<div>
				<button onClick={() => this.getData()}>click</button>
				<div
					className="wrapper"
					style={{ height: '200px', background: 'yellow', overflow: 'hidden' }}
				>
					<ul className="content">
						{/* 记得=>后面不需要{}，这里是jsx */}
						{this.state.list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	getData() {
		var list = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
		this.setState(
			{
				list: list,
			},
			() => {
				new BetterScroll('.wrapper');
			}
		);

		// new BetterScroll('.wrapper');
	}
}
