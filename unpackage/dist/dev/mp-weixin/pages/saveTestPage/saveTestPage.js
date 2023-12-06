"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "saveTestPage",
  setup(__props) {
    let testDataAllDone = common_vendor.computed(() => {
      return isNumber(FuelQuantity.value) && isNumber(gasCapacity.value) && isNumber(electricityConsumption.value);
    });
    let activeSwiper = common_vendor.ref(0);
    let showEndBtn = common_vendor.ref(false);
    let FuelQuantity = common_vendor.ref("");
    let gasCapacity = common_vendor.ref("");
    let electricityConsumption = common_vendor.ref("");
    let dataList = [
      {
        title: "燃油量",
        data: FuelQuantity
      },
      {
        title: "用电量",
        data: electricityConsumption
      },
      {
        title: "燃气量",
        data: gasCapacity
      }
    ];
    const swpierChangeHandle = (e) => {
      activeSwiper.value = e.detail.current;
      if (e.detail.current === 3) {
        showEndBtn.value = true;
      }
    };
    const checkResult = () => {
      if (testDataAllDone.value) {
        common_vendor.index.navigateTo({
          url: "/pages/saveTestResPage/saveTestResPage"
        });
      } else {
        common_vendor.index.showToast({
          title: "请检查三项数据是否合理或为空",
          icon: "none"
        });
      }
    };
    const isNumber = (num) => {
      if (num !== "" && !isNaN(num)) {
        return true;
      } else {
        return false;
      }
    };
    const move = () => {
      if (activeSwiper.value > 0) {
        if (!isNumber(dataList[activeSwiper.value - 1].data.value)) {
          common_vendor.index.showToast({
            title: "请输入" + dataList[activeSwiper.value - 1].title,
            icon: "none"
          });
        }
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(FuelQuantity),
        b: common_vendor.o(($event) => common_vendor.isRef(FuelQuantity) ? FuelQuantity.value = $event.detail.value : FuelQuantity = $event.detail.value),
        c: common_vendor.unref(electricityConsumption),
        d: common_vendor.o(($event) => common_vendor.isRef(electricityConsumption) ? electricityConsumption.value = $event.detail.value : electricityConsumption = $event.detail.value),
        e: common_vendor.unref(gasCapacity),
        f: common_vendor.o(($event) => common_vendor.isRef(gasCapacity) ? gasCapacity.value = $event.detail.value : gasCapacity = $event.detail.value),
        g: common_vendor.o(checkResult),
        h: common_vendor.unref(showEndBtn),
        i: common_vendor.o(swpierChangeHandle),
        j: common_vendor.o(move),
        k: common_vendor.unref(activeSwiper),
        l: !isNumber(common_vendor.unref(FuelQuantity))
      }, !isNumber(common_vendor.unref(FuelQuantity)) ? {} : {}, {
        m: !isNumber(common_vendor.unref(electricityConsumption))
      }, !isNumber(common_vendor.unref(electricityConsumption)) ? {} : {}, {
        n: !isNumber(common_vendor.unref(gasCapacity))
      }, !isNumber(common_vendor.unref(gasCapacity)) ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuliderX/uniapp/lllollTan270/pages/saveTestPage/saveTestPage.vue"]]);
wx.createPage(MiniProgramPage);
