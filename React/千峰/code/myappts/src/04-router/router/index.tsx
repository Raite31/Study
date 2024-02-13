import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Film from '../views/Film';
import Cinema from '../views/Cinema';
import Center from '../views/Center';
import Detail from '../views/Detail';

export default class IndexRouter extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/film" component={Film}></Route>
					<Route path="/cinema" component={Cinema}></Route>
					<Route path="/center" component={Center}></Route>
					<Route path="/detail/:myid" component={Detail}></Route>

					<Redirect from="/" to="/film"></Redirect>
				</Switch>
			</HashRouter>
		);
	}
}
