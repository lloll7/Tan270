"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_tabBar2 = common_vendor.resolveComponent("tabBar");
  const _easycom_orderList2 = common_vendor.resolveComponent("orderList");
  (_easycom_tabBar2 + _easycom_orderList2)();
}
const _easycom_tabBar = () => "../../components/tabBar/tabBar.js";
const _easycom_orderList = () => "../../components/orderList/orderList.js";
if (!Math) {
  (_easycom_tabBar + _easycom_orderList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/myOrderPage/myOrderPage.vue"]]);
wx.createPage(MiniProgramPage);
