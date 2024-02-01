/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 11:03:38
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 12:02:30
 * @FilePath: /千峰/code/myapp/src/04-router/views/Films.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Nowplaying from './films/Nowplaying';
import Comingsoon from './films/Comingsoon';

export default class Films extends Component {
	render() {
		return (
			<div>
				films
				<h1>大轮播啊大轮播</h1>
				{/* 路由配置，嵌套路由 */}
				<Switch>
					<Route path="/films/nowplaying" component={Nowplaying}></Route>
					<Route path="/films/comingsoon" component={Comingsoon}></Route>
					<Redirect from="/films" to="/films/nowplaying"></Redirect>
				</Switch>
			</div>
		);
	}
}
