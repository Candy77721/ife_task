const FORM_JSON={
    "name": "测试表单",
    "items": [{
        "element": "title",
        "title": "基本信息"
    }, {
        "label": "姓名",
        "element": "input",
        "type": "name",
        "require": true,
        "success": "格式正确",
        "placeholder": "请输入4-16个字",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "RANGE",
            "params": {
                "min": 4,
                "max": 16
            },
            "fail": "格式错误，请重新输入",
        }]
    }, {
        "label": "年龄",
        "element": "input",
        "type": "age",
        "require": true,
        "success": "格式正确",
        "placeholder": "请输入年龄",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "RANGE",
            "params": {
                "min": 0,
                "max": 200
            },
            "fail": "请输入正确的数字"
        }]
    }, {
        "label": "手机",
        "element": "input",
        "type": "phone",
        "require": true,
        "success": "格式正确",
        "placeholder": "请输入手机号",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "PHONE",
            "fail": "请输入正确手机号"
        }]
    }, 
    // {
    //     "label": "手机",
    //     "element": "input",
    //     "type": "text",
    //     "require": true,
    //     "success": "格式正确",
    //     "placeholder": "请输入手机号",
    //     "rule": [{
    //         "type": "BUILT_IN",
    //         "rule": "PHONE",
    //         "fail": "请输入正确手机号"
    //     }]
    // }, 
       {
        "label": "出生日期",
        "element": "input",
        "type": "date",
        "require": true,
        "success": "格式正确",
        "placeholder": "请输入出生日期",
        "granularity": "day",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "RANGE",
            "params": {
                "min": "1900/01/01",
                "max": "2018/01/01"
            },
            "fail": "请输入1900/01/01-2018/01/01"
        }]
    }, {
        "label": "邮箱",
        "element": "input",
        "type": "email",
        "require": true,
        "success": "格式正确",
        "placeholder": "请输入邮箱",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "EMAIL",
            "fail": "请输入正确邮箱"
        }]
    }, {
        "label": "居住地址",
        "element": "input",
        "type": "add",
        "require": true,
        "success": "格式正确",
        "placeholder": "请输入0-100个字",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "RANGE",
            "params": {
                "min": 0,
                "max": 100
            },
            "fail": "请输入0-100个字"
        }]
    }, {
        "label": "自我介绍",
        "element": "input",
        "type": "textarea",
        "require": false,
        "success": "格式正确",
        "placeholder": "请输入0-100个字",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "RANGE",
            "params": {
                "min": 0,
                "max": 100
            },
            "fail": "请输入0-100个字"
        }]
    }, {
        "element": "title",
        "title": "更多信息"
    }, {
        "label": "学历",
        "element": "select",
        "require": true,
        "success": "正确",
        "item": ["高中", "本科", "硕士"],
        "placeholder": "请选择学历"
    }, {
        "label": "兴趣",
        "element": "checkbox",
        "require": true,
        "success": "正确",
        "item": ["吃", "喝", "玩"],
        "placeholder": "请选择兴趣",
        "rule": [{
            "type": "BUILT_IN",
            "rule": "RANGE",
            "params": {
                "min": 0,
                "max": 3
            },
            "fail": "请选择0-3个"
        }]
    }]
}