/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 11:01:29
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-29 11:57:09
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/amizuocomponent/Tabbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import '../css/02-maizuo.css';

// export default class Tabbar extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<ul>
// 					{this.props.list.map((item, index) => (
// 						<li
// 							key={item.id}
// 							className={this.props.current === index ? 'active' : ''}
// 							onClick={() => {
// 								this.handleClick(index);
// 							}}
// 						>
// 							{item.text}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		);
// 	}
// 	handleClick(index) {
// 		// this.setState({
// 		// 	current: index,
// 		// });

// 		// 通知父组件，修改父组件状态
// 		this.props.myevent(index);
// 	}
// }

const Tabbar = (props) => {
	function handleClick(index) {
		// this.setState({
		// 	current: index,
		// });

		// 通知父组件，修改父组件状态
		props.myevent(index);
	}

	return (
		<div>
			<ul>
				{props.list.map((item, index) => (
					<li
						key={item.id}
						className={props.current === index ? 'active' : ''}
						onClick={() => {
							handleClick(index);
						}}
					>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Tabbar;
