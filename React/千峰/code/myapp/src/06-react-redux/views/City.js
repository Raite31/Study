import React, { useState } from 'react';
// import store from '../redux/store'; // 引入store
import { connect } from 'react-redux';

function City(props) {
	const [list] = useState(['北京', '上海', '广州', '深圳']);
	return (
		<div>
			city
			<ul>
				{list.map((item, index) => (
					<li
						key={index}
						onClick={() => {
							// store.dispatch({
							// 	type: 'change-city',
							// 	payload: item,
							// });
							props.change(item);
							// props.history.push('/cinemas'); // 方式一
							props.history.goBack(); // 方式二
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

const mapDispatchToProp = {
	change(item) {
		return {
			type: 'change-city',
			payload: item,
		};
	},
};
export default connect(null, mapDispatchToProp)(City);
