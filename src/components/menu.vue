<template>
    <nav class="menu">
        <a href="javascript:;" @click="section('TXT')"><i class="fa fa-file-text-o fa-fw"></i> {{menu.txt}}</a>
        <a href="javascript:;" @click="section('TEL')"><i class="fa fa-phone fa-fw"></i> {{menu.tel}}</a>
        <a href="javascript:;" @click="section('EMAIL')"><i class="fa fa-envelope-o fa-fw"></i> {{menu.email}}</a>
        <a href="javascript:;" @click="section('CARD')"><i class="fa fa-id-card-o fa-fw"></i> {{menu.card}}</a>
        <a href="javascript:;" @click="section('WIFI')"><i class="fa fa-wifi fa-fw"></i> {{menu.wifi}}</a>
        <a href="javascript:;" @click="section('SMS')"><i class="fa fa-commenting-o fa-fw"></i> {{menu.sms}}</a>
        <a href="javascript:;" @click="section('EFFECT')"><i class="fa fa-snowflake-o fa-fw"></i> {{menu.effect}}</a>
    </nav>
</template>
<script>
    export default {
        data() {
            return {
                menu: {
                    txt: '',
                    tel: '',
                    email: '',
                    card: '',
                    wifi: '',
                    sms: '',
                    effect: ''
                }
            };
        },
        methods: {
            section(i) {
                this.$emit('change', i);
            }
        },
        mounted() {
            console.log(chrome);
            var m = this.menu;
            for (var n in m) {
                this.menu[n] = chrome.i18n.getMessage(`menu_${n}`);
            }
        }
    }
</script>
<style>
    .menu {
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .menu a {
        display: block;
        padding: 4px 9px;
        line-height: 20px;
        text-decoration: none;
        color: #ff9300;
    }

    .menu a:hover {
        background-color: #e3e3e3;
    }
</style>