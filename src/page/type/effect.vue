<template>
    <div class="effect">
        <div class="input-line point">
            <span>{{lang.ef_point}}</span>
            <input type="range" v-model="round" value="0" min="-50" max="50" step="1">
        </div>
        <div class="input-line">
            <color-picker class="w50" v-model.trim="fgcolor" :tip="lang.ef_fg"></color-picker>
            <color-picker class="w50" v-model.trim="bgcolor" :tip="lang.ef_bg"></color-picker>
        </div>
        <div class="input-line">
            <color-picker class="w50" v-model.trim="ptcolor" :tip="lang.ef_pt"></color-picker>
            <color-picker class="w50" v-model.trim="inptcolor" :tip="lang.ef_inpt"></color-picker>
        </div>
        <div class="input-line">
            <color-picker class="w50" v-model.trim="gccolor" :tip="lang.ef_gc"></color-picker>
            <x-select class="full" v-model="gctype" :items="gctypes" :tip="lang.ef_gctype"></x-select>
        </div>
        <div class="input-line"></div>
        <div class="input-line"></div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ColorPicker from '@components/colorpicker';
import xSelect from '@components/select';

export default {
    components: { ColorPicker, xSelect },
    data() {
        return {
            gctypes: [{
                text: '无',
                value: '0'
            }, {
                text: '反斜线',
                value: 'backslash'
            }, {
                text: '斜线',
                value: 'slash'
            }, {
                text: '圆形',
                value: 'circular'
            }, {
                text: '水平',
                value: 'horizontal'
            }, {
                text: '垂直',
                value: 'vertical'
            }]
        };
    },
    computed: {
        ...mapGetters(['text', 'lang', 'effect']),
        fgcolor: {
            get() {
                return this.$store.state.effect.fgcolor
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'fgcolor', value })
            }
        },
        bgcolor: {
            get() {
                return this.$store.state.effect.bgcolor
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'bgcolor', value })
            }
        },
        round: {
            get() {
                return this.$store.state.effect.round
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'round', value })
            }
        },
        ptcolor: {
            get() {
                return this.$store.state.effect.ptcolor
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'ptcolor', value })
            }
        },
        inptcolor: {
            get() {
                return this.$store.state.effect.inptcolor
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'inptcolor', value })
            }
        },
        gccolor: {
            get() {
                return this.$store.state.effect.gccolor
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'gccolor', value })
            }
        },
        gctype: {
            get() {
                return this.$store.state.effect.gctype
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'gctype', value })
            }
        },
        margin: {
            get() {
                return this.$store.state.effect.margin
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'margin', value })
            }
        },
        level: {
            get() {
                return this.$store.state.effect.level
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'level', value })
            }
        },
        rotate: {
            get() {
                return this.$store.state.effect.rotate
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'rotate', value })
            }
        },
        width: {
            get() {
                return this.$store.state.effect.width
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'width', value })
            }
        },
        logo: {
            get() {
                return this.$store.state.effect.logo
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'logo', value })
            }
        },
        logotype: {
            get() {
                return this.$store.state.effect.logotype
            },
            set(value) {
                this.$store.commit('setEffect', { name: 'logotype', value })
            }
        }
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
        &.point {
            line-height: 25px;
            &>* {
                vertical-align: middle;
            }
            &>input {
                width: 200px;
            }
        }
    }

    .w50 {
        width: 48%;
    }
}
</style>