// 专门导入mock文件
const Mock = require('better-mock/dist/mock.mp.js')
Mock.mock('/api/good', {
	"name": "benny",
	"phone": "15975996757"
})