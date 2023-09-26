import { useState } from 'react';

import Edit from './components/Edit';
import List from './components/List';
import './index.css';

const Home = () => {
	const [data, setData] = useState([]);

	return (
		<div className="app">
			<Edit add={setData}></Edit>
			<List listData={data} deleteData={setData}></List>
		</div>
	);
};
export default Home;
