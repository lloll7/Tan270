"use strict";
const common_vendor = require("../../common/vendor.js");
const store_goodListStore = require("../../store/goodListStore.js");
const utils_trans = require("../../utils/trans.js");
if (!Array) {
  const _easycom_goodItem2 = common_vendor.resolveComponent("goodItem");
  _easycom_goodItem2();
}
const _easycom_goodItem = () => "../goodItem/goodItem.js";
if (!Math) {
  _easycom_goodItem();
}
const _sfc_main = {
  __name: "moreGood",
  props: {
    type: {
      type: String,
      require: true,
      default: "more"
    },
    goodList: {
      type: Array,
      require: true,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const goodStore = store_goodListStore.goodListStore();
    console.log(props.goodList, "props.goodList");
    const goodList = common_vendor.ref(props.goodList);
    console.log(goodList, "goodList");
    const { sortGoodItemByPrice, sortGoodItem } = goodStore;
    const copyGoodList = goodList.value.slice(0);
    let styles = common_vendor.reactive({
      left: "64rpx",
      transition: "all 0.3s"
    });
    const active = common_vendor.ref("all");
    const changeActive = (e) => {
      active.value = e.currentTarget.dataset.tips;
      if (active.value === "price") {
        priceSort.value = !priceSort.value;
        goodList.value = sortGoodItemByPrice(priceSort.value);
      } else if (active.value === "sales") {
        goodList.value = sortGoodItem(active.value);
      } else if (active.value === "all") {
        goodList.value = copyGoodList;
      } else if (active.value === "news") {
        goodList.value = sortGoodItem(active.value);
      }
      styles.left = utils_trans.pxToRpx(e.currentTarget.offsetLeft) + "rpx";
    };
    const priceSort = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.type === "more"
      }, __props.type === "more" ? {
        b: common_vendor.o((...args) => _ctx.gotoRecommend && _ctx.gotoRecommend(...args))
      } : {
        c: active.value === "all" ? 1 : "",
        d: common_vendor.o(changeActive),
        e: active.value === "news" ? 1 : "",
        f: common_vendor.o(changeActive),
        g: active.value === "sales" ? 1 : "",
        h: common_vendor.o(changeActive),
        i: priceSort.value && active.value === "price",
        j: !priceSort.value && active.value === "price",
        k: active.value === "price" ? 1 : "",
        l: common_vendor.o(changeActive),
        m: common_vendor.s(common_vendor.unref(styles))
      }, {
        n: goodList.value.length
      }, goodList.value.length ? {
        o: common_vendor.f(goodList.value, (item, index, i0) => {
          return {
            a: index,
            b: "ccd9b30b-0-" + i0,
            c: common_vendor.p({
              goodInfo: item
            })
          };
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ccd9b30b"], ["__file", "D:/HbuliderX/uniapp/lllollTan270/components/moreGood/moreGood.vue"]]);
wx.createComponent(Component);
