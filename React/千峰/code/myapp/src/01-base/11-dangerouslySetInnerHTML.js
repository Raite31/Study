/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2023-12-27 16:35:09
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2023-12-27 17:38:20
 * @FilePath: /Study/React/千峰/code/myapp/src/01-base/11-dangerouslySetInnerHTML.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
	state = {
		myhtml: ``,
	};

	render() {
		return (
			<div>
				<div dangerouslySetInnerHTML={{ __html: this.state.myhtml }}></div>
			</div>
		);
	}
}
