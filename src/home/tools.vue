<template>
	<div>
		<Row :gutter="16">
			<Col span="8">
			<fanyi></fanyi>
			</Col>
			<Col span="8">
			<lazyload></lazyload>
			</Col>
			<Col span="8">
			<addattr></addattr>
			</Col>
		</Row>

		<br>
		<Row :gutter="16">
			<Col span="8">
			<transference></transference>
			</Col>
			<Col span="8">
			<ip></ip>
			</Col>
		</Row>
		<br>
		<Row>
			<Col span="8">
				<Card>
					<p slot="title">素材下载</p>
					<p><iframe src="http://images.dongliwuxianjituan.top/login.aspx" frameborder="0" width="100%" height="327"></iframe></p>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
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
		}
	}
</script>