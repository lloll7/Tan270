<template>
	<view class="outer-container">
		<view class="topNav">
			<view class="hotShop" @click="shopTypeIndex = 0" :class="{ active: shopTypeIndex === 0 }">热门店铺</view>
			<view class="newShop" @click="shopTypeIndex = 1" :class="{ active: shopTypeIndex === 1 }">最新入驻</view>
		</view>
		<view class="shopList-container" v-if="!shopTypeIndex">
			<shopItem :shops="0" :fans="0" :shopInfo="item" v-for="item in hotShopList" :key="item.shopName" class="item"></shopItem>
		</view>
		<view class="shopList-container" v-else>
			<shopItem :shops="0" :fans="0" :shopInfo="item" v-for="item in newShopList" :key="item.shopName" class="item"></shopItem>
		</view>
		<!-- 底部垫片，垫起路由导航的高度 -->
		<view class="bottom"></view>
		<bottomNav></bottomNav>
	</view>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import { shopListStore } from '../../store/shopListStore.js';
const store = shopListStore();
let { shopList } = toRefs(store);
let hotShopList = reactive([]);
let newShopList = reactive([]);

shopList.value.forEach((item) => {
	if (item.type === 'hot') {
		hotShopList.push(item);
	} else if (item.type === 'new') {
		newShopList.push(item);
	}
});

// 热门店铺 or 最新入驻
let shopTypeIndex = ref(0);
</script>

<style lang="scss">
.outer-container {
	background-color: white;
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
				// border-bottom: 3px solid #c3c3c3;
				background-color: #333333;
				color: white;
			}
		}
	}
	.shopList-container {
		box-sizing: border-box;
		padding: 15rpx 20rpx;
		background-color: white;
		height: 100%;
	}
	.bottom {
		width: 100%;
		height: 100rpx;
	}
}
</style>
ile%2ftb_goods%2f2019%2f0426%2fthumb_800_800_tb_588168817314_12
