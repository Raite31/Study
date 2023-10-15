import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// 页面级别组件
import Home from './pages/Home';
import CityList from './pages/CityList';

import { Button } from 'antd-mobile';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			{/* <div className="App"> */}
			{/* 项目根组件
				<Button color="primary" fill="solid">
					登录
				</Button> */}
			<Routes>
				{/* 配置导航菜单 */}
				{/* <Link to="/home">首页</Link>
				<Link to="/citylist">城市选择</Link> */}

				{/* 配置路由 */}
				<Route path="/home" element={<Home />}></Route>
				<Route path="/citylist" element={<CityList />}></Route>
			</Routes>
			{/* </div> */}
		</BrowserRouter>
	);
}

export default App;
