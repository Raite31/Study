import React, { Component } from 'react';

export default class App extends Component {
	state = {
		isCreated: true,
	};
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({ isCreated: !this.state.isCreated });
					}}
				>
					click
				</button>
				{this.state.isCreated ? <Child></Child> : ''}
			</div>
		);
	}
}

class Child extends Component {
	render() {
		return <div>Child</div>;
	}
	componentDidMount() {
		console.log('componentDidMount');
		// 组件销毁后，像这种绑定在窗口上的事件不会被销毁，所以就在willunmount里作销毁
		window.onresize = () => {
			console.log('resize');
		};
		this.timer = setInterval(() => {
			console.log('1111');
		}, 1000);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		window.onresize = null;
		clearInterval(this.timer);
	}
}
