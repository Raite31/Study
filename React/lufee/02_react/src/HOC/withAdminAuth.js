import { Component } from 'react';

export const withAdminAuth = (Comp) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				isAdmin: false,
			};
		}
		componentDidMount() {
			// 假设已经从后端获取到该页面用户的权限
			const currentRole = 'Admin';
			this.setState({
				isAdmin: currentRole === 'Admin',
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
