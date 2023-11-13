"use strict";
const common_vendor = require("../../common/vendor.js");
const store_userInfoStore = require("../../store/userInfoStore.js");
const _sfc_main = {
  __name: "energySavingPage",
  setup(__props) {
    const store = store_userInfoStore.userInfoStore();
    let { energySaving } = common_vendor.toRefs(store);
    if (!energySaving.value) {
      common_vendor.index.showModal({
        mask: true,
        title: "无测试数据",
        content: "当月您还没有进行节能测试哦~是否前往测试",
        success(res) {
          if (res.confirm) {
            common_vendor.index.navigateTo({
              url: "/pages/saveSchemePage/saveSchemePage"
            });
          } else {
            common_vendor.index.navigateBack();
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(energySaving)
      }, common_vendor.unref(energySaving) ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/pages/energySavingPage/energySavingPage.vue"]]);
wx.createPage(MiniProgramPage);
