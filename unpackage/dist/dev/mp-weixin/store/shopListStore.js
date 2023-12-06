"use strict";
const common_vendor = require("../common/vendor.js");
const shopListStore = common_vendor.defineStore("shopList", {
  state() {
    return {
      shopList: [{
        id: 1,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "hot",
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
      }, {
        id: 2,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "hot",
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
      }, {
        id: 3,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "hot",
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
      }, {
        id: 4,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "hot",
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
      }, {
        id: 5,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "hot",
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
      }, {
        id: 6,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "hot",
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
      }, {
        id: 7,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "hot",
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
      }, {
        id: 8,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "new",
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
      }, {
        id: 9,
        avatar: "../../static/img/Personal_Icon.jpg",
        shopName: "南庭苑原创汉服",
        shops: 0,
        fans: 0,
        type: "new",
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
      }]
    };
  },
  getters: {},
  actions: {
    getShopById(ID) {
      return this.shopList.filter((item) => item.id === ID)[0];
    }
  }
});
exports.shopListStore = shopListStore;
