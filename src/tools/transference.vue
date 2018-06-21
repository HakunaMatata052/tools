<template>

	<Card>
		<p slot="title">HTML转义</p>
		<p>
			<Input v-model="fuhao" placeholder="输入要转换的符号..." clearable></Input>
		</p>
		<br>
		<p>
			<Button type="success" long @click="transference">转换</Button>
		</p>
		<br>
		<p>
			<Input v-model="jieguo" id="foo2">
			<Button slot="append" class="btn" data-clipboard-target="#foo2">复制</Button>
			</Input>
		</p>
	</Card>
</template>

<script>
	import _ from 'underscore';
	import Clipboard from 'clipboard';
	export default {
		data() {
			return {
				fuhao: '',
				jieguo: ''
			}
		},
		methods: {
			transference() {
				var that = this;
				if(that.fuhao == 0) {
					that.$Message.info('没有内容！');
					return false
				}
				that.jieguo = _.escape(that.fuhao)
			}
		},
		mounted() {
			const clipboard = new Clipboard('.btn');
		}
	}
</script>