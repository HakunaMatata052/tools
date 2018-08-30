<template>

	<Card>
		<p slot="title">素材下载</p>
		<p>
			<Input v-model="domain">
			</Input>
		</p>
		<br>
		<p>
			<Button type="success" long @click="getip">下载素材</Button>
		</p>
		<br>
		<p>
			格式如下：千图网：http://www.58pic.com/newpic/28475707.html <br> 摄图网：http://699pic.com/tupian-500640650.html

		</p>

	</Card>
</template>

<script>
	import Clipboard from 'clipboard';
	export default {
		data() {
			return {
				domain: ''
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
				that.$http.get(that.$store.state.api + 'CommonHandler.ashx', {
					params: {
						action: 'downimg',
						web_url: that.domain,
						token: that.$store.state.token
					}
				}).then(function(res) {
					that.download(res.data.data)
				}, function(res) {
					that.$Message.info(res.data.msg);
				});
			},
			domainURI(str) {
				str = str.replace('http://', '');
				return 'http://' + str
			},
			download(url) {
				try {
					var elemIF = document.createElement("iframe");
					elemIF.src = url;
					elemIF.style.display = "none";
					document.body.appendChild(elemIF);
				} catch(e) {

				}
			}
		},
		mounted() {
			const clipboard = new Clipboard('.btn');
		}
	}
</script>