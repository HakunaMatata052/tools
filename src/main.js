import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import vueResource from 'vue-resource'
//import router from './router'
//import VueRouter from "vue-router";

//开启debug模式
Vue.config.debug = false;
Vue.use(iView);
Vue.use(vueResource);
Vue.http.options.emulateJSON = true;

//Vue.use(VueRouter);

// 定义组件, 也可以像教程之前教的方法从别的文件引入

//import Home from './home/Home'
//import List from './List/List'

// 创建一个路由器实例
// 并且配置路由规则
/*const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: Home
    },
    {
      path: '/second',
      component: List
    }
  ]
})
 */
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
	//router: router,
	data: {
		userdata: ''
	},
	methods: {
	},
	components: {
		App
	},
	template: '<App :userdata="userdata"/>'
	//render: h => h(App)
}).$mount('#app');
