<template>
    <div class="email">
        <input type="text" class="full" v-model.trim="txt" :placeholder="lang.p_email">
        <div class="btn" @click="generate(txt)">{{lang.btn_generator}}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            txt: ''
        };
    },
    computed: {
        ...mapGetters(['text', 'lang'])
    },
    mounted() {
    },
    methods: {
        ...mapActions(['changeText']),
        generate(t) {
            this.changeText(`mailto:${t}`);
        }
    }
};
</script>
<style lang="less">
@import './style.less';
</style>