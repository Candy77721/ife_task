// JavaScript Document
// 错误配置和检查和设置样式分离、解耦，希望有良好的扩展性
const TIPS_CONFIG = {
	NULLNAME: {
		tips: "姓名不能为空",
		color: "#ff0301",
		borderColor: "#ff0301",
	},
	ERROR: {
		tips: "名称格式错误",
		color: "#ff0301",
		borderColor: "#ff0301",
	},
	SUCCESS: {
		tips: "名称格式正确",
		color: "#5bb543",
		borderColor: "#5bb543",
	},
}

function check(){
	var tNameText = document.getElementById("tName").value;
	const status = getInputStatus(tNameText);
	setTips(TIPS_CONFIG[status]);
}
/**
 * @param  {String} text
 * 根据text获得输入框当前状态
 */
function getInputStatus(text) {
	const len = getTextLength(text || '');
	if(!len) return 'NULLNAME';
	if(len >= 4 && len <= 16) return 'SUCCESS';
	return 'ERROR';
}
/**
 * 根据对应的Obj设置tips
 * @param  {Object} tipsObj
 */
function setTips(tipsObj) {
	// dom可以缓存
	var tName = document.getElementById("tName");
	var hName = document.getElementById("hName");
	hName.innerHTML = tipsObj.tips;
	hName.style.color = tipsObj.color;
	tName.style.borderColor = tipsObj.borderColor;
}

/**
 * @param  {String} text
 * 获取 text 的长度，中文和全角字符算2个长度，其余算一个
 */
function getTextLength(text) {
	const fullWidthCharacters =  text.match(/[^\x00-\xff]/ig);
	return (fullWidthCharacters ? fullWidthCharacters.length : 0) + text.length;
}