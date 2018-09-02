// 以后异步读取
const FORM_CONFIG_NEW = {
    name: '测试表单',
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
    //======密码确认没有=====
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
    }]
}


class FormBuilder {
    //初始化结构
    constructor(config, el) {
        this.buildAll(config.items)    
    }
    //对每一个节点绑定事件
    buildAll(items) {
        const doms = items.map(item => {
            const doms = this.buildDom(item);
            this.bindEventListener(doms, item);
            return doms.container;
        });
        doms.forEach(dom => {
            document.body.appendChild(dom);
        })
    }
    buildDom(item) {
        switch(item.type) {
            case 'input':
                return this.buildInputDom(item);
            default:
                throw new Error(`不支持${item.type}`)
        }
    }
    buildInputDom(item) {
        const container = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const tips = document.createElement('p');

        const guid = this._guid()
        input.id = guid;
        label.setAttribute('for', guid);
        label.innerHTML = item.label;

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(tips);
        return {
            container,
            inputDom: input,
            tips,
        }
    }
    bindEventListener(doms, item) {
        doms.inputDom.addEventListener('focus', e => {
            doms.tips.innerHTML = item.tips;
        });
        // 这里只处理了input，checkbox等没有
        doms.inputDom.addEventListener('blur', e => {
            var flag = true;
            var _type = null;
            for(var i=0;i<item.rules.length;i++){
                const result = item.rules[i].rule(e.target.value); 
                if(!result){
                    flag = false;
                    _type = i;
                    break;
                }
            } 
            if(flag){
                doms.tips.innerHTML = item.success;
            }else{
                doms.tips.innerHTML = item.rules[_type].fail;
            }
        });
    }
    //生成一个唯一id用于label for的
    _guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
}

new FormBuilder(FORM_CONFIG_NEW, '');

// const FORM_CONFIG = {
//     name: '测试表单',
//     items: [{
//         label: '名称',                    // 表单标签
//         type: 'input',                   // 表单类型
//         validator: function (str) {
//             const fullWidthCharacters =  str.match(/[^\x00-\xff]/ig); 
//             const len =  (fullWidthCharacters ? fullWidthCharacters.length : 0) + str.length;   
//             if (len >= 4 && len <= 16) {return 'correct';} 
//             if (len==0){return 'null';}    
//         },    // 表单验证规
//         tips: '必填，长度为4-16个字符',    // 填写规则提示
//         success: '格式正确',              // 验证通过提示
//         null: '名称不能为空' ,              // 验证失败提示
//         fail:'名称格式错误'
//     }]
// }


