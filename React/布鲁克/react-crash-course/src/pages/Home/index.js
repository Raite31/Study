import { useState } from 'react';

import Edit from './components/Edit';
import List from './components/List';
import './index.css';

const Home = () => {
	const [a, setA] = useState(100);
	function plus() {
		setA(function (prev) {
			return prev + 200;
		});
	}

	return (
		<div className="app">
			{a}
			<button onClick={plus}>加法</button>
			<Edit></Edit>
			<List></List>
		</div>
	);
};
export default Home;
