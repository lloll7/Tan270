<template>
	<view class="outer-container">
		<view class="topNav">
			<view class="hotShop" @click="shopTypeIndex = 0" :class="{ active: shopTypeIndex === 0 }">热门店铺</view>
			<view class="newShop" @click="shopTypeIndex = 1" :class="{ active: shopTypeIndex === 1 }">最新入驻</view>
		</view>
		<view class="shopList-container" v-if="!shopTypeIndex">
			<shopItem :shops="0" :fans="0" :shopInfo="shopInfo" v-for="item in 10" class="item"></shopItem>
		</view>
		<view class="shopList-container" v-else>
			<shopItem :shops="0" :fans="0" :shopInfo="shopInfo" v-for="item in 3" class="item"></shopItem>
		</view>
		<!-- 底部垫片，垫起路由导航的高度 -->
		<view class="bottom"></view>
		<bottomNav></bottomNav>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const shopInfo = reactive({
	avatar: '../../static/img/Personal_Icon.jpg',
	shopName: '南庭苑原创汉服',
	shops: 0,
	fans: 0,
	shopItemList: [
		{
			imgUrl: 'https://img.alicdn.com/imgextra/i1/171140118/O1CN01rc1jDD1Ck5YlhW5dn_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
			price: 100
		},
		{
			imgUrl: 'https://img.alicdn.com/imgextra/i4/130164863/O1CN01ejkJ6D1lnIxX8Kbbd_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
			price: 100
		},
		{
			imgUrl: 'https://img.alicdn.com/imgextra/i2/2128420061/O1CN015FWEyu1CJz2DliNf3_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
			price: 100
		},
		{
			imgUrl: 'https://img.alicdn.com/imgextra/i2/4346125171/O1CN01m4Chg21o4Mx0FUnGI_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
			price: 100
		}
	]
});
// 热门店铺 or 最新入驻
let shopTypeIndex = ref(0);
</script>

<style lang="scss">
.outer-container {
	background-color: #f5f5f5;
	.topNav {
		display: flex;
		width: 100%;
		height: 60rpx;
		background-color: white;
		margin-bottom: 7rpx;
		box-shadow: 0px 7px 7px -7px rgba(0, 0, 0, 0.2);
		.hotShop,
		.newShop {
			flex: 1;
			text-align: center;
			line-height: 60rpx;
			&.active {
				border-bottom: 3px solid #c3c3c3;
			}
		}
	}
	.shopList-container {
		box-sizing: border-box;
		padding: 15rpx 20rpx;
		background-color: #f5f5f5;
		height: 100%;
	}
	.bottom {
		width: 100%;
		height: 100rpx;
	}
}
</style>
ile%2ftb_goods%2f2019%2f0426%2fthumb_800_800_tb_588168817314_12
