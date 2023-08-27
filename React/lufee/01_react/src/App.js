import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		// 改变this的指向方法1
		// this.add = this.add.bind(this);
		// this.state.count = 1;
	}
	add() {
		// 除了constructor之外的其他地方，修改状态的唯一方法是调用this.setState()
		// setState是一个异步操作
		// this.setState({
		// 	count: (this.state.count += 1),
		// });

        // 函数的方式
		this.setState(
			(prevState, prevProps) => ({
				count: prevState.count + 1,
			}),
			() => {
                // 回调函数，这里是异步处理后的结果
				console.log(this.state.count);
			}
		);

		// console.log(this.state.count);
	}

	render() {
		console.log('渲染了');
		return (
			<div>
				<h2>{this.state.count}</h2>
				{/* <button onClick={this.add}>+1</button> */}
				{/* 改变this的指向方法2 */}
				{/* <button onClick={this.add.bind(this)}>+1</button> */}
				{/* 改变this的指向方法3 */}
				<button
					onClick={() => {
						this.add();
					}}
				>
					+1
				</button>
			</div>
		);
	}
}
