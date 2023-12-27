/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-27 08:16:22
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-27 15:35:26
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/09-循环渲染.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					id: 1,
					text: '1111',
				},
				{
					id: 1,
					text: '1111',
				},
				{
					id: 1,
					text: '1111',
				},
				{
					id: 1,
					text: '1111',
				},
			],
		};
	}

	render() {
		// 写法一
		// var newlist = this.state.list.map((item) => <li>{item}</li>);
		return (
			<div>
				<ul>
					{/* 写法二 */}
					{this.state.list.map((item, index) => (
						// jsx语法，不需要引号，然后在React里，里面要加大括号
						<li key={item.id}>
							{item.text}--{index}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
// 为了列表的服用和重拍，设置key值，提高性能

// 原声js-map
var list = ['111111', '2222222', '33333'];

var newList = list.map((item) => `<li>${item}</li>`);

console.log(newList.join(''));
