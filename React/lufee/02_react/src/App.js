import logo from './logo.svg';
import './App.css';
// 全局导入
// import Button from 'antd/es/button'
// import 'antd/dist/reset.css'
import { Button } from 'antd';
import CommentList from './components/CommentList';

function App() {
  return (
    <div className="App">
      <CommentList></CommentList>
    </div>
  );
}

export default App;
