<template>
	<!--<transition @after-enter="">-->
	<div class="detail" :id="id">
		<div id="header" @touchstart="hideWriteIn">
			<router-link to="/" class="back"><span class="back-icon"></span>返回</router-link>
			<div class="ellipsis"><i></i><i></i><i></i></div>
		</div>
		<div class="detail-con" @touchstart="hideWriteIn">
			<h2>{{title}}</h2>
			<div class="content" v-html="content"></div>
			<content-c></content-c>
		</div>
		<div id="review-box">
			<div class="write-box"><div class="write-logo" @click="showWriteIn"><img src="../../static/imgs/detail/writecomments.png" alt="" />&nbsp;写评论...</div></div>
			<div class="other">
				<ul>
					<li><img src="../../static/imgs/detail/share.png" alt="" /></li>
					<li><img src="../../static/imgs/detail/star.png" alt="" /></li>
					<li><img src="../../static/imgs/detail/comments.png" alt="" /><span class="count">66</span></li>
				</ul>
			</div>
		</div>
		<transition name="write">
			<div class="write-s-box" :class="{showwrite:showwrite}">
				<div class="write-s-con">
					<textarea  name="" rows="" cols="" placeholder="优质评论将会被优先展示" class="comment-body"></textarea>
					<a class="comment-submit rt">发布</a>
				</div>
			</div>
		</transition>
	</div>
	<!--</transition>-->
</template>

<script>
	import $ from 'n-zepto';
	import {headurl,com} from '../js/common.js'
	//import Home from '@/components/home'
	var content={
		template:'<div class="comments">8881231asasda</div>'
	}
	export default {
	  name: 'detail',
	  data () {
	    return {
	      title: '',
	      content:'',
	      id:'',
	      showwrite:true
	    }
	  },
	  components:{
	  	'content-c':content
	  },
	  mounted:function(){
	  	//console.log(com.home_detail_id);
	  	//查询详情页
	  	let the=this;
	  	var _id=com.home_detail_id;
	  	the.id=_id;
		var url=headurl+'/Edit_a_single',
			data={id:_id};
		$.post(url,data,function(res){
			//console.log(res);
			if(res.suc){
				the.title=res.rs.title;
				the.content=res.rs.con;
			}else{
				alert(res.msg);
			}
		});
	 },
	 methods:{
	 	showWriteIn:function(){
	 		this.showwrite=false;
	 		$('.write-s-box textarea').focus();
	 	},
	 	hideWriteIn:function(){
	 		this.showwrite=true;
	 	}
	 },
	 directives:{
	 	focus:{
	 		bind: function (el) {//inserted设置了会有问题。。。。
			    // 聚焦元素
			    el.focus()
			}
	 	}
	 }
	}
</script>

<style lang="scss" scoped="scoped" type="text/css">
	@import '../scss/detail.scss';
	
</style>
