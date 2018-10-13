<template>
	<div style="width:800px;margin: auto;">
		<Input v-model="$store.state.zhaocha_apply.companyname">
		<span slot="prepend">公司名称：</span>
		</Input>
		<br />
		<Input v-model="$store.state.zhaocha_apply.domain">
		<span slot="prepend">正式域名：</span>
		</Input>
		<br />
		<Input v-model="$store.state.zhaocha_apply.test">
		<span slot="prepend">测试域名：</span>
		</Input>
		<br />
		<Input v-model="$store.state.zhaocha_apply.score">
		<span slot="prepend">找茬得分：</span>
		</Input>
		<br />
		
		<Input v-model="$store.state.zhaocha_apply.mima">
		<span slot="prepend">超管账号密码：</span>
		</Input>
		<br />		
		<Input v-model="$store.state.zhaocha_apply.ip">
		<span slot="prepend">备案接入商：</span>
		</Input>
		<br />
		<Input v-model="$store.state.zhaocha_apply.beian">
		<span slot="prepend">备案号：</span>
		</Input>
		<br />
		<Input v-model="$store.state.zhaocha_apply.ip">
		<span slot="prepend">美工程序：</span>
		</Input>
		<br />
		<Input v-model="$store.state.zhaocha_apply.midu"  type="textarea" :autosize="{minRows: 5,maxRows: 15}">
		</Input>
		<br />
		<Button type="error" @click="apply" long>提交客服经理</Button>
		<br />
		<Button type="success" @click="apply" long>提交技术经理</Button>
	</div>
</template>

<script>
	
</script>

<style>

</style>