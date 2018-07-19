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
						<Row :gutter="16">
							<i-col :xs="24">
								<Input v-model="csemail" placeholder="抄送邮箱...">
								<span slot="prepend">抄送邮箱：</span>
								</Input>
							</i-col>
						</Row>
						<br>
						<hr>
						<br>
						<Row :gutter="16">
							<i-col :xs="24">
								<Select v-model="company">
									<Option value="西安动力无限信息科技股份有限公司">西安动力无限信息科技股份有限公司</Option>
									<Option value="西安万家灯火信息技术有限公司">西安万家灯火信息技术有限公司</Option>
									<Option value="成都动力无限科技有限公司">成都动力无限科技有限公司</Option>
									<Option value="河南无限动力软件科技有限公司">河南无限动力软件科技有限公司</Option>
									<Option value="武汉商讯动力无限信息技术有限公司">武汉商讯动力无限信息技术有限公司</Option>
								</Select>
							</i-col>
						</Row>
						<br>
						<Input v-model="cname" placeholder="客户公司名称...">
						<span slot="prepend">客户公司名称：</span>
						</Input><br>
						<Input v-model="realname" placeholder="客户姓名...">
						<span slot="prepend">客户姓名：</span>
						</Input><br>
						<Input v-model="cemail" placeholder="客户邮箱...">
						<span slot="prepend">客户邮箱：</span>
						</Input><br>
						<Input v-model="name" placeholder="你的名字...">
						<span slot="prepend">设 计 师：</span>
						</Input><br>
						<Input v-model="tel" placeholder="你的电话...">
						<span slot="prepend">联系电话：</span>
						</Input><br>
						<Input v-model="qq" placeholder="你的qq...">
						<span slot="prepend">Q   Q：</span>
						</Input><br>
						<Button type="success" long @click="modal2 = true">发送</Button>
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
						
						<Row :gutter="16">
							<i-col :xs="24">
								<Input v-model="csemail" placeholder="抄送邮箱...">
								<span slot="prepend">抄送邮箱：</span>
								</Input>
							</i-col>
						</Row>
						<br>
						<hr>
						<br>
						<Row :gutter="16">
							<i-col :xs="24">
								<Select v-model="company">
									<Option value="西安动力无限信息科技股份有限公司">西安动力无限信息科技股份有限公司</Option>
									<Option value="西安万家灯火信息技术有限公司">西安万家灯火信息技术有限公司</Option>
									<Option value="成都动力无限科技有限公司">成都动力无限科技有限公司</Option>
									<Option value="河南无限动力软件科技有限公司">河南无限动力软件科技有限公司</Option>
									<Option value="武汉商讯动力无限信息技术有限公司">武汉商讯动力无限信息技术有限公司</Option>
								</Select>
							</i-col>
						</Row>
						<br>
						<Input v-model="cname" placeholder="客户公司名称...">
						<span slot="prepend">客户公司名称：</span>
						</Input><br>
						<Input v-model="realname" placeholder="客户姓名...">
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
						<Input v-model="tel" placeholder="你的电话...">
						<span slot="prepend">联系电话：</span>
						</Input><br>
						<Input v-model="qq" placeholder="你的qq...">
						<span slot="prepend">Q   Q：</span>
						</Input><br>
						<Button type="success" long @click="modal1 = true">发送</Button>
					</p>
				</Card>
			</i-col>
			<i-col :xs="24" :sm="24" :md="8">
				<Card>
					<p slot="title">程序认可邮件</p>
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
						
						<Row :gutter="16">
							<i-col :xs="24">
								<Input v-model="csemail" placeholder="抄送邮箱...">
								<span slot="prepend">抄送邮箱：</span>
								</Input>
							</i-col>
						</Row>
						<br>
						<hr>
						<br>
						<Row :gutter="16">
							<i-col :xs="24">
								<Select v-model="company">
									<Option value="西安动力无限信息科技股份有限公司">西安动力无限信息科技股份有限公司</Option>
									<Option value="西安万家灯火信息技术有限公司">西安万家灯火信息技术有限公司</Option>
									<Option value="成都动力无限科技有限公司">成都动力无限科技有限公司</Option>
									<Option value="河南无限动力软件科技有限公司">河南无限动力软件科技有限公司</Option>
									<Option value="武汉商讯动力无限信息技术有限公司">武汉商讯动力无限信息技术有限公司</Option>
								</Select>
							</i-col>
						</Row>
						<br>
						<Input v-model="cname" placeholder="客户公司名称...">
						<span slot="prepend">客户公司名称：</span>
						</Input><br>
						<Input v-model="realname" placeholder="客户姓名...">
						<span slot="prepend">客户姓名：</span>
						</Input><br>
						<Input v-model="cemail" placeholder="客户邮箱...">
						<span slot="prepend">客户邮箱：</span>
						</Input><br>
						<Input v-model="name" placeholder="你的名字...">
						<span slot="prepend">程  序  员：</span>
						</Input><br>
						<Input v-model="url" placeholder="效果图链接...">
						<span slot="prepend">程序链接：</span>
						</Input><br>
						<Input v-model="tel" placeholder="你的电话...">
						<span slot="prepend">联系电话：</span>
						</Input><br>
						<Input v-model="qq" placeholder="你的qq...">
						<span slot="prepend">Q   Q：</span>
						</Input><br>
						<Button type="success" long @click="modal3 = true">发送</Button>
					</p>
				</Card>
			</i-col>
		</Row>
		<Modal v-model="modal1" title="Title" :loading="loading" :mask-closable="false" :closable="false" @on-ok="send('HomePage')">
			<p>客户公司名称：
				<h3>{{cname}}</h3></p>
			<br>
			<p>客户负责人称呼：
				<h3>{{realname}}</h3></p>
			<br>
			<p>客户邮箱：
				<h3>{{cemail}}</h3></p>
			<br>
			<p>效果图链接：
				<h3><a :href="url">{{url}}</a></h3></p>
			<br>
			<p>
				<h5>请确认无误后点击确定</h5></p>
		</Modal>
		<Modal v-model="modal2" title="Title" :loading="loading" :mask-closable="false" :closable="false" @on-ok="send('NeedData')">
			<p>客户公司名称：
				<h3>{{cname}}</h3></p>
			<br>
			<p>客户负责人称呼：
				<h3>{{realname}}</h3></p>
			<br>
			<p>客户邮箱：
				<h3>{{cemail}}</h3></p>
			<br>
			<p>
				<h5>请确认无误后点击确定</h5></p>
		</Modal>
		
		<Modal v-model="modal3" title="Title" :loading="loading" :mask-closable="false" :closable="false" @on-ok="send('chengxu')">
			<p>客户公司名称：
				<h3>{{cname}}</h3></p>
			<br>
			<p>客户负责人称呼：
				<h3>{{realname}}</h3></p>
			<br>
			<p>客户邮箱：
				<h3>{{cemail}}</h3></p>
			<br>
			<p>程序链接：
				<h3><a :href="url">{{url}}</a></h3></p>
			<br>
			<p>
				<h5>请确认无误后点击确定</h5></p>
		</Modal>
	</div>
