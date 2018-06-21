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
		</Row>
	</div>
</template>

<script>
	import fanyi from '../tools/Fanyi'
	import lazyload from '../tools/Lazyload'
	import addattr from '../tools/Addattr'	
	import transference from '../tools/Transference'
		export default {
		components: {
			fanyi,
			lazyload,
			addattr,
			transference
		}
	}
</script>

<style>

</style>