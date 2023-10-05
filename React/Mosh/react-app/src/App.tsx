import Alert from './component/Alert';
import Button from './component/Button';

function App() {
	return (
		<div>
			{/* <Alert text="Hello World"></Alert> */}
			{/* <Alert>
				Hello <span>World</span>
			</Alert> */}
			{/* <Button color="secondary" onClick={() => console.log('clicked')}>My Button</Button> */}
			<Button onClick={() => console.log('clicked')}>My Button</Button>
		</div>
	);
}

export default App;
