import Vue from 'vue';
import VueRouter from 'vue-router';

var Tools = r => require.ensure([], () => r(require('../home/Tools')), 'tools');

var List = r => require.ensure([], () => r(require('../list/List')), 'List');
var colleague = r => require.ensure([], () => r(require('../speak/Colleague')), 'colleague');

var customer = r => require.ensure([], () => r(require('../speak/Customer')), 'customer');


var zhaocha = r => require.ensure([], () => r(require('../zhaocha/Zhaocha')), 'zhaocha');

var viewzhaocha = r => require.ensure([], () => r(require('../zhaocha/Viewzhaocha')), 'viewzhaocha');
var baidu = r => require.ensure([], () => r(require('../zhaocha/baidu.vue')), 'baidu');
var apply = r => require.ensure([], () => r(require('../zhaocha/apply.vue')), 'apply');

var wjc = r => require.ensure([], () => r(require('../wjc/Wjc')), 'wjc');
var network = r => require.ensure([], () => r(require('../network/Network')), 'network');
var email = r => require.ensure([], () => r(require('../email/Email')), 'email');

var baidumap = r => require.ensure([], () => r(require('../map/Map')), 'map');

var mobile = r => require.ensure([], () => r(require('../mobile/Mobile')), 'mobile');

var template = r => require.ensure([], () => r(require('../template/Template')), 'template');

var viewedit = r => require.ensure([], () => r(require('../viewedit/Viewedit')), 'viewedit');

//import Tools from '../home/Tools'
//import List from '../list/List'
//
//import colleague from '../speak/Colleague'
//import customer from '../speak/Customer'
//
//import zhaocha from '../zhaocha/Zhaocha'
//
//import wjc from '../wjc/Wjc'
//
//import network from '../network/Network'
//import email from '../email/Email'

Vue.use(VueRouter);
const router = new VueRouter({
	routes: [{ //前台路由配置
			path: '/tools',
			component: Tools
		},
		{ //前台路由配置
			path: '/',
			component: Tools
		},
		{
			path: '/network',
			component: network
		},
		{
			path: '/zhaocha',
			component: zhaocha
		},
		{
			path: '/viewzhaocha',
			component: viewzhaocha
		},
		{
			path: '/wjc',
			component: wjc
		},
		{
			path: '/colleague',
			component: colleague
		},
		{
			path: '/customer',
			component: customer
		},
		{
			path: '/email',
			component: email
		},
		{
			path: '/map',
			component: baidumap
		},
		{
			path: '/mobile',
			component: mobile
		},
		{
			path: '/template',
			component: template
		},
		{
			path: '/viewedit',
			component: viewedit
		},
		{
			path: '/baidu',
			component: baidu
		},
		{
			path: '/apply',
			component: apply
		}
	]
})

router.beforeEach((to, from, next) => {
	console.log(`路由到：${to.path}`)
	next();
});

router.afterEach(route => {

})
export default router