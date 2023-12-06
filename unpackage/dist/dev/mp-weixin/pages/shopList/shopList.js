"use strict";
const common_vendor = require("../../common/vendor.js");
const store_shopListStore = require("../../store/shopListStore.js");
if (!Array) {
  const _easycom_shopItem2 = common_vendor.resolveComponent("shopItem");
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  (_easycom_shopItem2 + _easycom_bottomNav2)();
}
const _easycom_shopItem = () => "../../components/shopItem/shopItem.js";
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  (_easycom_shopItem + _easycom_bottomNav)();
}
const _sfc_main = {
  __name: "shopList",
  setup(__props) {
    const store = store_shopListStore.shopListStore();
    let { shopList } = common_vendor.toRefs(store);
    let hotShopList = common_vendor.reactive([]);
    let newShopList = common_vendor.reactive([]);
    shopList.value.forEach((item) => {
      if (item.type === "hot") {
        hotShopList.push(item);
      } else if (item.type === "new") {
        newShopList.push(item);
      }
    });
    let shopTypeIndex = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => common_vendor.isRef(shopTypeIndex) ? shopTypeIndex.value = 0 : shopTypeIndex = 0),
        b: common_vendor.unref(shopTypeIndex) === 0 ? 1 : "",
        c: common_vendor.o(($event) => common_vendor.isRef(shopTypeIndex) ? shopTypeIndex.value = 1 : shopTypeIndex = 1),
        d: common_vendor.unref(shopTypeIndex) === 1 ? 1 : "",
        e: !common_vendor.unref(shopTypeIndex)
      }, !common_vendor.unref(shopTypeIndex) ? {
        f: common_vendor.f(common_vendor.unref(hotShopList), (item, k0, i0) => {
          return {
            a: item.shopName,
            b: "7d123e05-0-" + i0,
            c: common_vendor.p({
              shops: 0,
              fans: 0,
              shopInfo: item
            })
          };
        })
      } : {
        g: common_vendor.f(common_vendor.unref(newShopList), (item, k0, i0) => {
          return {
            a: item.shopName,
            b: "7d123e05-1-" + i0,
            c: common_vendor.p({
              shops: 0,
              fans: 0,
              shopInfo: item
            })
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/shopList/shopList.vue"]]);
wx.createPage(MiniProgramPage);
