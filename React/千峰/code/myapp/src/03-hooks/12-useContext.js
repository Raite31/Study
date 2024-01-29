/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 14:49:10
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-28 22:30:53
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/06-中间人模式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './css/index.css';

const GlobalContent = React.createContext(); // 创建context对象

export default function App() {
	const [filmList, setFilmList] = useState([]);
	const [info, setInfo] = useState('');

	useEffect(() => {
		axios.get(`/test.json`).then((res) => {
			// console.log(res.data.data.films);
			setFilmList(res.data.data.films);
		});
	}, []);

	return (
		<GlobalContent.Provider
			value={{
				call: '打电话',
				sms: '发短信',
				info: info,
				changeInfo: (value) => {
					// this.setState({
					// 	info: value,
					// });
					setInfo(value);
				},
			}}
		>
			<div>
				{filmList.map((item) => (
					<FilmItem key={item.filmId} {...item}></FilmItem>
				))}

				<FilmDetail></FilmDetail>
			</div>
		</GlobalContent.Provider>
	);
}

function FilmItem(props) {
	let { name, poster, grade, synopsis } = props;
	const value = useContext(GlobalContent);

	console.log(value);
	return (
		<div
			className="fileitem"
			onClick={() => {
				console.log(synopsis);
				value.changeInfo(synopsis);
			}}
		>
			<img src={poster} alt={name}></img>
			<h4>{name}</h4>
			<div>观众评分：{grade}</div>
		</div>
	);
}

function FilmDetail() {
	const value = useContext(GlobalContent);
	return <div className="filmdetail">detial--{value.info}</div>;
}
