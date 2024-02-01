import React, { Component } from 'react';
import MRouter from './router/IndexRouter';
import Tabbar from './components/Tabbar';

export default class App extends Component {
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
