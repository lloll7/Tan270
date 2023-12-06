// rpx转px
export const rpxToPx = function(rpx) {
	const screenWidth = uni.getSystemInfoSync().screenWidth
	return (screenWidth * Number.parseInt(rpx)) / 750
}

// px转rpx
export const pxToRpx = function(px) {
	const screenWidth = uni.getSystemInfoSync().screenWidth
	return (750 * Number.parseInt(px)) / screenWidth
}