<template>
	<view>
		<view class="energySavingPage-container" v-if="energySaving">节能数据</view>
		<!-- <view class="" v-else></view> -->
	</view>
</template>

<script setup>
import { toRefs } from 'vue';
import { userInfoStore } from '../../store/userInfoStore.js';
const store = userInfoStore();
let { energySaving } = toRefs(store);
if (!energySaving.value) {
	uni.showModal({
		mask: true,
		title: '无测试数据',
		content: '当月您还没有进行节能测试哦~是否前往测试',
		success(res) {
			if (res.confirm) {
				uni.navigateTo({
					url: '/pages/saveSchemePage/saveSchemePage'
				});
			} else {
				uni.navigateBack();
			}
		}
	});
}
</script>

<style></style>
