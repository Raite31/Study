import { Fragment } from 'react';

function ListGroup() {
	// const items = ['New York', 'San Franciso', 'Tokyo', 'London', 'Paris'];
	const items = []

	const getMessage = () => {
		return items.length === 0 ? <p>No item found</p> : null;
	};

	return (
		// 一个return里不能有多个根标签
		// 我们可以使用<></>空标签, 也可以使用Fragment
		<Fragment>
			<h1>List</h1>
			{getMessage()}
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</Fragment>
	);
}

export default ListGroup;
