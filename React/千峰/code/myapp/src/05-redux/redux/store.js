// 1. 引入redux
// 2. createStore( reducer   )
import { createStore } from 'redux';

const reducer = (
	prevState = {
		show: true,
		// ...
	},
	action
) => {
	console.log(action);
	let newState = { ...prevState };
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'leeHide-tabbar':
			newState.show = false;
			return newState;
		case 'leeShow-tabbar':
			newState.show = true;
			return newState;
		default:
			return prevState;
	}
	return prevState;
};

const store = createStore(reducer);

function createLeeStore(reducer) {
	var list = [];
	var state = reducer();
	function subscribe(callback) {
		list.push(callback);
	}

	function dispatch(action) {
		// 覆盖旧的state
		state = reducer(state, action);
		for (var i in list) {
			list[i] && list[i]();
		}
	}

	function getState() {
		return state;
	}
	return {
		subscribe,
		dispatch,
		getState,
	};
}

export default store;
