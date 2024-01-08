/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-08 11:11:16
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-08 11:28:36
 * @FilePath: /千峰/code/myapp/src/02-advanced/swiper/Swiper.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// Swiper.use([Navigation, Pagination]);

export default class RSwiper extends Component {
	componentDidMount() {
		new Swiper('.swiper', {
			modules: [Navigation, Pagination],
			pagination: {
				el: '.swiper-pagination',
			},
			loop: this.props.loop,
		});
	}

	render() {
		return (
			<div>
				<div className="swiper">
					<div className="swiper-wrapper">{this.props.children}</div>

					{/* <!-- 如果需要分页器 --> */}
					<div className="swiper-pagination"></div>

					{/* <!-- 如果需要导航按钮 --> */}
					{/* <div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div> */}

					{/* <!-- 如果需要滚动条 --> */}
					{/* <div class="swiper-scrollbar"></div> */}
				</div>
			</div>
		);
	}
}
