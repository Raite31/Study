import { useState } from 'react';

export default function App() {
	const [name, setname] = useState<string>('lee');
	return (
		<div>
			app-{name.substring(0, 1).toUpperCase() + name.substring(1)}
			<button
				onClick={() => {
					setname('xiaoming');
				}}
			>
				click
			</button>
		</div>
	);
}
