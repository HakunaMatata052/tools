<template>
	<Row :gutter="16">
		<i-col :xs="24" :sm="8" :md="8">
		<Card>
			<p slot="title">通知商务</p>
			<p id="foo3">
				首页在我这里
			<Button slot="append" class="btn" data-clipboard-target="#foo3">复制</Button>
			</p>
		</Card>
		</i-col>
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