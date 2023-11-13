<template>
	<view class="billingPage-container">
		<view class="userInfo">
			<view class="info">
				<view class="address">
					<view class="tips">家电</view>
					<view class="">天安门广场</view>
				</view>
				<view class="addressDetail">
					<view class="">北京市</view>
					<view class="">东城区</view>
					<view class="">长安街</view>
				</view>
				<view class="user">
					<view class="">林先生</view>
					<view class="">134***7758</view>
				</view>
			</view>
			<view class="img-container">
				<image src="../../static/img/rightArrow2.png" mode=""></image>
			</view>
		</view>
		<view class="shopCartItemList-container">
			<shoppingCartItem v-for="item in shopCartItemSelectedList" :key="item.id" :showRadio="false" :shopCartItem="item"></shoppingCartItem>
		</view>
		<view class="computeBox-container">
			<view class="content">
				<view class="text1">
					<view class="">件数</view>
					<view class="">{{ allSelect }}件</view>
				</view>
				<view class="text1">
					<view class="">合计</view>
					<view class="price">￥{{ sumAllPrice }}</view>
				</view>
				<view class="settleBtn-container">
					<view class="settleBtn" @click="gotoBilling">结算</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { shoppingCartItemStore } from '@/store/shoppingCartItemStore.js';
import { storeToRefs } from 'pinia';
const store = shoppingCartItemStore();
const { shoppingCartItemList } = storeToRefs(store);
// 获取到要结算的购物车内的商品
let shopCartItemSelectedList = reactive(shoppingCartItemList.value.filter((item) => item.selected));

let sumAllPrice = computed(() => {
	let sum = 0;
	shopCartItemSelectedList.forEach((item) => {
		if (item.num && item.selected) {
			sum += item.price * item.num;
		}
	});
	return sum;
});

let allSelect = computed(() => {
	let res = 0;
	shopCartItemSelectedList.forEach((item) => {
		if (item.selected) {
			res += item.num;
		}
	});
	return res;
});
</script>

<style lang="scss">
.billingPage-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	.userInfo {
		// font-family: ARIAL, 'Microsoft Yahei', '微软雅黑';
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 0 20rpx;
		box-sizing: border-box;
		width: 90%;
		height: 140rpx;
		border-radius: 30rpx;
		text-align: center;
		// border: 1rpx solid black;
		background-color: #ffd321;
		.info {
			height: 100%;
			display: flex;
			font-size: 15px;
			// font-weight: bold;
			flex-direction: column;
			justify-content: space-around;
			align-items: flex-start;
			padding: 13rpx 0;
			box-sizing: border-box;
			// border: 1px solid black;
			.address {
				display: flex;
				align-items: center;
				.tips {
					width: 55rpx;
					height: 28rpx;
					border-radius: 8rpx;
					// border: 1px solid black;
					font-size: 10px;
					font-weight: lighter;
					margin-right: 15rpx;
					text-align: center;
					line-height: 28rpx;
					color: white;
					background-color: black;
				}
			}
			.addressDetail,
			.user {
				display: flex;
				justify-content: space-between;
				width: 100%;
				font-size: 13px;
				view {
					margin-right: 10rpx;
				}
			}
		}
		.img-container {
			width: 35rpx;
			height: 35rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.shopCartItemList-container {
		width: 90%;
		height: 100%;
		.shoppingCartItem-container {
			margin: 30rpx 0;
		}
	}
	.computeBox-container {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 250rpx;
		bottom: 0rpx;
		left: 50%;
		transform: translate(-50%);
		border-radius: 20rpx;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
		background-color: white;
		box-sizing: border-box;
		.content {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: space-around;
			// border: 1px solid black;
			font-size: 15px;
			padding: 15rpx 15rpx 0 15rpx;
			.text1,
			.text2 {
				display: flex;
				justify-content: space-between;
				padding: 0 40rpx;
				font-weight: bold;
				// font-weight: lighter;
			}
			.text1 {
				.price {
					color: red;
				}
			}
		}
		.settleBtn-container {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			.settleBtn {
				width: 500rpx;
				height: 70rpx;
				text-align: center;
				line-height: 70rpx;
				border-radius: 50rpx;
				// border: 1px solid black;
				background-color: #ffd321;
				font-weight: bold;
			}
		}
	}
}
</style>
