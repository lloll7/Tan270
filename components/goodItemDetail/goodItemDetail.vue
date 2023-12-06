<template>
	<view class="goodItemDetail-container">
		<z-swiper v-model="list" ref="zSwiper" @swiper="swiper">
			<z-swiper-item v-for="(item, index) in list" :key="index">
				<image class="image" :src="item" mode="aspectFill"></image>
			</z-swiper-item>
		</z-swiper>
		<view class="swiper-doct">{{ activeIndex }} / {{ imgListLength }}</view>
		<view class="goodInfo-contaner" ref="divRef">
			<view class="goodName">
				<view class="name">
					{{ goodItem.goodName }}
				</view>
				<view class="sales">月销量: {{ goodItem.sales }}</view>
			</view>
			<view class="goodPrice-container">
				<view class="goodPrice">&yen;{{ goodItem.price }}</view>
				<view class="tips">8折</view>
				<view class="originalCost">
					<view class="word">参考原价：</view>
					<view class="price">&yen;62.725</view>
				</view>
			</view>
			<view class="parameter">
				<view class="item">
					<view class="key">类型：</view>
					<view class="value">壁挂式</view>
				</view>
				<view class="item">
					<view class="key">工作方式：</view>
					<view class="value">变频</view>
				</view>
				<view class="item">
					<view class="key">功率：</view>
					<view class="value">1.5匹</view>
				</view>
				<view class="item">
					<view class="key">适用面积：</view>
					<view class="value">16㎡-24㎡</view>
				</view>
				<view class="item">
					<view class="key">能效等级：</view>
					<view class="value">一级</view>
				</view>
				<view class="item">
					<view class="key">容量：</view>
					<view class="value">1000L</view>
				</view>
			</view>
			<view class="other-parameter parameter">
				<view class="title">其他参数</view>
				<view class="item">
					<view class="key">适用面积：</view>
					<view class="value">16㎡-24㎡</view>
				</view>
				<view class="item">
					<view class="key">能效等级：</view>
					<view class="value">一级</view>
				</view>
				<view class="item">
					<view class="key">容量：</view>
					<view class="value">1000L</view>
				</view>
				<view class="item" @click="showMoreDetail">
					<view class="key">查看更多></view>
				</view>
			</view>
			<view class="normalQuestion">
				<view class="tip" ref="ss">自营</view>
				<view class="word">
					<view class="">常见问题解答</view>
					<view class="">></view>
				</view>
			</view>
		</view>
		<moreGood></moreGood>
		<view class="bottom-nav">
			<view class="btn" @click="gobackIndex">
				<view class="img-container">
					<image src="../../static/img/bottom-nav/shouye.png" mode=""></image>
				</view>
				<view class="word">首页</view>
			</view>
			<view class="btn">
				<view class="img-container">
					<image src="../../static/img/bottom-nav/kefu.png" mode=""></image>
				</view>
				<view class="word">客服</view>
			</view>
			<view class="btn" @click="gotoShoppingCartPage">
				<view class="img-container">
					<image src="../../static/img/bottom-nav/gouwuche.png" mode=""></image>
				</view>
				<view class="word">购物车</view>
			</view>
			<view class="addShoppingCart">加入购物车</view>
			<view class="buy">立即购买</view>
		</view>
		<view class="bottom-nav-replace"></view>
		<lin-popup v-show="isShow" @showMoreDetail="showMoreDetail"></lin-popup>
	</view>
</template>

<script setup>
import { reactive, getCurrentInstance, ref } from 'vue';
import { goodListStore } from '../../store/goodListStore.js';

const store = goodListStore();
const { getGoodItemById } = store;
const props = defineProps({
	goodId: Number
});
console.log('在props接收home传递过来的数据:', props.goodId);
// 获取商品信息对象
const goodItem = getGoodItemById(props.goodId);

const isShow = ref(false);

// 轮播图片列表
const list = reactive([
	'../../static/img/binxiang1.png',
	'../../static/img/dianshi.png',
	'../../static/img/zhuji.png',
	'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg'
]);

let imgListLength = ref(list.length);

let activeIndex = ref(1);

// getCurrentInstance获取全局引用，类似与vue2中的this，getCurrentInstance().ctx 获取全局上下文
let currentInstance = getCurrentInstance();
const swiper = () => {
	// 给该元素绑定slide滑动事件
	currentInstance.ctx.$refs.zSwiper.swiper.on('slideChange', (swiper) => {
		activeIndex.value = swiper.activeIndex + 1;
	});
};
const gotoShoppingCartPage = () => {
	uni.navigateTo({
		url: '/pages/order/order'
	});
};

const gobackIndex = () => {
	uni.reLaunch({
		url: '/pages/index/index'
	});
};

const showMoreDetail = () => {
	isShow.value = !isShow.value;
};

uni.$on('showMoreDetail', (e) => {
	isShow.value = e;
});
</script>

<style lang="scss" scoped>
@import 'css/goodItemDetail.scss';
</style>
