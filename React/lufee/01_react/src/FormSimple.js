import React, { Component } from 'react';

export default class FormSimple extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			selectedArr: [],
		};
	}
	handleUserName = (e) => {
		this.setState({
			username: e.target.value,
		});
	};
	handlePassword = (e) => {
		this.setState({
			password: e.target.value,
		});
	};
	handleSubmit = (e) => {
		// 阻止默认事件
		e.preventDefault();
		if (
			this.state.username &&
			this.state.password &&
			this.state.selectedArr &&
			this.state.selectedArr.length > 0
		) {
			let arr = this.state.selectedArr.map((n) => `${n}`);
			// 发送ajax请求
			alert(
				`当前用户名：${this.state.username}， 密码：${this.state.password}，我的爱好：${arr}`
			);
		}
	};
	handleSelectedChange = (e) => {
		let newArr = [...this.state.selectedArr];
		newArr.push(e.target.value);
		this.setState({
			selectedArr: newArr,
		});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p className="username">
					<label htmlFor="name">用户名: </label>
					<input
						type="text"
						value={this.state.username}
						onChange={this.handleUserName}
						id="name"
					></input>
				</p>
				<p className="password">
					<label htmlFor="pwd">密码: </label>
					<input
						type="password"
						value={this.state.password}
						onChange={this.handlePassword}
						id="pwd"
					></input>
				</p>
				我的爱好：
				<select
					multiple
					value={this.state.selectedArr}
					onChange={this.handleSelectedChange}
				>
					<option value="smoking">抽烟</option>
					<option value="drink">喝酒</option>
					<option value="tangtou">烫头</option>
				</select>
				<br />
				<input type="submit" value="登陆" />
			</form>
		);
	}
}
