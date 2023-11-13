import App from './App'
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
export function createApp() {
	const app = createSSRApp(App).use(pinia)
	return {
		app
	}
}
// #endif