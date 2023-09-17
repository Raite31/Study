import React, { Component } from 'react';

export default class MovieList extends Component {
	render() {
		return (
			<ul>
				{this.props.movies.map((item, i) => {
					return <li key="{i}">{item.title}--{item.category}</li>;
				})}
			</ul>
		);
	}
}
