<template>
	<div>
		<Row :gutter="16">
			<Col span="8">
			<Card>
				<p slot="title">设计参考</p>
				<a href="javascript:;" slot="extra">
					<Icon type="plus-round"></Icon>
					添加
				</a>
				<ul>
					<li v-for="item in movieList">
						<img :src="item.url+'/favicon.ico'" alt="" width="15" />
						<a :href="item.url" target="_blank">{{ item.name }}</a>
					</li>
				</ul>
				<Input v-model="name" size="large" placeholder="名称" style="width: 200px"></Input>
				<Input v-model="url" size="large" placeholder="网址" style="width: 200px"></Input>
				<Button type="success" @click="add">提交</Button>
			</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				movieList: [],
				name: '',
				url: ''
			}
		},
		methods: {
			add() {
				var that = this;
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/network.php?action=add&name='+that.name+'&url='+that.url).then(function(res) {
					that.movieList = res.body.list;
					that.name = "";
					that.url = "";
					console.log(res)
				}, function(res) {

				});
			}
		},
		mounted() {
			var that = this;
			that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/network.php?action=get').then(function(res) {
				that.movieList = res.body.list;
				console.log(res)
			}, function(res) {

			});
		}
	}
</script>

<style>
	ul {
		list-style-type: none;
	}
</style>