import React, { Component } from 'react';
import { withAdminAuth } from '../HOC/withAdminAuth';

@withAdminAuth('用户A') // 组件的页面复用
class PageA extends Component {
	render() {
		return (
			<div>
				<h2>PageA页面的内容</h2>
			</div>
		);
	}
}
export default PageA;
