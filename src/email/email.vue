<template>
	<div>
		<Row :gutter="16">
			<i-col :xs="24" :sm="24" :md="8">
				<Card>
					<p slot="title">要资料邮件</p>
					<p>
						<Row :gutter="16">
							<i-col :xs="12">
								<Input v-model="email" placeholder="邮箱...">
								<span slot="prepend">邮箱：</span>
								</Input>
							</i-col>
							<i-col :xs="12">
								<Input v-model="password" placeholder="密码...">
								<span slot="prepend">密码：</span>
								</Input>
							</i-col>
						</Row>
						<br>
						<hr>
						<br>
						<Select v-model="company">
							<Option value="西安动力无限信息科技股份有限公司">西安动力无限信息科技股份有限公司</Option>
							<Option value="西安万家灯火信息技术有限公司">西安万家灯火信息技术有限公司</Option>
							<Option value="成都动力无限科技有限公司">成都动力无限科技有限公司</Option>
							<Option value="河南无限动力软件科技有限公司">河南无限动力软件科技有限公司</Option>
							<Option value="武汉商讯动力无限信息技术有限公司">武汉商讯动力无限信息技术有限公司</Option>
						</Select>
						<br>
						<Input v-model="cname" placeholder="客户名字...">
						<span slot="prepend">客户公司名称：</span>
						</Input><br>
						<Input v-model="realname" placeholder="客户名字...">
						<span slot="prepend">客户姓名：</span>
						</Input><br>
						<Input v-model="cemail" placeholder="客户邮箱...">
						<span slot="prepend">客户邮箱：</span>
						</Input><br>
						<Input v-model="name" placeholder="你的名字...">
						<span slot="prepend">设 计 师：</span>
						</Input><br>
						<Input v-model="tel" placeholder="电话...">
						<span slot="prepend">联系电话：</span>
						</Input><br>
						<Input v-model="qq" placeholder="qq...">
						<span slot="prepend">Q   Q：</span>
						</Input><br>
						<Button type="success" long @click="send('yaoziliao')" :disabled="show=='close'">发送</Button>
					</p>
				</Card>
			</i-col>
			<i-col :xs="24" :sm="24" :md="8">
				<Card>
					<p slot="title">首页效果图邮件</p>
					<p>
						<Row :gutter="16">
							<i-col :xs="12">
								<Input v-model="email" placeholder="邮箱...">
								<span slot="prepend">邮箱：</span>
								</Input>
							</i-col>
							<i-col :xs="12">
								<Input v-model="password" placeholder="密码...">
								<span slot="prepend">密码：</span>
								</Input>
							</i-col>
						</Row>
						<br>
						<hr>
						<br>
						<Select v-model="company">
							<Option value="西安动力无限信息科技股份有限公司">西安动力无限信息科技股份有限公司</Option>
							<Option value="西安万家灯火信息技术有限公司">西安万家灯火信息技术有限公司</Option>
							<Option value="成都动力无限科技有限公司">成都动力无限科技有限公司</Option>
							<Option value="河南无限动力软件科技有限公司">河南无限动力软件科技有限公司</Option>
							<Option value="武汉商讯动力无限信息技术有限公司">武汉商讯动力无限信息技术有限公司</Option>
						</Select>
						<br>
						<Input v-model="cname" placeholder="客户名字...">
						<span slot="prepend">客户公司名称：</span>
						</Input><br>
						<Input v-model="realname" placeholder="客户名字...">
						<span slot="prepend">客户姓名：</span>
						</Input><br>
						<Input v-model="cemail" placeholder="客户邮箱...">
						<span slot="prepend">客户邮箱：</span>
						</Input><br>
						<Input v-model="name" placeholder="你的名字...">
						<span slot="prepend">设 计 师：</span>
						</Input><br>
						<Input v-model="url" placeholder="效果图链接...">
						<span slot="prepend">效果图链接：</span>
						</Input><br>
						<Input v-model="tel" placeholder="电话...">
						<span slot="prepend">联系电话：</span>
						</Input><br>
						<Input v-model="qq" placeholder="qq...">
						<span slot="prepend">Q   Q：</span>
						</Input><br>
						<Button type="success" long @click="send('shouye')" :disabled="show=='close'">发送</Button>
					</p>
				</Card>
			</i-col>
		</Row>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueCookie from 'vue-cookie';
	Vue.use(VueCookie);
	export default {
		data() {
			return {
				email: '',
				password: '',
				cemail: '',
				cname: '',
				realname: '',
				name: '',
				url: '',
				tel: '',
				qq: '',
				company: '',
				show: 'open'
			}
		},
		props: ['userdata'],
		mounted() {
			var that = this;
			that.email = that.$cookie.get('email');
			that.password = that.$cookie.get('password');
			that.name = that.$cookie.get('name');
			that.tel = that.$cookie.get('tel');
			that.qq = that.$cookie.get('qq');
		},
		methods: {
			send(type) {
				var that = this;
				if(that.company == '') {
					that.$Message.info('选择分公司！');
					return false;
				} else if(that.email == '') {
					that.$Message.info('填写发件邮箱！');
					return false;
				} else if(that.password == '') {
					that.$Message.info('填写发件邮箱密码！');
					return false;
				} else if(that.cemail == '') {
					that.$Message.info('填写收件人！');
					return false;
				} else if(that.cname == '') {
					that.$Message.info('填写客户姓名！');
					return false;
				} else if(that.name == '') {
					that.$Message.info('填写设计师名称！');
					return false;
				} else if(that.tel == '') {
					that.$Message.info('填写电话！');
					return false;
				} else if(that.qq == '') {
					that.$Message.info('填写QQ！');
					return false;
				}
				that.show = 'close';
				that.$cookie.set('email', that.email, 'Tue, 19 Jan 2038 03:14:07 GMT');
				that.$cookie.set('password', that.password, 'Tue, 19 Jan 2038 03:14:07 GMT');
				that.$cookie.set('name', that.name, 'Tue, 19 Jan 2038 03:14:07 GMT');
				that.$cookie.set('tel', that.tel, 'Tue, 19 Jan 2038 03:14:07 GMT');
				that.$cookie.set('qq', that.qq, 'Tue, 19 Jan 2038 03:14:07 GMT');

				that.$http.jsonp('http://wjdh-jiucuo.sxbaiduv.com/api/email/email.php?type=' + type, {
					params: {
						company: that.company,
						email: that.email,
						password: that.password,
						realname: that.realname,
						cemail: that.cemail,
						cname: that.cname,
						name: that.name,
						url: that.url,
						tel: that.tel,
						qq: that.qq
					}
				}).then(function(res) {
					that.company = ""
					that.cemail = "";
					that.realname = "";
					that.cname = "";
					that.name = "";
					that.url = "";
					that.show = 'open';
					that.$Message.info('发送成功！');
				}, function(res) {

				});

			}
		}
	}
</script>

<style>

</style>