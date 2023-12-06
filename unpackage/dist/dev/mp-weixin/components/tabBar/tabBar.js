"use strict";
const common_vendor = require("../../common/vendor.js");
const store_myOrderStore = require("../../store/myOrderStore.js");
if (!Array) {
  const _easycom_searchInput2 = common_vendor.resolveComponent("searchInput");
  _easycom_searchInput2();
}
const _easycom_searchInput = () => "../searchInput/searchInput.js";
if (!Math) {
  _easycom_searchInput();
}
const _sfc_main = {
  __name: "tabBar",
  setup(__props) {
    const store = store_myOrderStore.myOrderStore();
    const { updateActiveTip } = store;
    const { activeTip } = common_vendor.toRefs(store);
    const changeActive = (e) => {
      updateActiveTip(e.currentTarget.dataset.type);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "搜索订单"
        }),
        b: common_vendor.unref(activeTip) === "all" ? 1 : "",
        c: common_vendor.o(changeActive),
        d: common_vendor.unref(activeTip) === "daifukuan" ? 1 : "",
        e: common_vendor.o(changeActive),
        f: common_vendor.unref(activeTip) === "daifahuo" ? 1 : "",
        g: common_vendor.o(changeActive),
        h: common_vendor.unref(activeTip) === "daishouhuo" ? 1 : "",
        i: common_vendor.o(changeActive),
        j: common_vendor.unref(activeTip) === "daipingjia" ? 1 : "",
        k: common_vendor.o(changeActive)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/components/tabBar/tabBar.vue"]]);
wx.createComponent(Component);
