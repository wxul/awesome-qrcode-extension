import Vue from 'vue';
import App from '@page/index.vue';
import store from '@store';

const app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app');

console.log('loaded!');