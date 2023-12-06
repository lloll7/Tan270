"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_goodItemDetail2 = common_vendor.resolveComponent("goodItemDetail");
  _easycom_goodItemDetail2();
}
const _easycom_goodItemDetail = () => "../../components/goodItemDetail/goodItemDetail.js";
if (!Math) {
  _easycom_goodItemDetail();
}
const _sfc_main = {
  __name: "goodItemDetailPage",
  props: {
    goodId: Number
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          goodId: __props.goodId
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/goodItemDetailPage/goodItemDetailPage.vue"]]);
wx.createPage(MiniProgramPage);
