import React, { Component } from 'react';

export default class App extends Component {
	state = {
		isShow: true,
	};
	render() {
		return (
			<div>
				<Navbar
					title="首页"
					cb={() => {
						console.log('点击了首页');
						this.setState({
							isShow: !this.state.isShow,
						});
					}}
				></Navbar>
				{this.state.isShow && <Sidebar></Sidebar>}
			</div>
		);
	}
}

interface Iprops {
	title: string;
	cb: () => void;
}

class Navbar extends Component<Iprops, any> {
	render() {
		return (
			<div>
				navbar-{this.props.title}
				<button
					onClick={() => {
						this.props.cb(); // 调用父组件的函数
					}}
				>
					click
				</button>
				;
			</div>
		);
	}
}

class Sidebar extends Component {
	render() {
		return <div>sidebar</div>;
	}
}
