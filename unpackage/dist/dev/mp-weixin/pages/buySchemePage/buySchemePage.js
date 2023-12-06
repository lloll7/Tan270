"use strict";
const common_vendor = require("../../common/vendor.js");
const store_buySchemeStore = require("../../store/buySchemeStore.js");
if (!Array) {
  const _easycom_buySchemeItem2 = common_vendor.resolveComponent("buySchemeItem");
  _easycom_buySchemeItem2();
}
const _easycom_buySchemeItem = () => "../../components/buySchemeItem/buySchemeItem.js";
if (!Math) {
  _easycom_buySchemeItem();
}
const _sfc_main = {
  __name: "buySchemePage",
  setup(__props) {
    const store = store_buySchemeStore.buySchemeStore();
    const { buySchemeList, isAllSelected } = common_vendor.toRefs(store);
    const { updateAllSelected } = store;
    const changeAllBtn = () => {
      console.log(isAllSelected.value);
      updateAllSelected(!isAllSelected.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(isAllSelected) ? 1 : "",
        b: common_vendor.o(changeAllBtn),
        c: common_vendor.f(common_vendor.unref(buySchemeList), (item, index, i0) => {
          return {
            a: index,
            b: "434bf27b-0-" + i0,
            c: common_vendor.p({
              buySchemeItem: item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/buySchemePage/buySchemePage.vue"]]);
wx.createPage(MiniProgramPage);
