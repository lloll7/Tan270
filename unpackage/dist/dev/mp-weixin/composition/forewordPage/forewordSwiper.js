"use strict";
const common_vendor = require("../../common/vendor.js");
function changeCurIndex() {
  const curIndexRef = common_vendor.ref(0);
  const frontBtnShowRef = common_vendor.ref(false);
  const nextBtnShowRef = common_vendor.ref(true);
  const gotoIndexRef = common_vendor.computed(() => {
    return curIndexRef.value === 2;
  });
  const handleFrontClick = () => {
    if (curIndexRef.value > 0) {
      curIndexRef.value--;
    }
  };
  const handleNextClick = () => {
    if (curIndexRef.value < 2) {
      curIndexRef.value++;
    }
  };
  const indexChange = (e) => {
    curIndexRef.value = e.detail.current;
    frontBtnShowRef.value = curIndexRef.value !== 0;
    nextBtnShowRef.value = curIndexRef.value !== 2;
  };
  const gotoIndexPage = () => {
    common_vendor.index.navigateTo({
      url: "/pages/index/index"
    });
  };
  const goEnd = () => {
    curIndexRef.value = 2;
  };
  return {
    curIndexRef,
    handleFrontClick,
    handleNextClick,
    frontBtnShowRef,
    nextBtnShowRef,
    indexChange,
    gotoIndexRef,
    gotoIndexPage,
    goEnd
  };
}
exports.changeCurIndex = changeCurIndex;
