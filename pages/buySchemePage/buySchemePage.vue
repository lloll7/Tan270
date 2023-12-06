<template>
	<view class="buySchemePage-container">
		<view class="bgImg">
			<image src="../../static/img/bgImg/2.png" mode="aspectFill"></image>
		</view>
		<view class="allSelected">
			<view class="btn" :class="{ selected: isAllSelected }" @click="changeAllBtn">全选</view>
		</view>
		<view class="buyScheme-container">
			<buySchemeItem v-for="(item, index) in buySchemeList" :key="index" :buySchemeItem="item"></buySchemeItem>
		</view>
	</view>
</template>

<script setup>
import { toRefs, ref } from 'vue';
import { buySchemeStore } from '../../store/buySchemeStore.js';
const store = buySchemeStore();
const { buySchemeList, isAllSelected } = toRefs(store);
const { updateAllSelected } = store;
const changeAllBtn = () => {
	console.log(isAllSelected.value);
	updateAllSelected(!isAllSelected.value);
};
</script>

<style lang="scss">
.buySchemePage-container {
	position: relative;
	.bgImg {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -1;
		// filter: blur(4px);
		image {
			width: 100%;
			height: 100%;
		}
	}
	.allSelected {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 130rpx;
		height: 80rpx;
		font-weight: bold;
		color: white;
		.btn {
			width: 100rpx;
			height: 40rpx;
			border-radius: 50rpx;
			border: 2px solid rgba(0, 0, 0, 0.3);
			font-size: 23rpx;
			text-align: center;
			line-height: 40rpx;
			color: rgba(0, 0, 0, 0.5);
			&.selected {
				color: white;
				border: 2px solid #bfa;
				background-color: #9bff8c;
				box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
			}
		}
	}
	.buyScheme-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row-gap: 50rpx;
		align-items: center;
		justify-items: center;
		width: 100vw;
		height: auto;
		// background-color: #dfeefd;
		// box-sizing: border-box;
		// padding-top: 20rpx;
		.buySchemeItem-contianer {
			// margin: 30rpx 0 30rpx 52rpx;
		}
	}
}
</style>
