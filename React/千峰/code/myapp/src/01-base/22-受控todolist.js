/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-24 22:37:12
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-29 09:44:55
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/05-事件绑定-1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	a = 100;
	state = {
		keyword: '',
		list: [
			{
				id: 0,
				mytext: 'aaa',
				isChecked: false,
			},
			{
				id: 1,
				mytext: 'bbbb',
				isChecked: true,
			},
			{
				id: 2,
				mytext: 'cccccc',
				isChecked: true,
			},
			{
				id: 3,
				mytext: 'ddddd',
				isChecked: false,
			},
		],
	};

	render() {
		return (
			<div>
				{/* <input ref="mytext"></input> */}
				<input
					type="text"
					value={this.state.keyword}
					onChange={(evt) => {
						this.setState({
							keyword: evt.target.value,
						});
					}}
				></input>
				<button
					onClick={() => {
						this.handleClick();
					}}
				>
					add1
				</button>
				<ul>
					{this.state.list.map((item, index) => (
						<li key={item.id}>
							<input
								type="checkbox"
								checked={item.isChecked}
								onChange={() => {
									this.handleChecked(index);
								}}
							></input>

							{/* {item.mytext} */}
							{/* 富文本展示 */}
							<span
								dangerouslySetInnerHTML={{
									__html: item.mytext,
								}}
								style={{
									textDecoration: item.isChecked ? 'line-through' : 'none',
								}}
							></span>

							<button
								onClick={() => {
									this.handelDelClick(item, index);
								}}
							>
								del
							</button>
						</li>
					))}
				</ul>

				{/* 方法一 */}
				{/* {this.state.list.length===0 ? <div>暂无待办事项</div> : null} */}

				{/* 方法二 */}
				{this.state.list.length === 0 && (
					<div className="hidden">暂无待办事项</div>
				)}
			</div>
		);
	}

	handleChecked = (index) => {
		console.log(index);
		let newlist = [...this.state.list];
		newlist[index].isChecked = !newlist[index].isChecked;
		this.setState({
			list: newlist,
		});
	};

	handleClick = () => {
		//错误写法 不要直接修改状态，可能会造成不可预期的问题
		// this.state.list.push(this.myref.current.value);

		let newList = [...this.state.list];
		newList.push({
			id: Math.random() * 10000000,
			mytext: this.state.keyword,
		});

		this.setState({
			keyword: '',
			list: newList,
		});

		console.log(newList);
	};

	handelDelClick = (item, index) => {
		console.log('del', item, index);

		let newList = this.state.list.slice();

		newList.splice(index, 1);

		this.setState({ list: newList });
	};
}
