/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 11:55:12
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 17:48:07
 * @FilePath: /千峰/code/myapp/src/04-router/views/Nowplaying.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

// 被Route包裹，是Route的好大儿
export default function Nowplaying(props) {
	const [list, setlist] = useState([]);
	useEffect(() => {
		axios({
			url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=7238895',
			headers: {
				'X-Client-Info':
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913"}',
				'X-Host': 'mall.film-ticket.film.list',
			},
		}).then((res) => {
			console.log(res.data.data.films);
			setlist(res.data.data.films);
		});
	}, []);

	const history = useHistory();

	const handleChangePage = (id) => {
		// console.log('click');
		// window.location.href = '#/detail/' + id;

		// Route儿子写法
		console.log(props);
		props.history.push(`/detail/${id}`);

		// hook写法
		// 1. 动态路由传参
		// history.push(`/detail/${id}`);

		// 以下两种方案的id都存在浏览器内存中，如果想分享地址给别人，就没法带参，所以还是第一种最好
		// 2. query传参
		// history.push({ pathname: '/detail', query: { myid: id } });

		// 3. state传参
		// history.push({
		// 	pathname: '/detail',
		// 	state: { myid: id },
		// });
	};

	return (
		<div>
			{list.map((item) => (
				// <FilmItem key={item.filmId} {...item} {...props}></FilmItem>
				<WithFilmItem key={item.filmId} {...item}></WithFilmItem>
			))}
		</div>
	);
}

function FilmItem(props) {
	// console.log(props);
	let { name, filmId, poster } = props;
	return (
		<li onClick={() => props.history.push(`/detail/${filmId}`)}>
			<img src={poster}></img>
			{name}
		</li>
	);
}

// 父组件没有props时，就弄一个
// 跨级传输history这些值
const WithFilmItem = withRouter(FilmItem);
