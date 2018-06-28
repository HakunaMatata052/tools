<template>
	<div>
		<Row :gutter="16">
			<i-col :xs="24" :sm="12">
				<Row :gutter="16">
					<i-col :xs="24">
						<Input v-model="point">
						<span slot="prepend">输入经纬度</span>
						</Input>
					</i-col>
				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="12">
						<Input v-model="width">
						<span slot="prepend">地图宽度</span>
						</Input>
					</i-col>
					<i-col :xs="12">
						<Input v-model="height">
						<span slot="prepend">地图高度</span>
						</Input>
					</i-col>

				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24">
						<Input v-model="qrcode">
						<span slot="prepend">二维码图片（不填默认调用万家灯火二维码，常规站必须要填，可以是程序路径代码）</span>
						</Input>
					</i-col>

				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24">
						<Input v-model="company">
						<span slot="prepend">输入公司名称</span>
						</Input>
					</i-col>

				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24">
						<Input v-model="tel">
						<span slot="prepend">输入电话</span>
						</Input>
					</i-col>

				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24">
						<Input v-model="address">
						<span slot="prepend">输入地址</span>
						</Input>
					</i-col>

				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24">
						<Input v-model="content">
						<span slot="prepend">输入简介</span>
						</Input>
					</i-col>

				</Row>
			</i-col>
			<i-col :xs="24" :sm="12">
				<Row :gutter="16">
					<i-col :xs="24" :sm="24" :md="24">
						<Button type="success" long @click="shengcheng">生成</Button>
					</i-col>
				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24" :sm="24" :md="24">
						<Input v-model="jieguo" type="textarea" :rows="10" id="f0045"></Input>
					</i-col>
				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24" :sm="24" :md="24">
						<Button type="success" long @click="yulan" v-if="jieguo.length!=0">在线预览</Button>
					</i-col>
				</Row>
				<br>
				<Row :gutter="16">
					<i-col :xs="24" :sm="24" :md="24">
						<Button type="primary" long v-if="jieguo.length!=0" class="btn" data-clipboard-target="#f0045">复制代码</Button>
					</i-col>
				</Row>
			</i-col>
		</Row>
	</div>
</template>

<script>
	import _ from 'underscore';
	import Clipboard from 'clipboard';
	export default {
		data() {
			return {
				point: '',
				width: '100%',
				height: '500px',
				qrcode: '{c:qrcode}',
				company: '',
				tel: '',
				address: '',
				content: '',
				jieguo: ''

			}
		},
		methods: {
			initialize() {
				alert('1')
			},
			shengcheng() {
				var that = this;
				var content = '&lt;script type=&quot;text/javascript&quot; src=&quot;http://api.map.baidu.com/api?v=2.0&amp;ak=GRATsoIwLbGhZ9opAFPMmNRK&quot;&gt;&lt;/script&gt;&lt;script type=&quot;text/javascript&quot; src=&quot;http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js&quot;&gt;&lt;/script&gt;&lt;link rel=&quot;stylesheet&quot; href=&quot;http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css&quot;&gt;&lt;style type=&quot;text/css&quot;&gt;#allmap{height:' + that.height + ';width:' + that.width + ';overflow:hidden}#result{width:100%;font-size:12px}&lt;/style&gt;&lt;div id=&quot;allmap&quot;&gt;&lt;/div&gt;&lt;script charset=utf-8 type=&quot;text/javascript&quot;&gt;var map=new BMap.Map(&quot;allmap&quot;),poi=new BMap.Point(' + that.point + ');map.centerAndZoom(poi,16),map.enableScrollWheelZoom();var content=&#x27;&lt;div style=&quot;margin:0;line-height:20px;padding:2px;&quot;&gt;&lt;img src=&quot;' + that.qrcode + '&quot; alt=&quot;&quot; style=&quot;float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;&quot;/&gt;地址：' + that.address + '&lt;br/&gt;电话：' + that.tel + '&lt;br/&gt;简介：' + that.content + '&lt;/div&gt;&#x27;,searchInfoWindow=null;searchInfoWindow=new BMapLib.SearchInfoWindow(map,content,{title:&quot;' + that.company + '&quot;,width:290,height:105,panel:&quot;panel&quot;,enableAutoPan:!0,searchTypes:[BMAPLIB_TAB_SEARCH,BMAPLIB_TAB_TO_HERE,BMAPLIB_TAB_FROM_HERE]});var marker=new BMap.Marker(poi);marker.disableDragging(),marker.addEventListener(&quot;click&quot;,function(){searchInfoWindow.open(marker)}),map.addOverlay(marker),searchInfoWindow.open(poi);&lt;/script&gt;'
				that.jieguo = that.jieguo = _.unescape(content);
			},
			yulan() {
				var that = this;
				var win = window.open('', '地图', 'width=1920,height=' + that.height);
				win.document.open();
				win.document.write(that.jieguo);
				win.document.close();
			},
			create() {

			}
		},
		mounted() {
			window['create'] = () => {
				this.create();
			};
			const clipboard = new Clipboard('.btn');
		}
	}
</script>

<style>

</style>