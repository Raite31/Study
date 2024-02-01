/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 11:08:57
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 13:56:02
 * @FilePath: /千峰/code/myapp/src/04-router/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Films from '../views/Films';
import Cinemas from '../views/Cinemas';
import Center from '../views/Center';
import NotFound from '../views/NotFound';

export default class index extends Component {
	render() {
		return (
			<div>
				<HashRouter>
					{this.props.children}
					{/* switch 只渲染匹配的第一个 */}
					<Switch>
						<Route path="/films" component={Films}></Route>
						<Route path="/cinemas" component={Cinemas}></Route>
						<Route path="/center" component={Center}></Route>

						{/* 模糊匹配 */}
						<Redirect from="/" to="/films" exact></Redirect>

						{/* 精确匹配 exact */}
						<Route component={NotFound}></Route>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
