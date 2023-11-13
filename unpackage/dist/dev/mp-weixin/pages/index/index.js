"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_z_swiper_item2 = common_vendor.resolveComponent("z-swiper-item");
  const _easycom_z_swiper2 = common_vendor.resolveComponent("z-swiper");
  const _easycom_goodItem2 = common_vendor.resolveComponent("goodItem");
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  (_easycom_z_swiper_item2 + _easycom_z_swiper2 + _easycom_goodItem2 + _easycom_bottomNav2)();
}
const _easycom_z_swiper_item = () => "../../uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item.js";
const _easycom_z_swiper = () => "../../uni_modules/zebra-swiper/components/z-swiper/z-swiper.js";
const _easycom_goodItem = () => "../../components/goodItem/goodItem.js";
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  (_easycom_z_swiper_item + _easycom_z_swiper + _easycom_goodItem + _easycom_bottomNav)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let options = common_vendor.reactive({
      // loop: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
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
    const goodList = [
      {
        imgUrl: "../../static/img/jiajv.png",
        goodName: "Royal Palm Sofa",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/binxiang1.png",
        goodName: "Royal Palm Sofa",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/dianshi.png",
        goodName: "Royal Palm Sofa",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/zhuji.png",
        goodName: "Royal Palm Sofa",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/jiajav.png",
        goodName: "Vertical Air Conditioner",
        price: "50.18"
      },
      {
        imgUrl: "../../static/img/binxiang2.png",
        goodName: "Vertical Air Conditioner",
        price: "50.18"
      }
    ];
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
    const gotoRecommend = () => {
      common_vendor.index.switchTab({
        url: "/pages/recommend/recommend"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: item,
            b: common_vendor.t(index + 1),
            c: index,
            d: "85207bb0-1-" + i0 + ",85207bb0-0"
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
        f: common_vendor.o(goToSaveSchemePage),
        g: common_vendor.o(goToBuySchemePage),
        h: common_vendor.o(goToImproveSchemePage),
        i: common_vendor.o(goToPersonlySchemePage),
        j: common_vendor.o(gotoRecommend),
        k: common_vendor.f(goodList, (item, index, i0) => {
          return {
            a: index,
            b: "85207bb0-2-" + i0,
            c: common_vendor.p({
              goodInfo: item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
