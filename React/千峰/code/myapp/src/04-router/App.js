import React, { Component } from 'react';
import MRouter from './router/IndexRouter';
import Tabbar from './components/Tabbar';
import './views/css/App.css';

export default class App extends Component {
	// store.subsribe 订阅
	render() {
		return (
			<div>
				<MRouter>
					<Tabbar></Tabbar>
				</MRouter>
			</div>
		);
	}
}

// films ===> Films
// cinemas ===> Cinemas
// center ===> Center
