import App from "./App"
// import Mock from 'mockjs'
// getData({}).then(res => {
// 	console.log(res, "res");
// })
// pages/index/index.vue
// uni.request({
// 	url: "/api/good",
// 	method: "GET",
// 	success(resp) {
// 		console.log(Mock.mock(resp.data), "resp");
// 	},
// 	fail(err) {
// 		console.log(err, "err");
// 	}
// })


import {
	createPinia
} from "pinia";
// 创建 pinia 实例
const pinia = createPinia();

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
// import {
// 	fetch
// } from "./utils/request.js";
export function createApp() {
	const app = createSSRApp(App).use(pinia)
	//若是开发环境则 是调用拦截，否则，将原来fetch原封不动，给到Vue.prototype.$fetch .
	// if (process.env && process.env.NODE_ENV === 'development') {
	// 	// 这里调用拦截之前封装的fetch请求 fetch.before。
	// 	app.config.globalProperties.$fetch = fetch.before(function() {
	// 		return true;
	// 	})
	// } else {
	// 	app.config.globalProperties.$fetch = fetch
	// }
	return {
		app
	}
}
// #endif