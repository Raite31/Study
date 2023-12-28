import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
	render() {
		// 父组件传来的对象
		var obj = {
			title: '测试',
			leftshow: false,
		};

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

				<Navbar title={obj.title} leftshow={obj.leftshow}></Navbar>
				{/* 简写 */}
				<Navbar {...obj}></Navbar>
			</div>
		);
	}
}
