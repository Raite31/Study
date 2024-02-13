import React, { Component } from 'react';
import IndexRouter from './router';
import store from './redux/store';

export default class App extends Component {
	state = {
		isShow: store.getState().isShow,
	};

	componentDidMount = () => {
		store.subscribe(() => {
			console.log(store.getState());

			this.setState({
				isShow: store.getState().isShow,
			});
		});
	};

	render() {
		return (
			<div>
				<IndexRouter></IndexRouter>
				{this.state.isShow && (
					<ul>
						<li>电影</li>
						<li>影院</li>
						<li>我的</li>
					</ul>
				)}
			</div>
		);
	}
}
