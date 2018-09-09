/**************Question1\2\3**************
 * email,tel内置验证规则是否要用？
 * `xxx`与'xxx'的区别，貌似`xxx`可以识别jQuery变量，'xxx'不行
 * input自身包含很多type类型，e.g text button password checkbox radio 
    JSON是否要整合在一块(element均为input,type不一样)，完了，我又把自己绕进去了。。。。
 *下面有些不会写的内容，往下翻注释吧
 *这个还是有点水，呐呐呐呐，但是我思考了~~~~
-------------end----------------------
*/

/***************************************************
const FORM_CONFIG = {  //表单配置对象
    name: '', // 整个表单的名字
    items:    //items为一个object数组，里面包含所需要的item，一个object就是一个key和value的键值对
    [{    
        label: '',   // 表单标签
        element: '',// 表单支持的输入类型(input || textarea || radio || checkbox || select)
        type: ' ',    //element支持的类型
        rules: [],   //该表单类型的fail验证规则   
        tips: '',   //onfocus提示
        require: true,   //内置必填字段
        success: '',   // 验证成功提示           
    }
]
*******************************************************/

const FORM_CONFIG = {
    name: '表单', // 整个表单的名字
    items: 
    [{    
        label: '名称/密码',   // 表单标签为名称/密码
        element: 'input',// 输入类型input
        type: 'text/password',    //<input />中的text/password
        rules: //验证规则
        [{
            type: 'BUILT_IN', // 内置验证规则
            rule: 'RANGE',    // 范围
            params: {         //参数表
                min: 4,       //最小长度为4
                max: 16,      //最大长度为16
            },
            tips: `请输入${min}至${max}个字`  // onfocus的提示   
        },
        {
            type: 'BUILT_IN',   // 内置的验证规则
            rule: 'NOT_NULL',   // 非空
            fail: '字段不能为空' // 字段为空的提示        
        }, 
        {
            type: 'CUSTOM',    // 正则表达式验证
            rule: function (str) { //自定义rule function 匹配中文/英文/全角/半角符号（半角1位，全角2位）
                const fullWidthCharacters =  str.match(/[^\x00-\xff]/ig); //返回全角元素个数
                const len =  (fullWidthCharacters ? fullWidthCharacters.length : 0) + str.length; //返回text.value长度 
                return (len >= `${min}` && len <= `${max}`); //true(格式正确)false(格式错误)
            },
            fail: '格式错误' //验证失败的提示
        },],
        require: true,   //内置必填字段
        success: '格式正确',   // 验证成功提示           
    },  
    {
        label: '邮箱',   // 表单标签为密码
        element: 'input',// 输入类型input                    
        type: 'email',   //<input />中的email 
        rules: //验证规则
        [{
            type: 'BUILT_IN',   // 内置的验证规则
            rule: 'NOT_NULL',   // 非空
            fail: '邮箱不能为空' // 邮箱为空的提示        
        }, 
        {
            type: 'CUSTOM',     // 正则表达式验证
            rule: function (str) { //自定义rule function 匹配邮箱
                const eReg=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/ ;
                return (str.match(eReg)); //true(匹配正确)false(匹配错误)  
            },
            fail: '邮箱格式错误'  //验证失败的提示
        },],
        tips: `请输入你的邮箱`,  // onfocus的提示  
        require: true,   //内置必填字段
        success: '格式正确',   // 验证成功提示                            
    }, 
    {
        label: '手机',    // 表单标签为手机                
        element: 'input', // 输入类型input
        type:'tel',  //<input />中的tel                   
        rules: 
        [{
            type: 'BUILT_IN',   // 内置的验证规则
            rule: 'NOT_NULL',   // 非空
            fail: '手机不能为空' // 手机为空的提示                    
        }, 
        {
            type: 'CUSTOM',   //正则验证规则
            rule: function (str) { //自定义rule function进行正则验证
                const telReg=/^(1)(\d{10})$/; 
                return (str.match(telReg)); //true(匹配正确)false(匹配错误) 
            },
            fail: '手机号码格式错误' //验证失败的提示
        }],
        tips: '请输入手机号码', //onfocus提示  
        require: true,   //内置必填字段 
        success: '手机号码格式正确',  //验证成功的提示          
    },
    /*下面这些内容的rules怎么写？？*****************/
    /*********************************************/
    {
        label:'单选',    // 表单标签为单选   
        element:'input', // 输入类型input
        type:'radio',   //<input />中的radio
        require: true,   //必须选择一项？？？
    },
    {
        label:'多选',   // 表单标签为多选  
        element:'input', // 输入类型input
        type:'checkbox', //<input />中的checkbox
        require: true,   //选择一项及多项？？？
    },
    {
        label:'下拉框', // 表单标签为下拉框
        type:'select',  //类型为select
        rules:'',
        tips:'选择其中一项',
        success:'选择完成',
    },
    {
        label:'按钮',    // 表单标签为按钮
        element:'input', // 输入类型input
        type:'button',   //类型为button
        tips:'提交表单',
        success:'提交完成',
    },
    {
        label:'标题',    // 表单标签为标题
        type:'title',    //类型为title  ???
        rules:'',        //同text?     
        tips:'起个名字',  
        success:'',
    },
    {
        label:'日期',   // 表单标签为日期
        type:'date',   //类型为date  
        data:true,   //jQuery验证规则？？？
        tips:'日期'
    },
    {   //这个真僵硬
        label:'分割线',   // 表单标签为日期
        type:'line',     // 类型为line  
        tips:'文本框装饰',
    },
   ]
}