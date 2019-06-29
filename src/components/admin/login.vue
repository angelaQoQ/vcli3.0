<template>
	<div class="login">
		<form class="login-wrap">
			<img class="avatar" src="@/assets/img/default.png">
			<div class="form-group">
				<label for="email" class="sr-only">邮箱</label>
				<input
					autocomplete
					id="email"
					type="email"
					class="form-control"
					placeholder="邮箱"
					autofocus
					v-model="email"
				>
			</div>
			<div class="form-group">
				<label for="password" class="sr-only">密码</label>
				<input
					autocomplete
					id="password"
					type="password"
					class="form-control"
					placeholder="密码"
					v-model="pwd"
				>
			</div>
			<a class="btn btn-primary btn-block" href="javascript:;" @click.prevent.stop="checkLogin">登 录</a>
		</form>
	</div>
</template>
<script>
export default {
	data () {
		return {
			email: "",
			pwd: ""
		}
	},
	methods: {
		checkLogin () {
			this.$http({
				method: "post",
				url: "http://127.0.0.1:3000/api/login/checkLogin",
				data: { "email": this.email, "pwd": this.pwd },
				// headers: { "Content-Type": "application/x-www-form-urlencoded" }
			})
				.then((data) => {
					console.log(data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

}
</script>
<style lang="less" scoped>
@import url("../../assets/vendors/bootstrap/css/bootstrap.css");
@import url("../../assets/css/admin.css");
</style>



