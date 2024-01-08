import React, { Component } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// Swiper.use([Navigation, Pagination]);

export default class App extends Component {
	state = {
		list: ['1111', '22222', '333333'],
	};
	componentDidMount() {
		new Swiper('.swiper', {
			modules: [Navigation, Pagination],
			pagination: {
				el: '.swiper-pagination',
			},
		});
	}

	render() {
		return (
			<div>
				<div
					className="swiper"
					style={{ height: '200px', background: 'yellow' }}
				>
					<div className="swiper-wrapper">
						{this.state.list.map((item) => (
							<div className="swiper-slide" key={item}>
								{item}
							</div>
						))}
					</div>

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
