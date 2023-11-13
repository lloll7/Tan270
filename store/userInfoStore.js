// 仓库文件
import {
	defineStore
} from "pinia";
// 用户数据仓库
export const userInfoStore = defineStore("userInfo", {
	state: () => {
		return {
			userInfo: {
				// userName: "小林",
				// address: "广东省 东莞市 石排镇",
				// addressDetail: "广东科技学院",
				// number: "13426897758",
				// sex: "男"
			},
			energySaving: null // 用户当月节能测试结果
		}
	},
	getters: {

	},
	actions: {
		updateUserInfo(newUserInfo) {
			this.userInfo = newUserInfo
		},
		updateEnergySaving(newEnergySaving) {
			this.energySaving = newEnergySaving
		}
	}
})