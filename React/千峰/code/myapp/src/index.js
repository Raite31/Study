// 17版本之后 可以不引入React
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01-base/01-class组件';
import App from './09-immutable/redux/App';

// 17版本
// 不需要引入React，在babel编译的时候会自动引入
// 使用jsx语法，不需要再用React.createElement语法
ReactDOM.render(<App></App>, document.getElementById('root'));
