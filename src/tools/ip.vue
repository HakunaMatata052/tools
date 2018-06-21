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
			<Input v-model="ip" id="foo">
			<Button slot="append" class="btn" data-clipboard-target="#foo">复制</Button>
			</Input>
		</p>
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
				if(that.domain == 0) {
					that.$Message.info('没有内容！');
					return false
				}
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/ip.php?domain=' + that.domain).then(function(res) {
					that.ip = res.body.ip
				}, function(res) {

				});
			}
		},
		mounted() {
			const clipboard = new Clipboard('.btn');
		}
	}
</script>