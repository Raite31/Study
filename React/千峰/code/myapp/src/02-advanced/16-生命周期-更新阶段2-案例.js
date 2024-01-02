/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-02 07:37:03
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-02 07:53:33
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/16-生命周期-更新阶段2-案例.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

class Box extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.props.current === this.props.index ||
			nextProps.current === nextProps.index
		) {
			// 旧的要更新一下灰色边框， 新的要更新一下红色边框
			return true;
		}
		return false;
	}
	render() {
		console.log('render');
		return (
			<div
				style={{
					width: '100px',
					height: '100px',
					border:
						this.props.current === this.props.index
							? '5px solid red'
							: '1px solid gray',
					// background: 'yellow',
					margin: '10px',
					float: 'left',
				}}
			></div>
		);
	}
}

export default class App extends Component {
	state = {
		current: 0,
		list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
	};
	render() {
		return (
			<div>
				<input
					type="number"
					onChange={(evt) => {
						this.setState({
							current: Number(evt.target.value),
						});
					}}
				></input>
				<div style={{ overflow: 'hidden' }}>
					{this.state.list.map((item, index) => (
						<Box key={item} current={this.state.current} index={index}></Box>
					))}
				</div>
			</div>
		);
	}
}
