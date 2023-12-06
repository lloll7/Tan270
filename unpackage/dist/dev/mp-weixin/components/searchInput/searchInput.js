"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "searchInput",
  props: {
    searchVal: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Search for future",
      require: true
    }
  },
  emits: ["update:searchVal"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      return {
        a: __props.placeholder,
        b: __props.searchVal,
        c: common_vendor.o(($event) => _ctx.$emit("update:searchVal", $event.target.value))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/components/searchInput/searchInput.vue"]]);
wx.createComponent(Component);
