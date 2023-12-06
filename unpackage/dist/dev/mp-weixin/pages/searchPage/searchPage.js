"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "searchPage",
  setup(__props) {
    const searchVal = common_vendor.ref("");
    const gotoSearchResPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/searchResPage/searchResPage"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: searchVal.value,
        b: common_vendor.o(($event) => searchVal.value = $event.detail.value),
        c: common_vendor.o(gotoSearchResPage)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-56af9171"], ["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/searchPage/searchPage.vue"]]);
wx.createPage(MiniProgramPage);
