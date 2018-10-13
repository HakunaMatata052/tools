import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
	state: {
		api:'http://wjdh03.sjgogo.cn/api/',
		token:"57373A7E05CB44079B2F12C14A5E83A9",
		domain: "hzbedzkj.dongliwuxianjituan.top",
		zhaocha_apply:{
			companyname:'',
			domain:'',
			test:'',
			score:'',
			midu:'',
			mima:'',
			ip:'',
			beian:'',
			
		},
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