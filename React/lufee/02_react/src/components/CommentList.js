import { render } from '@testing-library/react';
import React, { Component, PureComponent } from 'react';

// 模拟场景， 监听服务器数据变化，刷新页面组件 但是不一直监听
// 1. 第一种解决方案
// class Comment extends Component {
// 	shouldComponentUpdate(nextProps, nextState) {
// 		// 性能优化的方法
// 		if (nextProps.comment.content === this.props.comment.content) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// 	render() {
// 		console.log('render');
// 		const { id, content, author } = this.props.comment;
// 		return (
// 			<div>
// 				<p>{id}</p>
// 				<p>{content}</p>
// 				<p>{author}</p>
// 			</div>
// 		);
// 	}
// }

// 2. 第二种解决方案： PureComponent 重写了shouldComponentUpdate, 它以浅比较的方式实现的函数类 浅比较比较的是值
// 浅比较，比较的是值
// class Comment extends PureComponent {
// 	render() {
// 		console.log('render');
// 		const { id, content, author } = this.props;
// 		return (
// 			<div>
// 				<p>{id}</p>
// 				<p>{content}</p>
// 				<p>{author}</p>
// 			</div>
// 		);
// 	}
// }

// 3. 第三种解决方案 高阶组件

// 组件组合而非继承
// React有十分强大的组合模式，推荐使用组合而非继承来实现组件间的代码崇勇

const Comment = React.memo(({ id, content, author }) => {
	console.log('render');
	return (
		<div>
			<p>{id}</p>
			<p>{content}</p>
			<p>{author}</p>
		</div>
	);
});

// 聪明式组件设计成类 傻瓜式组件仅单纯展示
export default class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				comments: [
					{
						id: 1,
						author: 'facebook',
						content: 'react非常好',
					},
					{
						id: 2,
						author: '刘语熙',
						content: 'Vue更好',
					},
				],
			});
		}, 1000);
	}
	render() {
		return (
			<div>
				{this.state.comments.map((item, i) => {
					return (
						// <Comment key={item.id} comment={item} />
						// <Comment
						// 	key={item.id}
						// 	id={item.id}
						// 	content={item.content}
						// 	author={item.author}
						// />
						<Comment key={item.id} {...item} />
					);
				})}
			</div>
		);
	}
}
