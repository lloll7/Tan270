<template>
	<view class="">
		<swiper :interval="3000" :vertical="true" :duration="1000" class="swiper-container" @change="swpierChangeHandle" @transition="move" :acceleration="activeSwiper">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/GIF/saveTest.gif" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<input type="text" class="saveValueInput save1" v-model="FuelQuantity" />
					<image src="../../static/img/2.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<input type="text" class="saveValueInput save2" v-model="electricityConsumption" />
					<image src="../../static/img/3.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item endTest">
					<input type="text" class="saveValueInput save3" v-model="gasCapacity" />
					<image src="../../static/img/4.png" mode=""></image>
					<view class="swiperItemEnd" v-show="showEndBtn" @click="gotoSaveTest">
						<view class="swiperItemEndInner animate animate__fadeInLeft" @click="checkResult">查看结果</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="sideNav">
			<view class="tip tip1">
				<view class="img-container">
					<image v-if="!isNumber(FuelQuantity)" src="../../static/img/ETC_nodata.png" mode=""></image>
					<image v-else src="../../static/img/ETCjiaofei.png" mode=""></image>
				</view>
				<view class="">燃油费</view>
			</view>
			<view class="tip tip2">
				<view class="img-container">
					<image v-if="!isNumber(electricityConsumption)" src="../../static/img/dianfei_nodata.png" mode=""></image>
					<image v-else src="../../static/img/dianfei.png" mode=""></image>
				</view>
				<view class="">用电费</view>
			</view>
			<view class="tip tip3">
				<view class="img-container">
					<image v-if="!isNumber(gasCapacity)" src="../../static/img/ranqifei_nodata.png" mode=""></image>
					<image v-else src="../../static/img/ranqifei.png" mode=""></image>
				</view>
				<view class="">燃气费</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

let testDataAllDone = computed(() => {
	return isNumber(FuelQuantity.value) && isNumber(gasCapacity.value) && isNumber(electricityConsumption.value);
});

let activeSwiper = ref(0); // 当前所在页面

let showEndBtn = ref(false); // 是否展示"查看结果"按钮
let FuelQuantity = ref(''); // 燃油量
let gasCapacity = ref(''); // 燃气量
let electricityConsumption = ref(''); // 用电量
let dataList = [
	{
		title: '燃油量',
		data: FuelQuantity
	},
	{
		title: '用电量',
		data: electricityConsumption
	},
	{
		title: '燃气量',
		data: gasCapacity
	}
];

// 测试是否完成
// watch(electricityConsumption, (newVal, oldVal) => {
// 	if (newVal.trim() !== '' && !isNaN(newVal)) {
// 		showEndBtn = true;
// 	}
// });

const swpierChangeHandle = (e) => {
	activeSwiper.value = e.detail.current;
	// console.log(activeSwiper.value);
	if (e.detail.current === 3) {
		showEndBtn.value = true;
	}
};

const checkResult = () => {
	if (testDataAllDone.value) {
		console.log('计算成功');
	} else {
		uni.showToast({
			title: '请检查三项数据是否合理',
			icon: 'none'
		});
	}
};

const isNumber = (num) => {
	if (num !== '' && !isNaN(num)) {
		return true;
	} else {
		return false;
	}
};

const move = () => {
	if (activeSwiper.value > 0) {
		if (!isNumber(dataList[activeSwiper.value - 1].data.value)) {
			uni.showToast({
				title: '请输入' + dataList[activeSwiper.value - 1].title,
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss">
@import '../../static/css/animate.css';
.swiper-container {
	width: 100vw;
	height: 100vh;

	.swiper-item {
		position: relative;
		width: 100%;
		height: 100%;
		image {
			width: 100%;
			height: 100%;
		}
		.saveValueInput {
			// border: 1px solid red;
			width: 300rpx;
			height: 100rpx;
			font-size: 30px;
			color: #737373;
			font-weight: bold;
			position: absolute;
			left: 50%;
			bottom: 40%;
			transform: translate(-50%, -50%);
			z-index: 999;
		}
	}
	.endTest {
		position: relative;
		.swiperItemEnd {
			position: absolute;
			bottom: 10rpx;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 300rpx;
			height: 100rpx;
			.swiperItemEndInner {
				width: 100%;
				height: 100%;
				border-radius: 15rpx;
				line-height: 100rpx;
				text-align: center;
				font-weight: 600;
				animation-duration: 2s;
				animation-fill-mode: forwards;
				background-color: rgba(255, 212, 111, 1);
				&:hover {
					background-color: rgb(249, 231, 138);
				}
			}
		}
	}
}
.sideNav {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 120rpx;
	height: 500rpx;
	position: fixed;
	bottom: 50%;
	transform: translateY(50%);
	left: 0;
	// border: 1px solid red;
	background-color: rgba(255, 255, 255, 0.8);
	.tip {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120rpx;
		font-size: 12px;
		// border: 1px solid black;
		.img-container {
			width: 80rpx;
			height: 80rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
