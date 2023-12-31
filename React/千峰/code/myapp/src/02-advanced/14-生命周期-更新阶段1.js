/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-31 18:09:03
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-31 22:42:18
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/14-生命周期-更新阶段1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import axios from 'axios';
import BetterScroll from 'better-scroll';

export default class App extends Component {
	state = {
		myname: 'Raite31',
		list: [],
	};

	componentDidMount() {
		axios.get(`/test.json`).then((res) => {
			// console.log(res.data.data.films);
			this.setState({
				list: res.data.data.films,
			});

			// 访问

			new BetterScroll('#wrapper');
		});
	}

	render() {
		console.log('render');
		return (
			<div>
				<button
					onClick={() => {
						// console.log('click');
						this.setState({ myname: 'Lee' });
					}}
				>
					click
				</button>

				<span id="myname"> {this.state.myname} </span>

				<div
					id="wrapper"
					style={{ height: '100px', overflow: 'hidden', background: 'yellow' }}
				>
					<ul>
						{this.state.list.map((item, index) => (
							<li key={item.filmId}>{item.name}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
	// componentWillUpdate

	componentDidUpdate(prevProps, prevState) {
		console.log('didUpdate', document.getElementById('myname').innerHTML);
		// 更新后，想要获取dom节点，更新

		console.log(this.state.list);
		console.log(prevProps.list);

		// 让列表不用刷新多次
		if (prevState.list.length === 0) {
			new BetterScroll('#wrapper');
		}
	}
}
