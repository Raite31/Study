// 对ES6内置API做兼容处理
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div>珠峰培训</div>
	</React.StrictMode>
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
