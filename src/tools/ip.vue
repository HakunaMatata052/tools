<template>

	<Card>
		<p slot="title">获取域名ip</p>
		<p>
			<Input v-model="domain">
			<span slot="prepend">http://</span>
			</Input>
		</p>
		<br>
		<p>
			<Button type="success" long @click="getip">获取ip</Button>
		</p>
		<br>
		<p>
			<Input v-model="ip">
			<Button slot="append" class="btn" data-clipboard-target="#foo">复制</Button>
			</Input>

		</p>

		<textarea :value="ip+'\n'+domain+'\nFTP'" id="foo" style="position: absolute;opacity: 0;"></textarea>
	</Card>
</template>

<script>
	import Clipboard from 'clipboard';
	export default {
		data() {
			return {
				domain: '',
				ip: ''
			}
		},
		methods: {
			getip() {
				var that = this;
				that.domain = that.domainURI(that.domain);
				if(that.domain == 0) {
					that.$Message.info('没有内容！');
					return false
				}
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/ip.php?domain=' + that.domain).then(function(res) {
					that.ip = res.body.ip
				}, function(res) {

				});
			},
			domainURI(str) {
				str = str.replace('http://','');
				str = str.replace('https://','');
				var durl = /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/gi;
				var domain = str.match(durl);
				if(domain==null){
					return str;
				}else{					
					return domain[0];
				}
			}
		},
		mounted() {
			const clipboard = new Clipboard('.btn');
		}
	}
</script>