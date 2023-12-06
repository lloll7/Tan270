<template>
	<view class="popup-container" @click="changeShow">
		<view class="popup-content"></view>
	</view>
</template>

<script setup>
const changeShow = () => {
	uni.$emit('showMoreDetail', false);
};
</script>

<style lang="scss">
.popup-container {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 999;
	.popup-content {
		width: 500rpx;
		height: 500rpx;
		background-color: red;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
