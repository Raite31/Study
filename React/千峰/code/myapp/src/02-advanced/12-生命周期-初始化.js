import React, { Component } from 'react';

export default class App extends Component {
	state = {
		myname: 'kerwin',
	};
	// React18之前
	componentWillMount() {
		console.log(
			'第一次will mount',
			this.state.myname,
			document.getElementById('myname')
		);

		// 第一次上树前的 最后一次修改状态机会
		this.setState({
			myname: 'Kerwin',
		});

		// 初始化数据
	}
	componentDidMount() {
		console.log('第一次did mount', document.getElementById('myname'));

		// 数据请求axios
		// 订阅函数调用
		// setInterval
		// 基于创建完的dom进行 初始化 。。。BetterScroll
	}
	render() {
		console.log('render');
		return <div id="myname">{this.state.myname}</div>;
	}
}
