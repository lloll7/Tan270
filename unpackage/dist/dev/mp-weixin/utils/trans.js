"use strict";
const common_vendor = require("../common/vendor.js");
const pxToRpx = function(px) {
  const screenWidth = common_vendor.index.getSystemInfoSync().screenWidth;
  return 750 * Number.parseInt(px) / screenWidth;
};
exports.pxToRpx = pxToRpx;
