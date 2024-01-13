import React, { Component, useEffect } from 'react';

export default class App extends Component {
	state = {
		isCreated: true,
	};
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({ isCreated: !this.state.isCreated });
					}}
				>
					click
				</button>
				{this.state.isCreated ? <Child></Child> : ''}
			</div>
		);
	}
}

function Child() {
	// dom树 渲染树

	// useEffect在dom树和渲染树都渲染完了，才更新，所以不会阻塞页面渲染
	// 会页面抖动，因为每次改变，都会触发回流重绘
    
	// 在useLayoutEffect，就不会页面抖动，他是在dom树渲染完成时触发的，此时还在内存中

	// 想监听中改变dom的话，就放到useLayoutEffect中
	useEffect(() => {
		window.onresize = () => {
			console.log('resize');
		};
		var timer = setInterval(() => {
			console.log('1111');
		}, 1000);

		// 当第二个回调是空的时候，才能效果
		return () => {
			console.log('组件销毁');
			window.onresize = null;
			clearInterval(timer);
		};
	}, []);

	return <div>Child</div>;
}

// class Child extends Component {
// 	render() {
// 		return <div>Child</div>;
// 	}
// 	componentDidMount() {
// 		console.log('componentDidMount');
// 		// 组件销毁后，像这种绑定在窗口上的事件不会被销毁，所以就在willunmount里作销毁
// 		window.onresize = () => {
// 			console.log('resize');
// 		};
// 		this.timer = setInterval(() => {
// 			console.log('1111');
// 		}, 1000);
// 	}

// 	componentWillUnmount() {
// 		console.log('componentWillUnmount');
// 		window.onresize = null;
// 		clearInterval(this.timer);
// 	}
// }
