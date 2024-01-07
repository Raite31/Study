/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-07 15:05:06
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-07 15:49:42
 * @FilePath: /千峰/code/myapp/src/02-advanced/18-生命周期-更新阶段3-案例.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
	state = {
		type: 1,
	};

	render() {
		return (
			<div>
				<ul>
					<li
						onClick={() => {
							this.setState({
								type: 1,
							});
						}}
					>
						正在热映
					</li>
					<li
						onClick={() => {
							this.setState({
								type: 2,
							});
						}}
					>
						即将上映
					</li>
				</ul>
				<FilmList type={this.state.type}></FilmList>
			</div>
		);
	}
}

class FilmList extends Component {
	state = {
		list: [],
	};

	// 初始生命周期-只执行一次
	componentDidMount() {
		console.log(this.props.type);
		if (this.props.type === 1) {
			// 请求卖座正在热映数据;
			console.log('请求卖座正在热映数据');
			axios({
				url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=2778951',
				headers: {
					'X-Client-Info':
						'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
					'X-Host': 'mall.film-ticket.film.list',
				},
			}).then((res) => {
				console.log(res.data.data.films);
				this.setState({
					list: res.data.data.films,
				});
			});
		} else {
			// 请求卖座即将上映数据;
			console.log('请求卖座即将上映数据');
			axios({
				url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=4682815',
				headers: {
					'X-Client-Info':
						'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
					'X-Host': 'mall.film-ticket.film.list',
				},
			}).then((res) => {
				console.log(res.data.data.films);
				this.setState({
					list: res.data.data.films,
				});
			});
		}
	}

	// 它在diff算法的第一个阶段，优先级比较低，容易被打断，
	// 可能被执行多次，传入多次不同的props，引发多次不必要的ajax请求
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.type === 1) {
			// 请求卖座正在热映数据;
			console.log('请求卖座正在热映数据');
			axios({
				url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=2778951',
				headers: {
					'X-Client-Info':
						'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
					'X-Host': 'mall.film-ticket.film.list',
				},
			}).then((res) => {
				console.log(res.data.data.films);
				this.setState({
					list: res.data.data.films,
				});
			});
		} else {
			// 请求卖座即将上映数据;
			console.log('请求卖座即将上映数据');
			axios({
				url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=4682815',
				headers: {
					'X-Client-Info':
						'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
					'X-Host': 'mall.film-ticket.film.list',
				},
			}).then((res) => {
				console.log(res.data.data.films);
				this.setState({
					list: res.data.data.films,
				});
			});
		}
	}

	render() {
		return (
			<div>
				{this.state.list.map((item) => (
					<li key={item.filmId}>{item.name}</li>
				))}
			</div>
		);
	}
}
