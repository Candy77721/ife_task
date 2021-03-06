// JavaScript Document
//全局变量，统计格式正确表单的数量
var textCorrect = 0;
window.onload=function(){
	//获取dom对象
	var tName=document.getElementById("tName");
	var hName = document.getElementById("hName");
	var tPassword=document.getElementById("tPassword");
	var hPassword = document.getElementById("hPassword");
	var tPassword1=document.getElementById("tPassword1");
	var hPassword1 = document.getElementById("hPassword1");
	var tEmail=document.getElementById("tEmail");
	var hEmail = document.getElementById("hEmail");
	var tTel=document.getElementById("tTel");
	var hTel = document.getElementById("hTel");
    //正则
	var sReg=/[^\x00-\xff]/ig;//4~16字符正则表达式匹配
	var eReg=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/ ;//邮箱正则表达式匹配
	var telReg=/^(1)(\d{10})$/;
	
    //聚焦
	tName.onfocus=function(){
	   hName.innerHTML="必填，长度为4~16个字符";
	   hName.style.color="#a8a8a8";
	};
	/*名称部分*/ 
	//失去焦点
	tName.onblur=function(){
		var tNameText=document.getElementById("tName").value;
		var cArr = tNameText.match(sReg); 
	    var nameLen=tNameText.length + (cArr == null ? 0 : cArr.length); 
		if(tNameText==''||tNameText==null||tNameText==undefined){
			hName.innerHTML="名称不能为空";//为标签里面添加内容
			hName.style.color="#ff0301";
			tName.style.borderColor="#ff0301";
		}else if(nameLen>=4&&nameLen<=16){
			hName.innerHTML="名称可用";
			hName.style.color="#5bb543";
			tName.style.borderColor="#5bb543";
			textCorrect +=1;
		}
		else{
			hName.innerHTML="名称格式错误";
			hName.style.color="#ff0301";
			tName.style.borderColor="#ff0301";
		}
	 };	 
    /*密码部分*/
	//聚焦
	tPassword.onfocus=function(){
		hPassword.innerHTML="必填，长度为4~16个字符";
		hPassword.style.color="#a8a8a8";
	 };
	 //失去焦点
	 tPassword.onblur=function(){
		 var tPasswordText=document.getElementById("tPassword").value;
		 var cArr = tPasswordText.match(sReg); 
		 var passLen=tPasswordText.length + (cArr == null ? 0 : cArr.length); 
		 if(tPasswordText==''||tPasswordText==null||tPasswordText==undefined){
			hPassword.innerHTML="密码不能为空";//为标签里面添加内容
			hPassword.style.color="#ff0301";
			tPassword.style.borderColor="#ff0301";
		 }else if(passLen>=4&&passLen<=16){
			hPassword.innerHTML="密码可用";
			hPassword.style.color="#5bb543";
			tPassword.style.borderColor="#5bb543";
			textCorrect +=1;
		 }
		 else{
			hPassword.innerHTML="密码格式错误";
			hPassword.style.color="#ff0301";
			tPassword.style.borderColor="#ff0301";
		 }
	  };
	  /*确认密码部分*/	
	  //聚焦
	tPassword1.onfocus=function(){
		hPassword1.innerHTML="再次输入相同密码";
		hPassword1.style.color="#a8a8a8";
	 };
	 //失去焦点
	 tPassword1.onblur=function(){
		 var tPasswordText=document.getElementById("tPassword").value;
         var tPassword1Text=document.getElementById("tPassword1").value;
		 if(tPassword1Text!=tPasswordText){
			hPassword1.innerHTML="请输入相同密码";//为标签里面添加内容
			hPassword1.style.color="#ff0301";
			tPassword1.style.borderColor="#ff0301";
		 }else {
			hPassword1.innerHTML="密码输入一致";
			hPassword1.style.color="#5bb543";
			tPassword1.style.borderColor="#5bb543";
			textCorrect +=1;
		 }
	  };
	/*邮箱部分*/	
	  //聚焦
	tEmail.onfocus=function(){
		hEmail.innerHTML="请输入正确的邮箱格式";
		hEmail.style.color="#a8a8a8";
	 };
	 //失去焦点
	 tEmail.onblur=function(){
		var tEmailText=document.getElementById("tEmail").value;
		if(tEmailText==''||tEmailText==null||tEmailText==undefined){
		   hEmail.innerHTML="邮箱不能为空";//为标签里面添加内容
		   hEmail.style.color="#ff0301";
		   tEmail.style.borderColor="#ff0301";
		}else if(tEmailText.match(eReg)){
		   hEmail.innerHTML="邮箱格式正确";
		   hEmail.style.color="#5bb543";
		   tEmail.style.borderColor="#5bb543";
		   textCorrect +=1;
		}
		else{
		   hEmail.innerHTML="邮箱格式错误";
		   hEmail.style.color="#ff0301";
		   tEmail.style.borderColor="#ff0301";
		}
	  };
	  /*手机号码部分*/	
	  //聚焦
	tTel.onfocus=function(){
		hTel.innerHTML="请输入正确的手机号码";
		hTel.style.color="#a8a8a8";
	 };
	 //失去焦点
	tTel.onblur=function(){
		var tTelText=document.getElementById("tTel").value;
		if(tTelText==''||tTelText==null||tTelText==undefined){
		   hTel.innerHTML="手机不能为空";//为标签里面添加内容
		   hTel.style.color="#ff0301";
		   tTel.style.borderColor="#ff0301";
		}else if(tTelText.match(telReg)){
		   hTel.innerHTML="手机格式正确";
		   hTel.style.color="#5bb543";
		   tTel.style.borderColor="#5bb543";
		   textCorrect +=1;
		}
		else{
		   hTel.innerHTML="手机格式错误";
		   hTel.style.color="#ff0301";
		   tTel.style.borderColor="#ff0301";
		}
	  };
}

function checkAll(){
	if(textCorrect==5){
	 alert(textCorrect+"提交成功");
	}else{
	  alert(textCorrect+"提交失败");
  }
}