/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-29 14:49:10
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-29 23:53:49
 * @FilePath: /Study/React/千峰/code/myapp/src/02-advanced/06-中间人模式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {
	Component,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import axios from 'axios';
import './css/index.css';

const intialState = {
	info: '',
	filmList: [],
};

const reducer = (prevState, action) => {
	var newState = { ...prevState };
	switch (action.type) {
		case 'change-filmList':
			newState.filmList = action.value;
			console.log(newState);
			return newState;
		case 'change-info':
			newState.info = action.value;
			return newState;
		default:
			return prevState;
	}
};

const GlobalContent = React.createContext(); // 创建context对象

export default function App() {
	const [state, dispatch] = useReducer(reducer, intialState);

	// const [filmList, setFilmList] = useState([]);
	// const [info, setInfo] = useState('');

	useEffect(() => {
		axios.get(`/test.json`).then((res) => {
			// console.log(res.data.data.films);
			// setFilmList(res.data.data.films);

			dispatch({
				type: 'change-filmList',
				value: res.data.data.films,
			});
		});
	}, []);

	return (
		<GlobalContent.Provider
			value={{
				// call: '打电话',
				// sms: '发短信',
				// info: info,
				// changeInfo: (value) => {
				// 	// this.setState({
				// 	// 	info: value,
				// 	// });
				// 	setInfo(value);
				// },
				state,
				dispatch,
			}}
		>
			<div>
				{state.filmList.map((item) => (
					<FilmItem key={item.filmId} {...item}></FilmItem>
				))}

				<FilmDetail></FilmDetail>
			</div>
		</GlobalContent.Provider>
	);
}

function FilmItem(props) {
	let { name, poster, grade, synopsis } = props;
	const { dispatch } = useContext(GlobalContent);

	// console.log(value);
	return (
		<div
			className="fileitem"
			onClick={() => {
				// console.log(synopsis);
				// value.changeInfo(synopsis);

				dispatch({
					type: 'change-info',
					value: synopsis,
				});
			}}
		>
			<img src={poster} alt={name}></img>
			<h4>{name}</h4>
			<div>观众评分：{grade}</div>
		</div>
	);
}

function FilmDetail() {
	const { state } = useContext(GlobalContent);
	return <div className="filmdetail">detail--{state.info}</div>;
}
