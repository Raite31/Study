/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-07 16:18:48
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-07 16:41:06
 * @FilePath: /千峰/code/myapp/src/02-advanced/20-新生命周期-1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	state = {
		myname: 'lee',
		myage: 100,
	};

	// 静态里面没有this
	static getDerivedStateFromProps(nextProps, nextState) {
		console.log('getDerivedStateFromProps', nextState);
		return {
			myname:
				nextState.myname.substring(0, 1).toUpperCase() +
				nextState.myname.substring(1),
		};
	}
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							myname: 'Raite',
						});
					}}
				>
					click
				</button>
				app - {this.state.myname}-{this.state.myage}
			</div>
		);
	}
}
