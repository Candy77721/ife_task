export default class BaseItem {
    constructor(config) {
        this.config = config;
        this.checkQueue = [];
        this.state = 'correct';
        this.container = null;
        this.buildDOM()
    }
    buildDOM() {
        throw new Error('Override base class methods buildDOM');
    }
    invokeCheck() {
        throw new Error('Override base class methods invokeCheck');
    }
    _updateState(state, { errorTips }) {
        this.state = state;
        if(state === 'correct') {
            this.container.querySelector('.tips').innerHTML = '';
        } else {
            this.container.querySelector('.tips').innerHTML = errorTips;
        }
    }
}