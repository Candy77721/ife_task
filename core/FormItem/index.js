import InputItem from './InputItem';
import TextareaItem from './TextareaItem';
import RadioItem from './RadioItem';
import CheckboxItem from './CheckboxItem';
import SelectItem from './SelectItem';
import DateItem from './DateItem';

export default class FormItem {
    constructor(item) {
        switch(item.element) {
            case 'input':    return new InputItem(item);
            case 'textarea': return new TextareaItem(item);
            case 'radio':    return new RadioItem(item);
            case 'checkbox': return new CheckboxItem(item);
            case 'select':   return new SelectItem(item);
            case 'date':     return new DateItem(item);
        }
    }
}