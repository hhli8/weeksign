<template>
	<div id="home">
		home
		<a class="link" href="#/">index</a>
		<input type="text" class="ipt-n" value="12"/><br/>
		<button class="btn-r">123</button>
		<p style="font-size:16px;">好的</p>
		<p style="accelerator: .6rem;">好的</p>
	</div>
</template>

<script>
	export default {
	  name: 'activity',
	  data () {
	    return {
	      msg: 'Welcome'
	    }
	  }
	}
</script>

<!--<style style="">
	
</style>-->
<!--<style lang="sass">
	@import '../scss/home.scss';
	.home-con{
		width: 400px;
		height: 400px;
		li {
			list-style: none;
		}
	}
</style>-->
<style lang="scss" scoped="scoped" type="text/css">
	/*@import '../scss/common.scss';
	@import '../scss/home.scss';*/
	$c_f:#005;
	#home{
		.link{
			font-size: 22px;
			color:$c_f;
		}
	}
</style>
