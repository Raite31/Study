import React from 'react';

// 它是高阶组件，获取数据，对状态赋值，属性传递
export const withFetching = (fetch) => (Comp) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				data: [],
			};
		}
		componentDidMount() {
			if (fetch === 'A') {
				this.setState({
					data: [
						{
							id: 1,
							title: 'Vue',
							category: 'A',
						},
						{
							id: 2,
							title: 'React',
							category: 'A',
						},
					],
				});
			} else {
				this.setState({
					data: [
						{
							id: 1,
							title: 'Python',
							category: 'B',
						},
						{
							id: 2,
							title: 'Django',
							category: 'B',
						},
					],
				});
			}
		}
		render() {
			return <Comp {...this.props} data={this.state.data}></Comp>;
		}
	};
};
