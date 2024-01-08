import React, { Component } from 'react';
import './css/04-clear.css';

export default class App extends Component {
	state = {
		list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	};
	myref = React.createRef();

	getSnapshotBeforeUpdate() {
		// 获取容器高度
		console.log(this.myref.current.scrollHeight);
		return this.myref.current.scrollHeight;
	}

	componentDidUpdate(prevProps, prevState, value) {
		// 容器高度 - 快照高度 = 滚动高度
		console.log(this.myref.current.scrollHeight);
		this.myref.current.scrollTop += this.myref.current.scrollHeight - value;
	}

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							list: [
								...[
									11, 12, 22, 23, 32, 24, 33, 42, 21, 311, 312, 313, 153, 2321,
								],
								...this.state.list,
							],
						});
					}}
				>
					来邮件
				</button>
				<h1>邮箱应用</h1>
				<div style={{ height: '200px', overflow: 'auto' }} ref={this.myref}>
					<ul>
						{this.state.list.map((item) => (
							<li key={item} style={{ height: '100px', background: 'yellow' }}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
