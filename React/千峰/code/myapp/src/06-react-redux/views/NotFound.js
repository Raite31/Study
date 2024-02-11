import React, { useEffect } from 'react';

function NotFound(props) {
	useEffect(() => {
		console.log(props);
	}, [props]);
	return <div>not found</div>;
}

function leeconnect(cb, obj) {
	var value = cb();
	// 第一个return是返回函数，第二个return返回加工后的组件
	return (MyComponent) => {
		// 函数式组件
		return (props) => {
			console.log(props);
			return (
				<div style={{ color: 'red' }}>
					<MyComponent {...value} {...props} {...obj} />
				</div>
			);
		};
	};
}
export default leeconnect(
	() => {
		return {
			a: 1,
			b: 2,
		};
	},
	{
		aa() {},
		bb() {},
	}
)(NotFound);
