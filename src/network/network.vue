<template>
	<div>
		<Row :gutter="16">
			<i-col :xs="24" :sm="8" :md="8">
				<Card>
					<p slot="title">设计参考</p>
					<ul>
						<li v-for="item,index in sjck">
							<Icon type="android-delete" class="del" @click="del(index,'sjck')"></Icon>
							<img :src="item.url+'/favicon.ico'" alt="" width="15" />
							<a :href="item.url" target="_blank">{{ item.name }}</a>
						</li>
					</ul>
					<Input v-model="name" size="large" placeholder="名称" style="width: 200px"></Input>
					<Input v-model="url" size="large" placeholder="网址" style="width: 200px"></Input>
					<Button type="success" @click="add('sjck')">提交</Button>
				</Card>
			</i-col>

			<i-col :xs="24" :sm="8" :md="8">
				<Card>
					<p slot="title">代码特效</p>
					<ul>
						<li v-for="item,index in dmtx">
							<Icon type="android-delete" class="del" @click="del(index,'dmtx')"></Icon>
							<img :src="item.url+'/favicon.ico'" alt="" width="15" />
							<a :href="item.url" target="_blank">{{ item.name }}</a>
						</li>
					</ul>
					<Input v-model="name" size="large" placeholder="名称" style="width: 200px"></Input>
					<Input v-model="url" size="large" placeholder="网址" style="width: 200px"></Input>
					<Button type="success" @click="add('dmtx')">提交</Button>
				</Card>
			</i-col>

			<i-col :xs="24" :sm="8" :md="8">
				<Card>
					<p slot="title">素材下载</p>
					<ul>
						<li v-for="item,index in scxz">
							<Icon type="android-delete" class="del" @click="del(index,'scxz')"></Icon>
							<img :src="item.url+'/favicon.ico'" alt="" width="15" />
							<a :href="item.url" target="_blank">{{ item.name }}</a>
						</li>
					</ul>
					<Input v-model="name" size="large" placeholder="名称" style="width: 200px"></Input>
					<Input v-model="url" size="large" placeholder="网址" style="width: 200px"></Input>
					<Button type="success" @click="add('scxz')">提交</Button>
				</Card>
			</i-col>
			<br>
			<i-col :xs="24" :sm="8" :md="8">
				<Card>
					<p slot="title">动力无限</p>
					<ul>
						<li v-for="item,index in dlgf">
							<Icon type="android-delete" class="del" @click="del(index,'dlgf')"></Icon>
							<img :src="item.url+'/favicon.ico'" alt="" width="15" />
							<a :href="item.url" target="_blank">{{ item.name }}</a>
						</li>
					</ul>
					<Input v-model="name" size="large" placeholder="名称" style="width: 200px"></Input>
					<Input v-model="url" size="large" placeholder="网址" style="width: 200px"></Input>
					<Button type="success" @click="add('dlgf')">提交</Button>
				</Card>
			</i-col>
		</Row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sjck: [],
				dmtx: [],
				scxz: [],
				dlgf: [],
				name: '',
				url: '',
				password: '',
				id:'',
				leixing:''
			}
		},
		methods: {
			add(type) {
				var that = this;
				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/network/network.php?action=add&type=' + type + '&name=' + that.name + '&url=' + that.url).then(function(res) {
					that[type] = res.body.data[type].list;
					that.name = "";
					that.url = "";
					console.log(res)
				}, function(res) {

				});
			},
			del(index,type) {
				this.id=index;
				this.leixing=type;
				this.$Modal.confirm({
					render: (h) => {
						return h('Input', {
							props: {
								value: this.value,
								autofocus: true,
								placeholder: '输入密码...'
							},
							on: {
								input: (val) => {
									this.password = val;
								}
							}
						})
					},
					onOk: () => {
						if(this.password == "4831100924") {
							this.password = '';
							this.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/network/network.php?action=del&type='+this.leixing+'&id='+this.id).then(function(res) {
								this[type] = res.body.data[type].list;
							}, function(res) {

							});
						} else {
							this.$Message.info('密码错误');
						}
					}
				})
			}
		},
		mounted() {
			var that = this;
			that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/network/network.php?action=get').then(function(res) {
				//that[type] = res.body[type];
				for(var attr in res.body.data) {
					that[attr] = res.body.data[attr].list;
				}
			}, function(res) {

			});
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