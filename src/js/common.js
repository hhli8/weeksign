const headurl='http://127.0.0.1:3000';
const com={
	data:{
		//login_view_show:false,
//		headshow:true,
//		headBgC:false,//头部背景
//		nameShow:false,//头部名称
//		setShow:false //头部设置
	},
	timeTrans:function(time){//时间戳=》20170911
		var Time=new Date();
		if(time)Time.setTime(time* 1000);
		var year=Time.getFullYear(),
			month=Time.getMonth()+1,
			day=Time.getDate(),
			hours=Time.getHours(),
			minute=Time.getMinutes(),
			seconds=Time.getSeconds();
		if(month<10)month='0'+month;
		if(day<10)day='0'+day;
		if(hours<10)hours='0'+hours;
		if(minute<10)minute='0'+minute;
		if(seconds<10)seconds="0"+seconds;
		//return year+"-"+month+"-"+day+' '+hours+":"+minute+":"+seconds;
		return year+''+month+day
	},
	ajax:function(url,data,type){//同步
		var out;
		$.ajax({
			url:url,
			data:data,
			type:type,
			async:false,
			success:function(res){
				out=res;
			},
			error:function(res){
				out="error";
			}
		});
		return out;
	},
	isPhone:function(phone){
		if (!/^(\+86)?[1][34578]\d{9}$/.test(phone))return false;return true;
	},
	psdOk:function(psd){
		if(!/^[\w]{6,12}$/.test(psd))return false;return true;
	}
}
export {headurl,com}
