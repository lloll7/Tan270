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
    return (_ctx, _cache) => {
      return {
        a: __props.goodInfo.imgUrl,
        b: common_vendor.t(__props.goodInfo.goodName),
        c: common_vendor.t(__props.goodInfo.price)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/components/goodItem/goodItem.vue"]]);
wx.createComponent(Component);
