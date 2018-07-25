<template>
	<div>
		<Row :gutter="16">
			<i-col :xs="24" :sm="8" :md="8" v-for="cat in catlist">
				<Card>
					<p slot="title">{{cat.typename}}</p>
					<ul>
						<li v-for="item in cat.tools_favourite_weburls">
							<Icon type="android-delete" class="del" @click="del(item.Id)"></Icon>
							<img :src="item.web_url+'/favicon.ico'" alt="" width="15" />
							<a :href="item.web_url" target="_blank">{{ item.url_name }}</a>
						</li>
					</ul>
					<Input v-model="name" size="large" placeholder="名称" style="width: 200px"></Input>
					<Input v-model="url" size="large" placeholder="网址" style="width: 200px"></Input>
					<Button type="success" @click="add(cat.Id)">提交</Button>
				</Card>
				<br/>
			</i-col>
		</Row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				catlist: [],
				name: '',
				url: '',
				password: '',
				id: '',
				leixing: ''
			}
		},
		methods: {
			getlist() {
				var that = this;
				that.$http.get(that.$store.state.api + 'CatHandler.ashx', {
					params: {
						action: 'catlist',
						token: that.$store.state.token
					}
				}).then(function(res) {
					console.log(res)
					that.catlist = res.body.data;
				}, function(res) {

				});
			},
			add(id) {
				var that = this;
				that.$http.get(that.$store.state.api + 'WebUrlHandler.ashx', {
					params: {
						action: 'AddUrl',
						web_url: that.url,
						url_name: that.name,
						urltypeId: id,
						token: that.$store.state.token
					}
				}).then(function(res) {
					that.getlist();
					that.name = '';
					that.url = '';
				}, function(res) {

				});
			},
			del(id) {
				this.$Modal.confirm({
					render: (h) => {
						return h('Input', {
							props: {
								value: this.value,
								autofocus: true,
								placeholder: '(tan2α+1)/(1-tan2α)=？？'
							},
							on: {
								input: (val) => {
									this.password = val;
								}
							}
						})
					},
					onOk: () => {
						if(this.password == "3.14") {
							this.password = '';
							this.$http.get(this.$store.state.api + 'WebUrlHandler.ashx', {
								params: {
									action: 'delUrl',
									urlid: id,
									token: this.$store.state.token
								}
							}).then(function(res) {

								this.getlist();
							}, function(res) {

							});
						} else {
							this.$Message.info('密码错误');
							console.log('我会告诉你密码是3.14？')
						}
					}
				})
			}
		},
		mounted() {
			this.getlist();
		}
	}
</script>

<style>
	ul {
		list-style-type: none;
	}
	
	.del {
		float: right;
		cursor: pointer;
		color: #ccc;
	}
</style>