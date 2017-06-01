import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Home from '@/components/home'
import Activity from '@/components/activity'
import nav from '@/components/nav'
import Group from '@/components/group'
import Fun from '@/components/fun'  
import Myself from '@/components/myself' 
import Detail from '@/components/detail'
//import Login from '@/components/login-view'
//import myself from '@/components/myself'
import Set from '@/components/set'
import personSet from '@/components/personSet'  
import detailPersonSet from '@/components/personSetDetail'

Vue.use(Router)

export default new Router({
//	scrollBehavior: function (to, from, savedPosition) {
//		console.log(savedPosition);
//		if (savedPosition) {
//		    return savedPosition
//		} else {
//		    return { x: 200, y: 200 }
//		}
//	},
//	base: __dirname,
//	mode: 'history',
  	routes: [
	    {
	      path: '/',
	      name: 'Home',
	      components: {
	      	default:Home,
	      	nav:nav,
	      	//detail:Detail
	      }
	    },
	    {
	      path: '/group',
	      name: 'group',
	      components: {
	      	default:Home,
	      	nav:nav
	      }
	    },
		  {
		    path: '/fun',
		    name: 'fun',
		    components: {
		    	default:Home,
		    	nav:nav
		    }
		  },
		  {
		    path: '/activity', 
	    	name: 'activity', 
	    	components:{
	    		default:Home,
	    		nav:nav
	    	}
		  },
		  {
		    path: '/myself',
		    name: 'myself',
		    components: {
		    	default:Home,
		    	nav:nav
		    },
		    children:[
		    	{
		    		path: '/login'//,
          			//component: Login
		    	},
		    	{
		    		path:'/set'//,
//		    		components: {
//				    	default:Home,
//				    	nav:nav,
//				    	myselfSet:Set
//				    }
		    	}
		    ]
		  },
		  {
		  	path: '/myself/set',
		  	name: 'myself_set',
		  	components: {
		    	default:Home,
		    	nav:nav,
		    	myselfSet:Set
		    }
		  },
		  {
		  	path: '/myself/personset',
		  	name: 'myself_per',
		  	components: {
		    	default:Home,
		    	nav:nav,
		    	myselfSet:personSet
		    },
		    children:[
		    	{
		    		path: '/myself/personset/detailSet',
			    	name: 'myself_per_detail',
			    	components: {
			    		detailPersonSet:detailPersonSet
			    	}
		    	}
		    ]
		  },
//		  {
//		  	path: '/myself/personset/detailSet',
//		  	name: 'myself_per_detail',
//		  	components: {
//		  		personSetDetail:detailPersonSet
////		    	default:Home,
////		    	nav:nav,
////		    	myselfSet:personSet
//		    }
//		  },
		  {
		    path: '/detail',
		    name: 'detail',
		    components: {
		    	default:Home,
		    	nav:nav,
		    	detail:Detail
		    }
		  }
	    
	//  	,
	//  	beforeEnter:('','','')=>{
	//  		console.log(1);
	//  	}
	    //}
  	]
})
