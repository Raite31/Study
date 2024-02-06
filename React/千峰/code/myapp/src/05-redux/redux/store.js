// 1. 引入redux
// 2. createStore( reducer )
import { combineReducers, createStore } from 'redux';
import CityReducer from './reducers/CityReducer';
import TabbarReducer from './reducers/TabbarReducer';

const reducer = combineReducers({
	CityReducer,
	TabbarReducer,
});

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

//
// var obj = {
// 	myname: 'Lee',
// };
// function test(obj) {
// 	obj.myname = 'Lee2';
// 	return obj;
// }
// test(obj); // 他改变了原对象的值，产生了副作用，所以不属于纯函数

// 纯函数：
//  1. 对外界没有副作用
//  2. 每次调用时，同样的输入得到同样的输出
// reduer就是纯函数
