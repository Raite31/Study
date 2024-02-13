import React, { Component } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

interface IItem {
	filmId: number;
	name: string;
}
// interface IProps {
// 	history: any;
// }

export default class Film extends Component<RouteComponentProps, any> {
	state = {
		list: [],
	};
	componentDidMount = () => {
		axios({
			url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=7238895',
			headers: {
				'X-Client-Info':
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913"}',
				'X-Host': 'mall.film-ticket.film.list',
			},
		}).then((res) => {
			console.log(res.data.data.films);
			// setlist(res.data.data.films);

			this.setState({ list: res.data.data.films });
		});
	};

	render() {
		return (
			<div>
				<ul>
					{this.state.list.map((item: IItem, index) => {
						return (
							<li
								key={item.filmId}
								onClick={() => {
									// console.log(this.props.history);
									// this.props.history.push();
									this.props.history.push(`/detail/${item.filmId}`);
								}}
							>
								{item.name}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
