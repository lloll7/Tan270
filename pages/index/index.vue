<template>
	<view class="index-container">
		<!-- 		<swiper class="swiper-container" :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/1_1.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/2_1.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/3_1.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="top-container">
			<view class="userInfo">
				<view class="user-notLogin userInfo-List" v-if="JSON.stringify(user) === '{}'">
					<view class="left">
						<view class="content1">
							HI 欢迎新朋友
							<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/rightArrow.png" mode=""></image>
						</view>
						<view class="content2">注册享受新人福利</view>
					</view>
					<view class="right">
						<view class="loginBtn">
							<text>注册/登录</text>
						</view>
					</view>
				</view>
				<view class="user-login userInfo-List" v-else>2</view>
			</view>
			<view class="option-container">
				<view class="saveEnergy">
					<view class="img-container">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/jieneng.png" mode="aspectFill"></image>
					</view>
					<text>节约能源</text>
				</view>
				<view class="buyAppliance">
					<view class="img-container">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/gouwu.png" mode="aspectFill"></image>
					</view>
					<text>购置家电</text>
				</view>
			</view>
		</view>
		<view class="extraOPtion-container">
			<view class="personalCenter">
				<text>个人中心</text>
				<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/person.png" mode="aspectFill"></image>
			</view>
			<view class="rightSide">
				<view class="top">
					<view class="messageManage">
						<view>通知</view>
						<view>管理</view>
					</view>
					<view class="aroundService">
						<view>周边</view>
						<view>服务</view>
					</view>
				</view>
				<view class="bottom">
					<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/liuyan.png" mode="aspectFill"></image>
					<view class="text-container">
						<view>我要留言</view>
					</view>
				</view>
			</view>
		</view>
		<view class="tips-container">
			<view class="top">
				<text>省电小贴士</text>
				<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/rightArrow.png" mode=""></image>
			</view>
			<swiper class="swpier-container">
				<swiper-item class="tips-swiper">
					<view class="swiper-item">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/1.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item class="tips-swiper">
					<view class="swiper-item">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/2.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item class="tips-swiper">
					<view class="swiper-item">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/3.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="footer-container">
			<view class="footer">
				<view class="footer-item" style="--d1: -0.5s; --d2: -3.5s"></view>
				<view class="footer-item" style="--d1: -1s; --d2: -4s"></view>
				<view class="footer-item" style="--d1: -1.5s; --d2: -4.5s"></view>
				<view class="footer-item" style="--d1: -2s; --d2: -5s"></view>
				<view class="footer-item" style="--d1: -2.5s; --d2: -5.5s"></view>
				<view class="footer-item" style="--d1: -3s; --d2: -6s"></view>
				<view class="footer-item" style="--d1: -3.5s; --d2: -6.5s"></view>
				<view class="footer-item" style="--d1: -4s; --d2: -7s"></view>
				<view class="footer-item" style="--d1: -4.5s; --d2: -7.5s"></view>
			</view>
		</view> -->
		<z-swiper class="scroll-container" v-model="list" :options="options">
			<z-swiper-item class="scroll-item" :custom-style="{ width: '600rpx', height: '770rpx' }" v-for="(item, index) in list" :key="index">
				<view class="scrollItemContainer">
					<image class="image" :src="item" mode="aspectFill"></image>
					<view class="scrollItemInfo">
						<view class="title1">精致美学 艺术生活</view>
						<view class="title2">
							<view class="">意式风格</view>
							<view class="">{{ index + 1 }}/{{ list.length }}</view>
						</view>
					</view>
				</view>
			</z-swiper-item>
		</z-swiper>
		<uni-section title="文字滚动" subTitle="使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示" type="line">
			<uni-notice-bar show-icon scrollable text="Tan270小队首次开发小程序,智能节能家电推荐与购置,采用大数据分析生成推荐算法实现节能家电推荐" />
		</uni-section>
		<view class="controlStrip">
			<view class="top">
				<view class="jieyue item" @click="goToSaveSchemePage">
					<view class="img-container">
						<image src="../../static/img/jienengdengpao.png" mode=""></image>
					</view>
					<view class="text">节能小测试</view>
				</view>
				<view class="gouzhi item" @click="goToBuySchemePage">
					<view class="img-container">
						<image src="../../static/img/gouzhijihua.png" mode=""></image>
					</view>
					<view class="text">购置方案</view>
				</view>
				<view class="youhua item" @click="goToImproveSchemePage">
					<view class="img-container">
						<image src="../../static/img/yinliuyouhua.png" mode=""></image>
					</view>
					<view class="text">优化方案</view>
				</view>
				<!-- 				<view class="meir item" @click="goToDayPlantTreePage">
					<view class="img-container">
						<image src="../../static/img/xiaoshu.png" mode=""></image>
					</view>
					<view class="text">每日一栽</view>
				</view> -->
				<view class="dinzhi item">
					<view class="img-container" @click="goToPersonlySchemePage">
						<image src="../../static/img/zhuanshu.png" mode=""></image>
					</view>
					<view class="text">进入公众号</view>
				</view>
			</view>
			<!-- <view class="bottom"> -->

			<!-- </view> -->
		</view>
		<scroll-view scroll-x="true" enhanced="true" show-scrollbar="{{false}}" :enable-flex="true" class="styleList">
			<view class="styleBox">
				<view class="styleInnerBox">
					<image src="../../static/img/styleBox1.png" mode=""></image>
				</view>
			</view>
			<view class="styleBox">
				<view class="styleInnerBox">
					<image src="../../static/img/styleBox2.png" mode=""></image>
				</view>
			</view>
			<view class="styleBox">
				<view class="styleInnerBox">
					<image src="../../static/img/styleBox3.png" mode=""></image>
				</view>
			</view>
			<view class="styleBox">
				<view class="styleInnerBox">
					<image src="../../static/img/styleBox4.png" mode=""></image>
				</view>
			</view>
		</scroll-view>
		<view class="typeList">
			<view class="chufang typeItem">
				<view class="wordContainer">
					<view class="wordInnerContinaer">
						<view class="CNWord">厨房</view>
						<view class="ESWord">KITCHEN</view>
					</view>
				</view>
				<view class="img-container">
					<image src="/static/img/chufang.png" mode=""></image>
				</view>
			</view>
			<view class="yangtai typeItem">
				<view class="wordContainer">
					<view class="wordInnerContinaer">
						<view class="CNWord">客厅</view>
						<view class="ESWord">LIVING ROOM</view>
					</view>
				</view>
				<view class="img-container">
					<image src="/static/img/keting.png" mode=""></image>
				</view>
			</view>
			<view class="keting typeItem">
				<view class="wordContainer">
					<view class="wordInnerContinaer">
						<view class="CNWord">卧室</view>
						<view class="ESWord">BEDROOM</view>
					</view>
				</view>
				<view class="img-container">
					<image src="/static/img/woshi.png" mode=""></image>
				</view>
			</view>
			<view class="woshi typeItem">
				<view class="wordContainer">
					<view class="wordInnerContinaer">
						<view class="CNWord">阳台</view>
						<view class="ESWord">BALCONY</view>
					</view>
				</view>
				<view class="img-container">
					<image src="/static/img/yangtai.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 		<view class="tips-container">
			<view class="top">
				<text>省电小贴士</text>
				<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/rightArrow.png" mode=""></image>
			</view>
			<swiper class="swpier-container">
				<swiper-item class="tips-swiper">
					<view class="swiper-item">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/1.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item class="tips-swiper">
					<view class="swiper-item">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/2.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item class="tips-swiper">
					<view class="swiper-item">
						<image src="https://tan270.oss-cn-shenzhen.aliyuncs.com/img/3.jpg" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view> -->
		<!-- 		<view class="tip">
			<view class="content1">猜你喜欢</view>
			<view class="content2" @click="gotoRecommend">
				<view class="">查看更多</view>
				<image src="../../static/img/rightArrow.png" mode=""></image>
			</view>
		</view>
		<view class="goodsList">
			<goodItem class="goodItem" v-for="(item, index) in goodList" :key="index" :goodInfo="item"></goodItem>
		</view> -->
		<moreGood :goodList="goodList"></moreGood>
		<!-- 底部垫片，垫起路由导航的高度 -->
		<view class="bottom"></view>
		<bottomNav></bottomNav>
	</view>
