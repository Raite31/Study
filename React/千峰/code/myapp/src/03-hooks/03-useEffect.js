import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
	const [list, setList] = useState([]);

	// 在这里不能发请求，每setList一次都会导致发一次请求，这会产生非常大的请求量

	// 这个函数就只会执行一次;
	useEffect(() => {
		axios.get('/test.json').then((res) => {
			console.log(res.data);
			setList(res.data.data.films);
		});
	}, []); // 传空数组 

	return (
		<div>
			APP
			{list.map((item) => (
				<li key={item.filmId}>{item.name}</li>
			))}
		</div>
	);
}
