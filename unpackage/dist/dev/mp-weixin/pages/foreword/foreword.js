"use strict";
const composition_forewordPage_forewordSwiper = require("../../composition/forewordPage/forewordSwiper.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    return {
      ...composition_forewordPage_forewordSwiper.changeCurIndex()
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.handleFrontClick && _ctx.handleFrontClick(...args)),
    b: _ctx.frontBtnShowRef,
    c: _ctx.gotoIndexRef,
    d: common_vendor.o((...args) => _ctx.gotoIndexPage && _ctx.gotoIndexPage(...args)),
    e: _ctx.curIndexRef,
    f: common_vendor.o((...args) => _ctx.indexChange && _ctx.indexChange(...args)),
    g: _ctx.curIndexRef !== 2,
    h: common_vendor.o((...args) => _ctx.goEnd && _ctx.goEnd(...args)),
    i: common_vendor.o((...args) => _ctx.handleNextClick && _ctx.handleNextClick(...args)),
    j: _ctx.nextBtnShowRef
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/foreword/foreword.vue"]]);
wx.createPage(MiniProgramPage);
