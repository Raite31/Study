import React, { Component } from 'react';

interface IState {
	name: string;
}

// export default class App extends Component<约定属性, 约定状态> {
// 通过泛型就可以检测出了
export default class App extends Component<any, IState> {
	state: IState = {
		name: 'lee',
	};

	render() {
		return (
			<div>
				app-{this.state.name}
				<button
					onClick={() => {
						this.setState({
							// 在这里ts无法检测出来
							name: 'dfwada',
						});
					}}
				>
					click
				</button>
			</div>
		);
	}
}
