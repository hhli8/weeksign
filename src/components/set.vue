<template>
	<div id="set">
		<header class="back">
			<router-link to="/myself" class="back-a">
				<span class="back-icon"></span>设置
			</router-link>
		</header>
		<div class="content" >
			<div style="text-align: center;" v-on:click="outLogin">退出登录</div>
		</div>
	</div>
</template>

<script>
	import $ from 'n-zepto';
	import {headurl,com} from '../js/common.js'
	import { mapGetters, mapActions } from 'vuex'
	export default {
	  	name: 'detail',
	  	data () {
		    return {
		      	
		    }
	  	},
		components:{
		  	
		},
	  	mounted:function(){
	  	
	 	},
	 	methods:{
	 		outLogin:function(){
	 			localStorage.setItem('tenAccount','');
				this.$store.commit('back');
	 			window.location.href='#/myself';
	 		}
	 	},
	 	directives:{
	 	
	 	}
	}
</script>

<style lang="scss" scoped="scoped" type="text/css">
	@import '../scss/set.scss';
</style>
