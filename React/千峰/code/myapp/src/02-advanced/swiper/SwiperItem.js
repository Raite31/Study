/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-08 11:16:57
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-08 11:17:02
 * @FilePath: /千峰/code/myapp/src/02-advanced/swiper/SwiperItem.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class RSwiperItem extends Component {
	render() {
		return <div className="swiper-slide">{this.props.children}</div>;
	}
}
