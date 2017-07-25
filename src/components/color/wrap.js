import Vue from 'vue';
import {
    curry
} from '@utils';
const Color = Vue.extend(require('./color.vue'));

var instance;

var ColorBox = function (type) {
    if (!instance) {
        instance = new Color();
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);
        instance.vm.visible = false;
        instance.dom = instance.vm.$el;
    }
    if (!type) return instance.vm;

    switch (type) {
        case 'show':
            var options = arguments[1] || {};
            options = Object.assign({}, {
                callback: (h) => {},
                color: '#000000'
            }, options);
            // console.log(options);
            instance.vm.cb = options.callback;
            instance.vm.color = options.color;
            // instance.vm.options = options;
            instance.vm.show();
            break;
        case 'close':
            instance.vm.close();
            break;
    }

    return instance.vm;
};

'show close'.split(' ').forEach(m => {
    ColorBox[m] = curry(ColorBox, m);
});

export default ColorBox;