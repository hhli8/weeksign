<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
    
    <!--<div id="nav">
    	<ul>
				<li v-for="items in item" v-on:click="change">
					<div class="imgBox"><img :src="items.img"/></div>
					<span>{{items.des}}</span>
				</li>
			</ul>
    </div>-->
    <router-view name="nav"></router-view>
    <transition @before-enter="enter1" name="fade" @enter="enter2" @after-enter="enter3">
    	<router-view name="detail"></router-view>
    </transition>
    <transition  name="fade" >
    	<router-view name="myselfSet" ></router-view>
    </transition>
    <transition  name="fade" >
    	<router-view name="personSet"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
		name: 'app',
		data(){
			return {
				//login_view_show:false
				//dataObj:'UUUUUU'
			}
		},
		methods:{
			enter1:function(){
				//console.log(1);
			},
			enter2:function(){
				//console.log(2);//数据记载只能在这
				
			},
			enter3:function(){
				//console.log(3);
			}
		}
}
</script>

<style lang="scss">
	@import './scss/common.scss';
	#app{
		height: 100%;
		width:100%;
    overflow: hidden;
    position: relative;
	}
	.fade-enter-active,.fade-leave-active{transition: all 0.5s ease;}
	.fade-enter,.fade-leave-active{
		transform: translate3d(100%, 0px, 0px) translateZ(0px);
	}
</style>
