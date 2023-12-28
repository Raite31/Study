import React, { Component } from 'react';

export default class App extends Component {
	state = {
		count: 1,
	};
	render() {
		return (
			<div>
				{this.state.count}
				<button onClick={this.handleAdd1}>add1</button>
				<button onClick={this.handleAdd2}>add2</button>
			</div>
		);
	}
	handleAdd1 = () => {
		this.setState(
			{
				count: this.state.count + 1,
			},
			// setState接受第二个参数，第二个参数式回调函数，状态与dom更新完后就会被触发
			() => {
				console.log(this.state.count);
			}
		);
		this.setState({
			count: this.state.count + 1,
		});
		this.setState({
			count: this.state.count + 1,
		});

		console.log(this.state.count);
	};

	handleAdd2 = () => {
		// 这样虽然是0秒，但同样是异步逻辑
		setTimeout(() => {
			this.setState({
				count: this.state.count + 1,
			});
			this.setState({
				count: this.state.count + 1,
			});
			this.setState({
				count: this.state.count + 1,
			});

			console.log(this.state.count);
		}, 0);
	};
}

// setState处于同步的逻辑中  异步更新状态，更新真实dom
// setState处于异步的逻辑中  同步更新状态，同步更新真实dom
// setState接受第二个参数，第二个参数式回调函数，状态与dom更新完后就会被触发
