<template>
	<Layout>
		<Sider hide-trigger :style="{background: '#fff'}">
			<Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
				<Submenu name="1">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						工具
					</template>
					<MenuItem name="1-1">
					<router-link to="/tools">工具合集</router-link>
					</MenuItem>
					<MenuItem name="1-2">
					<router-link to="/network">网址大全</router-link>
					</MenuItem>
					<MenuItem name="1-3">
					<router-link to="/zhaocha">找茬工具</router-link>
					</MenuItem>
					<MenuItem name="1-3">
					<router-link to="/viewzhaocha">找茬工具(可视化)</router-link>
					</MenuItem>
					<MenuItem name="1-3">
					<router-link to="/wjc">违禁词</router-link>
					</MenuItem>
					<MenuItem name="1-3">
					<router-link to="/email">发邮件</router-link>
					</MenuItem>
					<MenuItem name="1-3">
					<router-link to="/map">百度地图生成器</router-link>
					</MenuItem>
				</Submenu>
				<Submenu name="2">
					<template slot="title">
						<Icon type="ios-keypad"></Icon>
						素材
					</template>					
					<MenuItem name="2-1">
						<router-link to="/template">
							模板
						</router-link>
					</MenuItem>
					<MenuItem name="2-1">banner</MenuItem>
					<MenuItem name="2-2">滚动</MenuItem>
				</Submenu>
				<Submenu name="3">
					<template slot="title">
						<Icon type="ios-analytics"></Icon>
						常用话术
					</template>
					<MenuItem name="3-1">
					<router-link to="/colleague">与同事沟通</router-link>
					</MenuItem>
					<MenuItem name="3-2">
					<router-link to="/customer">与客户沟通</router-link>
					</MenuItem>
				</Submenu>
			</Menu>
		</Sider>
		<Layout :style="{padding: '0 24px 24px'}">
			<!--<Breadcrumb :style="{margin: '24px 0'}">
				<BreadcrumbItem>Home</BreadcrumbItem>
				<BreadcrumbItem>Components</BreadcrumbItem>
				<BreadcrumbItem>Layout</BreadcrumbItem>
			</Breadcrumb>-->
			<Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
				<router-view :userdata="userdata"></router-view>
			</Content>
		</Layout>
	</Layout>
</template>

<script>
	import Vue from 'vue';
	import router from '../router'
	export default {
		router: router,
		data() {
			return {

			}
		},
		props: ['userdata']
	}
</script>

<style>
	.ivu-menu-item a {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>