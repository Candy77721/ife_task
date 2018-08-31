  
function selectZxs(){
	var sschool=document.getElementById("sschool");
    sschool.style.display='block'; 
    var company=document.getElementById("company");
    company.style.display='none';
	var schoolList =[
	    {name:"北京",schools:["北京大学","清华大学","北京外国语大学","中国人民大学"]},
	    {name:"上海",schools:["上海交通大学","上海外国语大学","复旦大学","同济大学"]},
	    {name:"大连",schools:["大连理工大学","大连海事大学","大连医科大学","东北财经大学"]},
	    {name:"长春",schools:["吉林大学","东北师范大学","长春中医药大学","吉林农业大学"]}
    ];
    var city=document.getElementById("city");
    var school=document.getElementById("school");
    for(var i=0;i<schoolList.length;i++){
    	city[i]=new Option(schoolList[i].name,i);
    }
    //给初值
    for(var i=0;i<schoolList[0].schools.length;i++){
    	school[i]=new Option(schoolList[0].schools[i],i);
    }
    //联动部分，select里的onchange()
    city.onchange = function(){
        var index = city.selectedIndex;
        for(var j=0;j<schoolList[index].schools.length;j++){
    	school[j]=new Option(schoolList[index].schools[j],j);
       }
    } 
    
}
function selectNzxs(){
	var sschool=document.getElementById("sschool");
    sschool.style.display='none';  
    var company=document.getElementById("company");
    company.style.display='block';
}






// var schoolInit = function(_city, _school, defaultCity, defaultSchool)
// {
// 	var city = document.getElementById(_city);
// 	var school = document.getElementById(_school);
	
// 	function cmbSelect(cmb, str)
// 	{
// 		for(var i=0; i<cmb.options.length; i++)
// 		{
// 			if(cmb.options[i].value == str)
// 			{
// 				cmb.selectedIndex = i;
// 				return;
// 			}
// 		}
// 	}
// 	function cmbAddOption(cmb, str, obj)
// 	{
// 		var option = document.createElement("option");
// 		cmb.options.add(option);
// 		option.innerText = str;
// 		option.value = str;
// 		option.obj = obj;
// 	}
	
// 	function changeCity()
// 	{
// 		if(city.selectedIndex == -1)return;
// 		var item = city.options[city.selectedIndex].obj;
// 		for(var i=0; i<item.schools.length; i++)
// 		{
// 			cmbAddOption(cmbArea, item.areaList[i], null);
// 		}
// 	}
// 	function changeProvince()
// 	{
// 		cmbCity.options.length = 0;
// 		cmbCity.onchange = null;
// 		if(cmbProvince.selectedIndex == -1)return;
// 		var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
// 		for(var i=0; i<item.cityList.length; i++)
// 		{
// 			cmbAddOption(cmbCity, item.cityList[i].name, item.cityList[i]);
// 		}
// 		cmbSelect(cmbCity, defaultCity);
// 		changeCity();
// 		cmbCity.onchange = changeCity;
// 	}
	
// 	for(var i=0; i<schoolList.length; i++)
// 	{
// 		cmbAddOption(city, schoolList[i].name, schoolList[i]);
// 	}
// 	cmbSelect(cmbProvince, defaultProvince);
// 	changeProvince();
// 	cmbProvince.onchange = changeProvince;
// }

