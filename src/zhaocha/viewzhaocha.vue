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
		<div v-if="show">
			<br>
			<Row :gutter="16">
				<i-col :xs="24" :sm="18" :md="18">
					<Card>
						公司名称：
						<h1><a :href="'http://'+$store.state.domain" target="_blank">{{jieguo.companyname}}</a></h1>
						<br> (如果公司名称不对或未显示，请重新查询！)
					</Card>
				</i-col>
				<i-col :xs="24 " :sm="6 " :md="6 ">
					<Card>
						<h1>网站得分：{{score}}</h1>
					</Card>
				</i-col>
			</Row>
			<br>
			<Row :gutter="16">
				<i-col :xs="24" :sm="24" :md="24">
					<Card>
						<p slot="title">基础三项：</p>
						<table>
							<tbody>
								<tr>
									<th width="20%"></th>
									<th></th>
								</tr>
								<tr>
									<td>网站标题：</td>
									<td>{{jieguo.title}}</td>
								</tr>
								<tr>
									<td>网站描述：</td>
									<td>{{jieguo.description}}</td>
								</tr>
								<tr>
									<td>网站关键词：</td>
									<td v-html="jieguo.keywords"></td>
								</tr>
							</tbody>
						</table>
					</Card>
				</i-col>
			</Row>
			<br>
			<Row :gutter="16">
				<i-col :xs="24" :sm="24" :md="12">
					<Card>
						<p slot="title">
							<Icon type="ios-film-outline"></Icon>
							链接与图片
						</p>
						<h3 v-if="jieguo.nlink!=0">链接中没有title属性的有：{{jieguo.nlink}}个</h3>
						<Alert type="error" v-if="jieguo.titlenum!=undefined && jieguo.titlenum.length!=0">
							<ul v-html="jieguo.titlenum">
							</ul>
						</Alert>

						<h3 v-if="jieguo.elink!=0">链接中title属性可能错误的有：{{jieguo.elink}}个</h3>
						<Alert type="error" v-if="jieguo.etitlenum!=undefined && jieguo.etitlenum.length!=0">
							<ul v-html="jieguo.etitlenum">
							</ul>
						</Alert>

						<h3 v-if="jieguo.titlebpp!=0">链接中title属性与内容不匹配的有(仅注意即可不一定需要修改)：{{jieguo.titlebpp}}个</h3>
						<Alert type="error" v-if="jieguo.titlebppnum!=undefined && jieguo.titlebppnum.length!=0">
							<ul v-html="jieguo.titlebppnum">
							</ul>
						</Alert>

						<h3 v-if="jieguo.nalt!=0">图片中没有alt和title属性的有：{{jieguo.nalt}}个</h3>
						<Alert type="error" v-if="jieguo.altnum!=undefined && jieguo.altnum.length!=0">
							<ul v-html="jieguo.altnum">
							</ul>
						</Alert>

						<h3 v-if="jieguo.errorlink!=0">网页中有错误链接：{{jieguo.errorlink}}</h3>
						<Alert type="error" v-if="jieguo.errorlinknum!=undefined && jieguo.errorlinknum.length!=0">
							<ul v-html="jieguo.errorlinknum">
							</ul>
						</Alert>
					</Card>
				</i-col>
				<i-col :xs="24 " :sm="24" :md="12 ">
					<Card>
						<p slot="title ">
							<Icon type="ios-film-outline "></Icon>
							杂项分析
						</p>
						<table>
							<tbody>
								<tr>
									<th width="30%"></th>
									<th></th>
								</tr>
								<tr>
									<td>技术支持是否正确：</td>
									<td v-html="jieguo.technical"></td>
								</tr>
								<tr>
									<td>H1标签数量：</td>
									<td v-html="jieguo.h1num "></td>
								</tr>
								<tr>
									<td>H2标签数量：</td>
									<td v-html="jieguo.h2num "></td>
								</tr>
								<tr>
									<td>H3标签:</td>
									<td v-html="jieguo.h3 "></td>
								</tr>
								<tr v-if="jieguo.h3num!=undefined && jieguo.h3num.length!=0">
									<td></td>
									<td v-html="jieguo.h3num"></td>
								</tr>
								<tr>
									<td>强调标签:</td>
									<td v-html="jieguo.qdbq "></td>
								</tr>
								<tr>
									<td>网站立即咨询的qq号为：</td>
									<td v-html="jieguo.qq "></td>
								</tr>
								<tr>
									<td>网站出现程序代码：</td>
									<td v-html="jieguo.program "></td>
								</tr>

								<tr>
									<td>rel="external nofollow "是否正确：</td>
									<td v-html="jieguo.rel "></td>
								</tr>

								<tr>
									<td></td>
									<td v-html="jieguo.rellist"></td>
								</tr>
								<tr v-if="0">
									<td>企业商铺链接是否正确：</td>
									<td v-html="jieguo.qysp"></td>
								</tr>

								<tr>
									<td>三张banner的title为：</td>
									<td v-html="jieguo.bannertitle"></td>
								</tr>
								<tr>
									<td>三张banner的链接为： </td>
									<td v-html="jieguo.bannerhref"></td>
								</tr>

							</tbody>
						</table>
					</Card>
					<Card>
						<p slot="title ">
							<Icon type="ios-film-outline "></Icon>
							手机站
						</p>
						<iframe id="mainframe" name="mainframe" frameborder="0" :src="'http://'+that.domainURI(that.$store.state.domain)+'/m'" width="425" height="667" style="margin: auto;"></iframe>
					</Card>
				</i-col>
			</Row>
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
		methods: {
			reset() {
				this.$store.state.domain = "";
			},
			zhaocha() {
				var that = this;
				that.$store.state.domain = that.domainURI(that.$store.state.domain);
				that.loading = 1;
				that.score = 100;
				let contentjson = {};
				contentjson.code = '0';
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api.php?action=view&domain=' + that.$store.state.domain + '&company=' + that.company).then(function(res) {
				var content = res.body.data;
				var win = window.open('', '地图', 'width=800,height=500');
				win.document.open();
				$(win).find('.logo').remove();
				win.document.write(content);
				win.document.close();
				
					
				}, function(res) {

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