<template>
	<div>
		<Row :gutter="16">
			<i-col :xs="24" :sm="8" :md="8">
				<fanyi></fanyi>
			</i-col>
			<i-col :xs="24" :sm="8" :md="8">
				<lazyload></lazyload>
			</i-col>
			<i-col :xs="24" :sm="8" :md="8">
				<addattr></addattr>
			</i-col>
		</Row>

		<br>
		<Row :gutter="16">
			<i-col :xs="24" :sm="8" :md="8">
				<transference></transference>
			</i-col>
			<i-col :xs="24" :sm="8" :md="8">
				<ip></ip>
			</i-col>
		</Row>
		<br>
		<Row>
			<i-col :xs="24" :sm="8" :md="8">
				<Card>
					<p slot="title" class="btn" data-clipboard-target="#f0048">素材下载<input class="mimayu" value="BHHY2!2!1705!" id="f0048"/></p>
					<p><iframe src="http://images.dongliwuxianjituan.top/login.aspx" frameborder="0" width="100%" height="327"></iframe></p>
				</Card>
			</i-col>
		</Row>
	</div>
</template>

<script>
	import Clipboard from 'clipboard';
	import fanyi from '../tools/Fanyi'
	import lazyload from '../tools/Lazyload'
	import addattr from '../tools/Addattr'
	import transference from '../tools/Transference'
	import ip from '../tools/Ip'
	export default {
		components: {
			fanyi,
			lazyload,
			addattr,
			transference,
			ip
		},
		mounted() {
			const clipboard = new Clipboard('.btn');
		}
	}
</script>
<style>
	.mimayu{
		display: block;
		position: absolute;
		opacity: 0;
	}
</style>