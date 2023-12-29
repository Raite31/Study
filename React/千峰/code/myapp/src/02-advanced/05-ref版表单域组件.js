import React, { Component } from 'react';

class Filed extends Component {
	state = {
		value: '',
	};
	clear() {
		this.setState({ value: '' });
	}
	setValue(value) {
		this.setState({ value: value });
	}
	render() {
		return (
			<div style={{ background: 'yellow' }}>
				<label>{this.props.label}</label>
				<input
					type={this.props.type}
					value={this.state.value}
					onChange={(evt) => {
						this.setState({
							value: evt.target.value,
						});
					}}
				></input>
			</div>
		);
	}
}

export default class App extends Component {
	username = React.createRef();
	password = React.createRef();

	render() {
		return (
			<div>
				<h1>登录页面</h1>
				<Filed label="用户名" type="text" ref={this.username}></Filed>
				<Filed label="密码" type="password" ref={this.password}></Filed>

				<button
					onClick={() => {
						console.log(this.username.current.state.value);
					}}
				>
					登录
				</button>
				<button
					onClick={() => {
						this.username.current.clear();
						this.password.current.clear();
					}}
				>
					取消
				</button>
			</div>
		);
	}
}
