// 属性结合ts

import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<Child name="lee"></Child>
			</div>
		);
	}
}

interface IProps {
	name: string;
}

class Child extends Component<IProps, any> {
	render() {
		return <div>child-{this.props.name}</div>;
	}
}