</template>

<script setup>
// import '../../api/good.js';
import { ref, reactive, toRefs } from 'vue';
import { goodListStore } from '../../store/goodListStore.js';
const goodStore = goodListStore();
const { goodList } = toRefs(goodStore);
let options = reactive({
	// loop: true,
	effect: 'coverflow',
	centeredSlides: true,
	slidesPerView: 'auto',
	// loopedSlides: 7,
	coverflowEffect: {
		rotate: 0,
		stretch: -20,
		depth: 100,
		modifier: 2,
		slideShadows: true
	}
});
// this.$fetch('/api/good');
let list = reactive([
	'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
	'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
	'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
	'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
	'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg'
]);

// const goodList = [
// 	{
// 		imgUrl: '../../static/img/jiajv.png',
// 		goodName: 'Royal Palm Sofa',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/binxiang1.png',
// 		goodName: 'Royal Palm Sofa',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/dianshi.png',
// 		goodName: 'Royal Palm Sofa',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/zhuji.png',
// 		goodName: 'Royal Palm Sofa',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/jiajav.png',
// 		goodName: 'Vertical Air Conditioner',
// 		price: '50.18'
// 	},
// 	{
// 		imgUrl: '../../static/img/binxiang2.png',
// 		goodName: 'Vertical Air Conditioner',
// 		price: '50.18'
// 	}
// ];

const goToSaveSchemePage = () => {
	uni.navigateTo({
		url: '/pages/saveSchemePage/saveSchemePage'
	});
};

const goToBuySchemePage = () => {
	uni.navigateTo({
		url: '/pages/buySchemePage/buySchemePage'
	});
};

const goToImproveSchemePage = () => {
	uni.navigateTo({
		url: '/pages/improveSchemePage/improveSchemePage'
	});
};

const goToDayPlantTreePage = () => {
	uni.navigateTo({
		url: '/pages/dayPlantTreePage/dayPlantTreePage'
	});
};

const goToPersonlySchemePage = () => {
	uni.navigateTo({
		url: '/pages/personlySchemePage/personlySchemePage'
	});
};

const gotoRecommend = () => {
	uni.switchTab({
		url: '/pages/recommend/recommend'
	});
};
</script>

<style lang="scss">
@import './css/index.scss';
</style>
