<template>
	<div>

		<Card>
			<Input v-model="$store.state.domain">
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
							杂项分析
						</p>
						<iframe id="mainframe" name="mainframe" frameborder="0" :src="'http://'+$store.state.domain+'/m'" width="425" height="667" style="margin: auto;"></iframe>
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
		methods: {
			zhaocha() {
				var that = this;
				that.$store.state.domain = that.$store.state.domain.replace('http://','');
				that.$store.state.domain = that.$store.state.domain.replace(/(^\s*)|(\s*$)/g, "");
				that.loading = 1;
				that.score = 100;
				let contentjson = {};
				contentjson.code = '0';
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api.php?domain=' + that.$store.state.domain + '&company=' + that.company).then(function(res) {
					var content = res.body.data;
					content = content.replace(/\r\n/g, "")
					content = content.replace(/\n/g, "");
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
					technical(that.company);
					rel(that.company);
					program();
					console.log(that.jieguo);
					that.jieguo = contentjson;
					that.loading = 0;
					that.show = 1;
					//基础三项
					function jcsx() {
						var title = parent.find("title").text();
						contentjson.title = title;
						var titleArray = new Array;
						var titleArray = title.split("|"); //把标题拆分成数组
						contentjson.companyname = titleArray[titleArray.length - 1];
						contentjson.description = parent.find("meta[name='description']").attr("content");
						var keywords = parent.find("meta[name='keywords']").attr("content");
						if(keywords.length != 0) {
							var keywordsArray = new Array;
							var keywordsArray = keywords.split(",");
							var keywordslist = '';
							for(var i = 0; i < keywordsArray.length; i++) {
								keywordslist += '<a href="https://www.baidu.com/s?ie=UTF-8&wd=' + keywordsArray[i] + '" target="_blank" class="btn btn-link">' + keywordsArray[i] + '</a>&nbsp;&nbsp;&nbsp;&nbsp;';
								//$("#keywords").prepend()
							};
							contentjson.keywords = keywordslist;
						};

					}
					//A标签
					function achazhao() {
						var str = "";
						var atitlenum1 = 0; //声明没有写title的A标签数量
						var atitlenum2 = 0; //声明有写title但为空的A标签数量
						var atitlenum3 = 0; //声明有写title但与内容不匹配的A标签数量
						var etitle = 0; //声明有写title但可能错误的数量
						var regZh = /[\u4E00-\u9FA5\uF900-\uFA2D]/; //匹配中文字符
						var regMore = /more/; //匹配中文字符
						var anum = parent.find("a").length; //A标签的总数
						var titlenum = '';
						var etitlenumlist = ''
						var titlebppnumlist = '';
						for(var i = 0; i < anum; i++) {
							var atitle = parent.find("a").eq(i).attr("title");
							var abs = parent.find("a").eq(i).prop("outerHTML"); //获取含有元素本身的html
							var atitlehref = parent.find("a").eq(i).attr('href')
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
						}
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
							var imgtitle = parent.find("img").eq(i).attr("title");
							var imgbs = parent.find("img").eq(i).prop("outerHTML");
							if(imgalt == undefined || imgtitle == undefined || imgalt == "" || imgalt == " " || imgtitle == "" || imgtitle == " ") {
								imgaltnum++;
								var naltnum = parent.find("img").eq(i).attr("data-src");
								if(naltnum == undefined || naltnum.length == 0) {
									//$("#altnum").prepend('<p class="list-group-item list-group-item-danger"><pre><xmp>' + imgbs + '</xmp></pre></p>');
									altnumlist += '<p class="list-group-item list-group-item-danger"><pre><xmp>' + imgbs + '</xmp></pre></p>';
									that.score = that.score - 1;
								} else {
									//$("#altnum").prepend('<p class="list-group-item list-group-item-danger">' + naltnum + '</p>');
									altnumlist += '<p class="list-group-item list-group-item-danger">' + naltnum + '</p>';
									that.score = that.score - 1;
								}
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
					//技术支持
					function technical(n) {
						if(n == 2) {
							var jszc = parent.find("a:contains('无限动力')").attr('href');
						} else if(n == 4) {
							var jszc = parent.find("a:contains('远景电商')").attr('href');
						} else {
							var jszc = parent.find("a:contains('动力无限')").attr('href');
						}
						if(jszc == "" || jszc == " " || jszc == undefined) {
							//$("#technical").html('<div class="alert alert-danger"><b class="text-danger">技术支持名称是错误的！</b></div>'); //错误提示
							contentjson.technical = '<div class="alert alert-danger"><b class="text-danger">技术支持名称是错误的！</b></div>';
						} else {
							if(n == 0) {
								if(jszc == "http://www.btoe.cn" || jszc == "http://www.btoe.cn/") //西安网址
									var clude = 1;
							}
							if(n == 1) {
								if(jszc == "http://www.cddlwx.com" || jszc == "http://www.cddlwx.com/") //成都网址
									var clude = 1;
							}
							if(n == 2) {
								if(jszc == "http://www.hnwxdl.com" || jszc == "http://www.hnwxdl.com/") //郑州网址
									var clude = 1;
							}
							if(n == 3) {
								if(jszc == "http://www.whdlwx.com" || jszc == "http://www.whdlwx.com/") //武汉网址
									var clude = 1;
							}
							if(n == 4) {
								if(jszc == "http://www.yjdzsw.com" || jszc == "http://www.yjdzsw.com/") //武汉网址
									var clude = 1;
							}
							if(clude == 1) {
								//$("#technical").html('<div class="alert alert-success" role="alert">技术支持链接是正确的！' + '<b class="text-success">' + jszc + "<b></div>"); //正确提示
								contentjson.technical = '<div class="alert alert-success" role="alert">技术支持链接是正确的！' + '<b class="text-success">' + jszc + "<b></div>";
							} else {
								//$("#technical").html('<div class="alert alert-danger">' + "技术支持链接是错误的！" + '<b class="text-danger">' + jszc + "</b></div>"); //错误提示
								contentjson.technical = '<div class="alert alert-danger">' + "技术支持链接是错误的！" + '<b class="text-danger">' + jszc + "</b></div>";
								that.score = that.score - 20;
							}
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
						if(h2num == 2 || h2num == 3) {
							//$("#h2num").html('<div class="alert alert-success" role="alert">页面中共有<span class="badge">' + h2num + "</span>个H2标签</div>");
							contentjson.h2num = '<div class="alert alert-success" role="alert">页面中共有<span class="badge">' + h2num + "</span>个H2标签</div>"
						} else if(h2num > 3) {
							//$("#h2num").html('<div class="alert alert-danger">页面中共有<span class="badge">' + h2num + '</span>个H2标签,<b class="text-danger">太多啦</b></div>');
							contentjson.h2num = '<div class="alert alert-danger">页面中共有<span class="badge">' + h2num + '</span>个H2标签,<b class="text-danger">太多啦</b></div>';
							that.score = that.score - 5;
						} else if(h2num < 2) {
							//$("#h2num").html('<div class="alert alert-danger">页面中共有<span class="badge">' + h2num + '</span>个H2标签,<b class="text-danger">太少了吧！</b></div>');
							contentjson.h2num = '<div class="alert alert-danger">页面中共有<span class="badge">' + h2num + '</span>个H2标签,<b class="text-danger">太少了吧！</b></div>';
							that.score = that.score - 5;
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
					function qdbq(){
						var qdbqcon = '';
						var emnum = $('em').length;
						var strongnum = $('strong').length;
						if(emnum>0){
							qdbqcon+='<div class="alert alert-danger">页面还有&lt;em&gt;标签</div>'
						}else if(strongnum>0){
							qdbqcon+='<div class="alert alert-danger">页面还有&lt;strong&gt;标签</div>'
						}else {
							qdbqcon = '<div class="alert alert-success">页面还有不含有强调标签</div>'
						}
						contentjson.qdbq = qdbqcon;
					}
					//rel
					function rel(n) {
						var relnumlist = '';
						if(n == 2) {
							var jszc = parent.find("a:contains('无限动力')").attr("rel");
						} else if(n == 4) {
							var jszc = parent.find("a:contains('远景电商')").attr("rel");
						} else {
							var jszc = parent.find("a:contains('动力无限')").attr("rel");
						}
						var qysp = parent.find("a:contains('企业商铺')").attr("rel");
						//var csfz = parent.find("a:contains('企业分站')").attr("rel");
						var wjdhimg = parent.find("img[alt='万家灯火']").parent("a").attr("rel")
						if(qysp == 'external nofollow') {
							var qyspnum = 1;
							var qysphref = parent.find("a:contains('企业商铺')").attr("href");
							if(qysphref == "http://www.cnhaoshengyi.com" || qysphref == "http://www.cnhaoshengyi.com/") {
								//$("#qysp").html('<div class="alert alert-success" role="alert">企业商铺链接正确</div>');
								contentjson.qysp = '<div class="alert alert-success" role="alert">企业商铺链接正确</div>';
							} else {
								//$("#qysp").html('<div class="alert alert-danger" role="alert">企业商铺链接错误&nbsp;&nbsp;<a href="' + qysphref + '" target="_blank"><b  class="text-danger">点击访问</b></a></div>');
								contentjson.qysp = '<div class="alert alert-danger" role="alert">企业商铺链接错误&nbsp;&nbsp;<a href="' + qysphref + '" target="_blank"><b  class="text-danger">点击访问</b></a></div>';
								that.score = that.score - 5;
							}
						} else {
							//$("#relnum").prepend('<p class="list-group-item list-group-item-warning">企业商铺链接未添加rel属性(或未添加企业商铺)</p>');
							relnumlist += '<p class="list-group-item list-group-item-warning">企业商铺链接未添加rel属性(或未添加企业商铺)</p>';
							//$("#qysp").html('<div class="alert alert-warning" role="alert">没找到企业商铺- -！</div>');
							contentjson.qysp = '<div class="alert alert-warning" role="alert">没找到企业商铺- -！</div>';
							that.score = that.score - 5;
						}

						if(wjdhimg == 'external nofollow') {
							var wjdhimgnum = 1;
						} else {
							//$("#relnum").prepend('<p class="list-group-item list-group-item-danger">万家灯火图标链接未添加rel属性(或未添加万家灯火图标)</p>');
							relnumlist += '<p class="list-group-item list-group-item-danger">万家灯火图标链接未添加rel属性(或未添加万家灯火图标)</p>'
						}
						if(jszc == 'external nofollow') {
							var jszcnum = 1;
						} else {
							//$("#relnum").prepend('<p class="list-group-item list-group-item-danger">技术支持链接未添加rel属性(或未添加技术支持)</p>');
							relnumlist += '<p class="list-group-item list-group-item-danger">技术支持链接未添加rel属性(或未添加技术支持)</p>';
						}
						//if (csfz == 'external nofollow') {
						//    var csfznum = 1;
						//} else {
						//    $("#relnum").prepend('<p class="list-group-item list-group-item-danger">企业分站链接未添加rel属性(或未添加企业分站)</p>');
						//}
						if((qyspnum + wjdhimgnum + jszcnum) == 3) {
							//$("#rel").html('<div class="alert alert-success" role="alert">rel属性齐全</div>');
							contentjson.rel = '<div class="alert alert-success" role="alert">rel属性齐全</div>';
						} else {
							//$("#rel").html('<div class="alert alert-warning" role="alert"><b class="text-danger">rel属性不全</b>&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#rellist"><b class="text-danger">点击查看</b></a></div>');
							contentjson.rel = '<div class="alert alert-warning" role="alert"><b class="text-danger">rel属性不全</b></div>';
							that.score = that.score - 5;
						}
						contentjson.qysp = relnumlist;
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
					//function  program(){
					//    var html = parent.find("html").html();
					//    var regProgram = /<pst|<class|{wjdh:.*?}|{url:[0-9]+}|<trim|<paging|{c:.*?}|{diy:.*?}|<ad|<pnklist|{show:.*?}|{title}|{thumb}|{zhaiyao}|{sthumb}{url}|{content}/;
					//    if(regProgram.test(html) == true){
					//        $("#program").html('<div class="alert alert-danger" role="alert">网站存在未解析的程序代码！</div>');
					//        that.score = that.score - 20;
					//    }else{
					//        $("#program").html('<div class="alert alert-success" role="alert">未检测到未解析的程序代码！</div>');
					//    }
					//}
					function program() {
						var regex = /<pst|<class|{wjdh:.*?}|{url:.*?}|<trim|<paging|{c:.*?}|{diy:.*?}|<ad|<pnklist|{show:.*?}|{title}|{thumb}|{zhaiyao}|{sthumb}{url}|{content}/g;
						var result = parent.html().match(regex);
						var programnumlist = '';
						if(null == result || 0 == result.length) {
							//document.getElementById("textMatchResult").value = "（没有匹配）";
							//$("#program").html('<div class="alert alert-success" role="alert">未检测到未解析的程序代码！</div>');
							contentjson.program = '<div class="alert alert-success" role="alert">未检测到未解析的程序代码！</div>';
							return false;
						} else {
							for(var i = 0; i < result.length; ++i) {
								//$("#programnum").prepend('<p class="list-group-item list-group-item-danger"><xmp>' + result[i] + '</xmp></p>');
								programnumlist += '<p class="list-group-item list-group-item-danger"><xmp>' + result[i] + '</xmp></p>';
								that.score = that.score - 10;
							}
							contentjson.programnum = programnumlist;
							//$("#program").html('<div class="alert alert-danger" role="alert">网站存在<span class="badge">' + result.length + '</span>个未解析的程序代码！&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#programlist"><b class="text-danger">点击查看</b></a></div>');
							contentjson.program = '<div class="alert alert-danger" role="alert">网站存在<span class="badge">' + result.length + '</span>个未解析的程序代码！&nbsp;&nbsp;<a data-toggle="collapse" data-parent="#accordion" href="#programlist"><b class="text-danger">点击查看</b></a></div>';
						}
						return true;
					}

				}, function(res) {

				});
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