<template>

	<Card>
		<p slot="title">标签补全</p>
		<p>

			<editor id="editor_id" height="500" width="100%" :content="editorText" :afterChange="afterChange()" pluginsPath="/static/kindeditor/plugins/" :loadStyleMode="true" @on-content-change="onContentChange"></editor>
		</p>
		<br>
		<p>
			<Button type="success" long @click="addattr" onclick="addattr();">转换并下载</Button>
		</p>
	</Card>
</template>

<script>
	import Vue from 'vue';
	import VueKindEditor from 'vue-kindeditor'
	import 'kindeditor/kindeditor-all-min.js'
	import 'kindeditor/themes/default/default.css'
	Vue.use(VueKindEditor)
	export default {
		data() {
			return {
				content: '',
				editorText: '',
				editorText2: ''
			}
		},
		methods: {
			onContentChange(val) {
				this.editorText = val
			},
			onContentChange2(val) {
				this.editorText2 = val
			},
			afterChange() {},
			addattr() {
				var that = this;
				var content = that.content;
				if(content.length == 0) {
					that.$Message.info('没有内容！');
					return false
				}
				var regex = /<img.*?>/gi;
				var result = content.match(regex);
				var num1 = 0;
				var num2 = 0;
				if(null == result || 0 == result.length) {
					//return false;
				} else { //匹配出img标签
					for(var i = 0; i < result.length; ++i) {
						var str = result[i].indexOf("alt=");
						var str2 = result[i].indexOf("title=")
						if(str < 0) {
							var tmp = result[i];
							result[i] = result[i].replace("<img", '<img alt=""');
							content = content.replace(tmp, result[i]);
							num1++;
						}
						if(str2 < 0) {
							var tmp2 = result[i];
							result[i] = result[i].replace("<img", '<img title=""');
							content = content.replace(tmp2, result[i]);
							num2++
						}
					}
				};
				var num3 = 0;
				var regex2 = /<a.*?>/gi;
				var result2 = content.match(regex2);
				if(null == result2 || 0 == result2.length) {
					//return false;
				} else { //匹配出img标签
					for(var i = 0; i < result2.length; ++i) {
						var str3 = result2[i].indexOf("title=")
						if(str3 < 0) {
							var tmp3 = result2[i];
							result2[i] = result2[i].replace(">", ' title="">');
							content = content.replace(tmp3, result2[i]);
							num3++;
						}
					}

				};
				that.$Message.info('共有' + num1 + '个图片被添加alt属性，' + num2 + '个图片被添加title属性，' + num3 + '个链接被添加title属性！');
				that.download(content, 'index.html')
			},
			download(content, filename) {
				var eleLink = document.createElement('a');
				eleLink.download = filename;
				eleLink.style.display = 'none';
				// 字符内容转变成blob地址
				var blob = new Blob([content]);
				eleLink.href = URL.createObjectURL(blob);
				// 触发点击
				document.body.appendChild(eleLink);
				eleLink.click();
				// 然后移除
				document.body.removeChild(eleLink);
			}
		}
	}
</script>