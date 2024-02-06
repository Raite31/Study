/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 11:08:57
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-02 12:05:16
 * @FilePath: /千峰/code/myapp/src/04-router/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import {
	// BrowserRouter as Router,
	HashRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Films from '../views/Films';
import Cinemas from '../views/Cinemas';
import Center from '../views/Center';
import NotFound from '../views/NotFound';
import Detail from '../views/Detail';
import Login from '../views/Login';
import City from '../views/City';

function isAuth() {
	return localStorage.getItem('isAuth');
}

export default class index extends Component {
	render() {
		return (
			<div>
				{/* <HashRouter> */}
				{/* 爬虫更喜欢BrowserRouter这种, 没有#️⃣ */}
				{/* BrowserRouter没有#️⃣，虽好看， 但是可能会真正朝后端发起请求要页面，后端没有对应的路径处理，就会报404，反而就不好看了 */}
				<Router>
					{this.props.children}
					{/* switch 只渲染匹配的第一个 */}
					<Switch>
						<Route path="/films" component={Films}></Route>
						<Route path="/cinemas" component={Cinemas}></Route>
						{/* <Route path="/center" component={Center}></Route> */}
						{/* 新的写法 方便路由拦截 */}
						<Route
							path="/center"
							render={(props) => {
								// <Center></Center>;
								// 用Redirect 重定向到login，路径才会跟着变成login
								return isAuth() ? (
									// 因为这里路由没有用component，所以要自己手动传props
									<Center myname="lee" {...props} />
								) : (
									<Redirect to="/login" />
								);
							}}
						></Route>

						<Route path="/login" component={Login}></Route>
						<Route path="/city" component={City}></Route>

						{/* 动态路由 */}
						<Route path="/detail/:myid" component={Detail}></Route>
						{/* query传参 */}
						{/* <Route path="/detail" component={Detail}></Route> */}

						{/* 模糊匹配 */}
						<Redirect from="/" to="/films" exact></Redirect>

						{/* 精确匹配 exact */}
						<Route component={NotFound}></Route>
					</Switch>
					{/* </HashRouter> */}
				</Router>
			</div>
		);
	}
}

// Route简易的源码解析
// class Route extends Component {
// 	render() {
// 		var MyComponent = this.props.component;
// 		return (
// 			<div>
// 				<MyComponent />
// 			</div>
// 		);
// 	}
// }


