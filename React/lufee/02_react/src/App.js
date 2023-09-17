import logo from './logo.svg';
import './App.css';
// 全局导入
// import Button from 'antd/es/button'
// import 'antd/dist/reset.css'
import { Button } from 'antd';
import CommentList from './components/CommentList';
import Compond from './components/Compond';
import Hoc from './components/Hoc';
import MovieA from './components/MovieA';
import MovieB from './components/MovieB';

function App() {
	return (
		<div className="App">
			{/* <CommentList></CommentList> */}
			<Compond></Compond>
			<h3>高阶组件的使用</h3>
			<Hoc></Hoc>
			<MovieA></MovieA>
			<MovieB></MovieB>
		</div>
	);
}

export default App;