</template>

<script>
	//import Vue from 'vue';
	//import VueCookie from 'vue-cookie';
	//Vue.use(VueCookie);
	export default {
		data() {
			return {
				email: '',
				password: '',
				csemail:'',
				cemail: '',
				cname: '',
				realname: '',
				name: '',
				url: '',
				tel: '',
				qq: '',
				company: '',
				modal1: false,
				modal2: false,
				modal3: false,
				loading: true
			}
		},
		props: ['userdata'],
		mounted() {
			var that = this;
			that.email = localStorage.email;
			that.password = localStorage.password;
			that.csemail = localStorage.csemail;
			that.name = localStorage.name;
			that.tel = localStorage.tel;
			that.qq = localStorage.qq;
			if(this.$store.state.notice) {
				this.$Notice.open({
					title: '邮件一定要检查仔细！'
				});
				this.$store.state.notice = !this.$store.state.notice
			}
		},
		methods: {
			send(type) {
				var that = this;
				if(that.company == '') {
					that.$Message.info('选择分公司！');
					that.modal1 = false;
					that.modal2 = false;
					return false;
				} else if(that.email == '') {
					that.$Message.info('填写发件邮箱！');
					that.modal1 = false;
					that.modal2 = false;
					return false;
				} else if(that.password == '') {
					that.$Message.info('填写发件邮箱密码！');

					that.modal1 = false;
					that.modal2 = false;
					return false;
				} else if(that.cemail == '') {
					that.$Message.info('填写收件人！');
					that.modal1 = false;
					that.modal2 = false;
					return false;
				} else if(that.cname == '') {
					that.$Message.info('填写客户姓名！');
					that.modal1 = false;
					that.modal2 = false;
					return false;
				} else if(that.name == '') {
					that.$Message.info('填写设计师名称！');
					that.modal1 = false;
					that.modal2 = false;
					return false;
				} else if(that.tel == '') {
					that.$Message.info('填写电话！');
					that.modal1 = false;
					that.modal2 = false;
					return false;
				} else if(that.qq == '') {
					that.$Message.info('填写QQ！');
					that.modal1 = false;
					that.modal2 = false;
					return false;
				}
				if(type=="HomePage"||type=="chengxu"){
					if(that.url==""){
						that.$Message.info('填写链接地址！');
						that.modal1 = false;
						that.modal2 = false;
						that.modal3 = false;
						return false;
					}
				}
				localStorage.email = that.email;
				localStorage.password = that.password;
				localStorage.csemail = that.csemail;
				localStorage.name = that.name;
				localStorage.tel = that.tel;
				localStorage.qq = that.qq;
				that.$http.get('http://wjdh03.sjgogo.cn/api/EmailHandler.ashx', {
					params: {
						action:type,
						token:'57373A7E05CB44079B2F12C14A5E83A9',
						copyemail:that.csemail,
						Send_emialBtoe: that.company,
						Send_emialAddress: that.email,
						Send_emialPassword: that.password,
						Send_emialName: that.realname,
						Send_emial: that.cemail,
						Send_emialCompany: that.cname,
						Send_emialDesigner: that.name,
						Send_emialWebUrl: that.url,
						Send_emiaTel: that.tel,
						Send_emialQQ: that.qq
					}
				}).then(function(res) {
					if(res.body.code == 0) {
//						that.company = ""
//						that.cemail = "";
//						that.realname = "";
//						that.cname = "";
						that.modal1 = false;
						that.modal2 = false;
						that.modal3 = false;
						that.$Message.info(res.body.msg);
					} else {
						that.modal1 = false;
						that.modal2 = false;
						that.modal3 = false;
						that.$Message.info(res.body.msg);
					}

				}, function(res) {
					that.modal1 = false;
					that.modal2 = false;
						that.modal3 = false;
					that.$Message.info('发送失败！');
				});

			}
		}
	}
</script>

<style>

</style>