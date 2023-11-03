/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-10-17 01:00:10
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-11-02 12:57:13
 * @FilePath: /珠峰/demo/src/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 对ES6内置API做兼容处理
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));

let flag = true;
let data = [
	{
		id: 1,
		title: '幻音',
	},
	{
		id: 2,
		title: '你好',
	},
	{
		id: 3,
		title: '再见',
	},
];

root.render(
	<>
		<div>珠峰培训</div>
		<h2
			className="box"
			style={{
				color: 'red',
			}}
		>
			我在学React
		</h2>
		{/* 需求一 基于数据的值，判断元素的显隐 */}
		这里无论样式怎么变，按钮都渲染了chuli-ii
		<button style={{ display: flag ? 'block' : 'none' }}>按钮1</button>
		{/* 这里直接控制了元素渲染或者不渲染 */}
		{flag ? <button>按钮1</button> : null}
		<br />
		{/* 需求二： 循环动态绑定数组 */}
		<ul className="news-box">
			{data.map((item, index) => {
				// 循环创建的元素要加key，优化DOM-DIFF
				return (
					<li key={index}>
						<em>{index + 1}</em>
						&nbsp;&nbsp;
						<span>{item.title}</span>
					</li>
				);
			})}
		</ul>
		<br />
		{/* 稀疏数组和密集数组：
			稀疏数组无法使用map方法，密集数组才可以
		*/}
		{new Array(5).fill(null).map((_, index) 1=> {
			return <button key={index}>按钮{index + 1}</button>;
		})}
	</>
);

fetch('/jian/subscriptions/recommended_collections')
	.then((response) => response.json())
	.then((value) => {
		console.log(value);
	});
fetch('/zhi/news/latest')
	.then((response) => response.json())
	.then((value) => {
		console.log(value);
	});
