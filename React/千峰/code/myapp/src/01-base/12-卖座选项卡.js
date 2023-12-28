import React, { Component } from 'react';
import './css/02-maizuo.css';
import Film from './amizuocomponent/Film';
import Cinema from './amizuocomponent/Cinema';
import Center from './amizuocomponent/Center';

export default class App extends Component {
	state = {
		list: [
			{
				id: 0,
				text: '电影',
			},
			{
				id: 1,
				text: '影院',
			},
			{
				id: 2,
				text: '我的',
			},
		],
		current: 0,
	};

	render() {
		return (
			<div className="contain">
				{/* 写法一 */}
				{/* {this.state.current === 0 && <Film></Film>}
				{this.state.current === 1 && <Cinema></Cinema>}
				{this.state.current === 2 && <Center></Center>} */}

				{/* 写法二 */}
				{
					// 处理函数()
					// 表达式--支持函数表达式
					this.which()
				}

				<ul>
					{this.state.list.map((item, index) => (
						<li
							key={item.id}
							className={this.state.current === index ? 'active' : ''}
							onClick={() => {
								this.handleClick(index);
							}}
						>
							{item.text}
						</li>
					))}
				</ul>
			</div>
		);
	}

	handleClick(index) {
		this.setState({
			current: index,
		});
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
