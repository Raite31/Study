import React, { useContext, useReducer } from 'react';

// 状态 放到视图外面了
const initailState = {
	a: '111111',
	b: '22222',
};
const reducer = (prevState, action) => {
	const newstate = { ...prevState };
	switch (action.type) {
		case 'change-a':
			newstate.a = action.value;
			return newstate;
		case 'change-b':
			newstate.b = action.value;
			return newstate;
		default:
			return prevState;
	}
};

const GlobalContext = React.createContext();
// 视图层
export default function App() {
	const [state, dispatch] = useReducer(reducer, initailState);
	return (
		<GlobalContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			<div>
				<Child1></Child1>
				<Child2></Child2>
				<Child3></Child3>
			</div>
		</GlobalContext.Provider>
	);
}

function Child1() {
	const { dispatch } = useContext(GlobalContext);
	return (
		<div style={{ background: 'red' }}>
			<button
				onClick={() => {
					dispatch({
						type: 'change-a',
						value: '22222',
					});
				}}
			>
				改变a
			</button>
			<button
				onClick={() => {
					dispatch({
						type: 'change-b',
						value: '333',
					});
				}}
			>
				改变b
			</button>
		</div>
	);
}
function Child2() {
	const { state } = useContext(GlobalContext);
	return <div style={{ background: 'yellow' }}>child2-{state.a}</div>;
}
function Child3() {
	const { state } = useContext(GlobalContext);
	return <div style={{ background: 'blue' }}>child3-{state.b}</div>;
}
