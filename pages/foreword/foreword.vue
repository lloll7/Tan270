<template>
	<view class="forewordPage-container">
		<view class="frontBtn" @click="handleFrontClick" v-show="frontBtnShowRef">︿</view>
		<swiper class="scrollOuter" vertical :current="curIndexRef" @change="indexChange">
			<swiper-item class="scrollItem">
				<view class="swiper-item">
					<!-- 					<view class="text-container1">
						<text>邻居天天吹空调</text>
						<text>为什么电费还是比我少102元？</text>
					</view> -->
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/gif/5.gif" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item class="scrollItem">
				<view class="swiper-item">
					<!-- 					<view class="text-container2">
						<text>想要购置家电</text>
						<text>却又不知道该如何选择</text>
					</view> -->
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/gif/4.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item class="scrollItem endScroll">
				<view class="swiper-item">
					<view class="text-container3">
						<!-- <text>节约每一度电</text>
						<text class="text2">节能降碳，你我同行</text> -->
						<image src="../../static/img/title.png" mode="aspectFill"></image>
					</view>
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/gif/3.gif" mode="aspectFill"></image>
				</view>
				<view class="swiperItemEnd" v-show="gotoIndexRef" @click="gotoIndexPage">
					<view class="swiperItemEndInner animate animate__fadeInLeft">去首页</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="goEndBtn" v-show="curIndexRef !== 2" @click="goEnd">
			<image src="../../static/img/2.png" mode="aspectFill"></image>
		</view>
		<view class="nextBtn" @click="handleNextClick" v-show="nextBtnShowRef">﹀</view>
	</view>
</template>

<script>
import changeCurIndex from '@/composition/forewordPage/forewordSwiper.js';
export default {
	setup() {
		return {
			...changeCurIndex()
		};
	}
};
</script>

<style lang="scss">
@import '../../static/css/animate.css';
@import 'css/foreword.scss';
</style>
