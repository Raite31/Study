import _ from 'lodash';
import './style.css';
import Icon from './miaowa.jpeg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
	const element = document.createElement('div');

	// lodash（目前通过一个script引入）对于执行这一行是必需的
	// lodash在当前script中使用import引入
	// 看不懂：https://www.webpackjs.com/guides/getting-started/#creating-a-bundle
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	const myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	console.log(Data)
	console.log(Notes);

	return element;
}

document.body.appendChild(component());
