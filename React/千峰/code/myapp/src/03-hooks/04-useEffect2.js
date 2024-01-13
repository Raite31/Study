import React, { useEffect, useState } from 'react';

export default function App() {
	const [name, setname] = useState('raite');

	// 第一次执行一次，之后name（依赖）更新也会执行，类似Vue的watch
	useEffect(() => {
		setname(name.substring(0, 1).toUpperCase() + name.substring(1));
	}, [name]);
	// 括号里就填用了哪个变量（依赖）

	return (
		<div>
			{name}
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
