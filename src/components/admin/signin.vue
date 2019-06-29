<template>
	<div class="login">
		<form class="login-wrap">
			<!-- <img class="avatar" src="@/assets/img/default.png"> -->
			<!-- 有错误信息时展示 -->
			<!-- <div class="alert alert-danger">
        <strong>错误！</strong> 用户名或密码错误！
			</div>-->
			<div class="form-group">
				<label for="email" class="sr-only">邮箱 / 手机号</label>
				<input id="email" type="email" class="form-control" placeholder="邮箱 / 手机号" autofocus>
			</div>
			<div class="form-group">
				<label for="password1" class="sr-only">密码</label>
				<input id="password1" type="password" class="form-control" placeholder="请输入密码">
			</div>
			<div class="form-group">
				<label for="password2" class="sr-only">密码</label>
				<input id="password2" type="password" class="form-control" placeholder="请确认密码">
			</div>

			<a class="btn btn-primary btn-block" href="index.html">注册</a>
		</form>
	</div>
</template>
<script>
export default {


}
</script>
<style lang="less" scoped>
@import url("../../assets/vendors/bootstrap/css/bootstrap.css");
@import url("../../assets/css/admin.css");
</style>



