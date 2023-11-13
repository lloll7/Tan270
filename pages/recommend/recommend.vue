<template>
	<view class="recommend-container">
		<view class="top"></view>
		<view class="search-container">
			<view class="img-container">
				<image src="../../static/img/sousou.png" mode=""></image>
			</view>
			<view class="search">
				<input type="text" placeholder="Search for future" />
			</view>
		</view>
		<!-- 		<scroll-view scroll-x="true" enable-flex="true" class="box">
			<view>a</view>
			<view>b</view>
			<view>c</view>
		</scroll-view> -->
		<scroll-view scroll-x="true" enable-flex="true" :scroll-with-animation="true" class="classify-container">
			<view class="classify-item" :class="{ active: activeIndex === 0 }" @click="activeIndex = 0">
				<view class="img-container">
					<image src="../../static/img/24gf-star (1).png" mode="" v-show="activeIndex === 0"></image>
					<image src="../../static/img/24gf-star.png" mode="" v-show="activeIndex !== 0"></image>
				</view>
				<view class="text">Propular</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 1 }" @click="activeIndex = 1">
				<view class="img-container">
					<image src="../../static/img/冰箱.png" mode="" v-show="activeIndex !== 1"></image>
					<image src="../../static/img/冰箱 (1).png" mode="" v-show="activeIndex === 1"></image>
				</view>
				<view class="text">冰箱</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 2 }" @click="activeIndex = 2">
				<view class="img-container">
					<image src="../../static/img/空调.png" mode="" v-show="activeIndex !== 2"></image>
					<image src="../../static/img/空调 (1).png" mode="" v-show="activeIndex === 2"></image>
				</view>
				<view class="text">空调</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 3 }" @click="activeIndex = 3">
				<view class="img-container">
					<image src="../../static/img/洗衣机.png" mode="" v-show="activeIndex !== 3"></image>
					<image src="../../static/img/洗衣机 (1).png" mode="" v-show="activeIndex === 3"></image>
				</view>
				<view class="text">洗衣机</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 4 }" @click="activeIndex = 4">
				<view class="img-container">
					<image src="../../static/img/热水器-f.png" mode="" v-show="activeIndex !== 4"></image>
					<image src="../../static/img/热水器-f (1).png" mode=" " v-show="activeIndex === 4"></image>
				</view>
				<view class="text">热水器</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 5 }" @click="activeIndex = 5">
				<view class="img-container">
					<image src="../../static/img/电视,显示器,显示屏,电视机,液晶显示器.png" mode="" v-show="activeIndex !== 5"></image>
					<image src="../../static/img/电视,显示器,显示屏,电视机,液晶显示器 (1).png" mode="" v-show="activeIndex === 5"></image>
				</view>
				<view class="text">电视</view>
			</view>
		</scroll-view>
		<view class="goodsList">
			<goodItem v-for="(item, index) in goodList" :key="index" :goodInfo="item" class="goodItem"></goodItem>
		</view>
		<!-- 底部垫片，垫起路由导航的高度 -->
		<view class="bottomBox"></view>
		<bottomNav></bottomNav>
	</view>
</template>

<script setup>
import { ref } from 'vue';
// 这里应该根据数据库传入的标签的数量来定index的范围
const activeIndex = ref(0);

const showGoodType = ref('AC'); // AC表示空调

// 后期应该是一个对象数组
const goodList = [
	{
		imgUrl: '../../static/img/jiajv.png',
		goodName: 'Royal Palm Sofa',
		price: '50.18'
	},
	{
		imgUrl: '../../static/img/jiajav.png',
		goodName: 'Vertical Air Conditioner',
		price: '50.18'
	},
	{
		imgUrl: '../../static/img/jiajav.png',
		goodName: 'Vertical Air Conditioner',
		price: '50.18'
	},
	{
		imgUrl: '../../static/img/jiajav.png',
		goodName: 'Vertical Air Conditioner',
		price: '50.18'
	}
];
</script>

<style lang="scss">
.recommend-container {
	display: flex;
	flex-direction: column;
	padding: 30rpx;
	height: 100%;
	.search-container {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
		// border: 1px solid black;
		border-radius: 30rpx;
		background-color: #f8f8f8;
		.img-container {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100rpx;
			height: 100%;
			margin-right: 20rpx;
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
	.classify-container {
		display: flex;
		align-items: center;
		width: 100%;
		height: 180rpx;
		margin-top: 40rpx;
		// border: 1px solid black;
		.classify-item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			width: 100rpx;
			height: 140rpx;
			margin-right: 50rpx;
			// border: 1px solid black;
			font-size: 13px;
			color: #909090;
			&.active .img-container {
				background-color: #303030;
			}
			.img-container {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100rpx;
				height: 100rpx;
				background-color: #f5f5f5;
				border-radius: 20rpx;
				image {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}
	.goodsList {
		display: flex;
		justify-content: space-between;
		// display: grid;
		// grid-template-columns: 1fr 1fr;
		flex-wrap: wrap;
		flex: 1;
		// background-color: #f7f7f7;
		.goodItem {
			margin-bottom: 40rpx;
		}
	}
	.bottomBox {
		width: 100%;
		height: 100rpx;
	}
}
.box {
	display: flex;
	view {
		width: 100rpx;
	}
}
</style>
