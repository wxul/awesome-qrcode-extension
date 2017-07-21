<template>
    <div class="qrcode">
        <canvas ref="cav" id="canvas"></canvas>
        <a :href="base64||'javascript:;'" :download="lang.filename" class="btn">{{lang.btn_save}}</a>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import createQRImage from '@utils/qrcanvas';
export default {
    data() {
        return {
            QR: null,
            base64: ''
        };
    },
    computed: {
        ...mapGetters(['text', 'lang']),

    },
    watch: {
        text: function (v, old) {
            this.QR.changeText(v);
        }
    },
    mounted() {
        this.QR = new createQRImage('canvas', { callback: this.cb, width: 200 });
        this.QR.changeText(this.text);
    },
    methods: {
        cb() {
            this.base64 = this.$refs.cav.toDataURL('image/png');
        }
    }
}
</script>
<style lang="less">
.qrcode {
    width: 100%;
    padding-top: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    canvas {
        display: block;
        max-width: 100%;
        margin-bottom: 10px;
        box-shadow: 0 0 10px #ff6200;
    }
}
</style>