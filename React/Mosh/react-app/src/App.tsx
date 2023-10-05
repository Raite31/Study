import Message from './Message';
import ListGroup from './component/ListGroup';

function App() {
	let items = ['New York', 'San Franciso', 'Tokyo', 'London', 'Paris'];

	return (
		<div>
			{/* 每个组件都有自己的状态 不会相互混乱 */}
			<ListGroup items={items} heading="Cities"></ListGroup>
			{/* <ListGroup></ListGroup> */}
		</div>
	);
}

export default App;
