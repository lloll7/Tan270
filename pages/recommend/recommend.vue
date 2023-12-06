<template>
	<view class="recommend-container">
		<view class="top"></view>
		<view class="searchInput-container">
			<searchInput v-model:searchVal="searchVal"></searchInput>
		</view>
		<!-- 		<view class="search-container">
			<view class="img-container">
				<image src="../../static/img/sousou.png" mode=""></image>
			</view>
			<view class="search">
				<input type="text" placeholder="Search for future" />
			</view>
		</view> -->
		<!-- 		<scroll-view scroll-x="true" enable-flex="true" class="box">
			<view>a</view>
			<view>b</view>
			<view>c</view>
		</scroll-view> -->
		<scroll-view scroll-x="true" enable-flex="true" enhanced="true" show-scrollbar="{{false}}" :scroll-with-animation="true" class="classify-container">
			<view class="classify-item" :class="{ active: activeIndex === 0 }" @click="activeIndex = 0">
				<view class="img-container">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/24gf-star%20(1).png" mode="" v-show="activeIndex === 0"></image>
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/24gf-star.png" mode="" v-show="activeIndex !== 0"></image>
				</view>
				<view class="text">Propular</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 1 }" @click="activeIndex = 1">
				<view class="img-container">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E5%86%B0%E7%AE%B1.png" mode="" v-show="activeIndex !== 1"></image>
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E5%86%B0%E7%AE%B1%20(1).png" mode="" v-show="activeIndex === 1"></image>
				</view>
				<view class="text">冰箱</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 2 }" @click="activeIndex = 2">
				<view class="img-container">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E7%A9%BA%E8%B0%83.png" mode="" v-show="activeIndex !== 2"></image>
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E7%A9%BA%E8%B0%83%20(1).png" mode="" v-show="activeIndex === 2"></image>
				</view>
				<view class="text">空调</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 3 }" @click="activeIndex = 3">
				<view class="img-container">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E6%B4%97%E8%A1%A3%E6%9C%BA.png" mode="" v-show="activeIndex !== 3"></image>
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E6%B4%97%E8%A1%A3%E6%9C%BA%20(1).png" mode="" v-show="activeIndex === 3"></image>
				</view>
				<view class="text">洗衣机</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 4 }" @click="activeIndex = 4">
				<view class="img-container">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E7%83%AD%E6%B0%B4%E5%99%A8-f.png" mode="" v-show="activeIndex !== 4"></image>
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E7%83%AD%E6%B0%B4%E5%99%A8-f%20(1).png" mode=" " v-show="activeIndex === 4"></image>
				</view>
				<view class="text">热水器</view>
			</view>
			<view class="classify-item" :class="{ active: activeIndex === 5 }" @click="activeIndex = 5">
				<view class="img-container">
					<image
						src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E7%94%B5%E8%A7%86%2C%E6%98%BE%E7%A4%BA%E5%99%A8%2C%E6%98%BE%E7%A4%BA%E5%B1%8F%2C%E7%94%B5%E8%A7%86%E6%9C%BA%2C%E6%B6%B2%E6%99%B6%E6%98%BE%E7%A4%BA%E5%99%A8.png"
						mode=""
						v-show="activeIndex !== 5"
					></image>
					<image
						src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/%E7%94%B5%E8%A7%86%2C%E6%98%BE%E7%A4%BA%E5%99%A8%2C%E6%98%BE%E7%A4%BA%E5%B1%8F%2C%E7%94%B5%E8%A7%86%E6%9C%BA%2C%E6%B6%B2%E6%99%B6%E6%98%BE%E7%A4%BA%E5%99%A8%20(1).png"
						mode=""
						v-show="activeIndex === 5"
					></image>
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
import { ref, watch, toRefs } from 'vue';
import { goodListStore } from '../../store/goodListStore.js';
const goodStore = goodListStore();
const { goodList } = toRefs(goodStore);
// 这里应该根据数据库传入的标签的数量来定index的范围
const activeIndex = ref(0);

const showGoodType = ref('AC'); // AC表示空调

const searchVal = ref('');

// watch(searchVal, (newValue, oldValue) => {
// 	console.log('newValue', newValue);
// });

// 后期应该是一个对象数组
// const goodList = [
// 	{
// 		imgUrl: '../../static/img/jiajv.png',
// 		goodName: 'Royal Palm Sofa',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/jiajav.png',
// 		goodName: 'Vertical Air Conditioner',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/jiajav.png',
// 		goodName: 'Vertical Air Conditioner',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/jiajav.png',
// 		goodName: 'Vertical Air Conditioner',
// 		price: '50.18'
// 	}
// ];
</script>

<style lang="scss">
.recommend-container {
	display: flex;
	flex-direction: column;
	padding: 30rpx;
	height: 100%;
	.searchInput-container {
		width: 100%;
		height: 100rpx;
	}
	.classify-container {
		display: flex;
		align-items: center;
		width: 100%;
		height: 180rpx;
		margin-top: 40rpx;
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
