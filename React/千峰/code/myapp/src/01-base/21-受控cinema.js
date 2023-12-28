/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-28 18:24:47
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-29 07:51:14
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/21-受控cinema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import axios from 'axios';

export default class Cinema extends Component {
	constructor() {
		super();

		this.state = {
			cinemaList: [],
			keyword: '',
		};

		axios({
			url: 'https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=8164417',
			headers: {
				'X-Client-Info':
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
				'X-Host': 'mall.film-ticket.cinema.list',
			},
		}).then((res) => {
			console.log('res: ', res.data.data.cinemas);
			this.setState({
				cinemaList: res.data.data.cinemas,
			});
		});
	}

	// 后面讲的生命周期函数 更适合发送ajax
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.keyword}
					onChange={(evt) => {
						// 有setState 就会触发render
						this.setState({
							keyword: evt.target.value,
						});
					}}
				></input>
				{this.getCinemaList().map((item) => (
					<dl key={item.cinemaId}>
						<dt>{item.name}</dt>
						<dd>{item.address}</dd>
					</dl>
				))}
			</div>
		);
	}

	getCinemaList() {
		return this.state.cinemaList.filter(
			(item) =>
				item.name.toUpperCase().includes(this.state.keyword.toUpperCase()) ||
				item.address.toUpperCase().includes(this.state.keyword.toUpperCase())
		);
	}
}
