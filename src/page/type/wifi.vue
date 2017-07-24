<template>
    <div class="wifi">
        <input type="text" class="full" v-model.trim="WIFI.S" placeholder="SSID">
        <input type="password" :disabled="disablePwd" class="full" v-model.trim="WIFI.P" :placeholder="lang.w_pwd">
        <x-select class="full" v-model="WIFI.T" :items="items" :tip="tip"></x-select>
        <div class="btn" @click="generate">{{lang.btn_generator}}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import mix from '@utils/mix';
import xSelect from '@components/select';

export default {
    mixins: [mix],
    components: { xSelect },
    data() {
        return {
            WIFI: {
                S: '', // SSID
                P: '', // Password
                T: 'WPA', // type,WEP/WPA/nopass
            },
            disablePwd: false
        };
    },
    computed: {
        ...mapGetters(['text', 'lang']),
        ftxt() {
            return this.formatter('WIFI', this.WIFI);
        },
        tip() {
            return this.lang.w_type;
        },
        items() {
            return [{
                text: 'WEP',
                value: 'WEP'
            }, {
                text: 'WPA',
                value: 'WPA'
            }, {
                text: this.lang.w_no,
                value: 'nopass'
            }];
        }
    },
    watch: {
        'WIFI.T': function (v) {
            this.disablePwd = v == 'nopass';
            this.WIFI.P = v == 'nopass' ? '' : this.WIFI.P;
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
.wifi {
    input {
        margin-bottom: 10px;
    }
}
</style>