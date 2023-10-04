import Message from './Message';
import ListGroup from './component/ListGroup';

function App() {
	return (
		<div>
			{/* 每个组件都有自己的状态 不会相互混乱 */}
			<ListGroup></ListGroup>
			<ListGroup></ListGroup>
		</div>
	);
}

export default App;
