<template>
	<div id="nav">
		<ul>
			<li v-for="(items,index) in item" v-on:click="change(index)">
				<router-link :to="items.href">
				<!--<a :href="items.href">-->
				<div class="imgBox"><img :src="items.img"/></div>
				<span>{{items.des}}</span>
				<!--<span>{{index}}</span>-->
				<!--</a>-->
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Router from 'vue-router'
	import Home from '@/components/home'
	import $ from 'n-zepto'
	Vue.use(Router)
	export default { //==new vue
	  name: 'nav',
	  data () {
	    return {
	    	beforeScroll:0,
	    	scroll:[
	    		0,0,0,0,0
	    	],
	        item:[{img:'static/imgs/nav/36useful-web-icons-home-act.png',normal:'home',des:"主页",act:true,href:'/'},
				  {img:'static/imgs/nav/36useful-web-icons-group.png',normal:'group',des:"小组",act:false,href:'/group'},
				  {img:'static/imgs/nav/36useful-web-icons-fun.png',normal:'fun',des:"趣事",act:false,href:'/fun'},
				  {img:'static/imgs/nav/36useful-web-icons-activity.png',normal:'activity',des:"活动",act:false,href:'/activity'},
				  {img:'static/imgs/nav/36useful-web-icons-personal.png',normal:'personal',des:"我",act:false,href:'/myself'}],                                             
			y:22
	    }
	  },
	  methods:{
	  	initialize:function(o,act,img){
	  		var l=o.length;
	  		for(let i=0;i<l;i++){
	  			//o[i].act=act;
	  			o[i].img='static/imgs/nav/36useful-web-icons-'+o[i].normal+'.png';
	  		}
	  	},
	  	change:function(e){  
	  		//console.log(e);//ok
	  		//console.log(this.y);
	  		this.initialize(this.item);
	  		this.item[e].img='static/imgs/nav/36useful-web-icons-'+this.item[e].normal+'-act.png';
	  		//切换page
	  		//保存滚动距离
	  		//console.log(e);
	  		let the=this.beforeScroll;
	  		this.scroll[the]=document.querySelector('.pageView').scrollTop;
	  		Home.scroll=this.scroll[0];
	  		//console.log(this.scroll);
	  		this.beforeScroll=e;
	  		//var top=document.querySelector('.pageView').scrollTop;
	  		//console.log(document.querySelector('.pageView').scrollTop);
	  		//this.scroll[e]=top;console.log(this.scroll);
	  		//console.log(Home.act);//undefined
	  		$('.pageView.act').removeClass('act');
	  		$($('.pageView')[e]).addClass('act');
	  		return;
	  		e=e||window.e;
			var t=e.target||e.srcElement;
			while(t.tagName!='LI'){
				t=t.parentNode;
			}
			var act=$('#nav li.act');
			var index=$(t).index();
			var before=act.index();
			var c=$($('#nav li')[index]);
			$('#nav li.act img').attr('src','imgs/index/bottom_nav/36useful-web-icons-'+this.item[before].normal+'.png');
			act.removeClass('act');
			c.addClass('act');
			c.find('img').attr('src','imgs/index/bottom_nav/36useful-web-icons-'+this.item[index].normal+'-act.png');
			//页面切换
			$('#pageBox .pageView.act').removeClass('act')
			$($('#pageBox .pageView')[index]).addClass('act');
	  	}
	  }
	}
	const nav=new Router({

	});
</script>

<style lang="scss" scoped="scoped" type="text/css">
	@import '../scss/nav.scss';
</style>