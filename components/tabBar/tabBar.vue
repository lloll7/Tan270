<template>
	<view class="tabBar-container">
		<view class="searchInput-container">
			<searchInput :placeholder="'搜索订单'"></searchInput>
		</view>
		<view class="tabBarList">
			<view class="all item" :class="{ active: activeTip === 'all' }" data-type="all" @click="changeActive">
				<text class="word">全部</text>
			</view>
			<view class="daizhifu item" :class="{ active: activeTip === 'daifukuan' }" data-type="daifukuan" @click="changeActive">
				<text class="word">待付款</text>
			</view>
			<view class="daifahuo item" :class="{ active: activeTip === 'daifahuo' }" data-type="daifahuo" @click="changeActive">
				<text class="word">待发货</text>
			</view>
			<view class="daishouhuo item" :class="{ active: activeTip === 'daishouhuo' }" data-type="daishouhuo" @click="changeActive">
				<text class="word">待收货</text>
			</view>
			<view class="daipingjia item" :class="{ active: activeTip === 'daipingjia' }" data-type="daipingjia" @click="changeActive">
				<text class="word">待评价</text>
			</view>
			<!-- 			<view class="shouhou item" :class="{ active: activeTip === 'shouhou' }" data-type="shouhou" @click="changeActive">
				<text class="word">售后单</text>
			</view> -->
		</view>
	</view>
</template>

<script setup>
import { toRefs } from 'vue';
import { myOrderStore } from '../../store/myOrderStore.js';
const store = myOrderStore();
const { updateActiveTip } = store;
const { activeTip } = toRefs(store);

const changeActive = (e) => {
	updateActiveTip(e.currentTarget.dataset.type);
};
</script>

<style lang="scss">
// .tabBar-container {
// 	width: 100vw;
// 	height: 100vh;
// 	// background-color: red;
// }

.tabBar-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	// border: 1px solid black;
	padding: 20rpx;
	box-sizing: border-box;
	.searchInput-container {
		width: 100%;
		height: 80rpx;
	}
	.tabBarList {
		display: flex;
		// border: 1px solid red;
		height: 80rpx;
		.item {
			flex: 1;
			// border: 1px solid blue;
			text-align: center;
			line-height: 80rpx;
			font-size: 14px;
			color: rgba(0, 0, 0, 0.4);
			font-weight: bold;
			&.active {
				.word {
					// height: 100%;
					border-bottom: 3px solid black;
					padding-bottom: 17rpx;
					color: black;
				}
			}
		}
	}
}
</style>
