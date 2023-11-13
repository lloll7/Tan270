"use strict";
const common_vendor = require("../common/vendor.js");
const userInfoStore = common_vendor.defineStore("userInfo", {
  state: () => {
    return {
      userInfo: {
        // userName: "小林",
        // address: "广东省 东莞市 石排镇",
        // addressDetail: "广东科技学院",
        // number: "13426897758",
        // sex: "男"
      },
      energySaving: null
      // 用户当月节能测试结果
    };
  },
  getters: {},
  actions: {
    updateUserInfo(newUserInfo) {
      this.userInfo = newUserInfo;
    },
    updateEnergySaving(newEnergySaving) {
      this.energySaving = newEnergySaving;
    }
  }
});
exports.userInfoStore = userInfoStore;
