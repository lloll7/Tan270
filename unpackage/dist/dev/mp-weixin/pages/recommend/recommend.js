"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_goodItem2 = common_vendor.resolveComponent("goodItem");
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  (_easycom_goodItem2 + _easycom_bottomNav2)();
}
const _easycom_goodItem = () => "../../components/goodItem/goodItem.js";
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  (_easycom_goodItem + _easycom_bottomNav)();
}
const _sfc_main = {
  __name: "recommend",
  setup(__props) {
    const activeIndex = common_vendor.ref(0);
    common_vendor.ref("AC");
    const goodList = [
      {
        imgUrl: "../../static/img/jiajv.png",
        goodName: "Royal Palm Sofa",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/jiajav.png",
        goodName: "Vertical Air Conditioner",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/jiajav.png",
        goodName: "Vertical Air Conditioner",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/jiajav.png",
        goodName: "Vertical Air Conditioner",
        price: "50.18"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: activeIndex.value === 0,
        b: activeIndex.value !== 0,
        c: activeIndex.value === 0 ? 1 : "",
        d: common_vendor.o(($event) => activeIndex.value = 0),
        e: activeIndex.value !== 1,
        f: activeIndex.value === 1,
        g: activeIndex.value === 1 ? 1 : "",
        h: common_vendor.o(($event) => activeIndex.value = 1),
        i: activeIndex.value !== 2,
        j: activeIndex.value === 2,
        k: activeIndex.value === 2 ? 1 : "",
        l: common_vendor.o(($event) => activeIndex.value = 2),
        m: activeIndex.value !== 3,
        n: activeIndex.value === 3,
        o: activeIndex.value === 3 ? 1 : "",
        p: common_vendor.o(($event) => activeIndex.value = 3),
        q: activeIndex.value !== 4,
        r: activeIndex.value === 4,
        s: activeIndex.value === 4 ? 1 : "",
        t: common_vendor.o(($event) => activeIndex.value = 4),
        v: activeIndex.value !== 5,
        w: activeIndex.value === 5,
        x: activeIndex.value === 5 ? 1 : "",
        y: common_vendor.o(($event) => activeIndex.value = 5),
        z: common_vendor.f(goodList, (item, index, i0) => {
          return {
            a: index,
            b: "6a2246fc-0-" + i0,
            c: common_vendor.p({
              goodInfo: item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/pages/recommend/recommend.vue"]]);
wx.createPage(MiniProgramPage);
