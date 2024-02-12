import React, { Component } from 'react';
import { Map, List } from 'immutable';
import { fromJS } from 'immutable';

var arr = List([1, 2, 3]);

var arr2 = arr.push(4); // 不会影响老的对象结构, 实现深拷贝
console.log(arr, arr2);
console.log(arr.toJS(), arr2.toJS());

export default class App extends Component {
	state = {
		favor: List(['aaa', 'bbb', 'ccc']),
	};
	render() {
		return (
			<div>
				{this.state.favor.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</div>
		);
	}
}
