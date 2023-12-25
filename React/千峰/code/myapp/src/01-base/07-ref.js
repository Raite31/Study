/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-24 22:37:12
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-25 18:24:27
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/05-事件绑定-1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	a = 100;
	myref = React.createRef();

	render() {
		return (
			<div>
				{/* <input ref="mytext"></input> */}
				<input ref={this.myref}></input>
				<button
					onClick={() => {
						// console.log('add', this.refs.mytext.value);

						console.log('click', this.myref.current.value);
					}}
				>
					add1
				</button>
			</div>
		);
	}
}
