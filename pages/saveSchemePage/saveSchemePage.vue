<template>
	<view class="">
		<view class="img-container">
			<image src="../../static/img/saveTestBtnPage.png" mode=""></image>
			<view class="swiperItemEnd" @click="gotoSaveTest">
				<view class="swiperItemEndInner animate animate__fadeInLeft">去测试</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const gotoSaveTest = () => {
	uni.navigateTo({
		url: '/pages/saveTestPage/saveTestPage'
	});
};
</script>

<style lang="scss">
@import '../../static/css/animate.css';
.img-container {
	width: 100vw;
	height: 100vh;
	position: relative;
	image {
		width: 100%;
		height: 100%;
	}
	.swiperItemEnd {
		position: absolute;
		bottom: 10rpx;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300rpx;
		height: 100rpx;
		.swiperItemEndInner {
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
			line-height: 100rpx;
			text-align: center;
			font-weight: 600;
			animation-duration: 2s;
			animation-fill-mode: forwards;
			background-color: rgba(255, 212, 111, 1);
			&:hover {
				background-color: rgb(249, 231, 138);
			}
		}
	}
}
</style>
