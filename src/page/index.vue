<template>
    <div class="main">
        <nav-menu ref="menu" @change="to"></nav-menu>
        <div class="main-content">
            <transition name="" mode="out-in">
                <keep-alive>
                    <component ref="current" v-bind:is="view"></component>
                </keep-alive>
            </transition>
        </div>
        <qr></qr>
    </div>
</template>
<script>
import '@assets/font-awesome/css/font-awesome.css';
import '@assets/global.css';
import '@assets/style.less';
var Qr = require('@components/qr.vue');
var NavMenu = require('@components/menu');
var TXT = require('@page/type/txt.vue');
var TEL = require('@page/type/tel.vue');
var EMAIL = require('@page/type/email.vue');
var CARD = require('@page/type/card.vue');
var WIFI = require('@page/type/wifi.vue');
var SMS = require('@page/type/sms.vue');
var EFFECT = require('@page/type/effect.vue');
import CollapseTransition from '@components/collapse-transition';

import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        Qr,
        NavMenu,
        TXT,
        TEL,
        EMAIL,
        CARD,
        WIFI,
        SMS,
        EFFECT,
        CollapseTransition
    },
    data() {
        return {
            view: 'TXT'
        }
    },
    computed: {
        ...mapGetters(['lang'])
    },
    methods: {
        ...mapActions(['changeText', 'setLocale']),
        to(s) {
            this.view = s;
        },
        setlang() {
            var l = this.lang;
            var t = {};
            for (var n in l) {
                t[n] = chrome.i18n.getMessage(n);
            }
            this.setLocale(t);
        }
    },
    mounted() {
        this.$refs.menu.active = 'TXT';
        console.log(this.$refs.current);

        this.setlang();
        chrome.tabs.getSelected(null, (w) => {
            this.changeText(w.url);
            this.$refs.current.txt = w.url;
            this.$refs.current.generate(w.url);
        });
    }
};
</script>
<style lang="less">
.fade-enter-active,
.fade-leave-active {
    transition: all .2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    visibility: hidden;
}

@import './index.less';
</style>