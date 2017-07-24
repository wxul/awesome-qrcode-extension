<template>
    <div class="effect">
        <div class="input-line">
            <input type="text" class="w50" v-model.trim="txt" :placeholder="lang.ef_fg">
            <input type="text" class="w50" v-model.trim="txt" :placeholder="lang.ef_bg">
        </div>
        <div class="input-line"></div>
        <div class="input-line"></div>
        <div class="input-line"></div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    date() {
        return {};
    },
    computed: {
        ...mapGetters(['text', 'lang'])
    },
};
</script>
<style lang="less">
.effect {
    .input-line {
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .w50 {
        width: 48%;
    }
}
</style>