"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "lin-popup",
  setup(__props) {
    const changeShow = () => {
      common_vendor.index.$emit("showMoreDetail", false);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeShow)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/components/lin-popup/lin-popup.vue"]]);
wx.createComponent(Component);
