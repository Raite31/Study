import React, { Component } from 'react';

// 不受状态的控制
export default class NoControlInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: '',
		};
	}
	handleChange = (e) => {
		console.log(this.refs.a);
		let val = this.refs.a.value;
        this.setState({val})
	};
	render() {
		return (
			<div>
				<input type="text" onChange={this.handleChange} ref="a" />
				<h2>{this.state.val}</h2>
			</div>
		);
	}
}
