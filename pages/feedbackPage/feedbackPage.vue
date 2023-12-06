<template>
	<view class="feedbackPage-container">
		<view class="title">反阔意见</view>
		<view class="textarea-container">
			<textarea name="" id="" cols="30" rows="10" value="啊实打实的"></textarea>
		</view>
	</view>
</template>

<script setup></script>

<style lang="scss" scoped>
.feedbackPage-container {
	width: 100vw;
	height: 100vh;
	.title {
		font-size: 60rpx;
		color: #333333;
		font-weight: bold;
		text-align: center;
	}
	.textarea-container {
		width: 80%;
		height: 500rpx;
		border: 2rpx n black;
		margin: 20rpx auto;
		padding: 20rpx;
		box-sizing: border-box;
		textarea {
			width: 100%;
			height: 100%;
			font-size: 25rpx;
			color: #333333;
			font-weight: bold;
		}
	}
}
</style>
