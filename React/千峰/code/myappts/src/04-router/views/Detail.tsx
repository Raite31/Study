import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IParams {
	myid: string;
}
// 防止二
export default class Detail extends Component<RouteComponentProps<IParams>> {
	componentDidMount = () => {
		// 方式一
		console.log((this.props.match.params as any).myid);
		console.log(this.props.match.params.myid);
	};

	render() {
		return <div>detrail</div>;
	}
}
