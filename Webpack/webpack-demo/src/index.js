import _ from 'lodash';
import './style.css';
import Icon from './miaowa.jpeg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml'
import yaml from './data.yaml'
import json from './data.json5'

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

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
