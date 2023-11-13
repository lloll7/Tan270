"use strict";
const common_vendor = require("../../common/vendor.js");
const store_shoppingCartItemStore = require("../../store/shoppingCartItemStore.js");
if (!Array) {
  const _easycom_shoppingCartItem2 = common_vendor.resolveComponent("shoppingCartItem");
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  (_easycom_shoppingCartItem2 + _easycom_bottomNav2)();
}
const _easycom_shoppingCartItem = () => "../../components/shoppingCartItem/shoppingCartItem.js";
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  (_easycom_shoppingCartItem + _easycom_bottomNav)();
}
const _sfc_main = {
  __name: "order",
  setup(__props) {
    const store = store_shoppingCartItemStore.shoppingCartItemStore();
    const { shoppingCartItemList } = common_vendor.storeToRefs(store);
    const { changeShoppingCartItemList, changeShoppingCartItem } = store;
    console.log(shoppingCartItemList.value);
    let selected = common_vendor.ref(false);
    const clickSelect = () => {
      selected.value = !selected.value;
      shoppingCartItemList.value.forEach((item) => {
        item.selected = selected.value;
      });
      changeShoppingCartItemList(shoppingCartItemList.value);
    };
    const selectAll = (e) => {
    };
    common_vendor.watch(
      // 深度监听需要以函数返回监听属性的格式去监听，如果要深度监听的是一个对象且要监听里面的所有属性，则要写上第三个参数: { deep: true , immediate: true }
      () => shoppingCartItemList.value.map((item) => item.selected),
      () => {
        let res = true;
        shoppingCartItemList.value.forEach((item) => {
          if (!item.selected) {
            res = false;
          }
        });
        selected.value = res;
      }
    );
    let sumAllPrice = common_vendor.computed(() => {
      let sum = 0;
      shoppingCartItemList.value.forEach((item) => {
        if (item.num && item.selected) {
          sum += item.price * item.num;
        }
      });
      return sum;
    });
    let allSelect = common_vendor.computed(() => {
      let res = 0;
      shoppingCartItemList.value.forEach((item) => {
        if (item.selected) {
          res += item.num;
        }
      });
      return res;
    });
    common_vendor.index.$on("decrease", (id) => {
      console.log(id);
      shoppingCartItemList.value.forEach((item) => {
        if (item.id === id) {
          if (item.num > 1) {
            item.num--;
            changeShoppingCartItem(item);
          } else {
            common_vendor.index.showToast({
              title: "该商品不能再减少了哦~",
              icon: "none",
              duration: 1e3
            });
          }
        }
      });
    });
    common_vendor.index.$on("increase", (id) => {
      console.log(id);
      shoppingCartItemList.value.forEach((item) => {
        if (item.id === id) {
          item.num += 1;
          changeShoppingCartItem(item);
        }
      });
    });
    const gotoBilling = () => {
      common_vendor.index.navigateTo({
        url: "/pages/billingPage/billingPage"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(selected),
        b: common_vendor.o(clickSelect),
        c: common_vendor.o(selectAll),
        d: common_vendor.f(common_vendor.unref(shoppingCartItemList), (item, k0, i0) => {
          return {
            a: "090c13c0-0-" + i0,
            b: common_vendor.p({
              shopCartItem: item
            })
          };
        }),
        e: common_vendor.t(common_vendor.unref(allSelect)),
        f: common_vendor.t(common_vendor.unref(sumAllPrice)),
        g: common_vendor.o(gotoBilling)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
