import React, { Component } from 'react';

// 高阶组件：不是组件，本质是一个函数，该函数接收一个或多个组件，返回一个新组件，Comment为高阶组件
// 高阶函数： 接收的参数是函数或者返回值是函数
// 常见：数组遍历的相关方法、定时器、Promise、高阶组件
// 作用：实现更强大的 动态功能

// y = kx + b
// const highOrderCom = (Comp) => {
// 	// 返回一个新组件
// 	const NewComponent = (props) => {
// 		// 属性代理
// 		const attr = { type: '高阶组件', price: 168 };
// 		return <Comp {...props} {...attr}></Comp>;
// 	};
// 	return NewComponent;
// };

// 重写组件生命周期
// 打印日志的高阶组件
const withLog = (Comp) => {
	console.log(Comp.name + '渲染了');
	const newCom = (props) => {
		return <Comp {...props}></Comp>;
	};
	return newCom;
};

const highOrderCom = (Comp) => {
	// 返回一个新组件
	return class extends Component {
		constructor(props) {
			super(props);
		}
		componentDidMount() {
			console.log('发起ajax请求');
		}
		handleClick = () => {};
		render() {
			// 属性代码是最常见的实现方式
			return (
				<Comp
					{...this.props}
					name="react"
					content="高阶组件"
					onClick={this.handleClick}
				></Comp>
			);
		}
	};
};

@highOrderCom
@withLog
@withLog // 由下往上执行
class Hoc extends Component {
	render() {
		return (
			<div>
				{/* <h3>当前课程：{this.props.type}</h3> */}
				{/* <h3>当前价格：{this.props.price}</h3> */}

				<h3>当前课程：{this.props.name}</h3>
				<h3>当前价格：{this.props.content}</h3>
			</div>
		);
	}
}
// export default highOrderCom(Hoc);
// 链式调用，由内到外执行
// export default highOrderCom(withLog(withLog(Hoc)));
export default Hoc;

/**
 * 1。 为什么我们需要高阶组件？
 *      react高阶组件能让我们写出易于维护的react代码
 * 2. 高阶组件是什么？
 *      不是组件，本质是一个函数，该函数接收一个或多个组件，返回一个新组件，Comment为高阶组件
 *      比如： 我给你一个赛亚人你给我一个超级赛亚人
 *      y = kx+b
 *      x好比是普通组件，k和b就是当前普通组件定制的属性和方法，y就是返回的新组件
 * 3. 如何实现高阶组件？
 *      1. 属性代码是最常见的实现方式
 *      好处：常用的方法独立并复用
 *      2. 反向继承
 * 4. 高阶组件的应用
 *      1. 页面复用
 * 2.   2. 权限控制
 * (    3. 打印日志
 */
