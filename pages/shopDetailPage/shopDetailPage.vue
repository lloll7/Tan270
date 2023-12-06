<template>
	<view class="shopDetailPage-container">
		<view class="my-header-container">
			<view class="search-container" @click="gotoSearch">
				<view class="search">
					<view class="">店内搜索</view>
				</view>
			</view>
			<view class="my-header-bg">
				<image :src="shopInfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="my-header-box">
				<view class="img-container">
					<image :src="shopInfo.avatar" mode=""></image>
				</view>
				<view class="shopName">{{ shopInfo.shopName }}</view>
				<view class="my-header-info-box">
					<view class="shops">{{ shopInfo.shops }}商品</view>
					<view class="fans">{{ shopInfo.fans }}粉丝</view>
				</view>
			</view>
		</view>
		<view class="header-bottom">
			<view class="btn-container">
				<view class="attentionBtn">
					<image src="../../static/img/heart-black.png" mode=""></image>
					<view class="">关注店铺</view>
				</view>
				<view class="serviceBtn">
					<image src="../../static/img/message-white.png" mode=""></image>
					<view class="">敲敲客服</view>
				</view>
			</view>
			<view class="otherInfo-container">
				<view class="newGood item">
					<image src="../../static/img/new.png" mode=""></image>
					<view class="">新品上架</view>
				</view>
			</view>
		</view>
		<!-- 这里的goodList应该是通过商家id查询到的对应商店的商品列表 -->
		<moreGood :type="'shop'" :goodList="goodList"></moreGood>
	</view>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import { shopListStore } from '../../store/shopListStore.js';
import { goodListStore } from '../../store/goodListStore.js';
const store = shopListStore();
const { getShopById } = store;
const goodStore = goodListStore();
const { goodList } = toRefs(goodStore);
const props = defineProps({
	shopId: Number
});

let shopInfo = reactive(getShopById(props.shopId));
console.log(shopInfo);

const gotoSearch = () => {
	uni.navigateTo({
		url: '/pages/searchPage/searchPage'
	});
};
</script>

<style lang="scss" scoped>
@import 'css/shopDetailPage.scss';
</style>
