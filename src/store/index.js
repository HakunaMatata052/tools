import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
	state: {
		show: "123"
	},
	mutations: {
		asd(){
			function initialize() {
				var mp = new BMap.Map('map');
				mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
			}
		}
	}
})