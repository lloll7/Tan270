"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "personlySchemePage",
  setup(__props) {
    const url = common_vendor.ref(
      "https://mp.weixin.qq.com/s?__biz=MzkwMDYxNTIwNA==&mid=2247483650&idx=1&sn=d9d60f9011856cb1377914de5c1be74c&chksm=c0401c49f737955ff438d5ae29104dc6f32246ffb893986f8b2367803d985a866f3013330663#rd"
    );
    return (_ctx, _cache) => {
      return {
        a: url.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/personlySchemePage/personlySchemePage.vue"]]);
wx.createPage(MiniProgramPage);
