import React, { useState } from 'react';

export default function App() {
	const [isShow, setisShow] = useState(true);
	return (
		<div>
			<Navbar
				cb={() => {
					console.log('1111');
					setisShow(!isShow);
				}}
			></Navbar>
			{isShow && <Sidebar></Sidebar>}
		</div>
	);
}

interface Iprops {
	title?: string;
	cb: () => void;
}

function Navbar(props: Iprops) {
	return (
		<div>
			navbar-
			<button
				onClick={() => {
					props.cb();
				}}
			>
				click
			</button>
		</div>
	);
}

function Sidebar() {
	return <div>sidebar</div>;
}
