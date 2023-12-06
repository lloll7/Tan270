<template>
	<view class="searchPage-container">
		<view class="search-container">
			<view class="search">
				<view class="input-container">
					<image src="../../static/img/sousou.png" mode=""></image>
					<input type="text" placeholder="店内搜索" v-model="searchVal" />
				</view>
			</view>
			<view class="searchBtn" @click="gotoSearchResPage">搜索</view>
		</view>

		<view class="searchHistory">
			<view class="word">历史搜索</view>
			<view class="searchItem-container">
				<view class="item">
					<image src="../../static/img/searchHistory-icon.png" mode=""></image>
					<view class="">蛋炒饭</view>
				</view>
				<view class="item">
					<image src="../../static/img/searchHistory-icon.png" mode=""></image>
					<view class="">蛋炒饭</view>
				</view>
				<view class="item">
					<image src="../../static/img/searchHistory-icon.png" mode=""></image>
					<view class="">蛋炒饭</view>
				</view>
				<view class="item">
					<image src="../../static/img/searchHistory-icon.png" mode=""></image>
					<view class="">蛋炒饭</view>
				</view>
				<view class="item">
					<image src="../../static/img/searchHistory-icon.png" mode=""></image>
					<view class="">蛋炒饭</view>
				</view>
				<view class="item">
					<image src="../../static/img/searchHistory-icon.png" mode=""></image>
					<view class="">蛋炒饭</view>
				</view>
				<view class="item">
					<image src="../../static/img/searchHistory-icon.png" mode=""></image>
					<view class="">蛋炒饭</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const searchVal = ref('');

const gotoSearchResPage = () => {
	uni.navigateTo({
		url: '/pages/searchResPage/searchResPage'
	});
};
</script>

<style lang="scss" scoped>
.searchPage-container {
	display: flex;
	height: 100vh;
	flex-direction: column;
	// align-items: center;
	// background-color: rgba(0, 0, 0, 0.05);
	.search-container {
		display: flex;
		align-items: center;
		width: 90%;
		height: 60rpx;
		margin: 30rpx auto;
		.search {
			width: 88%;
			height: 100%;
			line-height: 60rpx;
			// border: 2px solid rgba(0, 0, 0, 0.1);
			box-sizing: border-box;
			// box-sizing: border-box;
			background-color: #f4f3f8;
			// text-align: center;
			padding-left: 20rpx;
			color: rgba(0, 0, 0, 0.5);
			font-size: 30rpx;
			z-index: 999;
			display: flex;
			// justify-content: space-between;
			align-items: center;
			// border: 1px solid black;
			.input-container {
				display: flex;
				align-items: center;
				input {
					width: 100%;
					height: 100%;
					// border: 1px solid red;
					color: #333333;
				}
				image {
					width: 40rpx;
					height: 35rpx;
					margin-right: 20rpx;
				}
			}
		}
		.searchBtn {
			flex: 1;
			width: 300rpx;
			height: 50rpx;
			font-size: 25rpx;
			text-align: center;
			line-height: 50rpx;
			background-color: white;
			// border-radius: 10rpx;
			z-index: 999;
			font-weight: bold;
		}
	}
	.searchHistory {
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		.word {
			margin-bottom: 20rpx;
			// background-color: rgba(0, 0, 0, 0.1);
			// padding: 10rpx 20rpx;
			font-weight: bold;
		}
		.searchItem-container {
			width: 100%;
			// border: 1px solid black;
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			.item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
				height: 45rpx;
				line-height: 45rpx;
				background-color: #f4f3f8;
				font-size: 25rpx;
				padding: 5rpx 15rpx;
				image {
					width: 25rpx;
					height: 25rpx;
					margin-right: 15rpx;
				}
			}
		}
	}
}
</style>
