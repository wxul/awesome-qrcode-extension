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
            <color-picker class="w50" v-model.trim="gccolor" :tip="lang.ef_gccolor"></color-picker>
            <x-select class="w50" v-model="gctype" :items="gctypes" :tip="lang.ef_gctype"></x-select>
        </div>
        <div class="input-line">
            <input @change="selectfile($event)" type="file" style="display:none;" ref="logo" accept="image/*">
            <button @click="choosefile" class="btn w50">{{lang.ef_choose}}</button>
            <x-select class="w50" v-model="logotype" :items="logotypes" :tip="lang.ef_icontype"></x-select>
        </div>
        <div class="input-line">
            <x-select class="w50" v-model="level" :items="levels" :tip="lang.ef_level"></x-select>
            <x-select class="w50" v-model="rotate" :items="rotates" :tip="lang.ef_rotate"></x-select>
        </div>
        <div class="input-line">
            <x-select class="w50" v-model="width" :items="widths" :tip="lang.ef_width"></x-select>
            <x-select class="w50" v-model="margin" :items="margins" :tip="lang.ef_margin"></x-select>
        </div>
        <div class="btn" @click="clearEffect">{{lang.btn_clear}}</div>
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
            rotates: [{
                text: '0',
                value: '0'
            }, {
                text: '90°',
                value: '1'
            }, {
                text: '180°',
                value: '2'
            }, {
                text: '270°',
                value: '3'
            }],
            margins: [{
                text: '0',
                value: 0
            }, {
                text: '10px',
                value: 10
            }, {
                text: '15px',
                value: 15
            }, {
                text: '20px',
                value: 20
            }, {
                text: '25px',
                value: 25
            }],
            widths: [{
                text: '300px',
                value: 300
            }, {
                text: '250px',
                value: 250
            }, {
                text: '200px',
                value: 200
            }, {
                text: '150px',
                value: 150
            }, {
                text: '100px',
                value: 100
            }]
        };
    },
    computed: {
        ...mapGetters(['text', 'lang', 'effect']),
        gctypes() {
            return [{
                text: this.lang.ef_no,
                value: '0'
            }, {
                text: this.lang.ef_backslash,
                value: 'backslash'
            }, {
                text: this.lang.ef_slash,
                value: 'slash'
            }, {
                text: this.lang.ef_circular,
                value: 'circular'
            }, {
                text: this.lang.ef_horizontal,
                value: 'horizontal'
            }, {
                text: this.lang.ef_vertical,
                value: 'vertical'
            }]
        },
        logotypes() {
            return [{
                text: this.lang.ef_icon,
                value: 'icon'
            }, {
                text: this.lang.ef_border,
                value: 'border'
            }, {
                text: this.lang.ef_stroke,
                value: 'stroke'
            }, {
                text: this.lang.ef_default,
                value: 'default'
            }];
        },
        levels() {
            return [{
                text: this.lang.ef_L,
                value: 'L'
            }, {
                text: this.lang.ef_M,
                value: 'M'
            }, {
                text: this.lang.ef_Q,
                value: 'Q'
            }, {
                text: this.lang.ef_H,
                value: 'H'
            }];
        },

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
    methods: {
        ...mapActions(['clearEffect']),
        choosefile() {
            this.$refs.logo.click();
        },
        selectfile(e) {
            console.log(e.target.files);
            if (e.target.files && e.target.files.length && e.target.files[0].type.indexOf('image') > -1) {
                this.logo = e.target.files[0];
            }
        },
        clear() {

        }
    }
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
        .btn {
            border: 0;
            padding: 0;
            margin: 0;
            outline: 0;
        }
    }

    .w50 {
        width: 48%;
    }
}
</style>