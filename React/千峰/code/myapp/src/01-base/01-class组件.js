// class Test {
// 	constructor() {
// 		// 成员变量
// 		this.a = 1;
// 	}
// 	// 成员函数
// 	testa() {
// 		console.log('testa');
// 	}
// }

// // 类的继承
// class ChildTest extends Test {
// 	testb() {
// 		console.log('testb');
// 	}
// }

// var obj = new Test();
// obj.testa();
// // console.log(obj.testa());
// console.log(obj.a);

import React from 'react';
// 组件类，只有继承了React.Component的类才有资格叫组件类
class App extends React.Component {
	render() {
		// 要保证只有一个根节点
		// 如果是多行内容，则必须加()
		return <div>hello react Component</div>;
	}
}

export default App;
