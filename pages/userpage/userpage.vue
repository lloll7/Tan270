<template>
	<view>
		<view class="userPage-container">
			<view class="my-header" v-if="JSON.stringify(userInfo) !== '{}'">
				<view class="my-header-background">
					<image :src="userInfo.avatar" mode="aspectFill"></image>
				</view>
				<view class="my-header-logo">
					<view class="my-header-logo-box">
						<image :src="userInfo.avatar" mode=""></image>
					</view>
					<view class="user-name">{{ userInfo.nickName }}</view>
				</view>
			</view>
			<view class="top" v-else @click="getUserBaseInfo">
				<view class="userInfo">
					<image src="../../static/img/avatar_nologin.png" mode=""></image>
					<view class="userName">未登录</view>
				</view>
			</view>
			<view class="myOrder-container" v-if="JSON.stringify(userInfo) !== '{}'">
				<view class="myOrderWord">我的订单</view>
				<view class="contentList">
					<view class="daifukuan item">
						<view class="img-container">
							<image src="../../static/icon_zh97nd9pvxs/qianbao.png" mode=""></image>
						</view>
						<view class="wordContainer">待付款</view>
					</view>
					<view class="daifahuo item">
						<view class="img-container">
							<image src="../../static/icon_zh97nd9pvxs/shuju.png" mode=""></image>
						</view>
						<view class="wordContainer">待发货</view>
					</view>
					<view class="daishouhuo item">
						<view class="img-container">
							<image src="../../static/icon_zh97nd9pvxs/daishouhuo.png" mode=""></image>
						</view>
						<view class="wordContainer">待收货</view>
					</view>
					<view class="daipinjia item">
						<view class="img-container">
							<image src="../../static/icon_zh97nd9pvxs/pinglun.png" mode=""></image>
						</view>
						<view class="wordContainer">待评价</view>
					</view>
					<view class="shouhou item">
						<view class="img-container">
							<image src="../../static/icon_zh97nd9pvxs/jifen.png" mode=""></image>
						</view>
						<view class="wordContainer">售后/退款</view>
					</view>
				</view>
			</view>
			<view class="funList1">
				<view class="item" @click="gotoEnergySavingPage">
					<image src="../../static/img/shuye.png" mode="aspectFill"></image>
					<view class="wordContainer">当月节能</view>
				</view>
				<view class="item">
					<image src="../../static/img/shoucang.png" mode="aspectFill"></image>
					<view class="wordContainer">我的收藏</view>
				</view>
				<view class="item">
					<image src="../../static/img/youhui.png" mode="aspectFill"></image>
					<view class="wordContainer">节能币</view>
				</view>
				<view class="item">
					<image src="../../static/img/wentifankui.png" mode="aspectFill"></image>
					<view class="wordContainer">我的方案</view>
				</view>
			</view>
			<!-- 						<view class="bannerContainer">
				<image src="../../static/img/banner.png" mode="aspectFill"></image>
			</view> -->
			<view class="funList2">
				<view class="item">
					<view class="img-text-container">
						<image src="../../static/img/a-024_dizhiguanli.png" mode="aspectFill"></image>
						<view class="">收货地址</view>
					</view>
					<image src="../../static/img/rightArrow.png" mode="aspectFill"></image>
				</view>
				<view class="item">
					<view class="img-text-container">
						<image src="../../static/img/a-024_lianxikefu.png" mode="aspectFill"></image>
						<view class="">联系客服</view>
					</view>
					<image src="../../static/img/rightArrow.png" mode="aspectFill"></image>
				</view>
				<view class="item">
					<view class="img-text-container">
						<image src="../../static/img/a-024_pingjia.png" mode="aspectFill"></image>
						<view class="">我要反馈</view>
					</view>
					<image src="../../static/img/rightArrow.png" mode="aspectFill"></image>
				</view>
				<view class="bottomBox"></view>
			</view>
			<!-- 		<view class="bannerContainer">
				<image src="../../static/img/banner.png" mode="aspectFill"></image>
			</view> -->
		</view>
		<bottomNav></bottomNav>
	</view>
</template>

<script setup>
import { toRefs, ref, reactive } from 'vue';
import { userInfoStore } from '@/store/userInfoStore.js';
const store = userInfoStore();
const { userInfo } = toRefs(store);
const { updateUserInfo } = store;

const gotoLogin = () => {
	uni.showModal({
		mask: true,
		title: '温馨提示',
		content: '授权微信登录后才能正常使用小程序功能哦~',
		success(res) {
			if (res.confirm) {
				getUserBaseInfo();
			} else {
				console.log('拒绝');
			}
		}
	});
};
// 获取用户的openID
const getUserOpenId = () => {
	uni.login({
		provider: 'weixin',
		success(loginAuth) {
			let data = { code: loginAuth.code };
			console.log(data, 'code');
		}
	});
};
// 获取用户的昵称和头像
const getUserBaseInfo = () => {
	uni.getUserProfile({
		desc: '获取你的昵称、头像',
		success: (userRes) => {
			if (userRes.errMsg === 'getUserProfile:ok' && userRes.userInfo !== undefined) {
				let userInfo = {
					avatar: userRes.userInfo.avatarUrl,
					nickName: userRes.userInfo.nickName
				};
				updateUserInfo(userInfo);
				getUserOpenId(userInfo);
			}
		},
		fail: (err) => {
			uni.showToast({
				title: '出错了',
				icon: 'none'
			});
		}
	});
};
if (JSON.stringify(userInfo.value) === '{}') {
	gotoLogin();
}

const gotoEnergySavingPage = () => {
	uni.navigateTo({
		url: '/pages/energySavingPage/energySavingPage'
	});
};
</script>

<style lang="scss">
@import 'css/userpage.scss';
</style>
