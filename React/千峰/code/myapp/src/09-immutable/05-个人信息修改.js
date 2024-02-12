import React, { Component } from 'react';
import { Map, List } from 'immutable';

export default class App extends Component {
	state = {
		info: Map({
			name: 'lee',
			location: Map({
				province: '辽宁',
				city: '大连',
			}),
			fav: List(['读书', '看报']),
		}),
	};

	render() {
		return (
			<div>
				<h1>个人信息修改</h1>
				<button
					onClick={() => {
						this.setState({
							info: this.state.info
								.set('name', '小敏')
								.set(
									'location',
									this.state.info.get('location').set('city', '沈阳')
								),
						});
					}}
				>
					修改
				</button>
				<div>
					{this.state.info.get('name')}
					<br />
					{this.state.info.get('location').get('province')}-
					{this.state.info.get('location').get('city')}
					<br />
					{this.state.info.get('fav').map((item, index) => (
						<li key={index}>
							{item}
							<button
								onClick={() => {
									console.log(index);
									this.setState({
										info: this.state.info.set(
											'fav',
											this.state.info.get('fav').splice(index, 1)
										),
									});
								}}
							>
								del
							</button>
						</li>
					))}
				</div>
			</div>
		);
	}
}
