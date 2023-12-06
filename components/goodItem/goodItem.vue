<template>
	<view class="goodItem-container" @click="gotoGoodItemDetail">
		<view class="img-container">
			<image :src="goodInfo.imgUrl" mode="aspectFill"></image>
		</view>
		<view class="goodInfo">
			<view class="goodName">{{ goodInfo.goodName }}</view>
			<view class="bottom">
				<view class="price">${{ goodInfo.price }}</view>
				<view class="intoGoodDetail">
					<image src="../../static/img/jiantou_xiangyou.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	goodInfo: {
		type: Object,
		default: {},
		require: true
	}
});
let id = props.goodInfo.id;
const gotoGoodItemDetail = () => {
	uni.navigateTo({
		url: `/pages/goodItemDetailPage/goodItemDetailPage?goodId=${id}`
	});
};
</script>

<style lang="scss">
.goodItem-container {
	display: flex;
	flex-direction: column;
	width: 325rpx;
	height: 400rpx;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.06);
	// background: linear-gradient(#f7f7f7, #ffffff 30%);
	background-color: white;
	border-radius: 20rpx;
	overflow: hidden;
	// margin-bottom: 40rpx;
	.img-container {
		width: 100%;
		height: 240rpx;
		object-fit: cover;
		image {
			width: 100%;
			height: 100%;
		}
		margin-bottom: 10rpx;
	}
	.goodInfo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		padding: 10rpx 20rpx;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		.goodName {
			font-size: 15px;
			font-weight: bold;
			margin-bottom: 10rpx;
			// 单行省略
			text-overflow: ellipsis;
			overflow: hidden;
			word-break: break-all;
			white-space: nowrap;
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 50rpx;

			.price {
				color: #b2b7a7;
			}
			.intoGoodDetail {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 40rpx;
				height: 40rpx;
				box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
				background-color: white;
				image {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
}
</style>
