<template>
	<view class="buySchemeItem-contianer" @click="selectedItem(buySchemeItem.title)" :class="{ selected: buySchemeItem.selected }">
		<view class="text">{{ buySchemeItem.title }}</view>
		<view class="img-container">
			<image :src="buySchemeItem.imgUrl_unselected" mode="" v-show="!buySchemeItem.selected"></image>
			<image :src="buySchemeItem.imgUrl" mode="" v-show="buySchemeItem.selected"></image>
		</view>
		<view class="btn" v-show="!buySchemeItem.selected">选择</view>
		<view class="btn" v-show="buySchemeItem.selected">√</view>
	</view>
</template>

<script setup>
import { buySchemeStore } from '../../store/buySchemeStore.js';
const store = buySchemeStore();
const { updateItemSelected } = store;

const props = defineProps({
	buySchemeItem: {
		type: Object,
		default: {},
		require: true
	}
});

const selectedItem = (title) => {
	updateItemSelected(title);
	console.log('ss');
};
</script>

<style lang="scss">
.buySchemeItem-contianer {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 300rpx;
	height: 400rpx;
	background-color: white;
	border-radius: 20rpx;
	// border: 2px solid #59b05f;
	box-sizing: border-box;
	// box-shadow: inset 10px 10px 25px #cff5dc;
	// box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.3);
	.img-container {
		width: 200rpx;
		height: 200rpx;
		// border: 1px solid black;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.text {
		font-size: 20px;
		font-weight: bold;
	}
	.btn {
		width: 200rpx;
		// border: 2px solid #59b05f;
		border: 2px solid #515151;
		text-align: center;
		border-radius: 30rpx;
		height: 50rpx;
		line-height: 50rpx;
		// color: #59b05f;
		color: #515151;
	}
	&.selected {
		box-shadow: inset 8px 8px 10px rgba(0, 0, 0, 0.5);
		// box-shadow: inset 10px 10px 25px #cff5dc;
		// box-shadow: inset 8px 8px 10px #d8995d;
		border: 2px solid #59b05f;
		// border: 2px solid #d8995d;
		.btn {
			color: #59b05f;
			border: 2px solid #59b05f;
		}
	}
}
</style>
