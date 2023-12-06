"use strict";
const common_vendor = require("../../common/vendor.js");
const store_goodListStore = require("../../store/goodListStore.js");
if (!Array) {
  const _easycom_z_swiper_item2 = common_vendor.resolveComponent("z-swiper-item");
  const _easycom_z_swiper2 = common_vendor.resolveComponent("z-swiper");
  const _easycom_moreGood2 = common_vendor.resolveComponent("moreGood");
  const _easycom_lin_popup2 = common_vendor.resolveComponent("lin-popup");
  (_easycom_z_swiper_item2 + _easycom_z_swiper2 + _easycom_moreGood2 + _easycom_lin_popup2)();
}
const _easycom_z_swiper_item = () => "../../uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item.js";
const _easycom_z_swiper = () => "../../uni_modules/zebra-swiper/components/z-swiper/z-swiper.js";
const _easycom_moreGood = () => "../moreGood/moreGood.js";
const _easycom_lin_popup = () => "../lin-popup/lin-popup.js";
if (!Math) {
  (_easycom_z_swiper_item + _easycom_z_swiper + _easycom_moreGood + _easycom_lin_popup)();
}
const _sfc_main = {
  __name: "goodItemDetail",
  props: {
    goodId: Number
  },
  setup(__props) {
    const props = __props;
    const store = store_goodListStore.goodListStore();
    const { getGoodItemById } = store;
    console.log("在props接收home传递过来的数据:", props.goodId);
    const goodItem = getGoodItemById(props.goodId);
    const isShow = common_vendor.ref(false);
    const list = common_vendor.reactive([
      "../../static/img/binxiang1.png",
      "../../static/img/dianshi.png",
      "../../static/img/zhuji.png",
      "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg"
    ]);
    let imgListLength = common_vendor.ref(list.length);
    let activeIndex = common_vendor.ref(1);
    let currentInstance = common_vendor.getCurrentInstance();
    const swiper = () => {
      currentInstance.ctx.$refs.zSwiper.swiper.on("slideChange", (swiper2) => {
        activeIndex.value = swiper2.activeIndex + 1;
      });
    };
    const gotoShoppingCartPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/order/order"
      });
    };
    const gobackIndex = () => {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    };
    const showMoreDetail = () => {
      isShow.value = !isShow.value;
    };
    common_vendor.index.$on("showMoreDetail", (e) => {
      isShow.value = e;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list, (item, index, i0) => {
          return {
            a: item,
            b: index,
            c: "dd450df5-1-" + i0 + ",dd450df5-0"
          };
        }),
        b: common_vendor.sr("zSwiper", "dd450df5-0"),
        c: common_vendor.o(swiper),
        d: common_vendor.o(($event) => list = $event),
        e: common_vendor.p({
          modelValue: list
        }),
        f: common_vendor.t(common_vendor.unref(activeIndex)),
        g: common_vendor.t(common_vendor.unref(imgListLength)),
        h: common_vendor.t(common_vendor.unref(goodItem).goodName),
        i: common_vendor.t(common_vendor.unref(goodItem).sales),
        j: common_vendor.t(common_vendor.unref(goodItem).price),
        k: common_vendor.o(showMoreDetail),
        l: common_vendor.o(gobackIndex),
        m: common_vendor.o(gotoShoppingCartPage),
        n: isShow.value,
        o: common_vendor.o(showMoreDetail)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dd450df5"], ["__file", "D:/HbuliderX/uniapp/lllollTan270/components/goodItemDetail/goodItemDetail.vue"]]);
wx.createComponent(Component);
