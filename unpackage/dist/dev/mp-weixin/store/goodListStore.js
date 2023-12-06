"use strict";
const common_vendor = require("../common/vendor.js");
const goodListStore = common_vendor.defineStore("goodList", {
  state() {
    return {
      goodList: [
        {
          id: 1,
          imgUrl: "../../static/img/jiajv.png",
          goodName: "Royal Palm Sofa",
          price: "50.18",
          sales: 100,
          upTime: "2021-9-17"
        },
        {
          id: 2,
          imgUrl: "../../static/img/binxiang1.png",
          goodName: "Royal Palm Sofa",
          price: "23.4",
          sales: 234,
          upTime: "2022-10-7"
        },
        {
          id: 3,
          imgUrl: "../../static/img/dianshi.png",
          goodName: "Royal Palm Sofa",
          price: "52",
          sales: 7467,
          upTime: "2022-1-4"
        },
        {
          id: 4,
          imgUrl: "../../static/img/zhuji.png",
          goodName: "Royal Palm Sofa",
          price: "23",
          sales: 1324,
          upTime: "2020-6-3"
        },
        {
          id: 5,
          imgUrl: "../../static/img/jiajav.png",
          goodName: "Vertical Air Conditioner",
          price: "56",
          sales: 347,
          upTime: "2019-3-3"
        },
        {
          id: 6,
          imgUrl: "../../static/img/binxiang2.png",
          goodName: "Vertical Air Conditioner",
          price: "99",
          sales: 256,
          upTime: "2020-8-15"
        }
      ]
    };
  },
  getters: {},
  actions: {
    getGoodItemById(id) {
      return this.goodList.filter((item) => {
        return item.id === id;
      })[0];
    },
    sortGoodItemByPrice(dire) {
      const copyGoodList = this.goodList.slice(0);
      if (dire) {
        return copyGoodList.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      } else {
        return copyGoodList.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
      }
    },
    sortGoodItem(type) {
      const copyGoodList = this.goodList.slice(0);
      if (type === "news") {
        return copyGoodList.sort((a, b) => {
          return common_vendor.hooks(b.upTime).unix() - common_vendor.hooks(a.upTime).unix();
        });
      } else if (type === "sales") {
        return copyGoodList.sort((a, b) => {
          return b.sales - a.sales;
        });
      }
    }
  }
});
exports.goodListStore = goodListStore;
