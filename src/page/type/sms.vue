<template>
    <div class="sms">
        <input type="text" class="full" v-model.trim="phone" :placeholder="lang.s_number">
        <textarea class="full" v-model.trim="txt" rows="4" :placeholder="lang.s_content"></textarea>
        <div class="btn" @click="generate">{{lang.btn_generator}}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            txt: '',
            phone: ''
        };
    },
    computed: {
        ...mapGetters(['text', 'lang'])
    },
    mounted() {
    },
    methods: {
        ...mapActions(['changeText']),
        generate() {
            this.changeText(`smsto:${this.phone}:${this.txt}`);
        }
    }
};
</script>
<style lang="less">
@import './style.less';
.sms {
    input {
        margin-bottom: 10px;
    }
}
</style>