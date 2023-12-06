"use strict";
const common_vendor = require("../../common/vendor.js");
const store_goodListStore = require("../../store/goodListStore.js");
if (!Array) {
  const _easycom_z_swiper_item2 = common_vendor.resolveComponent("z-swiper-item");
  const _easycom_z_swiper2 = common_vendor.resolveComponent("z-swiper");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_moreGood2 = common_vendor.resolveComponent("moreGood");
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  (_easycom_z_swiper_item2 + _easycom_z_swiper2 + _easycom_uni_notice_bar2 + _component_uni_section + _easycom_moreGood2 + _easycom_bottomNav2)();
}
const _easycom_z_swiper_item = () => "../../uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item.js";
const _easycom_z_swiper = () => "../../uni_modules/zebra-swiper/components/z-swiper/z-swiper.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_moreGood = () => "../../components/moreGood/moreGood.js";
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  (_easycom_z_swiper_item + _easycom_z_swiper + _easycom_uni_notice_bar + _easycom_moreGood + _easycom_bottomNav)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const goodStore = store_goodListStore.goodListStore();
    const { goodList } = common_vendor.toRefs(goodStore);
    let options = common_vendor.reactive({
      // loop: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      // loopedSlides: 7,
      coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 100,
        modifier: 2,
        slideShadows: true
      }
    });
    let list = common_vendor.reactive([
      "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
      "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg",
      "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
      "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg",
      "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg"
    ]);
    const goToSaveSchemePage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/saveSchemePage/saveSchemePage"
      });
    };
    const goToBuySchemePage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/buySchemePage/buySchemePage"
      });
    };
    const goToImproveSchemePage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/improveSchemePage/improveSchemePage"
      });
    };
    const goToPersonlySchemePage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/personlySchemePage/personlySchemePage"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: item,
            b: common_vendor.t(index + 1),
            c: index,
            d: "438d072b-1-" + i0 + ",438d072b-0"
          };
        }),
        b: common_vendor.t(common_vendor.unref(list).length),
        c: common_vendor.p({
          ["custom-style"]: {
            width: "600rpx",
            height: "770rpx"
          }
        }),
        d: common_vendor.o(($event) => common_vendor.isRef(list) ? list.value = $event : list = $event),
        e: common_vendor.p({
          options: common_vendor.unref(options),
          modelValue: common_vendor.unref(list)
        }),
        f: common_vendor.p({
          ["show-icon"]: true,
          scrollable: true,
          text: "Tan270小队首次开发小程序,智能节能家电推荐与购置,采用大数据分析生成推荐算法实现节能家电推荐"
        }),
        g: common_vendor.p({
          title: "文字滚动",
          subTitle: "使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示",
          type: "line"
        }),
        h: common_vendor.o(goToSaveSchemePage),
        i: common_vendor.o(goToBuySchemePage),
        j: common_vendor.o(goToImproveSchemePage),
        k: common_vendor.o(goToPersonlySchemePage),
        l: common_vendor.p({
          goodList: common_vendor.unref(goodList)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
