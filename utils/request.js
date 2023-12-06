// export const fetch = function({
// 	url,
// 	method = "GET",
// 	data,
// 	showLoading = false,
// 	header = {
// 		'content-type': 'application/json'
// 	},
// }) {
// 	if (showLoading) {
// 		uni.showLoading({
// 			mask: true // 是否展示透明蒙层
// 		})
// 	}
// 	if (method.toLowerCase() == 'post') {
// 		header['content-type'] = 'application/x-www-form-urlencoded'
// 	}
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url,
// 			header,
// 			data: {
// 				...data,
// 				oppenid: uni.getStorageSync('openid') || '',
// 				language: uni.getStorageSync('language') || 'en'
// 			},
// 			method,
// 			success(res) {
// 				console.log(url, data, method);
// 				if (res.statusCode == 200) {
// 					resolve(res.data)
// 					if (showLoading) {
// 						uni.hideLoading();
// 					}
// 				} else {
// 					reject(res)
// 				}
// 			},
// 			error(err) {
// 				reject(err);
// 				uni.hideLoading();
// 			}
// 		})
// 	})
// }

// Function.prototype.before = function(fn) {
// 	var self = this;
// 	return function() {
// 		let f = fn.apply(this, arguments);
// 		if (f) {
// 			console.log(arguments);
// 			let opt = arguments[0];
// 			let index = opt.url.lastIndexOf('/');
// 			var name = opt.url.substring(index + 1);
// 			console.log(name);
// 			//这里mock返回， promise函数
// 			var url = ` http://localhost:8080/${name}.json`;
// 			return mock(url);
// 		}
// 		return self.apply(this, arguments);

// 	}
// }

// function mock(url) {
// 	return uni.request({
// 		url: url, //仅为示例，并非真实接口地址。
// 		data: {
// 			text: new Date(),
// 		},
// 		method: 'GET',
// 		header: {
// 			'custom-header': 'hello' //自定义请求头信息
// 		}
// 	}).then(function(data) {
// 		return data[1].data;
// 	})
// }