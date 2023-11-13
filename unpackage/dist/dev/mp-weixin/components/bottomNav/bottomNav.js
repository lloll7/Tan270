"use strict";
const composition_bottomNav_bottomnav = require("../../composition/bottomNav/bottomnav.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "bottomNav",
  setup() {
    return {
      ...composition_bottomNav_bottomnav.navInfo()
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text),
        c: item.pagePath,
        d: item.isMiddle ? 1 : "",
        e: common_vendor.o(($event) => _ctx.switchPage(item), item.pagePath)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HbuliderX/uniapp/Tan270/components/bottomNav/bottomNav.vue"]]);
wx.createComponent(Component);
