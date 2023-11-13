<template>
	<view class="order-container">
		<view class="shoppingCartContainer">
			<view class="shoppingCartList">
				<view class="radioContainer">
					<radio-group class="selectAllBtn" @change="selectAll">
						<label class="radio">
							<radio value="all" :checked="selected" color="#ffd321" @click="clickSelect" />
							<text>全选</text>
						</label>
					</radio-group>
				</view>
				<shoppingCartItem v-for="item in shoppingCartItemList" :shopCartItem="item"></shoppingCartItem>
				<!-- 底部垫片，垫起路由导航的高度 -->
				<view class="bottom"></view>
			</view>
		</view>
		<view class="computeBox-container">
			<view class="content">
				<view class="text1">
					<view class="">件数</view>
					<view class="">{{ allSelect }}件</view>
				</view>
				<view class="text1">
					<view class="">合计</view>
					<view class="price">￥{{ sumAllPrice }}</view>
				</view>
			</view>
			<view class="settleBtn-container">
				<view class="settleBtn" @click="gotoBilling">结算</view>
			</view>
		</view>
		<!-- 底部垫片，垫起路由导航的高度 -->
		<view class="bottom"></view>
		<bottomNav></bottomNav>
	</view>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { shoppingCartItemStore } from '../../store/shoppingCartItemStore.js';
import { storeToRefs } from 'pinia';
const store = shoppingCartItemStore(); // 拿到仓库
const { shoppingCartItemList } = storeToRefs(store); // 获取购物车商品列表（响应式）
const { changeShoppingCartItemList, changeShoppingCartItem } = store; // 获取修改仓库数据方法
console.log(shoppingCartItemList.value);

let selected = ref(false);

const clickSelect = () => {
	// shoppingCartItemList[0].selected = true;
	selected.value = !selected.value;
	shoppingCartItemList.value.forEach((item) => {
		item.selected = selected.value;
	});
	changeShoppingCartItemList(shoppingCartItemList.value);
};

const selectAll = (e) => {};

watch(
	// 深度监听需要以函数返回监听属性的格式去监听，如果要深度监听的是一个对象且要监听里面的所有属性，则要写上第三个参数: { deep: true , immediate: true }
	() => shoppingCartItemList.value.map((item) => item.selected),
	() => {
		let res = true;
		shoppingCartItemList.value.forEach((item) => {
			if (!item.selected) {
				res = false;
			}
		});
		selected.value = res;
	}
);

let sumAllPrice = computed(() => {
	let sum = 0;
	shoppingCartItemList.value.forEach((item) => {
		if (item.num && item.selected) {
			sum += item.price * item.num;
		}
	});
	return sum;
});

let allSelect = computed(() => {
	let res = 0;

	shoppingCartItemList.value.forEach((item) => {
		if (item.selected) {
			res += item.num;
		}
	});
	return res;
});

uni.$on('decrease', (id) => {
	console.log(id);
	shoppingCartItemList.value.forEach((item) => {
		if (item.id === id) {
			if (item.num > 1) {
				item.num--;
				changeShoppingCartItem(item);
			} else {
				uni.showToast({
					title: '该商品不能再减少了哦~',
					icon: 'none',
					duration: 1000
				});
			}
		}
	});
});
uni.$on('increase', (id) => {
	console.log(id);
	shoppingCartItemList.value.forEach((item) => {
		if (item.id === id) {
			item.num += 1;
			changeShoppingCartItem(item);
		}
	});
});

const gotoBilling = () => {
	uni.navigateTo({
		url: '/pages/billingPage/billingPage'
	});
};
</script>

<style lang="scss">
.bottom {
	width: 100%;
	height: 100rpx;
}
.order-container {
	position: relative;
	// height: 100vh;
	margin-bottom: 150rpx;
	.shoppingCartContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		.radioContainer {
			display: flex;
			width: 100%;
			justify-content: flex-start;
			padding-left: 15rpx;
			margin: 30rpx 0;
			// border: 1px solid black;
		}
		.shoppingCartList {
			width: 90%;
			.bottom {
				width: 100%;
				height: 300rpx;
			}
			.shoppingCartItem-container {
				margin: 30rpx 0;
			}
		}
	}
	.computeBox-container {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 300rpx;
		bottom: 50rpx;
		left: 50%;
		transform: translate(-50%);
		border-radius: 20rpx;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
		background-color: white;
		padding-bottom: 100rpx;
		box-sizing: border-box;
		.content {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: space-around;
			// border: 1px solid black;
			font-size: 15px;
			padding: 15rpx 15rpx 0 15rpx;
			.text1,
			.text2 {
				display: flex;
				justify-content: space-between;
				padding: 0 40rpx;
				font-weight: bold;
				// font-weight: lighter;
			}
			.text1 {
				.price {
					color: red;
				}
			}
		}
		.settleBtn-container {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			.settleBtn {
				width: 500rpx;
				height: 70rpx;
				text-align: center;
				line-height: 70rpx;
				border-radius: 50rpx;
				// border: 1px solid black;
				background-color: #ffd321;
				font-weight: bold;
			}
		}
	}
}
</style>
