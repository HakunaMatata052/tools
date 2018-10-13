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
			<i-col :xs="24" :sm="8" :md="8">
				<imagesdown></imagesdown>
			</i-col>
		</Row>
		<br>
				<Row :gutter="16">
			<i-col :xs="24" :sm="24" :md="24">
				<word></word>
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
	import imagesdown from '../tools/Imagesdown'
	import word from '../tools/Word'
	export default {
		components: {
			fanyi,
			lazyload,
			addattr,
			transference,
			ip,
			imagesdown,
			word
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