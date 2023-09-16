import logo from './logo.svg';
import './App.css';
// 全局导入
// import Button from 'antd/es/button'
// import 'antd/dist/reset.css'
import { Button } from 'antd';
import CommentList from './components/CommentList';
import Compond from './components/Compond';

function App() {
	return (
		<div className="App">
			{/* <CommentList></CommentList> */}
			<Compond></Compond>
		</div>
	);
}

export default App;
