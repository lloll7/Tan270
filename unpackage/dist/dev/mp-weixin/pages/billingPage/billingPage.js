"use strict";
const common_vendor = require("../../common/vendor.js");
const store_shoppingCartItemStore = require("../../store/shoppingCartItemStore.js");
if (!Array) {
  const _easycom_shoppingCartItem2 = common_vendor.resolveComponent("shoppingCartItem");
  _easycom_shoppingCartItem2();
}
const _easycom_shoppingCartItem = () => "../../components/shoppingCartItem/shoppingCartItem.js";
if (!Math) {
  _easycom_shoppingCartItem();
}
const _sfc_main = {
  __name: "billingPage",
  setup(__props) {
    const store = store_shoppingCartItemStore.shoppingCartItemStore();
    const { shoppingCartItemList } = common_vendor.storeToRefs(store);
    let shopCartItemSelectedList = common_vendor.reactive(shoppingCartItemList.value.filter((item) => item.selected));
    let sumAllPrice = common_vendor.computed(() => {
      let sum = 0;
      shopCartItemSelectedList.forEach((item) => {
        if (item.num && item.selected) {
          sum += item.price * item.num;
        }
      });
      return sum;
    });
    let allSelect = common_vendor.computed(() => {
      let res = 0;
      shopCartItemSelectedList.forEach((item) => {
        if (item.selected) {
          res += item.num;
        }
      });
      return res;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(shopCartItemSelectedList), (item, k0, i0) => {
          return {
            a: item.id,
            b: "022c259b-0-" + i0,
            c: common_vendor.p({
              showRadio: false,
              shopCartItem: item
            })
          };
        }),
        b: common_vendor.t(common_vendor.unref(allSelect)),
        c: common_vendor.t(common_vendor.unref(sumAllPrice)),
        d: common_vendor.o((...args) => _ctx.gotoBilling && _ctx.gotoBilling(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/billingPage/billingPage.vue"]]);
wx.createPage(MiniProgramPage);
