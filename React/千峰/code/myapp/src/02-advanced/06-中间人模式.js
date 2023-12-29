/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 14:49:10
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-29 18:23:53
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/06-中间人模式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import axios from 'axios';
import './css/03-communination.css';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			filmList: [],
			info: '',
		};

		axios.get(`/test.json`).then((res) => {
			// console.log(res.data.data.films);
			this.setState({
				filmList: res.data.data.films,
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.filmList.map((item) => (
					<FilmItem
						key={item.filmId}
						{...item}
						onEvent={(value) => {
							console.log('父组件接收', value);
							this.setState({
								info: value,
							});
						}}
					></FilmItem>
				))}

				<FilmDetail info={this.state.info}></FilmDetail>
			</div>
		);
	}
}

// 受控组件
class FilmItem extends Component {
	render() {
		// console.log(this.props);
		let { name, poster, grade, synopsis } = this.props;

		return (
			<div
				className="filmitem"
				onClick={() => {
					console.log(synopsis);
					this.props.onEvent(synopsis);
				}}
			>
				<img src={poster} alt={name}></img>
				<h4>{name}</h4>
				<div>观众评分: {grade}</div>
			</div>
		);
	}
}

class FilmDetail extends Component {
	render() {
		return <div className="filmdetail">{this.props.info}</div>;
	}
}
