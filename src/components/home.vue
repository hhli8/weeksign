<template>
	<div id="pageViewBox">
		<transition name="fadeLogin">
			<div class="badWarn" v-show="badWarnShow">{{badWarnText}}</div>
		</transition>
		
		<!--<keep-alive>-->
		<div class="pageView home" :class="{act:act}" v-on:scroll="homeUlScroll" :page="page" :isend="isEnd" :total='pageCount'>
			<!--好的1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>  asdhj技术-->                          
			<!--<a href="#/activity">活动</a>-->
			<div id="refresh">
				<img src="../../static/imgs/295548725546658470.jpg" alt="" />
			</div>
			<ul>
				<!--<li>
					<div class="title">啊实打实大声道asdasdasda啊实打实大声道啊实打实大撒啊实打实大啊实打实大法规和法国干活法规和法国股份的风格的</div><div class="img"><img src="../assets/logo.png" alt="" /></div>
				</li>
				<li>
					<div class="title">啊实打实大声道</div><div class="img"><img src="../assets/logo.png" alt="" /></div>
				</li>-->
				<li v-for="(item,index) in homeLists" v-on:click="to_detail(item.id)" :id_="item._id">
					
					<div class="title">{{item.title}}</div><div class="img"><img :src="imgSrc" alt="" /></div>
					<!--imgSrc-->
				</li>
				<!--<router-link tag="li" to="/about" v-for="(item,index) in homeLists" v-on:click="to_detail">
				  <div class="title">{{item.title}}</div><div class="img"><img :src="imgSrc" alt="" /></div>
				</router-link>-->
			</ul>
			<!--<detail></detail>-->
			<!--<router-view name="home_detail"></router-view>-->
		</div>
		<!--</keep-alive>-->
		<!--<div class="pageView group"></div>-->
		<div class="pageView group">
			group好的1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>  asdhj技术                          
			<a href="#/activity">活动</a>
		</div>
		<div class="pageView fun">
			fun好的1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>  asdhj技术                          
			<a href="#/activity">活动</a>
		</div>
		<div class="pageView activity">
			activity好的1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>1231wdasdasda<br/>  asdhj技术                          
			<a href="#/activity">活动</a>
		</div>
		<div class="pageView myself">
			
			<div id="myself">
				<div class="head" :class="{logined:headBgC}">
					<div class="login-in" @click="login_view_show=!login_view_show" v-show="headshow">登录</div>
					<div class="header-pic" v-show="!headshow"></div>
					<div class="name" v-show="nameShow"><span class="nick" v-on:click="toPsersonSet">lihaih <span class="to-person-set"></span></span></div>
				</div>
				<!--<router-link :to="">-->
					<div class="set" v-on:click="toSet" v-show="setShow"></div>
				<!--</router-link>-->
			</div>
			<div class="my-lists">
				<ul>
					<li v-for="(item,index) in mylists" :class="item.cla" v-on:click="toMyselfLists(index)"><div class="logo"><img :src="item.logo" alt="" /></div> {{item.n}}<span class="other">{{item.other}}</span><span class="right"></span></li>
				</ul>
			</div>
			<!--<login-view></login-view>-->
			<!--<router-view name="login_view"></router-view>-->
			<transition name="fadeLogin">
				<div id="login-view" v-show="login_view_show">
					<div class="header">周签<span class="back" v-on:click="login_view_show=!login_view_show">×</span></div>
					<p class="line"></p>
					<div class="ul-box">
						<div class="login-box" v-show="ulBoxLogin">
							<ul >
								<li class="switch">
									<span>没有账号</span> <a class="t-login" v-on:click="registerboxShow"> 在此注册</a>
								</li>
								<li>
									<input value="" type="text" class="ipt-n phone-l" placeholder="手机号" v-on:keyup="phone_login" ref="phone_l"/>
									<b class="alert" :class="{s: alert_phone_l }">!</b>
								</li>
								<li>
									<input value="" type="password" class="ipt-n psd-l" placeholder="密码" v-on:focus="password_l" ref="psd_l" v-on:keyup="psd_login"/>
									<b class="alert" v-bind:class="{s: alert_psd_l }">!</b>
								</li>
								<li>
									<button class="do-login btn-r" v-on:click="do_login">登&nbsp;&nbsp;录</button>
								</li>
								<li>
									<div class="forget"><span class="c" v-on:click="login_to_g">忘记密码?</span></div>    
								</li>
								<li class="other-login">
									<a class="wx"></a>
									<a class="qq"></a>
									<a class="wb"></a>
								</li>
							</ul>
							<p class="other-login-note"><span>使用其他登录方式</span></p>
						</div>
						<div class="register-box " v-show="ulBoxRegister">
							<ul>
								<li class="switch">
									<span>已有账号</span> <a class="t-login" v-on:click="loginboxShow"> 在此登录</a>
								</li>
								<li>
									<input type="text" class="ipt-n phone-r" placeholder="手机号" v-on:keyup="phone_reg" ref="phone_r"/>
									<b class="alert" v-bind:class="{s: alert_phone_r }">!</b>
								</li>
								<li>
									<input type="password" class="ipt-n psd-r1" placeholder="密码" v-on:keyup="psd_reg1" v-on:focus="password_r1" ref="psd_r1"/>
									<b class="alert" v-bind:class="{s: alert_psd_r1 }">!</b>
								</li>
								<li>
									<input type="password" class="ipt-n psd-r2" placeholder="确认密码" v-on:keyup="psd_reg2" v-on:focus="password_r2" ref="psd_r2"/>
									<b class="alert" v-bind:class="{s: alert_psd_r2 }">!</b>
								</li>
								<li>
									<input type="text" class="ipt-n code" placeholder="验证码" v-on:focus="code_focus" v-on:keyup="code_in" ref="code"/>
									<button class="getCode btn-r rt" v-on:click="code_get">获取验证码</button>
									<b class="alert" v-bind:class="{s: alert_code }">!</b>
								</li>
								<li>
									<button class="do-register btn-r" v-on:click="do_register">同意协议并注册</button>
								</li>
								<li>
									<a href="" class="agr">《用户注册协议》</a>
								</li>
							</ul>
						</div>
						<div class="getback-psd-box " v-show="ulBoxGetback">
							<ul>
								<li class="switch"><a>找回密码</a> <span v-on:click="loginboxShow">返回登录</span></li>
								<li>
									<input type="text" class="ipt-n phone-back" placeholder="手机号" v-on:keyup="phone_g_keyup" ref="phone_g"/>
									<b class="alert" :class="{s:alert_phone_g}">!</b>
								</li>
								<li>
									<input type="password" class="ipt-n psd-r1" placeholder="新密码" v-on:keyup="psd_g_keyup1" v-on:focus="password_g1" ref="psd_g1"/>
									<b class="alert" v-bind:class="{s: alert_psd_g1 }">!</b>
								</li>
								<li>
									<input type="password" class="ipt-n psd-r2" placeholder="确认新密码" v-on:keyup="psd_g_keyup2" v-on:focus="password_g2" ref="psd_g2"/>
									<b class="alert" v-bind:class="{s: alert_psd_g2 }">!</b>
								</li>
								<li>
									<input type="text" class="ipt-n code" placeholder="验证码" v-on:focus="code_focus_g" v-on:keyup="code_in_g" ref="code_g"/>
									<button class="getCode btn-r rt" v-on:click="code_get_g">获取验证码</button>
									<b class="alert" v-bind:class="{s: alert_code_g }">!</b>
								</li>
								<li>
									<button class="do-getback btn-r" v-on:click="do_getback">确定</button>
								</li>
							</ul>
						</div>	
					</div>
				</div>
			</transition>
			<myself></myself>
			<!--<router-view name="myself"></router-view>-->
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
//	import { mapGetters, mapActions } from 'vuex'
	import { mapGetters } from 'vuex'
	
	import Router from 'vue-router'
	import { store } from '../store';
	import $ from 'n-zepto'
