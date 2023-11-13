"use strict";
const uni_modules_zebraSwiper_libs_slide_slideTo = require("./slideTo.js");
const uni_modules_zebraSwiper_libs_slide_slideToLoop = require("./slideToLoop.js");
const uni_modules_zebraSwiper_libs_slide_slideNext = require("./slideNext.js");
const uni_modules_zebraSwiper_libs_slide_slidePrev = require("./slidePrev.js");
const uni_modules_zebraSwiper_libs_slide_slideReset = require("./slideReset.js");
const uni_modules_zebraSwiper_libs_slide_slideToClosest = require("./slideToClosest.js");
const uni_modules_zebraSwiper_libs_slide_slideToClickedSlide = require("./slideToClickedSlide.js");
const slide = {
  slideTo: uni_modules_zebraSwiper_libs_slide_slideTo.slideTo,
  slideToLoop: uni_modules_zebraSwiper_libs_slide_slideToLoop.slideToLoop,
  slideNext: uni_modules_zebraSwiper_libs_slide_slideNext.slideNext,
  slidePrev: uni_modules_zebraSwiper_libs_slide_slidePrev.slidePrev,
  slideReset: uni_modules_zebraSwiper_libs_slide_slideReset.slideReset,
  slideToClosest: uni_modules_zebraSwiper_libs_slide_slideToClosest.slideToClosest,
  slideToClickedSlide: uni_modules_zebraSwiper_libs_slide_slideToClickedSlide.slideToClickedSlide
};
exports.slide = slide;
