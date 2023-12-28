import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					<h2>首页</h2>
					{/* 用大括号就是js的地盘 */}
					<Navbar title="首页" leftshow={false}></Navbar>
				</div>
				<div>
					<h2>列表</h2>
					<Navbar title="列表"></Navbar>
				</div>
				<div>
					<h2>我的</h2>
					<Navbar title="购物车"></Navbar>
				</div>
			</div>
		);
	}
}
