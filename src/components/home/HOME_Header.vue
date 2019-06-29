<template>
	<div class="header">
		<h1 class="logo">
			<a href="index.html">
				<img src="@/assets/img/logo.png" alt>
			</a>
		</h1>
		<ul class="nav">
			<li v-for="item in titleList" :key="item.id">
				<a href="javascript:;">
					<i class="fa fa-glass"></i>
					{{item.name}}
				</a>
			</li>
		</ul>
		<div class="search">
			<form>
				<input type="text" class="keys" placeholder="输入关键字">
				<input type="submit" class="btn" value="搜索">
			</form>
		</div>
		<div class="slink">
			<a href="javascript:;">链接01</a> |
			<a href="javascript:;">链接02</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "home_header",
	data () {
		return {
			titleList: [
				{ name: "奇趣事", id: "qqs" },
				{ name: "潮科技", id: "ckj" },
				{ name: "会生活", id: "hsh" },
				{ name: "美奇迹", id: "mqj" },
			]
		}

	}
}
</script>

