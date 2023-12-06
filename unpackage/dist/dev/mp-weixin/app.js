"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/feedbackPage/feedbackPage.js";
  "./pages/saveTestResPage/saveTestResPage.js";
  "./pages/searchResPage/searchResPage.js";
  "./pages/order/order.js";
  "./pages/userpage/userpage.js";
  "./pages/foreword/foreword.js";
  "./pages/shopList/shopList.js";
  "./pages/recommend/recommend.js";
  "./pages/billingPage/billingPage.js";
  "./pages/saveSchemePage/saveSchemePage.js";
  "./pages/buySchemePage/buySchemePage.js";
  "./pages/improveSchemePage/improveSchemePage.js";
  "./pages/dayPlantTreePage/dayPlantTreePage.js";
  "./pages/personlySchemePage/personlySchemePage.js";
  "./pages/saveTestPage/saveTestPage.js";
  "./pages/login/login.js";
  "./pages/energySavingPage/energySavingPage.js";
  "./pages/myOrderPage/myOrderPage.js";
  "./pages/shouhouPage/shouhouPage.js";
  "./pages/goodItemDetailPage/goodItemDetailPage.js";
  "./pages/shopDetailPage/shopDetailPage.js";
  "./pages/searchPage/searchPage.js";
}
const _sfc_main = {
  onLaunch() {
    common_vendor.index.hideTabBar();
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/App.vue"]]);
const pinia = common_vendor.createPinia();
function createApp() {
  const app = common_vendor.createSSRApp(App).use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
