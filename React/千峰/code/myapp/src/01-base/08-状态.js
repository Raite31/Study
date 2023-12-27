import React, { Component } from 'react';

export default class App extends Component {
	a = 1;
	state = {
		text: '收藏',
		myShow: true,
	};

	render() {
		return (
			<div>
				<h1>欢迎来到React开发</h1>
				<button
					onClick={() => {
						// 错误的做法
						// this.state.text = '取消收藏'

						// 没有三目，变了之后变不回来
						// this.setState({
						//     text: '取消收藏'
						// })

						// 正确的做法1
						// this.setState({
						// 	text: this.state.text === '收藏' ? '取消收藏' : '收藏',
						// });

						// 正确的做法2
						this.setState({
							myShow: !this.state.myShow,
						});

						// 对接接口
						if (this.state.myShow) {
							console.log('收藏的逻辑');
						} else {
							console.log('取消收藏的逻辑');
						}
					}}
				>
					{this.state.text}

					{/* 正确的做法2 */}
					{this.state.myShow ? '收藏' : '取消收藏'}
				</button>
			</div>
		);
	}
}
