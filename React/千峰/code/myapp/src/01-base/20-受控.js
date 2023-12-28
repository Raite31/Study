import React, { Component } from 'react';

export default class App extends Component {
	// myusername = React.createRef();

	state = {
		username: 'Lee',
	};
	render() {
		return (
			<div>
				<h1> 登录页</h1>
				<input
					type="text"
					value={this.state.username}
					onChange={(evt) => {
						console.log('onChange', evt.target.value);
						this.setState({
							username: evt.target.value,
						});
					}}
				></input>

				<button
					onClick={() => {
						console.log(this.state.username);
					}}
				>
					登录
				</button>
				<button
					onClick={() => {
						this.setState({
							username: '',
						});
					}}
				>
					重置
				</button>

				{/* <Child myvalue={this.state.username}></Child> */}
			</div>
		);
	}
}

// 一切操作都与状态牢牢绑定了
