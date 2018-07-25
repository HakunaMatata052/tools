<template>
	<div>

		<Card>
			<Input v-model="$store.state.domain">
			<span slot="prepend">http://</span>
			<Button slot="append" icon="ios-search" @click="wjc"></Button>
			</Input>

		</Card>
		<Spin fix v-if="loading">
			<Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
			<div>Loading</div>
		</Spin>
		<div v-if="show" v-html="jieguo">

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				jieguo: '',
				score: '',
				show: 0,
				loading: 0
			}
		},
		methods: {
			wjc() {
				var that = this;
				that.$store.state.domain = that.$store.state.domain.replace('http://', '');
				that.$store.state.domain = that.$store.state.domain.replace(/(^\s*)|(\s*$)/g, "");
				that.loading = 1;
				that.$http.get(that.$store.state.api + 'TextHandler.ashx', {
					params: {
						action: 'ContrabandWords',
						web_url: that.$store.state.domain,
						token: that.$store.state.token
					}
				}).then(function(res) {
					var content = res.body.data;
					content = content.replace(/\r\n/g, "")
					content = content.replace(/\n/g, "");
					content = content.replace(/<!DOCTYPE.*?>/gi, '<div class="body">');
					content = content.replace(/<html.*?>/gi, '')
					content = content.replace('</html>', '</div>')
					content = content.replace(/<title>.*?<\/title>/gi, "");
					content = content.replace(/<meta.*?>/gi, "");
					content = content.replace(/title=".*?"/gi, "");
					content = content.replace(/alt=".*?"/gi, "");
					var ar = []
					var regex = res.body.reg;
					var result = content.match(regex);
					if(null == result || 0 == result.length) {
						that.$Message.info("（没有违禁词）");
						that.loading = 0;
						that.show = 1;
						return false;
					} else {
						for(var i = 0; i < result.length; i++) {
							var tmp = result[i];
							result[i] = result[i].replace(result[i], "[违禁词" + i + "]");
							content = content.replace(tmp, result[i]);
							ar[i] = tmp;
						}
					};
					content = content.replace("wjc", "");
					var regex2 = /\[违禁词(-?[0-9]\d*)\]/gi;
					var result2 = content.match(regex2);
					if(null == result2 || 0 == result2.length) {
						//alert("（没有违禁词）") ;
						return false;
					} else {
						that.$Message.info('共有' + result2.length + '个违禁词 ！');
						for(var i = 0; i < result2.length; ++i) {
							var ste = ar[i];
							//alert(ste)
							var tmp = result2[i];
							//alert(tmp)
							content = content.replace(result2[i], '<font style="background:#f00;color:#fff;font-size:40px;">' + ste + '</font>');
						}
					};
					that.jieguo = content;
					that.loading = 0;
					that.show = 1;
				}, function(res) {

				});
			}
		},
		mounted() {
			var that = this;
			if(that.$store.state.domain.length != 0) {
				that.wjc();
			}
		}
	}
</script>
<style>

</style>