import BaseItem from './baseItem';
import FormChecker from '../FormChecker';

export default class InputItem extends BaseItem {
    constructor(config) {
        super(config);
    }
    buildDOM() {
        const container = document.createElement('div');
        const innerHTML = `
            <p class="title">${this.config.title}<p>
            <p class="subtitle">${this.config.subtitle}<p>
            <div class="container">
                <input  placeholder="${this.config.placeholder}"/>
                <p class="tips"></p>
            </div>
        `
        container.innerHTML = innerHTML;
        container.setAttribute('class', 'form-item');

        this.container = container;
        this._addCheck();
        this._bindEventListener();
    }
    _addCheck() {
        const defaultCheck = FormChecker.input[this.config.checkType].DEFAULT;
        if(defaultCheck) {
            this.checkQueue.push({
                params: {},
                rule: defaultCheck.rule,
                fail: defaultCheck.fail,
            });
        }

        (this.config.validates || []).forEach(validate => {
            const checker = FormChecker.input[this.config.checkType][validate.rule];
            this.checkQueue.push({
                params: validate.params,
                rule: checker.rule,
                fail: checker.fail,
            });
        });
    }
    invokeCheck() {
        const value = this.container.querySelector('input').value;
        let errorTips;
        this.checkQueue.every(check => {
            const isPassCheck = check.rule(check.params, value);
            if(!isPassCheck) errorTips = check.fail(check.params);
            return isPassCheck;
        });
        if(errorTips) {
            this._updateState('incorrect', { errorTips });
            return 'incorrect';
        } else {
            this._updateState('correct', { errorTips: '' });
            return 'correct';
        }
    }
    
    _bindEventListener() {
        const $input = this.container.querySelector('input');
        $input.addEventListener('input', e => {
            this.invokeCheck();
        })
    }
}