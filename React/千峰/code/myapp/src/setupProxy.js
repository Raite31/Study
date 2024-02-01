const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/ajax',
		createProxyMiddleware({
			target: 'https://i.maoyan.com', // 替换为你的后端API地址
			changeOrigin: true,
		})
	);
};
// 配完了记得重启项目
// 官网有这个配置 直接用就好了

// https://i.maoyan.com/ajax/moreCinemas?movieId=0&day=2024-02-01&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1706780793948&cityId=20&lat=23.1298841&lng=113.3810439&optimus_uuid=3852AC50C0E511EEBF084D6512847959E5CAC77D5CB643F4AF1583124FE5555D&optimus_risk_level=71&optimus_code=10
