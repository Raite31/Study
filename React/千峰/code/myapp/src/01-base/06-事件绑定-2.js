/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-24 22:37:12
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-24 23:22:03
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/05-事件绑定-1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	a = 100;

	render() {
		return (
			<div>
				<input></input>
				<button
					onClick={() => {
						console.log('add', this.a);
					}}
				>
					add1
				</button>

				{/* 这两种要留意this指向 */}
				{/* .bind(this) 修正this指向，这里括号里的this，
                就是把外面指向App实例的这层this传递到bind函数里面去，
                让handleClick2的指向也指向App实例*/}
				{/* 不推荐这种写法 */}
				<button onClick={this.handleClick2.bind(this)}>add2</button>
				{/* 而click3是箭头函数，箭头函数不关心谁调用它，它永远指向最外层，
                所以直接在函数里用this即可 */}
				{/* 比较推荐这种写法 */}
				<button onClick={this.handleClick3}>add3</button>
				<button
					onClick={() => {
						this.handleClick4(); // 非常推荐，便于传参
					}}
				>
					add4
				</button>
			</div>
		);
	}
	handleClick2() {
		console.log('add2', this.a);
		// 这里this指向undefined
	}
	handleClick3 = () => {
		console.log('add3', this.a);
	};
	handleClick4 = () => {
		console.log('add4', this.a);
	};
}

// 修改this指向的几种方法：
// call, 改变this，自动执行函数
// apply, 改变this，自动执行函数
// bind，改变this，但不自动执行函数！！手动加括号执行函数

var obj1 = {
	name: 'obj1',
	getName() {
		console.log(this.name);
	},
};

var obj2 = {
	name: 'obj2',
	getName() {
		console.log(this.name);
	},
};

obj1.getName();
obj1.getName.call(obj2);
obj2.getName();
