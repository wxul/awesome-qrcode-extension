<template>
    <div class="txt">
        <textarea rows="2" type="text" class="full" v-model.trim="txt" :placeholder="lang.p_txt"></textarea>
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
        this.txt = this.text;
    },
    methods: {
        ...mapActions(['changeText']),
        generate(t) {
            this.changeText(t);
        }
    }
};
</script>
<style lang="less">
@import './style.less';
</style>