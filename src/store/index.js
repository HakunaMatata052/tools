import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
	state: {
		domain: "",
		notice: true,
	},
	mutations: {
		domainURI(url) {
			var durl = /http:\/\/([^\/]+)\//i;
			var domain = url.match(durl);
			return domain[1];
		}
	}
})