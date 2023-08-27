// 项目的入口文件
import React from 'react';
import ReactDOM from 'react-dom';
// 思考：<h2>hello,react</h2>是什么
// 是JSX == JavaScript+Xml 对象 虚拟DOM元素
// 插入变量，和Vue的{{}}相同

const user = {
	firstName: '小',
	lastName: '马哥',
};

function formatName(user) {
	return user.firstName + user.lastName;
}

const ele = <h2>hello,{formatName(user)}</h2>;

function getGeeting(user) {
	if (user) {
		return <h1>你好,{formatName(user)}</h1>;
	}
	return <h1>hello,react</h1>;
}

// ReactDOM.render(getGeeting(user), document.querySelector('#root'));

// React只会更新它需要更新的部分
// function tick() {
// 	const element = (
// 		<div>
//             {/* h1是不更新的，只有h2发生更新 */}
// 			<h1>Hello, world!</h1>
// 			<h2>{new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// 	ReactDOM.render(element, document.querySelector('#root'));
// }
// setInterval(tick, 1000);

// 循环绑定元素，使用map，不能用forEach，因为forEach没有返回值
const arr = ['1', '2', '3'];
const ulEle = (
	<ul>
		{arr.map((item, index) => {
			// 循环绑定的jsx元素，必须要有key属性
			return <li key={index}>{item}</li>;
		})}
	</ul>
);

const goods = [
	{ id: 1, price: 100, title: '小米6手机' },
	{ id: 2, price: 200, title: '小米7手机' },
	{ id: 3, price: 1100, title: '小米8手机' },
	{ id: 4, price: 2000, title: '小米9手机' },
];
// ReactDOM.render(ulEle, document.querySelector('#root'));
const filterEle = (
	<ul>
		{goods.map((good, index) => {
			return good.price > 1000 ? <li key={good.id}>{good.title}</li> : null;
		})}
	</ul>
);
ReactDOM.render(filterEle, document.querySelector('#root'));
