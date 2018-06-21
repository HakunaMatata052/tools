<template>

	<Card>
		<p slot="title">懒加载</p>
		<p>
			<Input v-model="content" type="textarea" :rows="4" placeholder="将源代码粘贴进来"></Input>
		</p>
		<br>
		<p>
			<Button type="success" long @click="lazyload">转换并下载</Button>
		</p>
	</Card>
</template>

<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		methods: {
			lazyload() {
				var that = this;
				var lazyload = that.content;
				var regex = /<img\s.*?>/gi;
				//var regex = /<img [^>]*src=['"]([^'"]+)([^>]*>)/gi;
				var result = lazyload.match(regex);
				if(null == result || 0 == result.length) {
					that.$Message.info('没有匹配');
					return false;
				} else {
					that.$Message.info('共有' + result.length + '个图片被转换为懒加载！');
					for(var i = 0; i < result.length; ++i) {
						var tmp = result[i];
						result[i] = result[i].replace("src", 'src="{wjdh:templetepath}/images/img/grey.gif" data-src');
						lazyload = lazyload.replace(tmp, result[i]);
					}
				};
				that.download(lazyload,'index.html')
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