import { Fragment, useState } from 'react';
import { MouseEvent } from 'react';

// {items: [], heading: string}
interface Props {
	items: string[];
	heading: string;
	// (item: string) => void
	onSelectItem: (item: string) => void; // onClick
}

// function ListGroup(props: Props) {
function ListGroup({ items, heading, onSelectItem }: Props) {
	// items = []
	// let selectedIndex = 0;

	// Hook
	const [selectedIndex, setSelectedIndex] = useState(-1);

	// const getMessage = () => {
	// 	return items.length === 0 ? <p>No item found</p> : null;
	// };

	// // ts类型绑定
	// const handleClick = (event: MouseEvent, item: string, index: number) => {
	// 	console.log(event, item, index);
	// };

	return (
		// 一个return里不能有多个根标签
		// 我们可以使用<></>空标签, 也可以使用Fragment
		<Fragment>
			<h1>{heading}</h1>
			{/* {getMessage()} */}
			{/* {props.items.length === 0 && <p>No item found</p>} */}
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{/* {props.items.map((item, index) => ( */}
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? 'list-group-item active'
								: 'list-group-item'
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{/* onClick中调用的事件，不能有括号，不然就不是点击时才调用 而是一运行就调用了 */}
						{item}
					</li>
				))}
			</ul>
		</Fragment>
	);
}

export default ListGroup;
