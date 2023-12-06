<template>
	<view class="shopItem-container">
		<view class="top">
			<view class="bg" :style="{ background: 'url(' + imageURL + ')' }"></view>
			<view class="shopInfo-container">
				<view class="img-container">
					<image :src="shopInfo.avatar" mode="aspectFill"></image>
				</view>
				<view class="shopInfo">
					<view class="shopName">{{ shopInfo.shopName }}</view>
					<view class="shopMessage">
						<view>商品 {{ shopInfo.shops }}</view>
						<view>粉丝 {{ shopInfo.fans }}</view>
					</view>
				</view>
			</view>

			<view class="btn-container">
				<view class="inToShop" @click="inToShopHandle">进入店铺</view>
			</view>
		</view>
		<view class="shopsItemList">
			<view class="item" v-for="(item, index) in shopInfo.shopItemList" :key="index">
				<view class="img-container">
					<image :src="item.imgUrl" mode="aspectFill"></image>
				</view>
				<view class="price">￥{{ item.price }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	// 商店信息对象
	shopInfo: {
		type: Object,
		default: {},
		require: true
	}
});

// const imageURL = ref('../../static/img/bg.png');
let id = props.shopInfo.id;
function inToShopHandle() {
	uni.navigateTo({
		url: `/pages/shopDetailPage/shopDetailPage?shopId=${id}`
	});
}
</script>

<style lang="scss">
.shopItem-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 350rpx;
	border-radius: 10rpx;
	background-color: white;
	box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.1);
	margin-bottom: 30rpx;
	border: 2px solid #333333;
	box-sizing: border-box;
	.top {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 20rpx;
		font-size: 13px;
		height: 40%;
		.bg {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-size: contain;
			background-repeat: no-repeat;
			opacity: 0.5;
		}
		.shopInfo-container {
			display: flex;
			z-index: 2;
			.img-container {
				width: 80rpx;
				height: 80rpx;
				margin-right: 20rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.shopInfo {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				font-size: 16px;
				// font-weight: bold;
				border-top: 2px solid #333333;
				box-sizing: border-box;
				.shopMessage {
					display: flex;
					font-size: 13px;
					margin-top: 10rpx;
					view {
						margin-right: 15rpx;
					}
				}
			}
		}
		.btn-container {
			width: 120rpx;
			height: 40rpx;
			z-index: 999;
			--bRadius: 10px;
			.inToShop {
				position: relative;
				transition: all 0.3s;
				width: 100%;
				height: 100%;
				text-align: center;
				line-height: 40rpx;
				border: 1px solid #717171;
				color: #717171;
				&::before,
				&::after {
					content: '';
					position: absolute;
					top: -10rpx;
					left: -10rpx;
					right: -10rpx;
					bottom: -10rpx;
					border: 1px solid #333333;
					transition: all 0.3s;
					// border-radius: var(--bRadius);
					animation: clippath 3s infinite linear;
				}
				&::after {
					animation: clippath 3s infinite -1.5s linear;
				}
				@keyframes clippath {
					0%,
					100% {
						clip-path: inset(0 0 98% 0);
					}
					25% {
						clip-path: inset(0 98% 0 0);
					}
					50% {
						clip-path: inset(98% 0 0 0);
					}
					75% {
						clip-path: inset(0 0 0 98%);
					}
				}
			}
		}
	}
	.shopsItemList {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex: 1;
		box-sizing: border-box;
		padding: 15rpx 0; // border: 1px solid red;
		.item {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			width: 150rpx;
			height: 100%;
			color: hotpink;
			// border: 1px solid black;
			.img-container {
				width: 150rpx;
				height: 170rpx;
				border-radius: 10rpx;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.price {
				font-size: 11px;
				margin-top: 10rpx;
			}
		}
	}
}
</style>
