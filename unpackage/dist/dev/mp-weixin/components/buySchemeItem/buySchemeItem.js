"use strict";
const common_vendor = require("../../common/vendor.js");
const store_buySchemeStore = require("../../store/buySchemeStore.js");
const _sfc_main = {
  __name: "buySchemeItem",
  props: {
    buySchemeItem: {
      type: Object,
      default: {},
      require: true
    }
  },
  setup(__props) {
    const store = store_buySchemeStore.buySchemeStore();
    const { updateItemSelected } = store;
    const selectedItem = (title) => {
      updateItemSelected(title);
      console.log("ss");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.buySchemeItem.title),
        b: __props.buySchemeItem.imgUrl_unselected,
        c: !__props.buySchemeItem.selected,
        d: __props.buySchemeItem.imgUrl,
        e: __props.buySchemeItem.selected,
        f: !__props.buySchemeItem.selected,
        g: __props.buySchemeItem.selected,
        h: common_vendor.o(($event) => selectedItem(__props.buySchemeItem.title)),
        i: __props.buySchemeItem.selected ? 1 : ""
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/components/buySchemeItem/buySchemeItem.vue"]]);
wx.createComponent(Component);
