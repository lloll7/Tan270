"use strict";
const common_vendor = require("../../common/vendor.js");
function navInfo() {
  let list = common_vendor.reactive([
    {
      pagePath: "/pages/index/index",
      icon: "../../static/icon_zh97nd9pvxs/wxbzhuye.png",
      selectIcon: "../../static/img/a-024_zhuye.png",
      text: "首页"
    },
    {
      pagePath: "/pages/shopList/shopList",
      icon: "../../static/icon_zh97nd9pvxs/wxbmingxingdianpu.png",
      selectIcon: "../../static/img/a-024_dianpu.png",
      text: "店铺"
    },
    {
      pagePath: "/pages/recommend/recommend",
      icon: "../../static/icon_zh97nd9pvxs/all.png",
      selectIcon: "../../static/img/shujv.png",
      text: "",
      isMiddle: true
    },
    {
      pagePath: "/pages/order/order",
      icon: "../../static/icon_zh97nd9pvxs/cart.png",
      text: "购物袋"
    },
    {
      pagePath: "/pages/userpage/userpage",
      icon: "../../static/icon_zh97nd9pvxs/account.png",
      selectIcon: "../../static/img/a-024_wode.png",
      text: "我的"
    }
  ]);
  const switchPage = (item) => {
    common_vendor.index.navigateTo({
      url: item.pagePath
    });
  };
  return {
    list,
    switchPage
  };
}
exports.navInfo = navInfo;
