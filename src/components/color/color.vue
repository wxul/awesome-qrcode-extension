<template>
    <transition name="fade">
        <div class="color-wrap" v-if="visible" @click="close">
            <div class="close" @click="close">
                <i class="fa fa-close"></i>
            </div>
            <div class="color" @click.stop="none">
                <chrome v-model="vcolor"></chrome>
            </div>
        </div>
    </transition>
</template>
<script>
import { Chrome } from 'vue-color';
export default {
    components: { Chrome },
    data() {
        return {
            visible: false,
            cb: () => { },
            color: '',
            vcolor: '',
            result: ''
        };
    },
    created() {
        // this.result = this.color;
        this.vcolor = this.color;
    },
    watch: {
        result: function (v) {
            this.cb(v);
        }
    },
    methods: {
        show() {
            this.visible = true;
            this.$watch('vcolor', (v) => {
                this.result = typeof v == 'string' ? v : v.hex;
            })
        },
        close() {
            // this.cb(this.result);
            this.visible = false;
        },
        none() { }
    }
};
</script>
<style lang="less">
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    visibility: hidden;
}

.color-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .color {
        width: auto;
        height: auto;
        margin-top: 30px;
        background-color: #fff;
    }
    .close {
        position: absolute;
        right: 0;
        top: 0;
        width: 0;
        height: 0;
        border-top: 50px solid #fff;
        border-left: 50px solid transparent;
        color: #333;
        cursor: pointer;
        &:hover {
            color: #ff6200;
        }
        i.fa {
            right: 5px;
            top: -45px;
            color: black;
            position: absolute;
            font-size: 20px;
        }
    }
}
</style>