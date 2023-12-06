"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "goodItem",
  props: {
    goodInfo: {
      type: Object,
      default: {},
      require: true
    }
  },
  setup(__props) {
    const props = __props;
    let id = props.goodInfo.id;
    const gotoGoodItemDetail = () => {
      common_vendor.index.navigateTo({
        url: `/pages/goodItemDetailPage/goodItemDetailPage?goodId=${id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: __props.goodInfo.imgUrl,
        b: common_vendor.t(__props.goodInfo.goodName),
        c: common_vendor.t(__props.goodInfo.price),
        d: common_vendor.o(gotoGoodItemDetail)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/components/goodItem/goodItem.vue"]]);
wx.createComponent(Component);
