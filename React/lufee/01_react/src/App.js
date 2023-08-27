// import React from "react";
import React, { Component } from 'react'; // 解构出Component，然后下面就不用再React.Component
// 一切皆模块
import './App.css';
import Logo from './logo.svg';

// 2. 类声明 ES6，实际开发中应用最多
// 注意：（1）React.Component是一个基类，使用类声明的组件，必须继承这个基类 （2）在类中，必须有render函数 （3）在render函数中，需要return一个jsx元素 （4）组件名称必须以大写字母开头

// 什么是复用组件
// （1）将多个组件进行整合，例如调用两次以上相同的组件 （2）结构非常复杂时需要将组件拆分成小组件 （3）会存在父子关系的数据传递

class MyBtn extends Component {
	render() {
		return <button>{this.props.title}</button>;
	}
}

class Avatar extends Component {
	render() {
		return (
			<div>
				<img src={this.props.user.avatarUrl} alt="" />
				<img src={Logo} alt="" />
			</div>
		);
	}
}

class UserInfo extends Component {
	render() {
		return (
			<div className="userinfo">
				<Avatar user={this.props.user.avatarUrl}></Avatar>
				<img src={this.props.user.avatarUrl} alt=""></img>
				<div className="username">{this.props.user.name}</div>
			</div>
		);
	}
}

// App=>A=>B
class Comment extends Component {
	handleClick = () => {
		// 用箭头函数解决this指向问题
		// 也不可以修改props
		this.props.add('自组件中的值'); // 这里的this指向谁？
	};
	render() {
		return (
			<div className="comment">
				{/*用户信息*/}
				<UserInfo user={this.props.user}></UserInfo>
				{/* 以下写法都可以，以下写法在自组件中就不需要再this.props.user.name了，只需要this.props.name*/}
				{/* <UserInfo {...this.props.user}></UserInfo> */}
				{/* <UserInfo avatarUrl={this.props.user.avatarUrl} name={this.props.user.name}></UserInfo> */}
				{/*用户评论内容*/}
				<div className="comment-content">
					评论内容：{this.props.user.content}
				</div>
				{/*用户评论时间*/}
				<div className="comment-date">发布时间：{this.props.user.date}</div>
				<button onClick={this.handleClick}>子传父</button>
			</div>
		);
	}
}

// export default class App extends React.Component {
export default class App extends Component {
	constructor(props) {
		super(props);
		// React遵循单项数据流，只能从父传到子，不能逆向
		this.user = {
			avatarUrl:
				'https://s1.52poke.wiki/wiki/thumb/0/0d/025Pikachu.png/260px-025Pikachu.png',
			name: '皮卡丘',
			content: '皮卡丘传奇',
			date: new Date().toLocaleDateString(),
			val: 'hello',
		};
	}
	add(val) {
		// alert(val)
		// this.user.val = val; //这样是无法改变视图上的值的
	}

	// 生命周期
	// 必须使用render函数，能将虚拟DOM渲染成真实DOM
	render() {
		// 它会将jsx所接收的属性转换为单个对象传递到组件，这个对象我们成为叫props
		return (
			<div>
				<h2>App, {this.props.name}</h2>
				<h1>{this.user.val}</h1>
				<MyBtn title="提交"></MyBtn>
				<MyBtn title="删除"></MyBtn>
				<MyBtn title="修改"></MyBtn>
				{/* 传递数据 */}
				<Comment user={this.user} add={this.add}></Comment>
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
