import React, { Component } from 'react';

class Child extends Component {
	render() {
		return <div>child</div>;
	}
}

class Navbar extends Component {
	render() {
		return (
			<div>
				navbar
				<Child></Child>
			</div>
		);
	}
}

class Swiper extends Component {
	render() {
		return <div>swiper</div>;
	}
}

const Tabbar = () => {
	return <div>tabbar</div>;
};

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>
				<Swiper></Swiper>
				<Tabbar></Tabbar>
			</div>
		);
	}
}
