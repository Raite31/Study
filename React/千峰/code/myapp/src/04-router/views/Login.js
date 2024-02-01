/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 15:19:23
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 15:25:30
 * @FilePath: /千峰/code/myapp/src/04-router/views/Login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class Login extends Component {
	render() {
		return (
			<div>
				{/* 登录页面 */}
				<input type="text"></input>
				<button
					onClick={() => {
						localStorage.setItem('isAuth', '123456');
                        this.props.history.push('/center')
					}}
				>
					登录
				</button>
			</div>
		);
	}
}
