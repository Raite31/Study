import { Fragment } from 'react';
import { MouseEvent } from 'react';

function ListGroup() {
	const items = ['New York', 'San Franciso', 'Tokyo', 'London', 'Paris'];
	// const items = []

	const getMessage = () => {
		return items.length === 0 ? <p>No item found</p> : null;
	};

    // ts类型绑定
	const handleClick = (event: MouseEvent, item: string, index: number) => {
		console.log(event, item, index);
	};

	return (
		// 一个return里不能有多个根标签
		// 我们可以使用<></>空标签, 也可以使用Fragment
		<Fragment>
			<h1>List</h1>
			{getMessage()}
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li className="list-group-item" key={item} onClick={handleClick}>
						{/* onClick中调用的事件，不能有括号，不然就不是点击时才调用 而是一运行就调用了 */}
						{item}
					</li>
				))}
			</ul>
		</Fragment>
	);
}

export default ListGroup;
