import React, { Component } from 'react';
import axios from 'axios';

export default class Cinema extends Component {
	constructor() {
		super();

		this.state = {
			cinemaList: [],
			bakcinemaList: [],
		};

		//axios 第三方库 请求数据
		// axios.get("请求地址").then(res=>{}).catch(error=>{console.log(error)})

		// axios
		// 	.get(
		// 		'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7576435'
		// 	)
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

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

// filter 不影响原数组
// var arr = ['aaaaaa', 'bbbbbb', 'cccccc'];
// var newarr = arr.filter((item) => item.includes('a'));
// console.log(newarr);
