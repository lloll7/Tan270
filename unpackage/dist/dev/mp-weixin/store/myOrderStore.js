"use strict";
const common_vendor = require("../common/vendor.js");
const myOrderStore = common_vendor.defineStore("myOrder", {
  state() {
    return {
      activeTip: "all"
    };
  },
  getters: {},
  actions: {
    updateActiveTip(newActiveTip) {
      console.log(newActiveTip);
      this.activeTip = newActiveTip;
    }
  }
});
exports.myOrderStore = myOrderStore;
