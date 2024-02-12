import React, { Component } from 'react';
import { fromJS } from 'immutable';

export default class App extends Component {
	state = {
		// 用fromJS和setIn，就不用Map List那些花里胡哨的了
		info: fromJS({
			name: 'lee',
			location: {
				province: '辽宁',
				city: '大连',
			},
			fav: ['读书', '看报'],
		}),
	};

	componentDidMount = () => {
		console.log(this.state.info);
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
								.setIn(['location', 'city'], '沈阳'),
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
									// this.setState({
									// 	info: this.state.info.setIn(['fav', index], '111'),
									// });

									this.setState({
										info: this.state.info.updateIn(['fav'], (list) =>
											list.splice(index, 1)
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
