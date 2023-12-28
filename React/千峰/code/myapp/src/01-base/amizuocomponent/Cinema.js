import React, { Component } from 'react';
import axios from 'axios';

export default class Cinema extends Component {
	constructor() {
		super();

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
			url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7576435',
			headers: {
				'X-Client-Info':
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
				'X-Host': 'mall.film-ticket.film.list',
			},
		}).then((res) => {
			console.log('res: ', res.data.data);
		});
	}

	// 后面讲的生命周期函数 更适合发送ajax
	render() {
		return <div></div>;
	}
}
