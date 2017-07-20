<template>
    <div class="main">
        <nav-menu @change="to"></nav-menu>
        <component class="main-content" is="view"></component>
        <qr></qr>
    </div>
</template>
<script>
    var Qr = require('@components/qr.vue');
    var NavMenu = require('@components/menu');
    var TXT = require('@page/type/txt.vue');
    var TEL = require('@page/type/tel.vue');
    var EMAIL = require('@page/type/email.vue');
    var CARD = require('@page/type/card.vue');
    var WIFI = require('@page/type/wifi.vue');
    var SMS = require('@page/type/sms.vue');
    var EFFECT = require('@page/type/effect.vue');

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
            EFFECT
        },
        data() {
            return {
                view: 'TXT'
            }
        },
        methods: {
            to(s) {
                this.view = s;
            }
        },
        mounted() {
            chrome.tabs.getSelected(null, function (w) {
                console.log(w);
            });
        }
    };
</script>
<style lang="less">
    @import './index.less';
</style>