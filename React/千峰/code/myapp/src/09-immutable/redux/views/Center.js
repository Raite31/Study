/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 11:03:47
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 16:56:26
 * @FilePath: /千峰/code/myapp/src/04-router/views/Center.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function Center(props) {
	return (
		<div>
			center
			<div
				onClick={() => {
					props.history.push('/filmsorder');
					console.log(props);
				}}
			>
				电影订单
			</div>
		</div>
	);
}

export default withRouter(Center);
