<template>
	<view class="bottomNav-container">
		<view class="bg"></view>
		<view class="bottomNav-item" v-for="item in list" :key="item.pagePath" :class="{ middleItem: item.isMiddle }" @click="switchPage(item)">
			<view class="imgContainer">
				<image :src="item.icon"></image>
			</view>
			<view class="navText">{{ item.text }}</view>
		</view>
	</view>
</template>

<script>
import navInfo from '@/composition/bottomNav/bottomnav.js';
export default {
	name: 'bottomNav',
	setup() {
		return {
			...navInfo()
		};
	}
};
</script>

<style lang="scss">
.bottomNav-container {
	// opacity: 0;
	display: flex;
	position: fixed;
	left: 0;
	bottom: 0;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100rpx;
	background-color: white;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
	z-index: 999;
	// .bg {
	// 	width: 100%;
	// 	height: 100%;
	// }
	.bottomNav-item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100rpx;
		height: 100%;
		font-size: 12px;
		.imgContainer {
			width: 50rpx;
			height: 50rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		&.middleItem {
			width: 120rpx;
			height: 120%;
			position: relative;
			top: -30rpx; // top: 100rpx;
			background-color: white;
			border-radius: 50%;
			box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
			.imgContainer {
				width: 80rpx;
				height: 80rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
