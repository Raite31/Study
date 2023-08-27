// import React from "react";
import React, { Component } from 'react'; // 解构出Component，然后下面就不用再React.Component

// 2. 类声明 ES6，实际开发中应用最多
// 注意：（1）React.Component是一个基类，使用类声明的组件，必须继承这个基类 （2）在类中，必须有render函数 （3）在render函数中，需要return一个jsx元素 （4）组件名称必须以大写字母开头

// 什么是复用组件
// （1）将多个组件进行整合，例如调用两次以上相同的组件 （2）结构非常复杂时需要将组件拆分成小组件 （3）会存在父子关系的数据传递

class MyBtn extends Component {
	render() {
		return <button>{this.props.title}</button>;
	}
}

// export default class App extends React.Component {
export default class App extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	// 生命周期
	// 必须使用render函数，能将虚拟DOM渲染成真实DOM
	render() {
		// 它会将jsx所接收的属性转换为单个对象传递到组件，这个对象我们成为叫props
		return (
			<div>
				<h2>App, {this.props.name}</h2>
				<MyBtn title="提交"></MyBtn>
				<MyBtn title="删除"></MyBtn>
				<MyBtn title="修改"></MyBtn>
			</div>
		);
	}
}

// 可以直接写到上面
// export default App;

// rcc 这个是快捷方式，快速生成以下模版
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
