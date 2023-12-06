<template>
	<view>
		<goodItemDetail :goodId="goodId"></goodItemDetail>
	</view>
</template>

<script setup>
// 接收路由传参方法一
const props = defineProps({
	goodId: Number
});
</script>

<style lang="scss" scoped></style>
