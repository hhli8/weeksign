<template>
	<div id="personSet">
		<header class="back">
			<router-link to="/myself" class="back-a">
				<span class="back-icon"></span>个人信息
			</router-link>
		</header>
		<div class="content" >
			<ul class="lists">
				<li v-for="(items,index) in item" @click="toPerDetSet">
					{{items.des}}<div class="li"><span :class="items.class">{{items.val}}</span><span class="to"></span></div>
				</li>
			</ul>
			<ul class="lists">
				<li v-for="(items,index) in item2">
					{{items.des}}<div class="li">{{items.val}}<span class="to"></span></div>
				</li>
			</ul>
			<ul class="lists">
				<li v-for="(items,index) in item3">
					{{items.des}}<div class="li">{{items.val}}<span class="to"></span></div>
				</li>
			</ul>
		</div>
		<!--<div class="detailPersonSet">33333333333333333333333</div>-->
		<transition  name="fade">
	    	<router-view name="detailPersonSet"></router-view>
	    	<!--<detailpersonset v-show='detailpersonset'></detailpersonset>-->
	    </transition>
	</div>
</template>

<script>
	import $ from 'n-zepto';
	import {headurl,com} from '../js/common.js'
	import detailPersonSet from '@/components/personSetDetail'
//	let detailPersonSet={
//		template: '<div>A custom component!</div>'
//	};
	export default {
	  	name: 'detail',
	  	data () {
		    return {
		      	title: '',
		      	content:'',
		      	id:'',
		      	showwrite:true,
		      	item:[
		      		{des:'头像',class:'head-pic'},
		      		{des:'昵称',val:'未填写'},
		      		{des:'性别',val:'未填写'},
		      		{des:'年龄',val:'未填写'},
		      		{des:'地区',val:'未填写'}	
		      	],
		      	item2:[
		      		{des:'星座',val:'未填写'},
		      		{des:'身高',val:'未填写'},
		      		{des:'体重',val:'未填写'}
		      	],
		      	item3:[
		      		{des:'学历',val:'asda'},
		      		{des:'职业',val:'asda'},
		      		{des:'收入',val:'asda'},
		      		{des:'兴趣爱好',val:'asda'}
		      	],
		      	detailpersonset:false
		    }
	  	},
		components:{
//		  	'detailpersonset':detailPersonSet
		},
	  	mounted:function(){
	  	
	 	},
	 	methods:{
	 		toPerDetSet:function(){
	 			//this.detailpersonset=true;
	 			window.location.href='#/myself/personset/detailSet';
	 		}
	 	},
	 	directives:{
	 	
	 	}
	}
</script>

<style lang="scss" scoped="scoped" type="text/css">
	@import '../scss/personSet.scss';
	.fade-enter-active,.fade-leave-active{transition: all 0.5s ease;}
	.fade-enter,.fade-leave-active{
		transform: translate3d(100%, 0px, 0px) translateZ(0px);
	}
</style>
