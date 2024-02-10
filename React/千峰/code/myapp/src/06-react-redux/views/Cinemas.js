/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 11:03:54
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 11:04:22
 * @FilePath: /千峰/code/myapp/src/04-router/views/Cinemas.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction';
import { connect } from 'react-redux';
// import store from '../redux/store';

function Cinemas(props) {
	// const [cityName] = useState(store.getState().CityReducer.cityName);
	// const [cinemaList, setCinemaList] = useState(
	// 	store.getState().CinemaListReducer.list
	// );

	let { list, getCinemaListAction } = props;

	useEffect(() => {
		if (list.length === 0) {
			// console.log(store.getState().CinemaListReducer.list);
			// 去后台取数据
			// actionCreator里面写异步
			// store.dispatch(getCinemaListAction());
			getCinemaListAction();
		} else {
			console.log('store缓存');
		}
		// 订阅
		// var unsubscribe = store.subscribe(() => {
		// 	console.log('cinema中订阅', store.getState().CinemaListReducer.list);
		// 	setCinemaList(store.getState().CinemaListReducer.list);
		// });
		// return () => {
		// 	// 取消订阅
		// 	unsubscribe();
		// };
	}, [list, getCinemaListAction]);
	return (
		<div>
			<div style={{ overflow: 'hidden' }}>
				<div
					onClick={() => {
						props.history.push(`/city`);
					}}
					style={{ float: 'left' }}
				>
					{props.cityName}
				</div>
				<div
					style={{ float: 'right' }}
					onClick={() => {
						props.history.push(`/cinemas/search`);
					}}
				>
					搜索
				</div>
			</div>

			{props.list.map((item) => {
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

const mapStateToProps = (state) => {
	return {
		list: state.CinemaListReducer.list,
		cityName: state.CityReducer.cityName,
	};
};
const mapDispatchToProps = {
	getCinemaListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
