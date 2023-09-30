import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from '../../global/constants';

import Edit from './components/Edit';
import List from './components/List';
import './index.css';

async function fetchData(setData) {
	const res = await fetch(API_GET_DATA);
	const { data } = await res.json();
	await console.log('data: ', data);
	setData(data);
}

async function fetchSetData(data) {
	await fetch(API_GET_DATA, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data }),
	});
}

const Home = () => {
	const [data, setData] = useState([]);
	const submittingStatus = useRef(false); // 如果他是false，这个页面的东西更新了多少次 他都不会渲染 如果是true，才会渲染

	useEffect(() => {
		if (!submittingStatus.current) {
			return;
		}
		fetchSetData(data).then((data) => (submittingStatus.current = false));
	}, [data]);

	// 括号绑定哪个数据，哪个数据变动触发渲染页面就会触发一次
	useEffect(() => {
		// 场景1：
		// window.alert("新增成功")
		// 场景2:
		// // 绑定的事情
		// return () => {
		// 	// 取消绑定
		// };
		// 场景3:
		// console.log('here'); // 当下面的括号是空的时候 这个api只会触发一次

		fetchData(setData);
	}, []);

	return (
		<div className="app">
			<Edit add={setData} submittingStatus={submittingStatus}></Edit>
			<List
				listData={data}
				deleteData={setData}
				submittingStatus={submittingStatus}
			></List>
		</div>
	);
};
export default Home;
