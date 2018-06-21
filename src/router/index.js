import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App'
import Tools from '../home/Tools'
import List from '../list/List'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {//前台路由配置
            path:'/tools',
            component:Tools
        },
        {//前台路由配置
            path:'/',
            component:Tools
        },
        {
            path: '/second',  
            component:List
        }
        ,
        {
            path: '/app',  
            component:App
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