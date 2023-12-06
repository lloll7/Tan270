<template>
	<view>
		<!--  -->
		<moreGood :type="'search'" :goodList="[]"></moreGood>
	</view>
</template>

<script setup>
import { toRefs } from 'vue';
import { goodListStore } from '../../store/goodListStore.js';
const goodStore = goodListStore();
const { goodList } = toRefs(goodStore);
</script>

<style></style>
