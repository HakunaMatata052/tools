<template>
	<div>

		<Card>
			<Input v-model="$store.state.domain" @on-focus="reset">
			<Select v-model="company" slot="prepend" style="width: 80px">
				<Option value="0">西安</Option>
				<Option value="1">成都</Option>
				<Option value="2">郑州</Option>
				<Option value="3">武汉</Option>
				<Option value="4">远景</Option>
			</Select>
			<span slot="prepend">http://</span>
			<Button slot="append" icon="ios-search" @click="zhaocha"></Button>
			</Input>

		</Card>
		<Spin fix v-if="loading">
			<Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
			<div>Loading</div>
		</Spin>
		<div>
			<iframe id="frame" name="frame" frameborder="0" style="width:100%;"></iframe>
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery'
	export default {
		data() {
			return {
				company: '0',
				jieguo: '',
				score: '',
				show: 0,
				loading: 0
			}
		},
		directives: {
			focus: {
				// 指令的定义
				inserted: function(el) {
					el.focus()
				}
			}
		},
		mounted() {
			window['ishow'] = () => {
				this.ishow();
			}
			setheight();
			var height = 0;
			function setheight(){
				height = $(window).height()-160;
				$('#frame').css({
					"height":height
				});
				this.ishow()
			}
			
			$(window).resize(function(){
				setheight();
			})
		},
		methods: {
			reset() {
				this.$store.state.domain = "";
			},
			zhaocha() {
				var that = this;
				that.$store.state.domain = that.domainURI(that.$store.state.domain);
				that.loading = 1;
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api.php?action=view&domain=' + that.$store.state.domain + '&company=' + that.company).then(function(res) {
					var content = res.body.data;
					var newcon = $('<html/>').html(content);
					$(newcon).append('<script>parent.ishow()<\/script>');
					document.getElementById('frame').contentWindow.document.write(newcon.html());
					that.loading = 0;
				}, function(res) {

				});
			},
			ishow(){
				var parent = $(window.frames["frame"].document);
				parent.find('a').each(function(){
					var width = $(this).width();
					var height = $(this).height();
					var top = $(this).offset().top;
					var left = $(this).offset().left;
					parent.find('body').append('<div style="position: absolute;left:'+left+';top:'+top+';width:'+width+';height:'+height+';border: 2px dashed red;"></div>')
				});
				
				parent.find('h1').each(function(){
					var width = $(this).width();
					var height = $(this).height();
					var top = $(this).offset().top;
					var left = $(this).offset().left;
					parent.find('body').append('<div style="position: absolute;left:'+left+';top:'+top+';width:'+width+';height:'+height+';background:rgba(0,255,0,.6)"></div>')
				});
				
				parent.find('h2').each(function(){
					var width = $(this).width();
					var height = $(this).height();
					var top = $(this).offset().top;
					var left = $(this).offset().left;
					parent.find('body').append('<div style="position: absolute;left:'+left+';top:'+top+';width:'+width+';height:'+height+';border: 2px dashed #8bda00;"></div>')
				});
				
				parent.find('h3').each(function(){
					var width = $(this).width();
					var height = $(this).height();
					var top = $(this).offset().top;
					var left = $(this).offset().left;
					parent.find('body').append('<div style="position: absolute;left:'+left+';top:'+top+';width:'+width+';height:'+height+';background:rgba(255,0,0,.6)"></div>')
				});
				
			},
			domainURI(str) {
				str = str.replace('http://', '');
				str = str.replace('https://', '');
				var durl = /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/gi;
				var domain = str.match(durl);
				if(domain == null) {
					return str;
				} else {
					return domain[0];
				}
			}
		}
	}
</script>
<style>
	h1 {
		display: inline;
	}
	
	pre {
		overflow: auto;
	}
	
	.demo-spin-icon-load {
		animation: ani-demo-spin 1s linear infinite;
	}
	
	table {
		width: 100%;
	}
	
	table td p {
		color: #8a6d3b;
		background-color: #fcf8e3;
		border-color: #faebcc;
		padding: 10px 20px;
		border-radius: 5px;
	}
	
	.alert-danger {
		color: #a94442;
		border: 1px solid #fbd9d0;
		background-color: #fdece8;
		padding: 10px 20px;
		border-radius: 5px;
	}
	
	.alert-success {
		color: #3c763d;
		background-color: #dff0d8;
		border-color: #d6e9c6;
		padding: 10px 20px;
		border-radius: 5px;
	}
	
	.alert-warning {
		color: #8a6d3b;
		background-color: #fcf8e3;
		border-color: #faebcc;
		padding: 10px 20px;
		border-radius: 5px;
	}
	
	@keyframes ani-demo-spin {
		from {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	.demo-spin-col {
		height: 100px;
		position: relative;
		border: 1px solid #eee;
	}
</style>