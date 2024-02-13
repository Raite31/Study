import { IpcNetConnectOpts } from 'net';
import React from 'react';

export default function App() {
	return (
		<div>
			app
			<Child name="aaa"></Child>
		</div>
	);
}

interface IProps {
	name: string;
}

// function Child(props: IProps) {
// 	return <div>child-{props.name}</div>;
// }

const Child: React.FC<IProps> = (props) => {
	return <div>child-{props.name}</div>;
};
