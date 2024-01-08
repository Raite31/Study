/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-08 11:10:24
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-08 11:40:52
 * @FilePath: /千峰/code/myapp/src/02-advanced/27-swiper-组件.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import RSwiper from './swiper/Swiper';
import RSwiperItem from './swiper/SwiperItem';
import axios from 'axios';

export default class App extends Component {
	state = {
		list: [],
	};

	componentDidMount() {
		// setTimeout(() => {
		// 	this.setState({
		// 		list: ['111', '222', '333', '444'],
		// 	});
		// }, 1000);

		axios({
			url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=6861949',
			headers: {
				'X-Client-Info':
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
				'X-Host': 'mall.film-ticket.film.list',
			},
		}).then((res) => {
			console.log(res.data);
			this.setState({
				list: res.data.data.films,
			});
		});
	}

	render() {
		return (
			<div>
				<RSwiper loop={true}>
					{/* <div className="swiper-slide">1111</div>
					<div className="swiper-slide">2222</div>
					<div className="swiper-slide">2333</div>
					<div className="swiper-slide">4444</div> */}

					{this.state.list.map((item, index) => (
						<RSwiperItem key={item.filmId}>
							<img
								src={item.poster}
								style={{ width: '100%', height: '100%' }}
							></img>
						</RSwiperItem>
					))}
				</RSwiper>
			</div>
		);
	}
}
