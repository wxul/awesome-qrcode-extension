<template>
    <nav class="menu">
        <a href="javascript:;" :class="{active:active=='TXT'}" @click="select('TXT')" :title="lang.menu_txt">
            <i class="fa fa-file-text-o fa-fw"></i>
        </a>
        <a href="javascript:;" :class="{active:active=='TEL'}" @click="select('TEL')" :title="lang.menu_tel">
            <i class="fa fa-phone fa-fw"></i>
        </a>
        <a href="javascript:;" :class="{active:active=='EMAIL'}" @click="select('EMAIL')" :title="lang.menu_email">
            <i class="fa fa-envelope-o fa-fw"></i>
        </a>
        <a href="javascript:;" :class="{active:active=='CARD'}" @click="select('CARD')" :title="lang.menu_card">
            <i class="fa fa-id-card-o fa-fw"></i>
        </a>
        <a href="javascript:;" :class="{active:active=='WIFI'}" @click="select('WIFI')" :title="lang.menu_wifi">
            <i class="fa fa-wifi fa-fw"></i>
        </a>
        <a href="javascript:;" :class="{active:active=='SMS'}" @click="select('SMS')" :title="lang.menu_sms">
            <i class="fa fa-commenting-o fa-fw"></i>
        </a>
        <a href="javascript:;" :class="{active:active=='EFFECT'}" @click="select('EFFECT')" :title="lang.menu_effect">
            <i class="fa fa-snowflake-o fa-fw" :class="{'fa-spin':active=='EFFECT'}"></i>
        </a>
    </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
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
            },
            active: ''
        };
    },
    watch: {
        active: function (v, old) {
            this.$emit('change', v);
        }
    },
    computed: {
        ...mapGetters(['lang'])
    },
    methods: {
        select(i) {
            this.active = i;
        }
    },
    mounted() {
    }
}
</script>
<style lang="less">
.menu {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #ff6200;
    a {
        display: block;
        padding: 4px 9px;
        line-height: 20px;
        text-decoration: none;
        color: #ff9300;
        &:hover {
            background-color: #e3e3e3;
        }
        &.active {
            background-color: #dedede;
        }
    }
}
</style>