import React, { Component } from 'react';
import MovieList from './MovieList';
import { withFetching } from '../HOC/WithFeatch';

@withFetching('A')
class MovieA extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		movies: [],
	// 	};
	// }
	// componentDidMount() {
	// 	// 发起ajax请求
	// 	this.setState({
	// 		movies,
	// 	});
	// }
	render() {
		return <MovieList movies={this.props.data}></MovieList>;
	}
}
export default MovieA;
