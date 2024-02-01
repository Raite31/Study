/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-02-01 11:55:51
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-02-01 18:10:48
 * @FilePath: /千峰/code/myapp/src/04-router/views/films/Comingsoon.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import axios from 'axios';

export default class Comingsoon extends Component {
	componentDidMount = () => {
		axios
			.get(
				'/ajax/moreCinemas?movieId=0&day=2024-02-01&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1706780793948&cityId=20&lat=23.1298841&lng=113.3810439&optimus_uuid=3852AC50C0E511EEBF084D6512847959E5CAC77D5CB643F4AF1583124FE5555D&optimus_risk_level=71&optimus_code=10'
			)
			.then((res) => {
				console.log(11111);
				console.log('res: ', res.data);
			});
	};

	render() {
		return <div>commingsoon</div>;
	}
}
