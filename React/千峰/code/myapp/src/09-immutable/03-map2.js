import React, { Component } from 'react';
import { Map } from 'immutable';

export default class App extends Component {
	state = {
		// Map其实也只能包一层
		info: Map({
			name: 'lee',
			select: 'aa',
			filter: Map({
				text: '',
				up: true,
				down: false,
			}),
		}),
	};

	componentDidMount = () => {
		console.log(this.state.info);
		console.log(this.state.info.get('filter'));
	};

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							info: this.state.info
								.set('name', 'kang')
								.set('select', 'didwjaid'),
						});
					}}
				>
					click
				</button>
				{this.state.info.get('name')}
				<Child filter={this.state.info.get('filter')}></Child>
			</div>
		);
	}
}

class Child extends Component {
	shouldComponentUpdate = (nextProps, nextState) => {
		// immutable的性能优化体现点
		if (this.props.filter === nextProps.filter) {
			return false;
		}
		return true;
	};

	render() {
		return <div>child</div>;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}
}
