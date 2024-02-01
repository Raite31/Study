/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 13:47:10
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 13:58:29
 * @FilePath: /千峰/code/myapp/src/04-router/components/Tabbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Tabbar.css';

export default class Tabbar extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						{/* <a href="#/films">电影</a> */}
						{/* 用NavLink会自动给active的项加上acive类名 */}
						<NavLink to="/films">电影</NavLink>
					</li>
					<li>
						{/* <a href="#/cinemas">影院</a> */}
						<NavLink to="/cinemas">影院</NavLink>
					</li>
					<li>
						{/* <a href="#/center">我的</a> */}
						<NavLink to="/center">我的</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}
