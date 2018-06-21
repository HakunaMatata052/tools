<template>
	<div>

		<Card>
			<Input v-model="domain">
			<span slot="prepend">http://</span>
			<Button slot="append" icon="ios-search" @click="zhaocha"></Button>
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
	import $ from 'jQuery'
	export default {
		data() {
			return {
				domain: '',
				jieguo: '',
				score: '',
				show: 0,
				loading: 0
			}
		},
		methods: {
			zhaocha() {
				var that = this;
				that.loading = 1;
				that.score = 100;
				let contentjson = {};
				contentjson.code = '0';
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api.php?domain=' + that.domain + '&company=' + that.company).then(function(res) {
					var content = res.body.data;
					content = content.replace(/\r\n/g, "")
					content = content.replace(/\n/g, "");
					content = content.replace(/<!DOCTYPE.*?>/gi, '<div class="body">');
					content = content.replace(/<html.*?>/gi, '')
					content = content.replace('</html>', '</div>')
					var ar = []
					var regex = /免费|首批|引领|免费.*?热线|精湛|尖端|前沿|24小时|No\.|认证|唯一|绝无仅有|最后一波|精致|完善|确保|保证|诚信单位|先进|特大|专家|优质|独创|[0-9]*年|[0-9]*多年|ISO900[0-9]|开创|终身|首屈一指|龙头|首创|顶尖|领航|完美|航母|星级|领军|知名|最|第一|一线|全网|独一无二|一流|一天|仅此一次|国家|全球|宇宙|世界|顶级|高级|极品|极佳|绝佳|绝对|绝无|绝不|仅有|终极|极致|首个|首选|独家|首发|冠军|免检|驰名|国际|大牌|金牌|名牌|王牌|领袖|领先|领导|缔造者|创领品牌|巨星|著名|掌门人|至尊|巅峰|奢侈|优秀|资深|领袖|之王|王者|冠军|史无前例|前无古人|永久|万能|祖传|特效|无敌|纯天然|100%|高档|正品|真皮|超赚|精准|老字号|特供|专供|专家推荐|免抽检|点击领奖|恭喜获奖|全民免单|点击有惊喜|点击获取|点击转身|点击试穿|点击翻转|领取奖品|秒杀|抢爆|再不抢就没了|不会更便宜了|没有他就|错过就没机会了|万人疯抢|全民疯抢|抢购|抢疯了|随时结束|随时涨价|马上降价|就选/gi;
					var result = content.match(regex);
					if(null == result || 0 == result.length) {
						that.$Message.info("（没有违禁词）");
						that.loading = 0;
						that.show = 1;
						return false;
					} else {
						//alert('共有' + result.length + '个违禁词！');
						for(var i = 0; i < result.length; i++) {
							var tmp = result[i];
							result[i] = result[i].replace(result[i], "[违禁词" + i + "]");
							//result[i] = result[i].replace(result[i], '<font style="background:#f00;color:#fff;font-size:40px;">'+i+'</font>');
							content = content.replace(tmp, result[i]);
							ar[i] = tmp;
							//$(window.parent.document).find("#list").append('<li>'+tmp+'</li>');
						}
					};
					content = content.replace("wjc", "");
					//$('html').html(content);
					//var str  = $(window.parent.document).find("#list li").length;
					var regex2 = /\[违禁词(-?[0-9]\d*)\]/gi;
					var result2 = content.match(regex2);
					if(null == result2 || 0 == result2.length) {
						//alert("（没有违禁词）") ;
						return false;
					} else {
						that.$Message.info('共有' + result2.length + '个违禁词a ！');
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
		}
	}
</script>
<style>

</style>