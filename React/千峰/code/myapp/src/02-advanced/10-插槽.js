/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-31 11:08:41
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-31 11:36:01
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/10-插槽.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

class Child extends Component {
	render() {
		return (
			<div>
				child
				{/* 插槽 */}
				{/* {this.props.children}
				{this.props.children}
				{this.props.children}
				{this.props.children} */}
				{/* 具名插槽 */}
				{this.props.children[2]}
				{this.props.children[1]}
				{this.props.children[0]}
				{this.props.children}
			</div>
		);
	}
}

class Swpier extends Component {
	render() {
		return (
			<div>
				{/* 当轮播的内容可能是文字 又可能是图片之类的其他乱七八糟的东西时，索性就让父自己决定 */}
				{this.props.children[0]}
				{this.props.children[1]}
				{this.props.children[2]}
			</div>
		);
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<Swpier>
					<div>11111111</div>
					<div>22222222</div>
					<div>33333333</div>
				</Swpier>
				<Swpier>
					<div>4444</div>
					<div>4444</div>
					<div>4444</div>
				</Swpier>
				<Swpier>
					<div>图片</div>
					<div>图片</div>
					<div>图片</div>
				</Swpier>

				<Child>
					<div></div>
					<div></div>
					<div></div>
				</Child>
			</div>
		);
	}
}

// 用处
// 1. 为了复用
// 2. 一定程度减少父子通信
