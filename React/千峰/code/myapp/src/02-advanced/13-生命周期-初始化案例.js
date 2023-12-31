/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-31 17:51:59
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-31 17:55:34
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/13-生命周期-初始化案例.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import BetterScroll from 'better-scroll';

export default class App extends Component {
	state = {
		list: [
			'111',
			'1111222',
			'33333',
			'44444',
			'555555',
			'66666',
			'342',
			'325424',
			'2324343242',
			'34t34232',
			'4342323',
			'3453422',
			'314434342321',
			'31421',
			'31421',
			'31421',
		],
	};

	// 成功render并渲染完成真实DOM之后出发，可以修改DOM
	componentDidMount() {
		console.log(document.querySelectorAll('li'));

		// new BetterScroll
		// 和之前在constructor不同，在这里就可以确定render已经渲染完成了，直接new了
		new BetterScroll('#wrapper');
	}

	render() {
		return (
			<div>
				<div
					id="wrapper"
					style={{ height: '200px', background: 'yellow', overflow: 'hidden' }}
				>
					<ul>
						{this.state.list.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
