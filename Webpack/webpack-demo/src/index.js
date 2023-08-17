// import _ from 'lodash';
import printMe from './print';

// function component() {
// function getComponent() {

// 由于 import() 会返回一个 promise，因此它可以和 async 函数一起使用。下面是如何通过 async 函数简化代码
async function getComponent() {
	const element = document.createElement('div');
	const { default: _ } = await import('lodash');
	// const element = document.createElement('div');
	const btn = document.createElement('button');

	// lodash（目前通过一个script引入）对于执行这一行是必需的
	// lodash在当前script中使用import引入
	// 看不懂：https://www.webpackjs.com/guides/getting-started/#creating-a-bundle
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	// return import('lodash')
	// 	.then(({ default: _ }) => {
	// 		const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	// 	return element;
	// })
	// .catch((error) => 'An error occurred while loading the component');

	return element;
}

// document.body.appendChild(component());
getComponent().then((component) => {
	document.body.appendChild(component);
});
