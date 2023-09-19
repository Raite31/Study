import { Component } from 'react';
// 需要实现一个返回高阶组件的函数
export const withAdminAuth = (role, vip) => (Comp) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				isAdmin: false,
			};
		}
		componentDidMount() {
			// 假设已经从后端获取到该页面用户的权限
			// const currentRole = 'Admin';
			const currentRole = '用户A';
            const currentVip = 'vip';

            // admin 或者是vip就有权限访问页面
			this.setState({
				isAdmin: currentRole === role && currentVip === vip,
			});
		}
		render() {
			if (this.state.isAdmin) {
				return <Comp {...this.props}></Comp>;
			} else {
				return <div>你无权限查看该页面，请联系管理员</div>;
			}
		}
	};
};
