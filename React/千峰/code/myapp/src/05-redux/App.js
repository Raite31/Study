import React, { Component } from 'react';
import MRouter from './router/IndexRouter';
import Tabbar from './components/Tabbar';
import './views/css/App.css';
import store from '../05-redux/redux/store';

export default class App extends Component {
	state = {
		isShow: store.getState(),
	};

	// store.subscribe 订阅
	componentDidMount = () => {
		store.subscribe((value) => {
			console.log('app 中订阅', store.getState());
			this.setState({
				isShow: store.getState().show,
			});
		});
	};

	render() {
		return (
			<div>
				<MRouter>{this.state.isShow && <Tabbar></Tabbar>}</MRouter>
			</div>
		);
	}
}

// films ===> Films
// cinemas ===> Cinemas
// center ===> Center
