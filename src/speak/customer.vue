<template>
	<Row :gutter="16">
		<Col span="8">
		<Card>
			<p slot="title">通知商务</p>
			<p id="foo3">
				首页在我这里
			</p>
			<Button slot="append" class="btn" data-clipboard-target="#foo3">复制</Button>
		</Card>
		</Col>
	</Row>
</template>

<script>
	import Clipboard from 'clipboard';
	export default {
		data() {
			return {
			}
		},
		methods: {

		},
		mounted() {
			const clipboard = new Clipboard('.btn');
		}
	}
</script>

<style>

</style>