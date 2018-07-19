<template>
	<div class="big_box">
		<div class="top_box">
			<div class="top_big">
				<img src="../assets/mb_logo.png" title="" alt="" />
				<div class="top_left">
					<span>技术部<b>模板中心</b></span>
					<i>Template center of Technology Department</i>
				</div>
				<div class="top_tel">
					400-0599-360
				</div>
			</div>
		</div>
		<div class="banner"></div>
		<div class="nav">
			<a href="#" title="">模板中心首页</a>
			<a href="#" title="">中心页面</a>
			<a href="#" title="">分类列表页面</a>
			<a href="#" title="">详细页面</a>
			<a href="#" title="">模块页面</a>
			<a href="#" title="">导航客服模板</a>
		</div>
		<div class="list_menu">
			<span></span><b>模板推荐</b><i>/ Recommend</i>
			<a href="#" title="">MORE+</a>
		</div>
		<div class="mbtj_box">
			<ul>
				<li v-for="x in list">
					<a href="javascript:;" @click="bigimg(x.img)"><img :src="x.img" :title="x.title" :alt="x.title" /></a>
					<div class="mbtj_list">
						<a href="javascript:;">下载</a>
						<div class="mbtj_wz1"><span>{{x.title}}</span><i>中心页面</i></div>
						<div class="mbtj_wz2"><span class="fl">模板编号：{{x.id}}</span><span class="fr">下载使用量：7</span></div>
					</div>
				</li>
			</ul>
			<div class="clear"></div>
			<div class="mbtj_more">
				<a href="#" title="">查看全部模板</a>
			</div>
		</div>
		<div class="mb_bq">
			西安动力无限信息科技股份有限公司 © 版权所有
		</div>
		<div class="tc_box" v-if="show">
			<a href="javascript:;" @click="close"><img src="../assets/close.png" /></a>
			<img :src="bigimgurl" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id:"list-product-001",
					title: "通栏-资讯列表",
					img:"https://www.baidu.com/img/bd_logo1.png",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				},{
					id:"list-product-002",
					title: "通栏-资讯列表",
					img:"https://ubmcmm.baidustatic.com/media/v1/0f000Q1oFCwL3P5h3jw00s.jpg",
					zip:"https://www.baidu.com/img/bd_logo1.png"
				}],
				show: 0,
				bigimgurl: ''
			}
		},
		mounted() {

		},
		methods: {
			bigimg(url) {
				var that = this;
				that.bigimgurl = url;
				that.show = 1;
			},
			close() {
				var that = this;
				that.show = 0;
			}
		}
	}
</script>
<style scoped>
	.ivu-layout-content {
		padding: 0!important;
	}
	
	.clear {
		clear: both;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.big_box {
		width: 100%;
		font-family: Microsoft YaHei, arial;
		font-size: 14px;
	}
	
	.top_box {
		height: 98px;
		box-shadow: 0px 3px 10px #eee;
		position: relative;
		z-index: 1;
	}
	
	.top_big {
		width: 1180px;
		margin: auto;
	}
	
	.top_big img {
		display: block;
		width: 183px;
		height: 55px;
		float: left;
		margin: 21px 30px 21px 0;
	}
	
	.top_left {
		float: left;
		line-height: 30px;
		padding-top: 19px;
	}
	
	.top_left span {
		display: block;
		font-size: 20px;
		color: #333;
		letter-spacing: 12px;
	}
	
	.top_left i {
		display: block;
		font-family: arial;
		font-style: normal;
		color: #666;
		text-transform: uppercase;
		font-size: 12px;
	}
	
	.top_tel {
		float: right;
		line-height: 98px;
		background: url(../assets/tel.png) no-repeat left center;
		padding-left: 30px;
		font-size: 24px;
		color: #da251d;
		font-weight: bold;
	}
	
	.banner {
		background: url(../assets/banner.jpg) no-repeat center;
		height: 290px;
	}
	
	.nav {
		width: 1200px;
		margin: auto;
		background: #aaa;
		height: 50px;
		position: relative;
		top: -50px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		text-align: center;
	}
	
	.nav a {
		font-size: 15px;
		color: #fff;
		line-height: 50px;
		padding: 0 50px;
	}
	
	.list_menu {
		height: 50px;
		background: #fff;
		box-shadow: 0px 3px 10px #eee;
		width: 1200px;
		margin: -50px auto 0;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		line-height: 50px;
	}
	
	.list_menu span {
		display: block;
		width: 3px;
		height: 18px;
		background: #da251d;
		float: left;
		margin: 16px 0 16px 15px;
	}
	
	.list_menu b {
		display: block;
		font-size: 18px;
		color: #da251d;
		float: left;
		padding: 0 5px 0 10px;
	}
	
	.list_menu i {
		display: block;
		float: left;
		font-style: normal;
		font-family: arial;
		color: #666;
		text-transform: uppercase;
		font-size: 14px;
	}
	
	.list_menu a {
		display: block;
		;
		float: right;
		font-size: 12px;
		font-family: arial;
		color: #666;
		margin-right: 15px;
	}
	
	.mbtj_box {
		width: 1230px;
		margin: auto;
	}
	
	.mbtj_box ul li {
		width: 380px;
		background: url(../assets/cp_bg.png) no-repeat top;
		float: left;
		margin: 30px 15px 0;
		list-style: none;
	}
	
	.mbtj_box ul li img {
		width: 380px;
		height: 220px;
		border: 1px solid #e2e2e2;
		margin-top: 18px;
	}
	
	.mbtj_box ul li .mbtj_list {
		width: 380px;
		height: 85px;
		border: 1px solid #e2e2e2;
		border-top: 0;
		margin-top: -5px;
		position: relative;
	}
	
	.mbtj_box ul li .mbtj_list a {
		display: block;
		width: 48px;
		height: 48px;
		position: absolute;
		background: #da251d;
		border-radius: 50%;
		text-align: center;
		line-height: 48px;
		color: #fff;
		top: -24px;
		right: 15px;
	}
	
	.mbtj_box ul li .mbtj_list .mbtj_wz1 {
		padding: 20px 15px 0;
	}
	
	.mbtj_box ul li .mbtj_list .mbtj_wz1 span {
		font-size: 15px;
		color: #000;
		padding: 0 10px 0 0;
	}
	
	.mbtj_box ul li .mbtj_list .mbtj_wz1 i {
		font-style: normal;
		color: #fff;
		background: #aaa;
		padding: 2px 6px;
		line-height: 14px;
	}
	
	.mbtj_box ul li .mbtj_list .mbtj_wz2 {
		padding: 5px 15px 0;
	}
	
	.mbtj_box ul li .mbtj_list .mbtj_wz2 span {
		font-size: 13px;
		color: #999;
	}
	
	.mbtj_more a {
		display: block;
		width: 140px;
		height: 35px;
		border: 1px solid #ddd;
		font-size: 15px;
		color: #000;
		margin: 30px auto;
		text-align: center;
		line-height: 35px;
		border-radius: 5px;
	}
	
	.mb_bq {
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #aaa;
		color: #fff;
	}
	
	.tc_box {
		position: absolute;
		width: 1200px;
		margin-left: -500px;
		top: 120px;
		left: 50%;
		background: #fff;
		padding: 20px;
		box-shadow: 0px 0px 5px #aaa;
	}
	
	.tc_box img {
		width: 100%;
		height: auto;
	}
	
	.tc_box a {
		display: block;
		position: absolute;
		top: -15px;
		right: -15px;
		width: 30px;
		height: 30px;
	}
</style>