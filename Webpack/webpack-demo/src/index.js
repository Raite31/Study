import _ from 'lodash'

function component() {
	const element = document.createElement('div');

	// lodash（目前通过一个script引入）对于执行这一行是必需的
    // lodash在当前script中使用import引入
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
	return element;
}

document.body.appendChild(component());
