import React, { useState } from 'react';

export default function App() {
	const [name, setName] = useState('Raite31');
	const [age, setAge] = useState(100);

	// console.log('obj: ', obj);

	return (
		<div>
			<button
				onClick={() => {
					setName('xiaoming');
					setAge(18);
				}}
			>
				click
			</button>
			app-{name}-{age}
		</div>
	);
}
