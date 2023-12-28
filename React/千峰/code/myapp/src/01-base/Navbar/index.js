import React, { Component } from 'react';
import kerwinPropTypes from 'prop-types';
// console.log(kerwinPropTypes);

export default class Navbar extends Component {
	state = {
		// 只能自己内部使用，外部无法改变
	};

	// 属性校验，写法二
	static propTypes = {
		title: kerwinPropTypes.string,
		leftshow: kerwinPropTypes.bool,
	};

	// 默认值
	static defaultProps = {
		leftshow: true,
	};

	render() {
		// 属性 是父组件传来的，this.props
		// console.log(this.props);
		// ES6解构
		let { title, leftshow } = this.props;

		return (
			<div>
				{leftshow && <button>返回</button>}
				navbar-{title}
				<button>home</button>
			</div>
		);
	}
}

// 接收属性做验证，写法一
// 会在控制台给出报错
// 类属性
// Navbar.propTypes = {
// 	title: kerwinPropTypes.string,
// 	leftshow: kerwinPropTypes.bool,
// };

class Test {
	a = 1; // 对象属性
	static b = 100; // 类属性
}

console.log(Test.b);

var obj = new Test();
console.log(obj.a);
