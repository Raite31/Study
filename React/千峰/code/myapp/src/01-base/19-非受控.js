import React, { Component } from 'react';

export default class App extends Component {
	myusername = React.createRef();
	render() {
		return (
			<div>
				<h1> 登录页</h1>
				<input type="text" ref={this.myusername} defaultValue="Lee"></input>

				<button
					onClick={() => {
						console.log(this.myusername.current.value);
					}}
				>
					登录
				</button>
				<button
					onClick={() => {
						this.myusername.current.value = ''; //重置
					}}
				>
					重置
				</button>

				{/* 若这个值有修改，这里无法更新，因为没有触发render */}
				{/* <Child myvalue={this.myusername.current.value}></Child> */}
			</div>
		);
	}
}
