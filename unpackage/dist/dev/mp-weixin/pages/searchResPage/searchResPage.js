"use strict";
const common_vendor = require("../../common/vendor.js");
const store_goodListStore = require("../../store/goodListStore.js");
if (!Array) {
  const _easycom_moreGood2 = common_vendor.resolveComponent("moreGood");
  _easycom_moreGood2();
}
const _easycom_moreGood = () => "../../components/moreGood/moreGood.js";
if (!Math) {
  _easycom_moreGood();
}
const _sfc_main = {
  __name: "searchResPage",
  setup(__props) {
    const goodStore = store_goodListStore.goodListStore();
    common_vendor.toRefs(goodStore);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          goodList: []
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/searchResPage/searchResPage.vue"]]);
wx.createPage(MiniProgramPage);
