// JavaScript Document
function check(){
	var tName = document.getElementById("tName");
	var hName = document.getElementById("hName");
	var tNameText = document.getElementById("tName").value;
	var cArr = tNameText.match(/[^\x00-\xff]/ig); 
	var len=tNameText.length + (cArr == null ? 0 : cArr.length);  
	if(tNameText==''||tNameText==null||tNameText==undefined){
		hName.innerHTML="姓名不能为空";//为标签里面添加内容
		hName.style.color="#ff0301";
		tName.style.borderColor="#ff0301";
	}else if(len>=4&&len<=16){
		hName.innerHTML="名称格式正确";
		hName.style.color="#5bb543";
		tName.style.borderColor="#5bb543";
	}else{
		hName.innerHTML="名称格式错误";
		hName.style.color="#ff0301";
		tName.style.borderColor="#ff0301";
	}
}