//	import $ from 'jquery'
	import {headurl,com} from '../js/common.js'
//	import Detail from './detail'
	import scroll from '../js/scrollRefresh.js'
	//import Login from '@/components/login-view'
	let myself={
		template:'<div class="comments"></div>'
	};
//	import myself from '@/components/myself'
	Vue.use(Router)
//	let badWarn=new Vue({
//		data:{
//			
//		}
//	});
	//export default {
	let Home={ 
//	  vuex:{
//	  	state: {
//	        login_view_show: state => state.login_view_show
//	    }
//	  },
	 // props:['viewData'],
	  name: 'home',
	  data () {
	    return {
		      msg: 'Welcome',
		      scroll:0,
		      act:true,
		      homeLists:[
		      	{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'},{title:'啊实打实大声道'}           
		      ],
		      imgSrc:'http://p1.so.qhimgs1.com/bdr/_240_/t0128a0a3f1606ca1dd.jpg',
		      page:0,
		      isEnd:false,
		      pageCount:0,
		      refreshCount:0,
		    //x:store.state.x,
	      	//login_view_show:false,   //false,   318，371，51，67，68
	      	login_view_show:store.state.login,
	      	//login_view_show:true,
	      	ulBoxLogin:true,
			ulBoxRegister:false,
			ulBoxGetback:false,
	      	headshow:true ,       //true,
	      	alert_phone_l:false,
			alert_psd_l:false,
			alert_phone_r:false,
			alert_psd_r1:false,
			alert_psd_r2:false,
			alert_code:false,
			alert_phone_g:false,
			alert_psd_g1:false,
			alert_psd_g2:false,
			alert_code_g:false,
			badWarnShow:false,
			badWarnText:'',
			mylists:[
				{n:'声望',cla:'sw',other:'',logo:'../../static/imgs/self/lists/power.png'},//
				{n:'签豆',cla:'qd',other:'',logo:'../../static/imgs/self/lists/conts.png'},//任务-可消耗
				{n:'余额',cla:'balance',other:'',logo:'../../static/imgs/self/lists/money.png'},//现金
				{n:'收藏',cla:'collect',other:'',logo:'../../static/imgs/detail/star.png'},//主页文章
				{n:'喜欢',cla:'like',other:'',logo:'../../static/imgs/self/lists/like.png'},//小组帖子
				{n:'文章',cla:'article',other:'',logo:'../../static/imgs/self/lists/article.png'},
				{n:'意见反馈',cla:'advice',other:'',logo:'../../static/imgs/self/lists/advice.png'}
			],
			headBgC:false ,           //false,//头部背景
			nameShow:false ,         //false,//头部名称
			setShow:false,           //false //头部设置
			login:111
	    }
	  },
	  components:{
//	  	'myself':myself
		myself:myself
	  },
//	  computed:{
//	  	...mapGetters({
//	      //products: 'cartProducts',
//	      //checkoutStatus: 'checkoutStatus'
//	    })
//	  },
	  methods:{
	  	returnLogin:function(){
	  		//this.$store.dispatch('increment')
	  		console.log(this.login_view_show);
	  	},
	  	badWarnHide:function(x){  
	  		if(!this.badWarnShow){
	  			this.badWarnShow=true;
				this.badWarnText=x;
				var the=this;
				var a=1;
				$('.badWarn').css('opacity',a);
				setTimeout(function(){
					var t=setInterval(function(){
						a=a-0.03;
						$('.badWarn').css('opacity',a);
						if(a<=0){clearInterval(t);the.badWarnShow=false;}
					},20);
				},1000);
	  		}
	  	},
	  	homeUlScroll:function(){
	  		let home=$('.home');
	  		let t=$('.home ul').height(),
	  			s=home.scrollTop(),
	  			h=home.height();
	  		let c=t-h-s+43;
	  		//console.log(c);   
	  		if(c<=200){
	  			//请求
	  			if(!this.isEnd){
		  			let next=this.page+1;
		  			var out=homecom.loadArticles(next,10,this.pageCount);
		  			//console.log(out);
		  			if(out.suc){
		  				this.homeLists=this.homeLists.concat(out.rs);
		  				if(out.rs.length<10){
		  					//class  isEnd
		  					this.isEnd=true;
		  				}
		  				this.page+=1;
		  			}else{
		  				alert('请求失败');
		  			}
	  			}
	  		}
		},
		to_detail:function(id){
			//console.log(id);
			//console.log(99);
			//$('.detail').show();
			
			com.home_detail_id=id;
			window.location.href="#/detail";
			//如何将改值传到detail
//			var home_router=new Router({
//				routes:[
//					{
//						path: '/detail',
//					    name: 'detail',
//					    components: {
//					      	home_detail:Detail
//					    }
//					}
//				]
//			});
		},
		//**************************************login-start
		login_:function(phone,psd){//自动登录
			var url=headurl+'/login.hhl',
				data={phone:phone,psd:psd};
			var out=com.ajax(url,data,'post'); 
			if(out!='error'){
				if(out.suc){
					this.login_view_show=false;
					this.headshow=false;
					var obj=out.res;
					localStorage.setItem('tenAccount',JSON.stringify(data));
					this.headBgC=true;
					this.nameShow=true;
					this.setShow=true;
				}else{
					this.badWarnHide(out.msg+'!');
				}
			}else{
				this.badWarnHide('请求出错');
			}
		},
		loginboxShow:function(){
			this.ulBoxLogin=true;
			this.ulBoxRegister=false;
			this.ulBoxGetback=false;
		},
		registerboxShow:function(){
			this.ulBoxLogin=false;
			this.ulBoxRegister=true;
		},
		phone_login:function(){  //号码输入
			var phone=this.$refs.phone_l.value;
			if(com.isPhone(phone))this.alert_phone_l=false;
		},
		password_l:function(){  //密码聚焦
			var phone=this.$refs.phone_l.value;  
			if(!com.isPhone(phone))this.alert_phone_l=true;
		},
		psd_login:function(){  //密码输入
			var psd=this.$refs.psd_l.value;
			if(com.psdOk(psd)){this.alert_psd_l=false;}
		},
		do_login:function(){//登录
			var phone=this.$refs.phone_l.value,
				psd=this.$refs.psd_l.value;
			if(!com.isPhone(phone)){this.alert_phone_l=true;return;}
			if(!com.psdOk(psd)){this.alert_psd_l=true;return;}
			//先检测是否注册
			var url=headurl+'/isRegistered',
				data={phone:phone};
			var out=com.ajax(url,data,'post');//console.log(out);
			if(out.suc && out.res){
				this.badWarnHide('该号码尚未注册');
			}else{
				var url=headurl+'/login.hhl',
					data={phone:phone,psd:psd};
				var out=com.ajax(url,data,'post'); //console.log(out);
				if(out!='error'){
					if(out.suc){
						//登录成功，跳转页面，缓存登录信息
						this.login_view_show=false;
						this.headshow=false;
						var obj=out.res;
						localStorage.setItem('tenAccount',JSON.stringify(data));
						this.headBgC=true;
						this.nameShow=true;
						this.setShow=true;
						this.$refs.phone_l.value='';
						this.$refs.psd_l.value='';
					}else{
						this.badWarnHide(out.msg+'!');
					}
				}else{
					this.badWarnHide('请求出错');
				}
			}
		},
		//注册
		phone_reg:function(){  //号码输入
			var phone=this.$refs.phone_r.value; 
			if(com.isPhone(phone)){
				this.alert_phone_r=false;
				//检测有无注册
				var url=headurl+'/isRegistered',
					data={phone:phone};
				var out=com.ajax(url,data,'post');//console.log(out);
				if(out.suc && !out.res){
					this.badWarnHide('该号码已注册');
					this.alert_phone_r=true;
				}
			}	
		},
		password_r1:function(){  //密码1聚焦
			var phone=this.$refs.phone_r.value;  
			if(!com.isPhone(phone))this.alert_phone_r=true;
		},
		psd_reg1:function(){  //密码1输入
			var psd1=this.$refs.psd_r1.value;
			if(com.psdOk(psd1)){this.alert_psd_r1=false;}
		},
		password_r2:function(x,y,z){   //密码2聚焦
			var phone=this.$refs.phone_r.value;  
			if(!com.isPhone(phone)){this.alert_phone_r=true;return;}
			var psd1=this.$refs.psd_r1.value;
			if(!com.psdOk(psd1)){this.alert_psd_r1=true;this.badWarnHide('密码为6~12位，包括大小写字母、数字与下划线');return;}
			var psd2=this.$refs.psd_r2.value;
			if(x=='code_focus'){
				if(!com.psdOk(psd2)){this.alert_psd_r2=true;this.badWarnHide('密码为6~12位，包括大小写字母、数字与下划线');return;}
				if(psd1!=psd2){this.alert_psd_r2=true;this.badWarnHide('两次密码不匹配');return;}
			}
			if(y=='getcode'){//此时验证手机号码是否已验证
				var url=headurl+'/isRegistered',data={phone:phone};
				var out=com.ajax(url,data,'post');  //console.log(out); 
				if(out!='error'){      
					//ok--请求成功-数据可能错误
					if(out.suc){  
						if(out.res){  //==1未注册
							//操作发送验证码
							var wait=60;
					        function time(o){
					        	if(wait==0){
					        		o.removeAttr("disabled");
					        		o.text("获取验证码");
					        	}else{
					        		o.attr("disabled",true);
					        		o.text("重新发送("+wait+")");
					        		wait--;
					        		setTimeout(function(){time(o)},1000);
					        	}
					        }
					        time($('.register-box .getCode'));
						}else{
							this.badWarnHide('该手机号已注册');
							this.alert_phone_r=true;
							return;
						}
					}else{ 
						this.badWarnHide(out.msg+'!');//后台不给!号，有！表示后台的，无！都是前端提示
					}
				}else{
					//出错-服务器--统一
					this.badWarnHide('请求出错');
				}
			}
			if(z=='do_register'){
				var code=this.$refs.code.value;
				if(!code){this.alert_code=true;this.badWarnHide('请输入验证码');return;}
				var url=headurl+'/isRegistered',data={phone:phone};
				var out=com.ajax(url,data,'post');  //console.log(out); 
				if(out!='error'){
					if(out.suc){  
						if(out.res){
							//******
							var url=headurl+'/register',
								data={
									phone:phone,
									psd:psd2,
									code:code
								};
							var out=com.ajax(url,data,'post'); //console.log(out);
							if(out!='error'){
								//ok--请求成功-数据可能错误
								if(out.suc){
									//注册成功，提示，跳转到登录或直接登录，到个人中心
									this.badWarnHide('注册成功'); 
									this.$refs.phone_l.value=phone;
									this.$refs.psd_l.value=psd2;
									//this.toggle();
									this.loginboxShow();
									//var html='<div id="waiting"><div class="circle-box"><b class="circle"></b><b class="circle"></b><b class="circle"></b></div>';
									//$('body').append(html);
									var the=this;
									setTimeout(function(){
										//登录--自动
										//选择是否记住密码，无需自动登录
										the.$refs.phone_l.value='';
										the.$refs.psd_l.value='';
										the.$refs.code.value='';
										the.$refs.phone_r.value='';
										the.$refs.psd_r1.value='';
										the.$refs.psd_r2.value='';
										the.login_(phone,psd2);
									},2000);
								}else{
									this.badWarnHide(out.msg+'!');
								}
							}else{
								//出错-服务器--统一
								this.badWarnHide('请求出错');
							}
							//*******
						}else{
							this.badWarnHide('该手机号已注册');
							return;
						}
					}else{ 
						this.badWarnHide(out.msg+'!');
					}
				}else{
					this.badWarnHide('请求出错');
				}	
			}
		},
		psd_reg2:function(){   //密码2输入
			var psd2=this.$refs.psd_r2.value;
			if(com.psdOk(psd2)){this.alert_psd_r2=false;}
			var psd1=this.$refs.psd_r1.value;
			if(psd1==psd2){this.alert_psd_r2=false;}
		},
		code_focus:function(){   //验证码聚焦
			this.password_r2('code_focus');
		},
		code_in:function(){    //验证码输入--输入为纠错--简单验证不为空就好
			var code=this.$refs.code.value;
			if(code){this.alert_code=false;}//验证还需处理线上
		},
		code_get:function(){  //验证码点击
			this.password_r2('code_focus','getcode');
		},
		do_register:function(){  //注册
			this.password_r2('code_focus','','do_register');
		},
		//登录-----找回密码---
		login_to_g:function(){
			this.ulBoxLogin=false;
			this.ulBoxGetback=true;
		},
		//找回密码
		phone_g_keyup:function(){  //号码输入
			var phone=this.$refs.phone_g.value; 
			if(com.isPhone(phone))this.alert_phone_g=false;
		},
		password_g1:function(){  //密码1聚焦
			var phone=this.$refs.phone_g.value;  
			if(!com.isPhone(phone))this.alert_phone_g=true;
		},
		psd_g_keyup1:function(){  //密码1输入
			var psd1=this.$refs.psd_g1.value;
			if(com.psdOk(psd1)){this.alert_psd_g1=false;}
		},
		password_g2:function(x,y,z){   //密码2聚焦
			var phone=this.$refs.phone_g.value;  
			if(!com.isPhone(phone)){this.alert_phone_g=true;return;}
			var psd1=this.$refs.psd_g1.value;
			if(!com.psdOk(psd1)){this.alert_psd_g1=true;this.badWarnHide('密码为6~12位，包括大小写字母、数字与下划线');return;}
			var psd2=this.$refs.psd_g2.value;
			if(x=='code_focus'){
				if(!com.psdOk(psd2)){this.alert_psd_g2=true;this.badWarnHide('密码为6~12位，包括大小写字母、数字与下划线');return;}
				if(psd1!=psd2){this.alert_psd_g2=true;this.badWarnHide('两次密码不匹配');return;}
			}
			if(y=='getcode'){//此时验证手机号码是否已验证
				var url=headurl+'/isRegistered',data={phone:phone};
				var out=com.ajax(url,data,'post');  //console.log(out); 
				if(out!='error'){      
					//ok--请求成功-数据可能错误
					if(out.suc){  
						if(out.res){  //==1未注册
							this.badWarnHide('该手机号尚未注册');
						}else{
							var wait=60;
					        function time(o){
					        	if(wait==0){
					        		o.removeAttr("disabled");
					        		o.text("获取验证码");
					        	}else{
					        		o.attr("disabled",true);
					        		o.text("重新发送("+wait+")");
					        		wait--;
					        		setTimeout(function(){time(o)},1000);
					        	}
					        }
					        time($('.getback-psd-box .getCode'));
						}
					}else{ 
						this.badWarnHide(out.msg+'!');//后台不给!号，有！表示后台的，无！都是前端提示
					}
				}else{
					//出错-服务器--统一
					this.badWarnHide('请求出错');
				}
			}
			if(z=='do_getback'){
				var code=this.$refs.code_g.value;
				if(!code){this.alert_code_g=true;this.badWarnHide('请输入验证码');return;}
				var url=headurl+'/isRegistered',data={phone:phone};
				var out=com.ajax(url,data,'post');  //console.log(out); 
				if(out!='error'){
					if(out.suc){  
						if(!out.res){//重设密码
							//******
							var url=headurl+'/getback_psd',
								data={
									phone:phone,
									psd:psd2,
									code:code
								};
							var out2=com.ajax(url,data,'post'); //console.log(out2);return;
							if(out2!='error'){
								//ok--请求成功-数据可能错误
								if(out2.suc){
									//注册成功，提示，跳转到登录或直接登录，到个人中心
									this.badWarnHide('修改成功'); 
									//回复初始化
									this.$refs.phone_g.value='';
									this.$refs.psd_g1.value='';
									this.$refs.psd_g2.value='';
									this.$refs.code_g.value='';
									//****
									this.$refs.phone_l.value=phone;
									this.$refs.psd_l.value=psd2;
									this.loginboxShow();
									//var html='<div id="waiting"><div class="circle-box"><b class="circle"></b><b class="circle"></b><b class="circle"></b></div>';
									//$('body').append(html);
									var the=this;
									setTimeout(function(){
										the.login_(phone,psd2);
									},2000);
								}else{
									this.badWarnHide(out2.msg+'!');
								}
							}else{
								//出错-服务器--统一
								this.badWarnHide('请求出错');
							}
							//*******
						}else{
							this.badWarnHide('该手机号尚未注册');
							return;
						}
					}else{ 
						this.badWarnHide(out.msg+'!');
					}
				}else{
					this.badWarnHide('请求出错');
				}	
			}
		},
		psd_g_keyup2:function(){   //密码2输入
			var psd2=this.$refs.psd_g2.value;
			if(com.psdOk(psd2)){this.alert_psd_g2=false;}
			var psd1=this.$refs.psd_g1.value;
			if(psd1==psd2){this.alert_psd_g2=false;}
		},
		code_focus_g:function(){   //验证码聚焦
			this.password_g2('code_focus');
		},
		code_in_g:function(){    //验证码输入--输入为纠错--简单验证不为空就好
			var code=this.$refs.code_g.value;
			if(code){this.alert_code_g=false;}
		},
		code_get_g:function(){  //验证码点击
			this.password_g2('code_focus','getcode');
		},
		do_getback:function(){  //提交
			this.password_g2('code_focus','','do_getback');
		},
		//*******************************login-over
		//SET
		toSet:function(){
      //this.$store.commit('login',this.login);
      		//console.log(this.login);
      		//console.log(store.state.dd);
      		//console.log(this.login_view_show);
      		//console.log(this.x);//66
      		this.$store.commit('login',this);//login_view_show
      		//this.x=store.state.x;
      		//console.log(this.x);//67
			window.location.href='#/myself/set';
		},
		toPsersonSet:function(){
			//console.log(33);
			window.location.href='#/myself/personset';
		},
		toMyselfLists:function(x){
			if(localStorage.tenAccount){
				console.log(12231);
			}else{
				this.badWarnHide('请先登录');
			}
		}
	  },
	  beforeCreate:function(){
	  	//console.log(this.msg+'2');//undefined
	  	//this.msg='2222';//无效
	  	//可以做哪些事情？
//	  	$.ajax({
//	  		type:'POST',
//	  		url:headurl+'/login.hhl',
//	  		data:{'phone':'15958980873','psd':123456},
////	  		url:headurl+'/getHomeLists',
////	  		data:{'page':1,'lists':5},
//	  		success:function(res){
//	  			console.log(res);
//	  		},
//	  		error:function(err){
//	  			throw  err;
//	  		}
//	  	});
		
	  },
	  created:function(){
	  	let the=this;
	  	//this.$store.dispatch('getAllProducts');
	  	//this.login_view_show=state.login;
//	  	$.ajax({
//	  		type:'GET',
//	  		url:'http://lovestreet.leanapp.cn/zhihu/news/latest',
//	  		data:{},
//	  		success:function(res){
//	  			console.log(res);
//	  			the.msg='2222';  //异步时慢，后执行，updata
//	  			//console.log(the.msg);
//	  			//console.log(the.homeLists.length);
//	  			the.homeLists=the.homeLists.concat(res.stories);
//	  			console.log(the.homeLists);
//	  			var d=new Date();
//	  			console.log(Date.parse(d)/1000-24*3600);
//	  			var x=Date.parse(d)/1000-24*3600;
//	  			var o=com.timeTrans(x); console.log(o);
//	  		},
//	  		error:function(err){
//	  			//console.log(err);
//	  		}
//	  	});
	  	//console.log(this.scroll);//要是切换过来的，不可以是。。。。。
//	  	$.ajax({
//	  		type:'GET',
//	  		url:headurl+'/get_homelists',
//	  		data:{},
//	  		success:function(res){
//	  			console.log(res);
//	  			the.homeLists=[];
//	  		},
//	  		error:function(err){
//	  			throw err;
//	  		}
//	  	});
	  },
	  mounted:function(){
	  	this.homeLists=[];
		var arr=homecom.loadArticles(0,10,''); //console.log(arr);
		if(arr.suc){
			this.homeLists=this.homeLists.concat(arr.rs);
			this.pageCount=arr.total;
			this.refreshCount=arr.total;
			if(arr.rs.length<10){
				this.isEnd=true;
			}
		}else{
			//请求失败
		}
		//下拉刷新
		let the=this;
		scroll({
			obj:'.home ul',
			h:36,
			fun:function(){
				//刷新---数据加载时从后往前加载，记录总量，刷新时判断？=，！=则将新增加的添加到ul头部
				var url=headurl+'/Edit_a_refresh',
					data={count:the.refreshCount};
				var out=com.ajax(url,data,'post');//console.log(out);
				if(out.suc){
					the.homeLists=out.rs.concat(the.homeLists);
					the.refreshCount=out.refreshCount;
				}else{
					alert('刷新失败');
				}
				return false;
			}
		});
//		scroll({
//				container: ".home",
//				next: function(e) {
//					//松手之后执行逻辑,ajax请求数据，数据返回后隐藏加载中提示
//					var that = this;
//					setTimeout(function() {
//						that.back.call();
//					}, 2000);
//				}
//		});
		//默认登录
		//console.log(localStorage);
		if(localStorage.tenAccount){
			//var tenAccount=JSON.parse(localStorage.tenAccount);
			this.headshow=false;
			this.headBgC=true;
			this.nameShow=true;
			this.setShow=true;
		}
		//var x=this.returnLogin();console.log(x);
		//this.login_view_show=state.login;
	  },
	  
	  beforeUpdate:function(){
	  	//console.log('beforeUpdate');
	  },
	  updated:function(){
	  	//console.log('updated');
	  }//,
//	  computed:{
//	  	...mapGetters([
////	      	'doneTodosCount',
////	      	'anotherGetter'
//	    ])
//	  }
	}
	export default Home
	const home=new Router({
		
//		scrollBehavior (to, from, savedPosition) {
//		    // return 期望滚动到哪个的位置
//		}
	});
	//滚动监听
//	$('.home ul').scroll(function(){
//		console.log(this.height());
//		console.log(this.scrollTop());
//	});
	let homecom={
		loadArticles:function(page,len,total){
			var url=headurl+'/Edit_a_get',
				data={page:page,length:len,total:total};
			return com.ajax(url,data,'post');
		},
		refresh:function(){
			
		}
	}
	
</script>

<style lang="scss" scoped="scoped" type="text/css">
	@import '../scss/pageView.scss';
	@import '../scss/home.scss';
	@import '../scss/myself.scss';
	.fadeLogin-enter-active, .fadeLogin-leave-active {
	  transition: opacity .3s
	}
	.fadeLogin-enter, .fadeLogin-leave-active {
	  opacity: 0
	}
</style>