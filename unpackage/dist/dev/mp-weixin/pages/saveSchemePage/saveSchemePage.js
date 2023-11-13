"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "saveSchemePage",
  setup(__props) {
    const gotoSaveTest = () => {
      common_vendor.index.navigateTo({
        url: "/pages/saveTestPage/saveTestPage"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gotoSaveTest)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/pages/saveSchemePage/saveSchemePage.vue"]]);
wx.createPage(MiniProgramPage);
