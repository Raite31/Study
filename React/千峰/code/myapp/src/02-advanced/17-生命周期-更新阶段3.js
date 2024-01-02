import React, { Component } from 'react';

class Child extends Component {
	state = {
		title: '',
	};
	render() {
		return <div>child</div>;
	}

	// componentWillReceiveProps
	// 父组件修改属性触发
	// 最先获得父组件传来的属性，可以利用属性进行ajax或者处理
	// 吧属性转化成孩子自己的状态
}

export default class App extends Component {
	state = {
		text: 'hello',
	};
	render() {
		return (
			<div>
				{this.state.text}
				<button
					onClick={() => {
						this.setState({
							text: '2222',
						});
					}}
				>
					click
				</button>
				<Child></Child>
			</div>
		);
	}
}
