<template>
	<view class="login-container">
		<view class="userAvtar">
			<image src="../../static/img/avatar_nologin.png" mode=""></image>
		</view>
		<button type="primary" class="btn" plain @click="login">微信一键登录</button>
	</view>
</template>

<script setup>
const login = () => {
	console.log('Asfasf');
	uni.getUserProfile({
		desc: 'sss',
		success: (res) => {
			console.log(res);
		}
	});
};
</script>

<style lang="scss">
.login-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	.userAvtar {
		width: 250rpx;
		height: 250rpx;
		border-radius: 50%;
		margin: 50rpx 0;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.btn {
		width: 400rpx;
	}
}
</style>
