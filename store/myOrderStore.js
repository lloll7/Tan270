import {
	defineStore
} from "pinia";

export const myOrderStore = defineStore("myOrder", {
	state() {
		return {
			activeTip: "all"
		}
	},
	getters: {

	},
	actions: {
		updateActiveTip(newActiveTip) {
			console.log(newActiveTip);
			this.activeTip = newActiveTip
		}
	}
})