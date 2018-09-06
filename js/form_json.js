const FORM_CONFIG = {
    name: '表单',
    items: [{
        label: '名称',                    // 表单标签
        type: 'input',                   // 表单类型
        rules: [{
            type: 'BUILT_IN',
            rule: function (str) { 
                return (str.length);
            },
            fail: '名称不能为空'               
        }, {
            type: 'CUSTOM',
            rule: function (str) {
                const fullWidthCharacters =  str.match(/[^\x00-\xff]/ig); 
                const len =  (fullWidthCharacters ? fullWidthCharacters.length : 0) + str.length;   
                return (len >= 4 && len <= 16);
            },
            fail: '名称格式错误'
        }],
        tips: '必填，长度为4-16个字符',    
        success: '名称格式正确',              
    }, 
    {
        label: '密码',                    
        type: 'input',                   
        rules: [{
            type: 'BUILT_IN',
            rule: function (str) { 
                return (str.length);
            },
            fail: '密码不能为空'               
        }, {
            type: 'CUSTOM',
            rule: function (str) {
                const fullWidthCharacters =  str.match(/[^\x00-\xff]/ig); 
                const len =  (fullWidthCharacters ? fullWidthCharacters.length : 0) + str.length;   
                return (len >= 4 && len <= 16);
            },
            fail: '密码格式错误'
        }],
        tips: '必填，长度为4-16个字符',    
        success: '密码格式正确',           
    }, 
    {
        label: '邮箱',                    
        type: 'input',                  
        rules: [{
            type: 'BUILT_IN',
            rule: function (str) { 
                return (str.length);
            },
            fail: '邮箱不能为空'              
        }, {
            type: 'CUSTOM',
            rule: function (str) {
                const eReg=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/ ;
                return (str.match(eReg));   
            },
            fail: '邮箱格式错误'
        }],
        tips: '必填，请输入邮箱',    
        success: '邮箱格式正确',             
    }, 
    {
        label: '手机',                    
        type: 'input',                  
        rules: [{
            type: 'BUILT_IN',
            rule: function (str) { 
                return (str.length);
            },
            fail: '手机号码不能为空'               
        }, {
            type: 'CUSTOM',
            rule: function (str) {
                const telReg=/^(1)(\d{10})$/; 
                return (str.match(telReg));  
            },
            fail: '手机号码格式错误'
        }],
        tips: '必填，请输入手机号码',    
        success: '手机号码格式正确',            
    },
    {
        label:'单选',
        type:'radio',
        rules:function () { 
            return ;
        },
        tips:'只能选择一项',
        success:'选择完成',
    },
    {
        label:'多选',
        type:'checkbox',
        rules:function () { 
            return ;
        },
        tips:'选择其中一项或者多项',
        success:'选择完成',
    },
    {
        label:'下拉框',
        type:'select',
        rules:'',
        tips:'选择其中一项',
        success:'选择完成',
    },
    {
        label:'按钮',
        type:'button',
        rules:'',
        tips:'提交表单',
        success:'提交完成',
    },
    {
        label:'标题',
        type:'title',
        rules:'',
        tips:'起个名字',
        success:'',
    },
    {
        label:'日期',
        type:'date',
        rules:'',
        tips:'选择日期',
        success:'',
    },
    {
        label:'分割线',
        type:'line',
        rules:'',
        tips:'文本框装饰',
        success:'',
    },
   ]
}