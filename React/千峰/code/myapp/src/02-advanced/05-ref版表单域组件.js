import React, { Component } from 'react';

class Filed extends Component {
	render() {
		return (
			<div style={{ background: 'yellow' }}>
				<label>{this.props.label}</label>
				<input
					type={this.props.type}
					value={this.props.value}
					onChange={(evt) => {
						// console.log(evt.target.value);
						this.props.onChange(evt.target.value);
					}}
				></input>
			</div>
		);
	}
}

export default class App extends Component {
	state = {
		username: localStorage.getItem('username'),
		password: '',
	};
	render() {
		return (
			<div>
				<h1>登录页面</h1>
				<Filed
					label="用户名"
					type="text"
					value={this.state.username}
					onChange={(value) => {
						// console.log(value);
						this.setState({
							username: value,
						});
					}}
				></Filed>
				<Filed
					label="密码"
					type="password"
					value={this.state.password}
					onChange={(value) => {
						// console.log(value);
						this.setState({
							password: value,
						});
					}}
				></Filed>

				<button
					onClick={() => {
						console.log(this.state.username, this.state.password, '发送后端');
					}}
				>
					登录
				</button>
				<button
					onClick={() => {
						this.setState({
							username: '',
							password: '',
						});
					}}
				>
					取消{' '}
				</button>
			</div>
		);
	}
}
