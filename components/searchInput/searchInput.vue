<template>
	<view class="search-container">
		<view class="img-container">
			<image src="../../static/img/sousou.png" mode=""></image>
		</view>
		<view class="search">
			<input type="text" :placeholder="placeholder" :value="searchVal" @input="$emit('update:searchVal', $event.target.value)" />
		</view>
	</view>
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
	searchVal: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: 'Search for future',
		require: true
	}
});
const emits = defineEmits(['update:searchVal']);
// const { searchVal } = toRefs(props);
</script>

<style lang="scss">
.search-container {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
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
</style>
