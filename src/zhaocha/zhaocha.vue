<template>
	<div>

		<Card>
			<Row :gutter="16">
				<i-col :xs="24">
					<Input v-model="$store.state.domain" @on-focus="reset">
					<Select v-model="company" slot="prepend" style="width: 80px">
						<Option value="0">西安</Option>
						<Option value="1">成都</Option>
						<Option value="2">郑州</Option>
						<Option value="3">武汉</Option>
						<Option value="4">远景</Option>
					</Select>
					<span slot="prepend">http://</span>
					<Button slot="append" type="success" icon="ios-search" @click="zhaocha"></Button>
					</Input>
				</i-col>
				<i-col :xs="4" v-if="false">
					<Button type="success" @click="apply" long>生成提交格式</Button>
				</i-col>
			</Row>
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
						<h1><a :href="'http://'+$store.state.domain" target="_blank">{{jieguo.companyname.value}}</a></h1>
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
									<th width="10%"></th>
									<th width="10%"></th>
									<th></th>
									<th width="10%"></th>
								</tr>
								<tr>
									<td>网站标题：</td>
									<td :class="[{ cc: jieguo.title.lth>80 }]">
										<font color="#f00">{{jieguo.title.lth}}</font>个字符</td>
									<td>{{jieguo.title.value}}</td>
									<td>一般不超过80个字符</td>
								</tr>
								<tr>
									<td>网站描述：</td>
									<td :class="[{ cc: jieguo.description.lth>100 }]">
										<font color="#f00">{{jieguo.description.lth}}</font>个字符</td>
									<td>{{jieguo.description.value}}</td>
									<td>一般不超过100个字符</td>
								</tr>
								<tr>
									<td>网站关键词：</td>
									<td :class="[{ cc: jieguo.keywords.lth>200 }]">
										<font color="#f00">{{jieguo.keywords.lth}}</font> 个字符</td>
									<td v-html="jieguo.keywords.value"></td>
									<td>一般不超过200个字符</td>
								</tr>
							</tbody>
						</table>
					</Card>
				</i-col>
			</Row>
			<br>
			<Row :gutter="16">
				<i-col :xs="24" :sm="24" :md="24">
					<Card>
						<p slot="title">关键词密度：</p>
						<table>
							<tbody>
								<tr>
									<th width="10%">关键词</th>
									<th width="10%">出现次数</th>
									<th>2%≦密度≦8%</th>

									<th width="60%"></th>
								</tr>
								<tr v-for="item in jieguo.keywordsDensity">
									<td align="center">{{item.name}}</td>
									<td align="center">{{item.value}}</td>
									<td align="center">{{item.density}}</td>
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
						
						<h3 v-if="jieguo.nlink!=0">图片A链接中含有title属性的有：{{jieguo.aimgnum}}个</h3>
						<Alert type="error" v-if="jieguo.aimg!=undefined && jieguo.aimg.length!=0">
							<ul v-html="jieguo.aimg">
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

						<h3 v-if="jieguo.nalt!=0">图片中没有alt属性的有：{{jieguo.nalt}}个</h3>
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
									<td>favicon.ico：</td>
									<td><img :src="'http://'+$store.state.domain+'/templates/pc_wjdh/favicon.ico'"></td>
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
									<td></td>
									<td v-html="jieguo.rellist"></td>
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
						<iframe id="mainframe" name="mainframe" frameborder="0" :src="'http://'+domainURI($store.state.domain)+'/m'" width="425" height="667" style="margin: auto;"></iframe>
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
				loading: 0,
				end:0
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
			apply(){
				if(this.end!=1){
					this.$Message.info('请先找茬在生成');
					return false;
				}
				var midu = '';
				for(var i=0;i<this.jieguo.keywordsDensity.length;i++){
					midu+='关键词名称：'+this.jieguo.keywordsDensity[i].name+';密度：'+this.jieguo.keywordsDensity[i].density+'\r\n'
				}
				this.$store.state.zhaocha_apply.companyname = this.jieguo.companyname.value;
				this.$store.state.zhaocha_apply.test = this.$store.state.domain;
				this.$store.state.zhaocha_apply.score = this.score;
				this.$store.state.zhaocha_apply.midu = midu;
				this.$Message.info('正在生成。。。');
				this.$router.push({
						path: '/apply'
				})
				
			},
			reset() {
				this.$store.state.domain = "";
			},
			toPercent(point) {
				var str = Number(point * 100).toFixed(1);
				str += "%";
				return str;
			},
			zhaocha() {
				var that = this;
				that.$store.state.domain = that.domainURI(that.$store.state.domain);
				that.loading = 1;
				that.score = 100;
				let contentjson = {};
				contentjson.code = '0';
				that.$http.get(that.$store.state.api + 'TextHandler.ashx', {
					params: {
						action: 'quickspot',
						web_url: that.$store.state.domain,
						token: that.$store.state.token
					}
				}).then(function(res) {
					var content = res.body.data;
					content = content.replace(/\n/g, "");
					content = content.replace(/\r/g, "");
					content = content.replace(/\r\n/g, "");
					content = content.replace(/<!DOCTYPE.*?>/gi, '<div class="body">');
					content = content.replace(/<html.*?>/gi, '')
					content = content.replace('</html>', '</div>')
					parent = $(content);
					jcsx();
					achazhao();
					imgchazhao();
					h1();
					h2();
					h3();
					linknum();
					style();
					qdbq();
					qq();
					jq();
					banner();
					that.end = 1;
					console.log(that.jieguo);
					that.jieguo = contentjson;
					that.loading = 0;
					that.show = 1;
					//基础三项
					function jcsx() {
						var zz = '';
						parent.find('[alt]').each(function() {
							var aa = $(this).attr('alt');
							zz = zz + aa;
						});
						parent.find('[title]').each(function() {
							var bb = $(this).attr('title');
							zz = zz + bb;
						});
						var zhtml = parent.html();
						zhtml = zhtml.replace(/<script.*?<\/script>/gi, '')
						zhtml = $(zhtml).text();
						zhtml = zhtml.replace(/\s+/g, '');

						contentjson.title = {};
						contentjson.companyname = {};
						contentjson.description = {};
						contentjson.keywords = {};
						contentjson.keywordsDensity = [];
						var title = parent.find("title").text();
						contentjson.title.value = title;
						contentjson.title.lth = title.length;
						var titleArray = new Array;
						var titleArray = title.split("|"); //把标题拆分成数组
						contentjson.companyname.value = titleArray[titleArray.length - 1];
						contentjson.description.value = parent.find("meta[name='description']").attr("content");
						contentjson.description.lth = parent.find("meta[name='description']").attr("content").length;
						var keywords = parent.find("meta[name='keywords']").attr("content");

						var zuizhong = zhtml + zz + parent.find("title").text() + parent.find("meta[name='description']").attr("content") + parent.find("meta[name='keywords']").attr("content");
						var zongzishu = zuizhong.length;

						console.log(zuizhong);
						console.log(zongzishu);

						if(keywords.length != 0) {
							var delimiter = '';
							if(keywords.indexOf(',') >= 0) {
								delimiter = ','
							} else if(keywords.indexOf('|') >= 0) {
								delimiter = '|';
							}
							var keywordsArray = new Array;
							var keywordsArray = keywords.split(delimiter);
							var keywordslist = '';
							for(var i = 0; i < keywordsArray.length; i++) {
								keywordslist += '<a href="https://www.baidu.com/s?ie=UTF-8&wd=' + keywordsArray[i] + '" target="_blank" class="btn btn-link">' + keywordsArray[i] + '</a>&nbsp;&nbsp;&nbsp;&nbsp;';
								//$("#keywords").prepend();
								var ss = zuizhong;
								var nn = (ss.split(keywordsArray[i])).length - 1;
								contentjson.keywordsDensity[i] = {};
								contentjson.keywordsDensity[i].name = keywordsArray[i];
								contentjson.keywordsDensity[i].value = nn;
								contentjson.keywordsDensity[i].density = that.toPercent(keywordsArray[i].length * nn / zongzishu);
							};
							contentjson.keywords.value = keywordslist;
							contentjson.keywords.lth = keywords.length;
						};

					}
					//A标签
					function achazhao() {
						var str = "";
						var atitlenum1 = 0; //声明没有写title的A标签数量
						var atitlenum2 = 0; //声明有写title但为空的A标签数量
						var atitlenum3 = 0; //声明有写title但与内容不匹配的A标签数量
						var aimgnum = 0; 
						var etitle = 0; //声明有写title但可能错误的数量
						var regZh = /[\u4E00-\u9FA5\uF900-\uFA2D]/; //匹配中文字符
						var regMore = /more/; //匹配中文字符
						var anum = parent.find("a").length; //A标签的总数
						var titlenum = '';
						var etitlenumlist = ''
						var titlebppnumlist = '';
						var aimglist = '';
						for(var i = 0; i < anum; i++) {
							var atitle = parent.find("a").eq(i).attr("title");
							var abs = parent.find("a").eq(i).prop("outerHTML"); //获取含有元素本身的html
							var atitlehref = parent.find("a").eq(i).attr('href')
							if(parent.find("a").eq(i).find('img').length==0){
								if(atitle != undefined || atitle != "" || atitle != " ") {
									//alert(re.test(atitle));      //返回true
									if(regZh.test(atitle) == false && regMore.test(atitle) == false) {
										if(atitlehref == "/rss.xml") {
	
										} else if(atitlehref == "/sitemap.xml") {
	
										} else {
											etitle++;
											//$("#etitlenum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>');
											etitlenumlist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>'
											that.score = that.score - 2;
										}
									};
									var acontent = parent.find("a").eq(i).html();
									var atitlebt = acontent.indexOf(atitle);
									if(atitlebt < 0 && regZh.test(acontent) == true) {
										atitlenum3++;
										//$("#titlebppnum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>');
										titlebppnumlist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>'
									}
								}
								if(atitle == undefined) {
									atitlenum1++;
									//$("#titlenum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>');
									titlenum += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>';
									that.score = that.score - 1;
								}
								if(atitle == "" || atitle == " ") {
									atitlenum2++;
									//$("#titlenum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>');
									titlenum += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>';
									that.score = that.score - 1;
								}	
							}else{
								if(atitle != undefined) {
									aimgnum++;
									aimglist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>';
									that.score = that.score - 1;
								}
							}
						}
						contentjson.aimgnum = aimgnum;
						contentjson.aimg = aimglist;
						contentjson.etitlenum = etitlenumlist;
						contentjson.titlebppnum = titlebppnumlist;
						contentjson.titlenum = titlenum;
						//var atitlenum3 = anum - (atitlenum1 + atitlenum2); //完整的A标签的个数
						//$("#link").text(anum + "个");
						contentjson.link = anum
						if((atitlenum1 + atitlenum2) > 0) {
							//$("#nlink").html((atitlenum1 + atitlenum2) + '个&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#alist">点击查看</a>');
							contentjson.nlink = (atitlenum1 + atitlenum2);
						} else {
							//$("#nlink").html((atitlenum1 + atitlenum2) + '个');
							contentjson.nlink = (atitlenum1 + atitlenum2)
						};
						if(atitlenum3 > 0) {
							//$("#titlebpp").html(atitlenum3 + '个&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#titlebpplist">点击查看</a>');
							contentjson.titlebpp = atitlenum3;
						} else {
							//$("#titlebpp").html(atitlenum3 + '个');
							contentjson.titlebpp = atitlenum3;
						}
						//错误链接
						var errorlinknum = 0;
						var errorlinknumlist = '';
						for(var i = 0; i < anum; i++) {
							var ahref = parent.find("a").eq(i).attr("href");
							var abs = parent.find("a").eq(i).prop("outerHTML"); //获取含有元素本身的html
							if(ahref != undefined) {
								var urnum = ahref.indexOf("url");
							};
							if(ahref == undefined || ahref == "" || ahref == "") {
								errorlinknum++;
								//$("#errorlinknum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>');
								errorlinknumlist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>';

								that.score = that.score - 5;
							}
							if(urnum >= 0) {
								errorlinknum++;
								//$("#errorlinknum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>');
								errorlinknumlist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>';
								that.score = that.score - 5;
							};
							if(regZh.test(ahref) == true) {
								var searchnum = ahref.indexOf("search_");
								if(searchnum == -1) {
									errorlinknum++;
									//$("#errorlinknum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>');
									errorlinknumlist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + abs + '</xmp></pre></p>';
									that.score = that.score - 5;
								}
							}

						}
						contentjson.errorlinknum = errorlinknumlist;
						if(errorlinknum > 0) {
							//$("#errorlink").html(errorlinknum + '个&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#errorlinklist">点击查看</a>');
							contentjson.errorlink = errorlinknum;
						} else {
							//$("#errorlink").html('暂时未发现错误链接<br>（并不代表没有死链）');
							contentjson.errorlink = '暂时未发现错误链接（并不代表没有死链）';
						}
						//错误的title
						if(etitle > 0) {
							//$("#elink").html(etitle + '个&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#aelist">点击查看</a>')
							contentjson.elink = etitle;
						} else {
							//$("#elink").html(etitle + '个');
							contentjson.elink = etitle;
						}

					}
					//IMG标签ALT属性
					function imgchazhao() {
						var str = "";
						var imgaltnum = 0; //声明没有写alt的IMG标签数量
						var imgnum = parent.find("img").length; //IMG标签的总数
						var altnumlist = '';
						for(var i = 0; i < imgnum; i++) {
							var imgalt = parent.find("img").eq(i).attr("alt");
							//var imgtitle = parent.find("img").eq(i).attr("title");
							var imgbs = parent.find("img").eq(i).prop("outerHTML");
							if(imgalt == undefined  || imgalt == "" || imgalt == " ") {
								imgaltnum++;
								var naltnum = parent.find("img").eq(i).attr("src");
								altnumlist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + imgbs + '</xmp></pre></p>';
									that.score = that.score - 1;
							}
						}
						contentjson.altnum = altnumlist;
						$("#alt").text(imgnum + "张");
						if(imgaltnum > 0) {
							//$("#nalt").html(imgaltnum + '个&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#imglist">点击查看</a>');
							contentjson.nalt = imgaltnum;
						} else {
							//$("#nalt").html(imgaltnum + '个');
							contentjson.nalt = imgaltnum;
						}
					}
					//H1
					function h1() {
						var h1num = parent.find("h1").length;
						if(h1num < 1) {
							//$("#h1num").html('<div class="alert alert-danger" role="alert">没有找到H1标签</div>');
							contentjson.h1num = '<div class="alert alert-danger" role="alert">没有找到H1标签</div>';
							that.score = that.score - 5;
						} else if(h1num = 1) {
							//$("#h1num").html('<div class="alert alert-success" role="alert">页面中共有<span class="badge">' + h1num + "</span>个H1标签</div>");
							contentjson.h1num = '<div class="alert alert-success" role="alert">页面中共有<span class="badge">' + h1num + "</span>个H1标签</div>";
						} else if(h1num > 1) {
							//$("#h1num").html('<div class="alert alert-danger" role="alert">页面中共有<span class="badge">' + h1num + "</span>个H1标签，太多了！一个就够了！</div>");
							contentjson.h1num = '<div class="alert alert-danger" role="alert">页面中共有<span class="badge">' + h1num + "</span>个H1标签，太多了！一个就够了！</div>";
							that.score = that.score - 5;
						}
					}
					//H2
					function h2() {
						var h2num = parent.find("h2").length;
						if(h2num > 0) {
							//$("#h2num").html('<div class="alert alert-danger">页面中共有<span class="badge">' + h2num + '</span>个H2标签,<b class="text-danger">太多啦</b></div>');
							contentjson.h2num = '<div class="alert alert-danger">页面中共有<span class="badge">' + h2num + '</span>个H2标签,<b class="text-danger">太多啦</b></div>';
							that.score = that.score - 5;
						} else if(h2num == 0) {
							//$("#h2num").html('<div class="alert alert-danger">页面中共有<span class="badge">' + h2num + '</span>个H2标签,<b class="text-danger">太少了吧！</b></div>');
							contentjson.h2num = '<div class="alert alert-success">页面中没有H2标签</div>';
						}
					}
					//H3
					function h3() {
						var h3num = parent.find("h3").length;
						var nh3a = 0;
						var h3numlist = '';
						for(var i = 0; i < h3num; i++) {
							var h3 = parent.find("h3").eq(i);
							var h3a = h3.find("a").length;
							var h3fl = h3.html().indexOf("友情链接");
							if(h3a <= 0) {
								if(h3fl == -1) {
									var h3con = h3.text();
									nh3a++;
									//$("#h3num").prepend('<p class="list-group-item list-group-item-warning">' + h3con + '</p>');
									h3numlist += '<p class="list-group-item list-group-item-warning">' + h3con + '</p>'
								}
							}
						}
						contentjson.h3num = h3numlist;
						if(nh3a > 0) {
							//$("#h3").html('<div class="alert alert-warning" role="alert">页面中共有<span class="badge">' + nh3a + '</span>个栏目下没有链接&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#h3list"><b class="text-warning">点击查看</b></a></div>')
							contentjson.h3 = '<div class="alert alert-warning" role="alert">页面中共有<span class="badge">' + nh3a + '</span>个栏目下没有链接</div>';
						} else {
							//$("#h3").html('<div class="alert alert-success" role="alert">栏目下都有链接</div>');
							contentjson.h3 = '<div class="alert alert-success" role="alert">栏目下都有链接</div>';
						}

					}
					//CSS链接数
					function linknum() {
						var linknum = parent.find("link[rel='stylesheet']").length;
						if(linknum == 3) {
							//$("#linknum").html('<div class="alert alert-success" role="alert">共有CSS外部链接3个</div>');
							contentjson.linknum = '<div class="alert alert-success" role="alert">共有CSS外部链接3个</div>';
						} else {
							//$("#linknum").html('<div class="alert alert-warning" role="alert"><b class="text-warning">CSS外部链数量不符合规定！</b></div>');
							contentjson.linknum = '<div class="alert alert-warning" role="alert"><b class="text-warning">CSS外部链数量不符合规定！</b></div>';
							that.score = that.score - 5;
						}
					}
					//QQ
					function qq() {
						var aqqnum = parent.find("a[href*='qq.com']").length;
						if(aqqnum != 0) {
							var qqlist = ''
							for(var i = 0; i < aqqnum; i++) {
								//直接用正则来判断
								var aqq = parent.find("a[href*='qq.com']").eq(i).attr("href");
								var reg = /[1-9][0-9]{4,}/;
								var r = aqq.match(reg);
								if(r != null) {
									//$("#qq").prepend('<p class="list-group-item list-group-item-warning">' + r + '</p>');
									qqlist += '<p class="list-group-item list-group-item-warning">' + r + '</p>';
								}
								//先切分成数组在用正则来判断
								//var aqq = aqq.replace(/[^0-9]+/g, "|");
								// var qqArray = new Array;
								// var qqArray = aqq.split("|");
								// for (j = 0; j < qqArray.length; j++) {
								//   var reg = /[1-9][0-9]{4,}/;    
								//   var r = qqArray[j].match(reg);
								//   if (r!=null) {
								//       $("#qq").prepend('<p class="list-group-item list-group-item-warning">' + qqArray[j] + '</p>')
								//    }
								// }
							}
							contentjson.qq = qqlist;
						}
					}
					//页内样式
					function style() {
						var style = parent.find("style").length;
						if(style == 0) {
							//$("#style").html('<div class="alert alert-success" role="alert">未找到style页内样式</div>');
							contentjson.style = '<div class="alert alert-success" role="alert">未找到style页内样式</div>';
						} else {
							//$("#style").html('<div class="alert alert-warning" role="alert"><b class="text-danger">页面中含有style页内样式</b></div>');
							contentjson.style = '<div class="alert alert-warning" role="alert"><b class="text-danger">页面中含有style页内样式</b></div>';
							that.score = that.score - 5;
						}
					}
					//语义标签
					function qdbq() {
						var qdbqcon = '';
						var emnum = $('em').length;
						var strongnum = $('strong').length;
						if(emnum > 0) {
							qdbqcon += '<div class="alert alert-danger">页面还有&lt;em&gt;标签</div>'
						} else if(strongnum > 0) {
							qdbqcon += '<div class="alert alert-danger">页面还有&lt;strong&gt;标签</div>'
						} else {
							qdbqcon = '<div class="alert alert-success">页面还有不含有强调标签</div>'
						}
						contentjson.qdbq = qdbqcon;
					}
					//jQuery
					function jq() {
						var jq = parent.find("script");
						var jqnum = parent.find("script").length;
						var n = 0;
						var jqnumlist = '';
						for(var i = 0; i < jqnum; i++) {
							var jqsrc = jq.eq(i).attr("src");
							if(jqsrc != undefined) {
								var jqbh = jqsrc.indexOf("jquery");
								if(jqbh >= 0) {
									n++;
									if(n >= 2) {
										//$("#jqnum").prepend('<p class="list-group-item list-group-item-warning">' + jqsrc + '</p>'); //取得含有jQuery的js列表
										jqnumlist += '<p class="list-group-item list-group-item-warning">' + jqsrc + '</p>'
									}
								}
							}
						}
						contentjson.jqnum = jqnumlist;
						var n = n - 1;
						if(n > 0) {
							//$("#jq").html(n + '个&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#jqlist">点击查看</a>(检测不一定正确，可能会误判jQuery插件)');
							contentjson.jq = n + '个&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#jqlist">点击查看</a>(检测不一定正确，可能会误判jQuery插件)';
						} else {
							//$("#jq").html('0个(检测不一定正确，可能会误判jQuery插件)');
							contentjson.jq = '0个(检测不一定正确，可能会误判jQuery插件)';
						}
					}
					//banner
					function banner() {
						var banner = parent.find(".banner li a");
						var bannernum = banner.length;
						var regBanner = /sxbaiduv|btoe/;
						var bannertitlelist = '';
						if(bannernum == 0) {
							//$("#banner").html('<div class="alert alert-warning" role="alert">太笨了！没找到banner- -!</div>');
							contentjson.banner = '<div class="alert alert-warning" role="alert">太笨了！没找到banner- -!</div>';
							//$("#bannerhref").html('<div class="alert alert-warning" role="alert">banner都没找到，怎么可能找到链接- -!</div>');
							contentjson.bannerhref = '<div class="alert alert-warning" role="alert">banner都没找到，怎么可能找到链接- -!</div>';
						}
						for(var i = 0; i < bannernum; i++) {
							var bannertitle = banner.eq(i).attr("title");
							if(bannertitle != undefined || bannertitle != "") {
								//$("#bannertitle").prepend('<p class="list-group-item list-group-item-warning">' + bannertitle + '</p>');
								bannertitlelist += '<p class="list-group-item list-group-item-warning">' + bannertitle + '</p>'
							} else {
								//$("#bannertitle").prepend('<p class="list-group-item list-group-item-warning">第' + i + '张banner没有title属性或title为空</p>');
								bannertitlelist += '<p class="list-group-item list-group-item-warning">第' + i + '张banner没有title属性或title为空</p>';
							}
						}
						contentjson.bannertitle = bannertitlelist;
						var bannerhreflist = '';
						for(var i = 0; i < bannernum; i++) {
							var bannerhref = banner.eq(i).attr("href");
							if(bannerhref != undefined || bannerhref != "") {
								if(regBanner.test(bannerhref) == true) {
									//$("#bannerhref").prepend('<p class="list-group-item list-group-item-danger">' + bannerhref + '</p>');
									bannerhreflist += '<p class="list-group-item list-group-item-danger">' + bannerhref + '</p>';
									that.score = that.score - 1;
								} else {
									//$("#bannerhref").prepend('<p class="list-group-item list-group-item-warning">' + bannerhref + '</p>');
									bannerhreflist += '<p class="list-group-item list-group-item-warning">' + bannerhref + '</p>';
								}
							} else {
								//$("#bannerhref").prepend('<p class="list-group-item list-group-item-warning">第' + i + '张banner没有链接或链接为空</p>');
								bannerhreflist += '<p class="list-group-item list-group-item-warning">第' + i + '张banner没有链接或链接为空</p>';
							}

						};
						contentjson.bannerhref = bannerhreflist

					}

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
	
	.cc {
		background: #DAD55E;
	}
</style>