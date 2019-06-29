<template>
	<div class="home2">
		<home_header></home_header>
		<home_aside></home_aside>
		<home_content></home_content>
		<home_footer></home_footer>
	</div>
</template>
<script>
import home_header from "@/components/home/HOME_Header"
import home_footer from "@/components/home/HOME_footer"
import home_aside from "@/components/home/HOME_aside"
import home_content from "@/components/home/HOME_content"

export default {
	name: "home2",
	components: {
		home_header,
		home_footer,
		home_aside,
		home_content
	}
}
</script>

<style lang="less" scoped>
@import url("../assets/css/style.css");

h2 {
	color: red;
}
</style>

