"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_shopItem2 = common_vendor.resolveComponent("shopItem");
  const _easycom_bottomNav2 = common_vendor.resolveComponent("bottomNav");
  (_easycom_shopItem2 + _easycom_bottomNav2)();
}
const _easycom_shopItem = () => "../../components/shopItem/shopItem.js";
const _easycom_bottomNav = () => "../../components/bottomNav/bottomNav.js";
if (!Math) {
  (_easycom_shopItem + _easycom_bottomNav)();
}
const _sfc_main = {
  __name: "shopList",
  setup(__props) {
    const shopInfo = common_vendor.reactive({
      avatar: "../../static/img/Personal_Icon.jpg",
      shopName: "南庭苑原创汉服",
      shops: 0,
      fans: 0,
      shopItemList: [
        {
          imgUrl: "https://img.alicdn.com/imgextra/i1/171140118/O1CN01rc1jDD1Ck5YlhW5dn_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
          price: 100
        },
        {
          imgUrl: "https://img.alicdn.com/imgextra/i4/130164863/O1CN01ejkJ6D1lnIxX8Kbbd_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
          price: 100
        },
        {
          imgUrl: "https://img.alicdn.com/imgextra/i2/2128420061/O1CN015FWEyu1CJz2DliNf3_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
          price: 100
        },
        {
          imgUrl: "https://img.alicdn.com/imgextra/i2/4346125171/O1CN01m4Chg21o4Mx0FUnGI_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
          price: 100
        }
      ]
    });
    let shopTypeIndex = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => common_vendor.isRef(shopTypeIndex) ? shopTypeIndex.value = 0 : shopTypeIndex = 0),
        b: common_vendor.unref(shopTypeIndex) === 0 ? 1 : "",
        c: common_vendor.o(($event) => common_vendor.isRef(shopTypeIndex) ? shopTypeIndex.value = 1 : shopTypeIndex = 1),
        d: common_vendor.unref(shopTypeIndex) === 1 ? 1 : "",
        e: !common_vendor.unref(shopTypeIndex)
      }, !common_vendor.unref(shopTypeIndex) ? {
        f: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: "140a0742-0-" + i0
          };
        }),
        g: common_vendor.p({
          shops: 0,
          fans: 0,
          shopInfo
        })
      } : {
        h: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: "140a0742-1-" + i0
          };
        }),
        i: common_vendor.p({
          shops: 0,
          fans: 0,
          shopInfo
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/Tan270/pages/shopList/shopList.vue"]]);
wx.createPage(MiniProgramPage);
