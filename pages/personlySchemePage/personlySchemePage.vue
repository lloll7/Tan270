<template>
	<view>
		<web-view :src="url" bindmessage="getMessage"></web-view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const url = ref(
	'https://mp.weixin.qq.com/s?__biz=MzkwMDYxNTIwNA==&mid=2247483650&idx=1&sn=d9d60f9011856cb1377914de5c1be74c&chksm=c0401c49f737955ff438d5ae29104dc6f32246ffb893986f8b2367803d985a866f3013330663#rd'
);
</script>

<style></style>
