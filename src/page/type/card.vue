<template>
    <div class="card">
        <input type="text" class="full" v-model.trim="MECARD.N" :placeholder="lang.c_N">
        <input type="text" class="full" v-model.trim="MECARD.ADR" :placeholder="lang.c_ADR">
        <input type="text" class="full" v-model.trim="MECARD.TEL" :placeholder="lang.c_TEL">
        <input type="text" class="full" v-model.trim="MECARD.EMAIL" :placeholder="lang.c_EMAIL">
        <input type="text" class="full" v-model.trim="MECARD.URL" :placeholder="lang.c_URL">
        <!-- <input type="text" class="full" v-model.trim="MECARD.QQ" placeholder="QQ"> -->
        <!-- <input type="text" class="full" v-model.trim="MECARD.TIL" :placeholder="lang.c_TIL"> -->
        <input type="text" class="full" v-model.trim="MECARD.ORG" :placeholder="lang.c_ORG">
        <textarea class="full" v-model.trim="MECARD.NOTE" rows="2" :placeholder="lang.c_NOTE"></textarea>
        <div class="btn" @click="generate">{{lang.btn_generator}}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import mix from '@utils/mix';

export default {
    mixins: [mix],
    data() {
        return {
            MECARD: {
                N: '', // 姓名
                ADR: '', // 地址
                TEL: '', // 电话
                EMAIL: '', // 邮箱
                URL: '', // 网址
                // QQ: '', // QQ
                // TIL: '', // 职位
                ORG: '', // 单位
                NOTE: '' // 备注
            }
        };
    },
    computed: {
        ...mapGetters(['text', 'lang']),
        ftxt() {
            return this.formatter('MECARD', this.MECARD);
        }
    },
    mounted() {
    },
    methods: {
        ...mapActions(['changeText']),
        generate() {
            this.changeText(this.ftxt);
        }
    }
};
</script>
<style lang="less">
@import './style.less';
.card {
    input {
        margin-bottom: 10px;
    }
}
</style>