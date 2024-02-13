import React, { useRef, useState } from 'react';

export default function App() {
	const mytext = useRef<HTMLInputElement>(null);
	const [list, setlist] = useState<string[]>([]);
	return (
		<div>
			<input type="text" ref={mytext} />
			<button
				onClick={() => {
					console.log((mytext.current as HTMLInputElement).value); // 获取值

					setlist([...list, (mytext.current as HTMLInputElement).value]);
				}}
			>
				click
			</button>

			{list.map((item, index) => {
				return <li key={index}>{item}</li>;
			})}
		</div>
	);
}
