<template>
	<div class="Log">
		<router-link to="/admin/login">用户登录 | </router-link>
		<router-link to="/admin/signin">新用户注册</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
import login from "../components/admin/login.vue"
import signin from "../components/admin/signin.vue"
export default {

	components: {
		login, signin
	}

}
</script>
<style lang="less" scoped>
@import url("../assets/vendors/bootstrap/css/bootstrap.css");
@import url("../assets/css/admin.css");
</style>



