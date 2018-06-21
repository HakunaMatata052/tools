<template>

	<Card>
		<p slot="title">百度翻译</p>
		<p>
			<Input v-model="hanyu" type="textarea" :rows="4" placeholder="输入需要翻译的单词或者句子..."></Input>
		</p>
		<br>
		<p>
			<Button type="success" long @click="fayi">翻译成英文</Button>
		</p>
	</Card>
</template>

<script>
	import md5 from 'js-md5';
	export default {
		data() {
			return {
				author: "菜单一",
				hanyu: '',
				jieguo: ''
			}
		},
		methods: {
			fayi() {
				var that = this;
				var appid = '20180612000175344';
				var key = 'lCcuDdYEoleJajRO3pMz';
				var salt = (new Date).getTime();
				var query = that.hanyu;
				var from = 'zh';
				var to = 'en';
				var str1 = appid + query + salt + key;
				var sign = md5(str1);
				that.$http.jsonp('http://api.fanyi.baidu.com/api/trans/vip/translate', {
					params: {
						q: query,
						appid: appid,
						salt: salt,
						from: from,
						to: to,
						sign: sign
					}
				}).then(function(res) {
					that.hanyu = res.body.trans_result[0].dst
				}, function(res) {

				});
			}
		}
	}
</script>