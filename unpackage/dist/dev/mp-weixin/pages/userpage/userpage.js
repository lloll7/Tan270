"use strict";
const common_vendor = require("../../common/vendor.js");
const store_userInfoStore = require("../../store/userInfoStore.js");
const store_myOrderStore = require("../../store/myOrderStore.js");
if (!Array) {
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  _easycom_bottomNav2();
}
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  _easycom_bottomNav();
}
const _sfc_main = {
  __name: "userpage",
  setup(__props) {
    const orderStore = store_myOrderStore.myOrderStore();
    const store = store_userInfoStore.userInfoStore();
    const { updateActiveTip } = orderStore;
    const { userInfo } = common_vendor.toRefs(store);
    const { updateUserInfo } = store;
    const gotoLogin = () => {
      common_vendor.index.showModal({
        mask: true,
        title: "温馨提示",
        content: "授权微信登录后才能正常使用小程序功能哦~",
        success(res) {
          if (res.confirm) {
            getUserBaseInfo();
          } else {
            console.log("拒绝");
          }
        }
      });
    };
    const getUserOpenId = () => {
      common_vendor.index.login({
        provider: "weixin",
        success(loginAuth) {
          let data = { code: loginAuth.code };
          console.log(data, "code");
        }
      });
    };
    const getUserBaseInfo = () => {
      common_vendor.index.getUserProfile({
        desc: "获取你的昵称、头像",
        success: (userRes) => {
          if (userRes.errMsg === "getUserProfile:ok" && userRes.userInfo !== void 0) {
            let userInfo2 = {
              avatar: userRes.userInfo.avatarUrl,
              nickName: userRes.userInfo.nickName
            };
            updateUserInfo(userInfo2);
            getUserOpenId();
          }
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: `出错了,${err}`,
            icon: "none"
          });
        }
      });
    };
    if (JSON.stringify(userInfo.value) === "{}") {
      gotoLogin();
    }
    const gotoEnergySavingPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/energySavingPage/energySavingPage"
      });
    };
    const gotoMyOrderPage = (activeTip) => {
      updateActiveTip(activeTip);
      common_vendor.index.navigateTo({
        url: "/pages/myOrderPage/myOrderPage"
      });
    };
    const gotoShouHouPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/shouhouPage/shouhouPage"
      });
    };
    const gotoFeedBackPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/feedbackPage/feedbackPage"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: JSON.stringify(common_vendor.unref(userInfo)) !== "{}"
      }, JSON.stringify(common_vendor.unref(userInfo)) !== "{}" ? {
        b: common_vendor.unref(userInfo).avatar,
        c: common_vendor.unref(userInfo).avatar,
        d: common_vendor.t(common_vendor.unref(userInfo).nickName)
      } : {
        e: common_vendor.o(getUserBaseInfo)
      }, {
        f: JSON.stringify(common_vendor.unref(userInfo)) !== "{}"
      }, JSON.stringify(common_vendor.unref(userInfo)) !== "{}" ? {
        g: common_vendor.o(($event) => gotoMyOrderPage("daifukuan")),
        h: common_vendor.o(($event) => gotoMyOrderPage("daifahuo")),
        i: common_vendor.o(($event) => gotoMyOrderPage("daishouhuo")),
        j: common_vendor.o(($event) => gotoMyOrderPage("daipingjia")),
        k: common_vendor.o(gotoShouHouPage)
      } : {}, {
        l: common_vendor.o(gotoEnergySavingPage),
        m: common_vendor.o(gotoFeedBackPage)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/userpage/userpage.vue"]]);
wx.createPage(MiniProgramPage);
