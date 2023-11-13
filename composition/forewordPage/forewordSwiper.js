import {
	ref,
	computed
} from 'vue';

export default function changeCurIndex() {
	const curIndexRef = ref(0); // 当前正在展示的图片
	const frontBtnShowRef = ref(false); //向上的按钮是否展示
	const nextBtnShowRef = ref(true); //向下的按钮是否展示
	const gotoIndexRef = computed(() => {
		return curIndexRef.value === 2
	});
	const handleFrontClick = () => {
		if (curIndexRef.value > 0) {
			curIndexRef.value--;
		}
	};
	const handleNextClick = () => {
		if (curIndexRef.value < 2) {
			curIndexRef.value++;
		}
	};
	const indexChange = (e) => {
		curIndexRef.value = e.detail.current;
		frontBtnShowRef.value = curIndexRef.value !== 0;
		nextBtnShowRef.value = curIndexRef.value !== 2;
	};
	const gotoIndexPage = () => {
		uni.navigateTo({
			url: "/pages/index/index"
		})
	}
	const goEnd = () => {
		curIndexRef.value = 2
	}
	return {
		curIndexRef,
		handleFrontClick,
		handleNextClick,
		frontBtnShowRef,
		nextBtnShowRef,
		indexChange,
		gotoIndexRef,
		gotoIndexPage,
		goEnd
	};
}