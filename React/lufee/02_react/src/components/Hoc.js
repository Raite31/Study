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
const highOrderCom = (Comp) => {
	// 返回一个新组件
	return class extends Component {
		constructor(props) {
			super(props);
		}
		componentDidMount() {
			console.log('发起ajax请求');
		}
		render() {
			return <Comp {...this.props} name="react" content="高阶组件"></Comp>;
		}
	};
};

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
export default highOrderCom(Hoc);


/**
 * 1。 为什么我们需要高阶组件？
 *      react高阶组件能让我们写出易于维护的react代码
 * 2. 高阶组件是什么？
 * 3. 如何实现高阶组件？
 * 4. 高阶组件的应用
 */