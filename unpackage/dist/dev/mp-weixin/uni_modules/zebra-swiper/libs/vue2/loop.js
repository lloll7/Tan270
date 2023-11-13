"use strict";
require("../../index.js");
const uni_modules_zebraSwiper_libs_core = require("../core.js");
function calcLoopedSlides(slides, swiperParams) {
  let slidesPerViewParams = swiperParams.slidesPerView;
  if (swiperParams.breakpoints) {
    const breakpoint = uni_modules_zebraSwiper_libs_core.Swiper.prototype.getBreakpoint(swiperParams.breakpoints);
    const breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : void 0;
    if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
      slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
  }
  let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  loopedSlides += swiperParams.loopAdditionalSlides;
  if (loopedSlides > slides.length) {
    loopedSlides = slides.length;
  }
  return loopedSlides;
}
function renderLoop(native, swiperParams, data) {
  const modifiedValue = data;
  if (swiperParams.loopFillGroupWithBlank) {
    const blankSlidesNum = swiperParams.slidesPerGroup - modifiedValue.length % swiperParams.slidesPerGroup;
    if (blankSlidesNum !== swiperParams.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankSlide = h("div", {
          class: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
        });
        modifiedValue.push(blankSlide);
      }
    }
  }
  if (swiperParams.slidesPerView === "auto" && !swiperParams.loopedSlides) {
    swiperParams.loopedSlides = modifiedValue.length;
  }
  const loopedSlides = calcLoopedSlides(modifiedValue, swiperParams);
  const prependValue = [];
  const appendValue = [];
  modifiedValue.forEach((child, index) => {
    if (index < loopedSlides) {
      if (!native.loopUpdateData) {
        appendValue.push(child);
      }
    }
    if (index < modifiedValue.length && index >= modifiedValue.length - loopedSlides) {
      if (!native.loopUpdateData) {
        prependValue.push(child);
      }
    }
  });
  if (native) {
    if (!native.originalDataList)
      native.originalDataList = [];
    native.originalDataList = [...prependValue, ...modifiedValue, ...appendValue];
  }
  return {
    data: [...prependValue, ...modifiedValue, ...appendValue]
  };
}
exports.calcLoopedSlides = calcLoopedSlides;
exports.renderLoop = renderLoop;
