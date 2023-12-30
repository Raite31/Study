/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 14:49:10
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-30 23:48:49
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/06-中间人模式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import axios from 'axios';
import './css/03-communination.css';

const GlobalContent = React.createContext(); // 创建context对象

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			filmList: [],
			info: '111111',
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
			<GlobalContent.Provider
				value={{
					info: this.state.info,
					changeInfo: (value) => {
						this.setState({
							info: value,
						});
					},
				}}
			>
				<div>
					{this.state.filmList.map((item) => (
						<FilmItem key={item.filmId} {...item}></FilmItem>
					))}

					<FilmDetail></FilmDetail>
				</div>
			</GlobalContent.Provider>
		);
	}
}

// 受控组件
class FilmItem extends Component {
	render() {
		// console.log(this.props);
		let { name, poster, grade, synopsis } = this.props;

		return (
			<GlobalContent.Consumer>
				{(value) => {
					console.log(value);
					return (
						<div
							className="filmitem"
							onClick={() => {
								console.log(synopsis);
								// this.props.onEvent(synopsis);
								value.changeInfo(synopsis);
							}}
						>
							<img src={poster} alt={name}></img>
							<h4>{name}</h4>
							<div>观众评分: {grade}</div>
						</div>
					);
				}}
			</GlobalContent.Consumer>
		);
	}
}

class FilmDetail extends Component {
	render() {
		return (
			<GlobalContent.Consumer>
				{(value) => <div className="filmdetail">detial--{value.info}</div>}
			</GlobalContent.Consumer>
		);
	}
}
