import React, { useEffect, useState, useMemo } from 'react';
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction';
import store from '../redux/store';

export default function Search() {
	const [mytext, setmytext] = useState('');
	const [cinemaList, setCinemaList] = useState(
		store.getState().CinemaListReducer.list
	);

	useEffect(() => {
		if (store.getState().CinemaListReducer.list.length === 0) {
			console.log(store.getState().CinemaListReducer.list);
			// 去后台取数据
			// actionCreator里面写异步
			store.dispatch(getCinemaListAction());
		} else {
			console.log('store缓存');
		}
		// 订阅
		var unsubscribe = store.subscribe(() => {
			console.log('cinema中订阅', store.getState().CinemaListReducer.list);
			setCinemaList(store.getState().CinemaListReducer.list);
		});
		return () => {
			// 取消订阅
			unsubscribe();
		};
	}, []);

	const getCinemaList = useMemo(
		() =>
			cinemaList.filter(
				(item) =>
					item.name.toUpperCase().includes(mytext.toUpperCase()) ||
					item.address.toUpperCase().includes(mytext.toUpperCase())
			),
		[cinemaList, mytext]
	);

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
			{getCinemaList.map((item) => {
				return (
					<dl key={item.cinemaId} style={{ padding: '10px' }}>
						<dt>{item.name}</dt>
						<dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
					</dl>
				);
			})}
		</div>
	);
}
