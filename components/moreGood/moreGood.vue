<template>
	<view>
		<view class="tip" v-if="type === 'more'">
			<view class="content1">猜你喜欢</view>
			<view class="content2" @click="gotoRecommend">
				<view class="">查看更多</view>
				<image src="../../static/img/rightArrow.png" mode=""></image>
			</view>
		</view>
		<view class="shop-good-tip" v-else>
			<view class="all item" data-tips="all" :class="{ active: active === 'all' }" @click="changeActive">综合</view>
			<view class="news item" data-tips="news" :class="{ active: active === 'news' }" @click="changeActive">最新</view>
			<view class="sales item" data-tips="sales" :class="{ active: active === 'sales' }" @click="changeActive">
				<view class="word">销量</view>
			</view>
			<view class="price item" data-tips="price" :class="{ active: active === 'price' }" @click="changeActive">
				<view class="word">价格</view>
				<image src="../../static/img/top-arrows-black.png" v-show="priceSort && active === 'price'" mode=""></image>
				<image src="../../static/img/bottom-arrows-black.png" v-show="!priceSort && active === 'price'" mode=""></image>
			</view>
			<view class="borderBottom" :style="styles"></view>
		</view>
		<view class="goodsList">
			<goodItem v-if="goodList.length" class="goodItem" v-for="(item, index) in goodList" :key="index" :goodInfo="item"></goodItem>
			<view class="noData" v-else>
				<image class="noData-img" src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/noData-img.png" mode=""></image>
				<view class="noData-word">暂无搜索结果</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, toRefs, reactive, getCurrentInstance } from 'vue';
import { goodListStore } from '../../store/goodListStore.js';
import { pxToRpx } from '../../utils/trans.js';
const props = defineProps({
	type: {
		type: String,
		require: true,
		default: 'more'
	},
	goodList: {
		type: Array,
		require: true,
		default: []
	}
});
const goodStore = goodListStore();
console.log(props.goodList, 'props.goodList');
const goodList = ref(props.goodList);
console.log(goodList, 'goodList');

const { sortGoodItemByPrice, sortGoodItem } = goodStore;

const copyGoodList = goodList.value.slice(0);
let styles = reactive({
	left: '64rpx',
	transition: 'all 0.3s'
});
const active = ref('all');
const changeActive = (e) => {
	active.value = e.currentTarget.dataset.tips;
	if (active.value === 'price') {
		priceSort.value = !priceSort.value;
		goodList.value = sortGoodItemByPrice(priceSort.value);
	} else if (active.value === 'sales') {
		goodList.value = sortGoodItem(active.value);
	} else if (active.value === 'all') {
		goodList.value = copyGoodList;
	} else if (active.value === 'news') {
		goodList.value = sortGoodItem(active.value);
	}
	styles.left = pxToRpx(e.currentTarget.offsetLeft) + 'rpx';
};

const priceSort = ref(false);
</script>

<style lang="scss" scoped>
.tip {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	margin: 40rpx 0 10rpx 0;
	padding: 0 20rpx;
	box-sizing: border-box;
	// border-top: 1px solid rgba(0, 0, 0, 0.1);
	font-size: 15px;
	.content1,
	.content2 {
		font-weight: bold;
	}
	.content2 {
		display: flex;
		justify-content: center;
		align-items: center;
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
}
.shop-good-tip {
	position: relative;
	display: flex;
	justify-content: space-around;
	height: 80rpx;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	.item {
		justify-content: center;
		align-items: center;
		height: 50rpx;
		font-size: 30rpx;
		display: flex;
		color: rgba(0, 0, 0, 0.5);
		image {
			width: 25rpx;
			height: 25rpx;
		}
		&.price {
			width: 85rpx;
		}
		&.active {
			font-weight: bold;
			color: #333333;
		}
	}
	.borderBottom {
		position: absolute;
		width: 60rpx;
		background-color: #333333;
		height: 4rpx;
		z-index: 99;
		bottom: 0;
		left: 334px;
	}
}
.goodsList {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-between;
	// // display: grid;
	// // grid-template-columns: 1fr 1fr;
	// flex-wrap: wrap;
	flex: 1;
	// // background-color: #f7f7f7;
	.goodItem {
		margin: 0 27rpx;
		// outline: 1px solid rgba(0, 0, 0, 0.1);
		margin-bottom: 40rpx;
		// box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
	}
	.noData {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.5);
		image {
			width: 100%;
			height: 600rpx;
		}
	}
}
</style>
