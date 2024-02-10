/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 14:28:36
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 14:51:36
 * @FilePath: /千峰/code/myapp/src/04-router/views/Detail.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
// import store from '../redux/store';
import { connect } from 'react-redux';

function Detail(props) {
	// 1. 动态路由获取参数
	console.log(props.match.params.myid, '请求接口');

	// 2. query获取参数
	// console.log(props.location.query.myid);

	// 3. state获取参数
	// console.log(props.location.state.myid);

	useEffect(() => {
		console.log(props);
		console.log(props.match.params.myid, '利用id去后端拿数据');

		// store.dispatch 通知
		// store.dispatch({
		// 	type: 'leeHide-tabbar',
		// });

		return () => {
			console.log('destory');
			// store.dispatch({
			// 	type: 'leeShow-tabbar', 
			// });
		};
	}, [props.match.params.myid]);

	return <div>detail</div>;
}

// connect(将来给孩子传的属性，将来给孩子传的回调函数)
export default connect(null, {
	a() {},
	b() {},
})(Detail);
