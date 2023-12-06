"use strict";
const common_vendor = require("../../common/vendor.js");
const store_shopListStore = require("../../store/shopListStore.js");
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
  __name: "shopDetailPage",
  props: {
    shopId: Number
  },
  setup(__props) {
    const props = __props;
    const store = store_shopListStore.shopListStore();
    const { getShopById } = store;
    const goodStore = store_goodListStore.goodListStore();
    const { goodList } = common_vendor.toRefs(goodStore);
    let shopInfo = common_vendor.reactive(getShopById(props.shopId));
    console.log(shopInfo);
    const gotoSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/searchPage/searchPage"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gotoSearch),
        b: common_vendor.unref(shopInfo).avatar,
        c: common_vendor.unref(shopInfo).avatar,
        d: common_vendor.t(common_vendor.unref(shopInfo).shopName),
        e: common_vendor.t(common_vendor.unref(shopInfo).shops),
        f: common_vendor.t(common_vendor.unref(shopInfo).fans),
        g: common_vendor.p({
          type: "shop",
          goodList: common_vendor.unref(goodList)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41c78e9b"], ["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/shopDetailPage/shopDetailPage.vue"]]);
wx.createPage(MiniProgramPage);
