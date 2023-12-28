import React, { Component } from 'react';

class Child extends Component {
	render() {
		return (
			<div>
				child-{this.props.text}
				{/* 子不能改属性 */}
				{/* <button
					onClick={() => {
						this.props.text = '33333333';
					}}
				></button> */}
			</div>
		);
	}
}

export default class App extends Component {
	state = {
		text: '1111',
	};
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							text: '2222',
						});
					}}
				>
					child-父
				</button>
				<Child text={this.state.text}></Child>
			</div>
		);
	}
}
