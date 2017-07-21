<template>
    <div class="email">
        <input type="text" class="full" v-model="txt" :placeholder="lang.p_email">
        <div class="btn" @click="generate(txt)">{{lang.btn_generator}}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import mix from '@utils/mix';
export default {
    mixins: [mix],
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