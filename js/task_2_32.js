// 以后异步读取
const FORM_CONFIG = {
    name: '测试表单',
    items: [{
        label: '名称',                    // 表单标签
        type: 'input',                   // 表单类型
        validator: function () {
            
        },    // 表单验证规
        tips: '必填，长度为4-16个字符',    // 填写规则提示
        success: '格式正确',              // 验证通过提示
        fail: '名称不能为空'               // 验证失败提示
    }]
}

class FormBuilder {
    constructor(config, el) {
        this.buildAll(config.items)    
    }
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
            const result = item.validator(e.target.value);
            if(result) {
                doms.tips.innerHTML = item.success;
            } else {
                doms.tips.innerHTML = item.fail;
            }
        });
    }
    _guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
}

new FormBuilder(FORM_CONFIG, '');

// 支持更多配置
const FORM_CONFIG_NEW = {
    name: '测试表单',
    items: [{
        label: '名称',                    // 表单标签
        type: 'input',                   // 表单类型
        rules: [{
            type: 'BUILT_IN',
            rule: 'NULL',
            fail: '名称不能为空'               // 验证失败提示
        }, {
            type: 'CUSTOM',
            rule: function () {

            },
            fail: ''
        }],
        tips: '必填，长度为4-16个字符',    // 填写规则提示
        success: '格式正确',              // 验证通过提示
    }]
}