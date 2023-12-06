"use strict";
const common_vendor = require("../../common/vendor.js");
const store_shoppingCartItemStore = require("../../store/shoppingCartItemStore.js");
const _sfc_main = {
  __name: "shoppingCartItem",
  props: {
    shopCartItem: {
      type: Object,
      default: {},
      require: true
    },
    showRadio: {
      type: Boolean,
      default: true,
      require: true
    }
  },
  setup(__props) {
    const props = __props;
    const store = store_shoppingCartItemStore.shoppingCartItemStore();
    const { changeShoppingCartItem, removeShoppingCartItem } = store;
    let { shopCartItem } = common_vendor.toRefs(props);
    const clickSelect = () => {
      shopCartItem.value.selected = !shopCartItem.value.selected;
      changeShoppingCartItem(shopCartItem.value);
    };
    const changeSelect = (e) => {
    };
    const decreaseHandle = (id) => {
      common_vendor.index.$emit("decrease", id);
    };
    const increaseHandle = (id) => {
      common_vendor.index.$emit("increase", id);
    };
    const delItem = () => {
      removeShoppingCartItem(shopCartItem.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.showRadio
      }, __props.showRadio ? {
        b: common_vendor.unref(shopCartItem).selected,
        c: common_vendor.o(clickSelect),
        d: common_vendor.o(changeSelect)
      } : {}, {
        e: common_vendor.unref(shopCartItem).imgUrl,
        f: common_vendor.t(common_vendor.unref(shopCartItem).title),
        g: common_vendor.t(common_vendor.unref(shopCartItem).price),
        h: common_vendor.o(($event) => decreaseHandle(common_vendor.unref(shopCartItem).id)),
        i: common_vendor.t(common_vendor.unref(shopCartItem).num),
        j: common_vendor.o(($event) => increaseHandle(common_vendor.unref(shopCartItem).id)),
        k: common_vendor.o(delItem),
        l: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args))
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/components/shoppingCartItem/shoppingCartItem.vue"]]);
wx.createComponent(Component);
