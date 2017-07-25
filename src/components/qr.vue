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
        ...mapGetters(['text', 'lang', 'effect'])
    },
    watch: {
        text: function (v, old) {
            this.QR.changeText(v);
        },
        'effect.round': function (v, old) {
            this.QR.changeRound(v < 0, Math.abs(v) / 100);
        },
        'effect.fgcolor': function (v, old) {
            this.QR.changeFgColor(v);
        },
        'effect.bgcolor': function (v, old) {
            this.QR.changeBgColor(v);
        },
        'effect.ptcolor': function (v, old) {
            this.QR.changePtColor(v);
        },
        'effect.inptcolor': function (v, old) {
            this.QR.changeInPtColor(v);
        },
        'effect.gccolor': function (v, old) {
            this.QR.changeGcColor(this.effect.gctype, v);
        },
        'effect.width': function (v, old) {
            this.QR.changeWidth(v);
        },
        'effect.rotate': function (v, old) {
            this.QR.changeRotate(v);
        },
        'effect.level': function (v, old) {
            this.QR.changeLevel(v);
        },
        'effect.margin': function (v, old) {
            this.QR.changeMargin(v);
        },
        'effect.width': function (v, old) {
            this.QR.changeWidth(v);
        },
        'effect.gctype': function (v, old) {
            this.QR.changeGradientWay(v, this.effect.gccolor);
        },
        'effect.logotype': function (v, old) {
            this.QR.changeLogotype(v);
        },
        'effect.logo': function (v, old) {
            if (v) {
                this.QR.changeLogoimg(v, this.effect.logotype);
            } else {
                this.QR.resetAll();
            }
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