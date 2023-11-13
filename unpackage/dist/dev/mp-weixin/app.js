"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
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
}
const _sfc_main = {
  onLaunch() {
    common_vendor.index.hideTabBar();
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/App.vue"]]);
const pinia = common_vendor.createPinia();
function createApp() {
  const app = common_vendor.createSSRApp(App).use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
