import { useState } from 'react';
import Alert from './component/Alert';
import Button from './component/Button';

function App() {
	const [alertVisibile, setAlertVisibility] = useState(false);

	return (
		<div>
			{/* <Alert text="Hello World"></Alert> */}
			{/* <Alert>
				Hello <span>World</span>
			</Alert> */}
			{/* <Button color="secondary" onClick={() => console.log('clicked')}>My Button</Button> */}
			{alertVisibile && (
				<Alert onClose={() => setAlertVisibility(false)}>My alter</Alert>
			)}
			<Button onClick={() => setAlertVisibility(true)}>My Button</Button>
		</div>
	);
}

export default App;
