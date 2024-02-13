import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import store from '../redux/store';

interface IParams {
	myid: string;
}
// 防止二
export default class Detail extends Component<RouteComponentProps<IParams>> {
	componentDidMount = () => {
		// 方式一
		console.log((this.props.match.params as any).myid);
		console.log(this.props.match.params.myid);

		store.dispatch({
			type: 'hide',
		});
	};

	//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
	componentWillUnmount() {
		store.dispatch({
			type: 'show',
		});
	}

	render() {
		return <div>detrail</div>;
	}
}
