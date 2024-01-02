/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-01 10:45:21
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-01 11:01:46
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/15-生命·周期-更新阶段2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	state = {
		myname: 'Raite31',
	};
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							myname: 'Lee',
						});
					}}
				>
					click
				</button>
				{this.state.myname}
			</div>
		);
	}
	// SCU 性能优化函数
	shouldComponentUpdate(nextProps, nextState) {
		// 关于性能优化
		// return true; // 应该更新

		// this.state.myname // 老状态

		// nextProps // 新状态

		// if (this.state.myname !== nextState.myname) {
		// 	return true;
		// }

		// 把对象转化为字符串，直接整个字符串对比
		if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
			return true;
		}

		return false;
	}

	// componentWillUpdate

	componentDidUpdate(prevProps, prevState) {
		console.log('update');
	}
}
