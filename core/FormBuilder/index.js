import FormItem from '../FormItem'

class FormBuilder {
    constructor ({ config, el }){
        this._el = el;
        this._title = config.title;
        this._subtitle = config.subtitle;
        this._items = config.items;
        this._formItems = [];
        this._buildAll();
    }
    _buildAll() {
        this._items.forEach(item => {
            this._formItems.push(new FormItem(item));
        });
        this._showAll();
    }
    _showAll() {
        this._formItems.forEach(item => {
            console.log(item);
            
            this._el.append(item.container);
        })
    }
}

window.FormBuilder = FormBuilder;

