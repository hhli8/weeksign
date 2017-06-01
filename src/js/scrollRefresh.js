export default function(options){
	let obj=document.querySelector(options.obj),
		objP=$(obj).parent(),
		start,
		end,
		length=0,
		drag=5,
		isCanDo=false,
		isLock=false,
		offset=options.h,
		fun=options.fun;
	var isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
		hasTouch = 'ontouchstart' in window && !isTouchPad;
	//方法
	let fn={
		//移动容器
		translate: function(diff) {
			obj.style.webkitTransform = 'translate3d(0,' + diff + 'px,0) translateZ(0px)';
			obj.style.transform = 'translate3d(0,' + diff + 'px,0) translateZ(0px)';
		},
		//设置效果时间
		setTransition: function(time) {
			obj.style.webkitTransition = 'all ' + time + 'ms';
			obj.style.transition = 'all ' + time + 'ms';
		},
		addEvent: function(element, event_name, event_fn) {
			if(element.addEventListener) {
				element.addEventListener(event_name, event_fn, false);
			} else if(element.attachEvent) {
				element.attachEvent('on' + event_name, event_fn);
			} else {
				element['on' + event_name] = event_fn;
			}
		},
		start:function(e){
			if(objP.scrollTop()<=0 && !isLock){
				isCanDo = true;
				isLock=true;
				start = hasTouch ? e.touches[0].pageY : e.pageY;
			}
		},
		move:function(e){ 
			if(objP.scrollTop()<=0 && isCanDo){
				end = hasTouch ? e.touches[0].pageY : e.pageY;
				if(start < end) {  
					e.preventDefault();
					fn.setTransition(0);
					length=(end - start) / drag;//阻力系数
					fn.translate(length);
				}
			}
		},
		end:function(e){
			if(isCanDo){
				isCanDo = false;
				fn.setTransition(500);
				if(length>=offset){
					//停留且请求接口
					fun();
					//if fun over 才执行settimeout里面的
					fn.translate(offset);
					objP.css({'overflow':'hidden'});
					setTimeout(function(){
						fn.translate(0);
						objP.css({'overflow':'auto'});
						isLock=false;
						length=0;
					},500);
				}else{
					fn.translate(0);
					isLock=false;
				}
			}
		}
	}
	fn.addEvent(obj, 'touchstart', fn.start);
	fn.addEvent(obj, 'touchmove', fn.move);
	fn.addEvent(obj, 'touchend', fn.end);
}