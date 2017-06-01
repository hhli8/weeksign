<template>
	<div class="detailPersonSet" >
		<header class="back">
			<router-link to="/myself/personset" class="back-a">
				<span class="back-icon"></span>{{xxx}}
			</router-link>
		</header>
		<span @click="back">返回</span>
		123231232312321
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return {
				xxx:''
			}
		},
		methods:{
			back:function(){
				window.location.href='#/myself/personset';	
			}
		}
	}
</script>


<style lang="scss" scoped="scoped" type="text/css">
	$c_d:#ddd;
	$back:#8f8f94;
	$c_bg:#F3F3F3;
	$c_f:#fff;
	.detailPersonSet{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
        background:$c_bg;
        z-index:1100;
    }
    header.back{
	    padding: 0 15px;
	    height: 41px;
	    width:100%;
	    border-bottom: 1px solid $c_d;
	    top: 0;
	    z-index: 1000;
	    box-sizing: border-box;
	    position: absolute;
	    background: $c_f;
	    .back-a{
	        height: 100%;
	        line-height: 40px;
	        display: inline-block;
	        position: relative;
	        font-size: 1.5rem;
	        padding-left: 22px;
	        color:$back;
	        .back-icon{
	            height: 26px;
	            width:26px;
	            position: absolute;
	            top:50%;
	            left:0;
	            transform: translateY(-50%);
	            display: inline-block;
	            background: url(../../static/imgs/back_d.png);
	            background-size: 100%;
	        }
	    }
	}
</style>