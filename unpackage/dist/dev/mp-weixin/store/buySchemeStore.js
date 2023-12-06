"use strict";
const common_vendor = require("../common/vendor.js");
const buySchemeStore = common_vendor.defineStore("buyScheme", {
  state() {
    return {
      buySchemeList: [
        {
          title: "空调",
          imgUrl: "../../static/img/jiadian/kongtiao.png",
          imgUrl_unselected: "../../static/img/jiadian/kongtiao-unselected.png",
          selected: false
        },
        {
          title: "热水器",
          imgUrl: "../../static/img/jiadian/reshuiqi.png",
          imgUrl_unselected: "../../static/img/jiadian/reshuiqi-unselected.png",
          selected: true
        },
        {
          title: "冰箱",
          imgUrl: "../../static/img/jiadian/bingxiang.png",
          imgUrl_unselected: "../../static/img/jiadian/binxiang-unselected.png",
          selected: true
        },
        {
          title: "电饭煲",
          imgUrl: "../../static/img/jiadian/dianfanbaoB.png",
          imgUrl_unselected: "../../static/img/jiadian/dianfanbao-unselected.png",
          selected: true
        },
        {
          title: "洗衣机",
          imgUrl: "../../static/img/jiadian/xiyiji.png",
          imgUrl_unselected: "../../static/img/jiadian/xiyiji-unselected.png",
          selected: true
        },
        {
          title: "油烟机",
          imgUrl: "../../static/img/jiadian/youyanjiB.png",
          imgUrl_unselected: "../../static/img/jiadian/youyanji-unselected.png",
          selected: true
        },
        {
          title: "显示器",
          imgUrl: "../../static/img/jiadian/xianshiqi.png",
          imgUrl_unselected: "../../static/img/jiadian/xianshiping-unselected.png",
          selected: true
        }
      ]
    };
  },
  getters: {
    isAllSelected() {
      let res = true;
      this.buySchemeList.forEach((item) => {
        if (!item.selected) {
          res = false;
        }
      });
      return res;
    }
  },
  actions: {
    updateItemSelected(title) {
      this.buySchemeList.forEach((item) => {
        if (item.title === title) {
          item.selected = !item.selected;
        }
      });
    },
    updateAllSelected(bool) {
      this.buySchemeList.forEach((item) => {
        item.selected = bool;
      });
    }
  }
});
exports.buySchemeStore = buySchemeStore;
