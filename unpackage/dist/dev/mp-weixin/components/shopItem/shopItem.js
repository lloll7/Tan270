"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "shopItem",
  props: {
    // 商店信息对象
    shopInfo: {
      type: Object,
      default: {},
      require: true
    }
  },
  setup(__props) {
    const imageURL = common_vendor.ref("../../static/img/bg.png");
    function inToShopHandle() {
      console.log("进入店铺");
    }
    return (_ctx, _cache) => {
      return {
        a: "url(" + imageURL.value + ")",
        b: __props.shopInfo.avatar,
        c: common_vendor.t(__props.shopInfo.shopName),
        d: common_vendor.t(__props.shopInfo.shops),
        e: common_vendor.t(__props.shopInfo.fans),
        f: common_vendor.o(inToShopHandle),
        g: common_vendor.f(__props.shopInfo.shopItemList, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.price),
            c: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/components/shopItem/shopItem.vue"]]);
wx.createComponent(Component);
