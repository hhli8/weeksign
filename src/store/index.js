import Vue from 'vue'
import Vuex from 'vuex'
//import Home from '@/components/home'
Vue.use(Vuex)
const store = new Vuex.Store({
  	state: {
    	login:false,
    	x:66,
    	home:''
  	},
  	mutations:{//同步，修改状态的值
	    login:function(state,x){
			state.login=x.login_view_show;
			state.home=x;
		},
		add:function(state,x){
			
			state.x=1+state.x;
			x.x=state.x;
			state.home=x;
			//console.log(state.x);
		},
		back:function(state){
//			state.x--;
//			state.home.x=state.x;
			state.login=!state.login;
			state.home.login_view_show=state.login;
			state.home.headshow=true;
			state.home.headBgC=false;
			state.home.nameShow=false;
			state.home.setShow=false;
		}
	},
	modules:{
		
	},
	actions:{
		loginView({ commit }){
			commit('login');
		}
	}
});
export {store};
