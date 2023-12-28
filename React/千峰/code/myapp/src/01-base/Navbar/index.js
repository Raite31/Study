import React, { Component } from 'react';

export default class Navbar extends Component {
	state = {
		// 只能自己内部使用，外部无法改变
	};

	// 属性 是父组件传来的，this.props

	render() {
		// console.log(this.props);
		// ES6解构
		let { title, leftshow } = this.props;
        
        // 接收属性做验证？？？
		return (
			<div>
                {leftshow && <button>返回</button>}
				navbar-{title}
				<button>home</button>
			</div>
		);
	}
}
