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
function tick() {
	const element = (
		<div>
            {/* h1是不更新的，只有h2发生更新 */}
			<h1>Hello, world!</h1>
			<h2>{new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.querySelector('#root'));
}
setInterval(tick, 1000);
