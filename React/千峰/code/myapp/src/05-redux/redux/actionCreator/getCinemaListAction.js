import axios from 'axios';

// redux-thunk
// function getCinemaListAction() {
// 	return (dispatch) => {
// 		axios({
// 			url: 'https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=8164417',
// 			headers: {
// 				'X-Client-Info':
// 					'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
// 				'X-Host': 'mall.film-ticket.cinema.list',
// 			},
// 		}).then((res) => {
// 			console.log('res: ', res.data.data.cinemas);
// 			dispatch({
// 				type: 'change-list',
// 				payload: res.data.data.cinemas,
// 			});
// 		});
// 	};
// }

// redux-props
// function getCinemaListAction() {
// 	return axios({
// 		url: 'https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=8164417',
// 		headers: {
// 			'X-Client-Info':
// 				'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
// 			'X-Host': 'mall.film-ticket.cinema.list',
// 		},
// 	}).then((res) => {
// 		console.log('res: ', res.data.data.cinemas);
// 		return {
// 			type: 'change-list',
// 			payload: res.data.data.cinemas,
// 		};
// 	});
// }

async function getCinemaListAction() {
	var list = await axios({
		url: 'https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=8164417',
		headers: {
			'X-Client-Info':
				'{"a":"3000","ch":"1002","v":"5.2.1","e":"17037263502752202158374913","bc":"440100"}',
			'X-Host': 'mall.film-ticket.cinema.list',
		},
	}).then((res) => {
		console.log('res: ', res.data.data.cinemas);
		return {
			type: 'change-list',
			payload: res.data.data.cinemas,
		};
	});
	return list;
}

export default getCinemaListAction;
