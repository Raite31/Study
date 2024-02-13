// 状态结合ts

import React, { Component } from 'react';
interface IState {
	text: string;
	list: string[];
}
export default class App extends Component<any, IState> {
	state = {
		text: '',
		list: [],
	};
	myref = React.createRef<HTMLInputElement>();
	render() {
		return (
			<div>
				nihao
				{/* <input
					type="text"
					value={this.state.text}
					onChange={(evt) => {
						this.setState({
							text: evt.target.value,
						});
					}}
				/> */}
				<input type="text" ref={this.myref} />
				<button
					onClick={() => {
						console.log(this.state.text);
						// 断言
						console.log((this.myref.current as HTMLInputElement).value);
						this.setState({
							list: [
								...this.state.list,
								(this.myref.current as HTMLInputElement).value,
							],
						});
					}}
				>
					click
				</button>
				{this.state.list.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</div>
		);
	}
}
