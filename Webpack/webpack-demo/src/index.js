import _ from 'lodash';
import printMe from './print';

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	// lodash（目前通过一个script引入）对于执行这一行是必需的
	// lodash在当前script中使用import引入
	// 看不懂：https://www.webpackjs.com/guides/getting-started/#creating-a-bundle
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'click me and check the console!';
	btn.onclick = printMe

	element.appendChild(btn)

	return element;
}

document.body.appendChild(component());
