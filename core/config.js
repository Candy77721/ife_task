window.FORM_CONFIG = {
    "title": "测试表单",
    "subtitle": "这是一个测试用的表单",
    "items": [{
        "title": "姓名",
        "subtitle": "这是一个测试用的表单",
        "element": "input",
        "require": true,
        "placeholder": "填写答案",
        "checkType": 'default',
        "validates": [{
            "rule": "RANGE",
            "params": {
                "min": 4,
                "max": 16
            },
        }]
    }, {
        "title": "年龄",
        "subtitle": "这是一个测试用的表单",
        "element": "input",
        "require": true,
        "placeholder": "填写答案",
        "checkType": 'number',
        "validates": [{
            "rule": "RANGE",
            "params": {
                "min": 1,
                "max": 100
            },
        }]
    }]
}