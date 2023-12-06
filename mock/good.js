const Mock = require('better-mock/dist/mock.mp.js')
Mock.mock('http://www.jd.com/api/good', {
	"name": "benny",
	"phone": "15975996757"
})












// mock/mockdata.js
// mock/mockdata.js
// mock/mockdata.js
// import Mock from 'mockjs';

// 拦截请求并模拟响应数据
// function mockRequest(url, method, response, options = {}) {
// 	Mock.mock(url, method, (options) => {
// 		console.log('Mocking request:', options.url); // 添加这行用于调试
// 		return response;
// 	}, options);
// }

// // 示例：拦截 "/api/getData" GET 请求，并返回模拟数据
// mockRequest('http://your-domain.com/api/getData', 'get', {
// 	"id": "1"
// }, {
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// });

// export default Mock;




// Mock.mock("http://www.jd.com/api/good", "get", {
// 	code: 0,
// 	msg: "",
// 	data: [{
// 			id: 1,
// 			imgUrl: '../../static/img/jiajv.png',
// 			goodName: 'Royal Palm Sofa',
// 			price: '50.18',
// 			sales: 100,
// 			upTime: "2021-9-17"
// 		},
// 		{
// 			id: 2,
// 			imgUrl: '../../static/img/binxiang1.png',
// 			goodName: 'Royal Palm Sofa',
// 			price: '23.4',
// 			sales: 234,
// 			upTime: "2022-10-7"
// 		},
// 		{
// 			id: 3,
// 			imgUrl: '../../static/img/dianshi.png',
// 			goodName: 'Royal Palm Sofa',
// 			price: '52',
// 			sales: 7467,
// 			upTime: "2022-1-4"
// 		},
// 		{
// 			id: 4,
// 			imgUrl: '../../static/img/zhuji.png',
// 			goodName: 'Royal Palm Sofa',
// 			price: '23',
// 			sales: 1324,
// 			upTime: "2020-6-3"
// 		},
// 		{
// 			id: 5,
// 			imgUrl: '../../static/img/jiajav.png',
// 			goodName: 'Vertical Air Conditioner',
// 			price: '56',
// 			sales: 347,
// 			upTime: "2019-3-3"
// 		},
// 		{
// 			id: 6,
// 			imgUrl: '../../static/img/binxiang2.png',
// 			goodName: 'Vertical Air Conditioner',
// 			price: '99',
// 			sales: 256,
// 			upTime: "2020-8-15"
// 		}
// 	],
// 	//   data: "http://www.strml.net/",
// });