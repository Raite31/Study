/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 10:52:09
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-29 11:32:39
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/02-非受控卖座选项卡.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 10:52:09
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-29 11:20:44
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/02-非受控卖座选项卡.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import './css/02-maizuo.css';
import Film from './amizuocomponent/Film';
import Cinema from './amizuocomponent/Cinema';
import Center from './amizuocomponent/Center';
import Tabbar from './amizuocomponent/Tabbar';
import Navbar from './amizuocomponent/Navbar';

export default class App extends Component {
	state = {
		current: 0,
	};

	render() {
		return (
			<div className="contain">
				<Navbar
					myevent={() => {
						console.log('navbar，告诉tabbar切换到“我的”');
						this.setState({
							current: 2,
						});
					}}
				></Navbar>
				{/* 写法一 */}
				{/* {this.state.current === 0 && <Film></Film>}
				{this.state.current === 1 && <Cine></Cine ma>}
				{this.state.current === 2 && <Center></Center>} */}

				{/* 写法二 */}
				{
					// 处理函数()
					// 表达式--支持函数表达式
					this.which()
				}

				<Tabbar
					myevent={(index) => {
						console.log('父组件定义', index);
						this.setState({
							current: index,
						});
					}}
				></Tabbar>
			</div>
		);
	}

	which() {
		switch (this.state.current) {
			case 0:
				return <Film></Film>;
			case 1:
				return <Cinema></Cinema>;
			case 2:
				return <Center></Center>;
			default:
				return null;
		}
	}
}
