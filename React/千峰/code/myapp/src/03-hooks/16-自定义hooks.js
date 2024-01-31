/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-28 18:24:47
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-30 23:29:08
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/21-受控cinema.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

// 必须use开头
function useCinemaList() {
	const [cinemaList, setcinemaList] = useState([]);

	useEffect(() => {
		axios({
			url: 'https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=8164417',
			headers: {
				'X-Client-Info':
					'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
				'X-Host': 'mall.film-ticket.cinema.list',
			},
		}).then((res) => {
			setcinemaList(res.data.data.cinemas);
		});
	}, []);
	return {
		cinemaList,
	};
}
function useFilter(cinemaList, mytext) {
	const getCinemaList = useMemo(
		() =>
			cinemaList.filter(
				(item) =>
					item.name.toUpperCase().includes(mytext.toUpperCase()) ||
					item.address.toUpperCase().includes(mytext.toUpperCase())
			),
		[cinemaList, mytext]
	);
	return {
		getCinemaList,
	};
}

export default function Cinema() {
	const [mytext, setmytext] = useState('');

	const { cinemaList } = useCinemaList();
	const { getCinemaList } = useFilter(cinemaList, mytext);

	return (
		<div>
			<input
				type="text"
				value={mytext}
				onChange={(evt) => {
					// 有setState 就会触发render
					setmytext(evt.target.value);
				}}
			></input>
			{getCinemaList.map((item) => (
				<dl key={item.cinemaId}>
					<dt>{item.name}</dt>
					<dd>{item.address}</dd>
				</dl>
			))}
		</div>
	);
}
