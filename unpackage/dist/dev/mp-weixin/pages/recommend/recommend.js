"use strict";
const common_vendor = require("../../common/vendor.js");
const store_goodListStore = require("../../store/goodListStore.js");
if (!Array) {
  const _easycom_searchInput2 = common_vendor.resolveComponent("searchInput");
  const _easycom_goodItem2 = common_vendor.resolveComponent("goodItem");
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  (_easycom_searchInput2 + _easycom_goodItem2 + _easycom_bottomNav2)();
}
const _easycom_searchInput = () => "../../components/searchInput/searchInput.js";
const _easycom_goodItem = () => "../../components/goodItem/goodItem.js";
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  (_easycom_searchInput + _easycom_goodItem + _easycom_bottomNav)();
}
const _sfc_main = {
  __name: "recommend",
  setup(__props) {
    const goodStore = store_goodListStore.goodListStore();
    const { goodList } = common_vendor.toRefs(goodStore);
    const activeIndex = common_vendor.ref(0);
    common_vendor.ref("AC");
    const searchVal = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => searchVal.value = $event),
        b: common_vendor.p({
          searchVal: searchVal.value
        }),
        c: activeIndex.value === 0,
        d: activeIndex.value !== 0,
        e: activeIndex.value === 0 ? 1 : "",
        f: common_vendor.o(($event) => activeIndex.value = 0),
        g: activeIndex.value !== 1,
        h: activeIndex.value === 1,
        i: activeIndex.value === 1 ? 1 : "",
        j: common_vendor.o(($event) => activeIndex.value = 1),
        k: activeIndex.value !== 2,
        l: activeIndex.value === 2,
        m: activeIndex.value === 2 ? 1 : "",
        n: common_vendor.o(($event) => activeIndex.value = 2),
        o: activeIndex.value !== 3,
        p: activeIndex.value === 3,
        q: activeIndex.value === 3 ? 1 : "",
        r: common_vendor.o(($event) => activeIndex.value = 3),
        s: activeIndex.value !== 4,
        t: activeIndex.value === 4,
        v: activeIndex.value === 4 ? 1 : "",
        w: common_vendor.o(($event) => activeIndex.value = 4),
        x: activeIndex.value !== 5,
        y: activeIndex.value === 5,
        z: activeIndex.value === 5 ? 1 : "",
        A: common_vendor.o(($event) => activeIndex.value = 5),
        B: common_vendor.f(common_vendor.unref(goodList), (item, index, i0) => {
          return {
            a: index,
            b: "9c104e02-1-" + i0,
            c: common_vendor.p({
              goodInfo: item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/recommend/recommend.vue"]]);
wx.createPage(MiniProgramPage);
