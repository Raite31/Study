/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-28 18:24:47
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-28 18:26:59
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
			bakcinemaList: [],
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
				bakcinemaList: res.data.data.cinemas,
			});
		});
	}

	// 后面讲的生命周期函数 更适合发送ajax
	render() {
		return (
			<div>
				<input onInput={this.handleInput}></input>
				{this.state.cinemaList.map((item) => (
					<dl key={item.cinemaId}>
						<dt>{item.name}</dt>
						<dd>{item.address}</dd>
					</dl>
				))}
			</div>
		);
	}

	handleInput = (event) => {
		console.log('input', event.target.value);
		// 用bakcinemaList搜索，用cinemaList赋值，就不会动到数据
		var newlist = this.state.bakcinemaList.filter(
			(item) =>
				item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
				item.address.toUpperCase().includes(event.target.value.toUpperCase())
		);

		console.log(newlist);

		// cinemaList每次都会被重新覆盖
		this.setState({
			cinemaList: newlist,
		});
	};
}
