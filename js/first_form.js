/**
 * 1、日期那个应该需要正则匹配或者是别的什么方法，不是简单的比较大小
 * 2、select 和 checkbox不知道怎么写验证规则
 * 3、//doms.container生成一个doms容器的意思？
 * 4、当min值为0的时候，会出现不填也验证通过的情况，required如何使用
 * 5、代码优化问题
 */
class FormBuilder{
    constructor(config,el){
        this.buildAll(config.items)
    }
    buildAll(items){
        const doms = items.map(item=>{
            const doms = this.buildDom(item);
            this.bindEventListener(doms,item);
            return doms.container;
        });
        doms.forEach(dom=>{
            document.body.appendChild(dom);
        })
    }
    buildDom(item){
        switch(item.element){
            case 'title':
                return this.buildTitleDom(item);
            case 'input':
                return this.buildInputDom(item);
            case 'select':
                return this.buildSelectDom(item);
            case 'checkbox':
                return this.buildCheckboxDom(item);
            default:
                throw new Error('不支持${item.type}')
        }
    }
    buildTitleDom(item){
        const container = document.createElement('div');
        const title = document.createElement('p');
        title.innerHTML = item.title;
        container.appendChild(title);
        return{
            container,
            titleDom:title,
        }
    }
    buildInputDom(item){
        const container = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const placeholder = document.createElement('p');

        const guid = this._guid();
        input.id=guid;
        label.setAttribute('for',guid);
        label.innerHTML = item.label;

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(placeholder);
        return{
            container,
            inputDom:input,
            placeholder,
        }
    }
    buildSelectDom(item){
        const len = item.item;
        const container= document.createElement('div');
        const label = document.createElement('label');
        const select = document.createElement('select');
        const option = document.createElement('option');
        const placeholder = document.createElement('p');

        const guid = this._guid();
        select.id=guid;
        label.setAttribute('for', guid);
        label.innerHTML=item.label;
        // for(var i=0;i<len;i++){
        //     new Option(item.item[i],i);
        // }
        container.appendChild(label);
        container.appendChild(select);
        container.appendChild(option);
        container.appendChild(placeholder);
        
        return{
            container,
            selectDom:select,
            placeholder,
        }
    }
    buildCheckboxDom(item){
        const container= document.createElement('div');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        const placeholder = document.createElement('p');

        const guid = this._guid();
        checkbox.id=guid;
        label.setAttribute('for', guid);
        label.innerHTML=item.label;

        container.appendChild(label);
        container.appendChild(checkbox);
        container.appendChild(placeholder);
        return{
            container,
            checkboxDom:checkbox,
            placeholder,
        }
    }
    bindEventListener(doms, item){
        switch(item.element){
            case 'title':return null;break;
            case 'input':
                this.inputEventBinder(doms,item);
                break;
            case 'select':
                this.selectEventBinder(doms,item);
                break;
            case 'checkbox':
                this.checkboxEventBinder(doms,item)
                break;
        }
    }
    inputEventBinder(doms,item){
        doms.inputDom.addEventListener('focus',e=>{
            doms.placeholder.innerHTML = item.placeholder;});
        doms.inputDom.addEventListener('blur',e=>{
           switch(item.type){
               case 'name':
                            const minName=item.rule[0].params.min;
                            const maxName=item.rule[0].params.max;
                            const nameValue = document.getElementById(doms.inputDom.id).value;
                            if(nameValue.length>maxName || nameValue.length<minName ){
                                    doms.placeholder.innerHTML = item.rule[0].fail;
                                }else{doms.placeholder.innerHTML = item.success;}
                            break;
                case 'age':
                            const minAge=item.rule[0].params.min;
                            const maxAge=item.rule[0].params.max;
                            const ageValue = document.getElementById(doms.inputDom.id).value;
                            if(ageValue>maxAge || ageValue<minAge){
                                doms.placeholder.innerHTML = item.rule[0].fail;
                            }else{doms.placeholder.innerHTML = item.success;}
                            break;
                case 'phone':
                            const telValue = document.getElementById(doms.inputDom.id).value;
                            const telReg=/^(1)(\d{10})$/; 
                            if(!telValue.match(telReg)){
                                doms.placeholder.innerHTML = item.rule[0].fail;
                            }else{doms.placeholder.innerHTML = item.success;}
                            break;
                case 'date':
                            const dateValue = document.getElementById(doms.inputDom.id).value;
                            
                case 'email':
                            const emailValue = document.getElementById(doms.inputDom.id).value;
                            const eReg=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/ ;
                            if(!emailValue.match(eReg)){
                                doms.placeholder.innerHTML = item.rule[0].fail;
                            }else{doms.placeholder.innerHTML = item.success;}
                            break;
                case 'add':
                            const minAdd=item.rule[0].params.min;
                            const maxAdd=item.rule[0].params.max;
                            const addValue = document.getElementById(doms.inputDom.id).value;
                            if(addValue.length>maxAdd || addValue.length<minAdd ){
                                    doms.placeholder.innerHTML = item.rule[0].fail;
                                }else{doms.placeholder.innerHTML = item.success;}
                            break;
                case 'textarea':
                            const minInf=item.rule[0].params.min;
                            const maxInf=item.rule[0].params.max;
                            const infValue = document.getElementById(doms.inputDom.id).value;
                            if(infValue.length>maxInf || infValue.length<minInf ){
                                    doms.placeholder.innerHTML = item.rule[0].fail;
                                }else{doms.placeholder.innerHTML = item.success;}
                            break;
           }
        });
    }
    selectEventBinder(doms,item){
        doms.selectDom.addEventListener('focus',e=>{
            doms.placeholder.innerHTML = item.placeholder;
        });
    }
    checkboxEventBinder(doms,item){
        doms.checkboxDom.addEventListener('focus',e=>{
            doms.placeholder.innerHTML = item.placeholder;
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

new FormBuilder(FORM_JSON,'')