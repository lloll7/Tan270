"use strict";
const common_vendor = require("../common/vendor.js");
const shoppingCartItemStore = common_vendor.defineStore("shoppingCartItem", {
  state: () => {
    return {
      shoppingCartItemList: [
        {
          id: 1,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        },
        {
          id: 2,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        },
        {
          id: 3,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        },
        {
          id: 4,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        },
        {
          id: 5,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        },
        {
          id: 6,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        },
        {
          id: 7,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        },
        {
          id: 8,
          imgUrl: "../../static/img/jiajav.png",
          title: "节能立式冰箱",
          price: "180.00",
          num: 1,
          selected: false
        }
      ]
    };
  },
  getters: {},
  actions: {
    changeShoppingCartItemList(newValue) {
      this.shoppingCartItemList = newValue;
    },
    changeShoppingCartItem(newItem) {
      this.shoppingCartItemList.forEach((item) => {
        if (item.id === newItem.id) {
          item = newItem;
        }
      });
    },
    removeShoppingCartItem(newItem) {
      this.shoppingCartItemList.forEach((item, index) => {
        if (item.id === newItem.id) {
          this.shoppingCartItemList.splice(index, 1);
          common_vendor.index.showToast({
            title: "删除成功"
          });
        }
      });
    }
  }
});
exports.shoppingCartItemStore = shoppingCartItemStore;
