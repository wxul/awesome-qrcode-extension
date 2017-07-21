import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        text: '',
        effect: {},
        lang: {
            menu_txt: '',
            menu_tel: '',
            menu_email: '',
            menu_card: '',
            menu_wifi: '',
            menu_sms: '',
            menu_effect: '',
            p_txt: '',
            p_tel: '',
            p_email: '',
            c_N: '',
            c_ADR: '',
            c_TEL: '',
            c_EMAIL: '',
            c_URL: '',
            c_ORG: '',
            c_NOTE: '',
            w_type: '',
            w_no: '',
            w_pwd: '',
            s_number: '',
            s_content: '',
            ef_point: '',
            ef_color: '',
            ef_fg: '',
            ef_bg: '',
            ef_ptcolor: '',
            ef_pt: '',
            ef_inpt: '',
            ef_gc: '',
            ef_gccolor: '',
            ef_gctype: '',
            ef_no: '',
            ef_backslash: '',
            ef_slash: '',
            ef_circular: '',
            ef_horizontal: '',
            ef_vertical: '',
            ef_icontxt: '',
            ef_choose: '',
            ef_icontype: '',
            ef_default: '',
            ef_icon: '',
            ef_border: '',
            ef_stroke: '',
            ef_size: '',
            ef_width: '',
            ef_margin: '',
            ef_other: '',
            ef_level: '',
            ef_L: '',
            ef_M: '',
            ef_Q: '',
            ef_H: '',
            ef_rotate: '',
            btn_file: '',
            btn_generator: '',
            btn_clear: '',
            btn_save: '',
            filename: ''
        }
    },
    getters: {
        text: state => {
            return state.text;
        },
        effect: state => {
            return state.effect;
        },
        lang: state => {
            return state.lang;
        }
    },
    mutations: {
        changeText(state, payload) {
            state.text = payload;
        },
        setLocale(state, payload) {
            state.lang = payload;
        }
    },
    actions: {
        changeText(d, payload) {
            d.commit('changeText', payload);
        },
        setLocale(d, payload) {
            d.commit('setLocale', payload);
        }
    }
});