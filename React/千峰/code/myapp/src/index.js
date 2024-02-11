// 17版本之后 可以不引入React
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01-base/01-class组件';
import App from './07-antd/03-layout';
// import { Provider } from 'react-redux';
// import { store, persistor } from './07-antd/01-antd引入';

// import { PersistGate } from 'redux-persist/integration/react';

// 17版本
// 不需要引入React，在babel编译的时候会自动引入
// 使用jsx语法，不需要再用React.createElement语法
ReactDOM.render(
	// jsx 不要加引号
	// <div>111111</div>
	// <React.StrictMode>
	// <Provider store={store}>
	// 	{/* 要保证首字母大写 */}
	// 	<PersistGate loading={null} persistor={persistor}>
	// 		<App></App>
	// 		{/* </React.StrictMode>, */}
	// 	</PersistGate>
	// </Provider>,
	<App></App>,
	document.getElementById('root')
);
