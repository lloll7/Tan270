<template>
	<view>
		<view class="img-container" style="background-image: url('../../static/img/saveTestRes1.png')"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.img-container {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden; /* 隐藏超出原始图片范围的模糊部分 */
}
.img-container::v-deep::after {
	content: '';
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
	z-index: 999; /* 将模糊层放在图片下方 */
	filter: blur(50px); /* 在这里设置模糊程度 */
}
</style>
