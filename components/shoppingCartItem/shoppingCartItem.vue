<template>
	<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
		<view class="shoppingCartItem-container">
			<view class="itemContainer">
				<radio-group name="" @change="changeSelect" v-if="showRadio">
					<radio :value="1" :checked="shopCartItem.selected" @click="clickSelect" color="#ffd321" />
				</radio-group>
				<view class="goodInfo">
					<view class="imgContainer">
						<image :src="shopCartItem.imgUrl" mode="aspectFill"></image>
					</view>
					<view class="info">
						<view class="itemInfo">
							<view class="title">{{ shopCartItem.title }}</view>
							<view class="price">￥{{ shopCartItem.price }}</view>
						</view>
						<view class="sellNum">
							<view class="decreaseBtn" @click="decreaseHandle(shopCartItem.id)">-</view>
							<view class="num">{{ shopCartItem.num }}</view>
							<view class="increaseBtn" @click="increaseHandle(shopCartItem.id)">+</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="">1</view> -->
		<view class="delItem" @click="delItem">
			<view class="delBtnOuter-container">
				<view class="delBtn-container">
					<view class="img-container">
						<image src="../../static/img/del.png" mode=""></image>
					</view>
					<view class="delBtn">删除</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
import { ref, defineProps, computed, toRefs } from 'vue';
import { shoppingCartItemStore } from '@/store/shoppingCartItemStore.js';
const store = shoppingCartItemStore();
const { changeShoppingCartItem, removeShoppingCartItem } = store;

const props = defineProps({
	shopCartItem: {
		type: Object,
		default: {},
		require: true
	},
	showRadio: {
		type: Boolean,
		default: true,
		require: true
	}
});
// // 获取出shopCartItem的响应式数据
let { shopCartItem } = toRefs(props);

const clickSelect = () => {
	shopCartItem.value.selected = !shopCartItem.value.selected;
	// if (shopCartItem.value.num === 0) {
	// 	shopCartItem.value.num++;
	// }
	changeShoppingCartItem(shopCartItem.value);
};

const changeSelect = (e) => {};

const decreaseHandle = (id) => {
	uni.$emit('decrease', id);
};
const increaseHandle = (id) => {
	uni.$emit('increase', id);
};

const delItem = () => {
	removeShoppingCartItem(shopCartItem.value);
};
</script>

<style lang="scss">
.scroll-view_H {
	display: flex;
	white-space: nowrap;
	align-items: flex-start;
	// border: 1px solid black;
}
.shoppingCartItem-container {
	display: inline-block;
	width: 100%;
	height: 200rpx;
	border: 1px solid rgba(0, 0, 0, 0.2);
	// border-radius: 20rpx;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
	// background-color: ;
	.itemContainer {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 20rpx;
		.goodInfo {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex: 1;
			.info {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex: 1;
				box-sizing: border-box;
				padding-right: 30rpx;
				.itemInfo {
					display: flex;
					height: 200rpx;
					flex-direction: column;
					justify-content: space-between;
					box-sizing: border-box;
					padding: 50rpx 0;
					.title {
						font-size: 16px;
						font-weight: bold;
					}
					.price {
						font-size: 13px;
						color: red;
					}
				}
				.sellNum {
					display: flex;
					align-items: center;
					.decreaseBtn,
					.increaseBtn {
						width: 35rpx;
						height: 35rpx;
						border-radius: 50%;
						background-color: rgba(0, 0, 0, 0.1);
						text-align: center;
						line-height: 35rpx;
						margin: 0 20rpx;
						color: rgba(0, 0, 0, 0.4);
					}
				}
			}

			.imgContainer {
				width: 200rpx;
				height: 200rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.sellNum {
				display: flex;
			}
		}
	}
}
.delItem {
	display: inline-block;
	width: 100rpx;
	height: 204rpx;
	vertical-align: top;
	margin-top: 30rpx;
	background-color: #fc011a;
	.delBtnOuter-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		// border: 1px solid green;
		.delBtn-container {
			// border: 1px solid black;
			height: 70rpx;
			.delBtn {
				color: white;
				font-size: 13px;
			}
			.img-container {
				width: 40rpx;
				height: 40rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
