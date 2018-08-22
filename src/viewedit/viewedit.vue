<template>
	<div>
		<Row :gutter="16">
			<i-col :xs="12" :sm="12" :md="12">
				<button @click="add1">添加1</button>
				<button @click="getcode">获取代码</button>
			</i-col>

			<i-col :xs="12" :sm="12" :md="12">
				<div id="view"></div>
			</i-col>
		</Row>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			add1() {
				var that = this;

				that.$http.get('api').then(function(res) {
					var style = document.createElement('style');
					style.innerHTML = res.data.data.css;
					document.getElementById("iframe").contentWindow.document.body.appendChild(style);

					var code = document.createElement("div");
					code.innerHTML = res.data.data.body;
					document.getElementById("iframe").contentWindow.document.body.appendChild(code);
					
					
					var js = document.createElement('script');
					js.innerHTML = res.data.data.js;
					document.getElementById("iframe").contentWindow.document.body.appendChild(js);

				}, function(res) {});
			},
			getcode() {
				var content = document.getElementById("iframe").contentWindow.document.body.innerHTML;
				console.log(content)
			}
		},
		mounted() {
			var that = this;
			var ifr = document.createElement("iframe");
			ifr.id = "iframe";
			ifr.style.setProperty('width', '660px', 'important');
			ifr.style.setProperty('height', '1500px', 'important');
			document.getElementById('view').appendChild(ifr);
			var ifrdoc = ifr.contentWindow.document;
			var s = '<link href="https://cdn.bootcss.com/Swiper/4.3.0/css/swiper.min.css" rel="stylesheet"><link rel="stylesheet" href="http://test.btoe.cn/lb/newphone/css/style.css"><script src="https://cdn.bootcss.com/Swiper/4.3.0/js/swiper.min.js"><\/script>'; //进入可编辑模式前存好
			ifrdoc.designMode = "on"; //文档进入可编辑模式
			ifrdoc.open(); //打开流
			ifrdoc.write(s);
			ifrdoc.close(); //关闭流
			ifrdoc.designMode = "off"; //文档进入非可编辑模式

		}
	}
</script>

<style>

</style>