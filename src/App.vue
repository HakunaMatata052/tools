<template>
	<div id="app">
		<div class="layout">
			<Layout>
				<!--<Header></Header>-->
				<sider></sider>
			</Layout>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Header from './home/Header'
	import Sider from './home/Sider'

	/*import VueRouter from "vue-router";
	Vue.use(VueRouter);

	const router = new VueRouter({
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
	})*/

	export default {
		data() {
			return {
				author: "app主页面"
			}
		},
		components: {
			Header,
			Sider
		}
	}
</script>

<style scoped>
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}
	
	.layout-nav {
		width: 420px;
		margin: 0 auto;
		margin-right: 20px;
	}
</style>