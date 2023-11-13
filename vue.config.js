//vue.config.js

module.exports = {
	//配置全局样式变量
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/uni.scss";`
			}
		}
	}
}