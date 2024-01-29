import React, { useReducer } from 'react';

// 处理函数
const reducer = (prevState, action) => {
	console.log('reducers', prevState, action);
	// 不能直接对preState进行操作，必须通过一个新的变量来操作
	let newstate = { ...prevState };
	switch (action.type) {
		case 'lee-minus':
			newstate.count--;
			return newstate;
		case 'lee-add':
			newstate.count++;
			return newstate;
		default:
			return prevState;
	}
};

const intialState = {
	count: 0,
};
export default function App() {
	// 参数[状态值，改变状态的唯一方法]
	const [state, dispatch] = useReducer(reducer, intialState);
	return (
		<div>
			<button
				onClick={() => {
					dispatch({
						type: 'lee-minus',
					});
				}}
			>
				-
			</button>
			{state.count}
			<button
				onClick={() => {
					dispatch({
						type: 'lee-add',
					});
				}}
			>
				+
			</button>
		</div>
	);
}
