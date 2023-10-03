import { Fragment } from 'react';

function ListGroup() {
	return (
		// 一个return里不能有多个根标签
		// 我们可以使用<></>空标签, 也可以使用Fragment
		<Fragment>
			<h1>List</h1>
			<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
		</Fragment>
	);
}

export default ListGroup;
