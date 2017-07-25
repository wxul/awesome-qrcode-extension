<template>
    <div class="c-select" :class="{active:active}" @click.stop="ck">
        <div class="color-hex">
            <span class="tip" v-show="tip">{{tip}}:</span>
            <span>{{choosed_color}}</span>
            <span class="cur-color" @click="ck" :style="{'background':choosed_color}"></span>
        </div>
    </div>
</template>
<script>
import { once } from '@utils';
import Color from '@components/color';

export default {
    data() {
        return {
            active: false,
            choosed_color: ''
        };
    },
    props: ['value', 'tip'],
    watch: {
        value: function (v) {
            this.change(v);
        }
    },
    created() {
        this.change();
    },
    methods: {
        ck() {
            Color.show({
                callback: (h) => {
                    this.change(h);
                    this.$emit('input', h);
                },
                color: this.value
            });
        },
        change(v) {
            this.choosed_color = v || this.value;
        }
    }
};
</script>
<style lang="less">
.c-select {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    .color-hex {
        position: relative;
        box-sizing: border-box;
        border: 1px solid #ff6200;
        padding: 4px 22px 4px 4px;
        height: 27px;
        line-height: 18px;
        cursor: pointer;
        font-size: 11px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
        .tip {
            color: #999;
        }
        span.cur-color {
            display: inline-block;
            position: absolute;
            right: 4px;
            top: 4px;
            width: 20px;
            height: 16px;
            box-shadow: 0 0 4px #ff6200;
        }
    }
    &.active {
        .color-hex:after {
            transform: rotate(90deg);
        }
    }

    .color-box {
        position: absolute;
        left: 0;
        top: 26px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #ff6200;
        border-top: 0;
        background-color: #fff;
        .select-item {
            display: block;
            box-sizing: border-box;
            padding: 4px 8px;
            height: 27px;
            line-height: 18px;
            cursor: pointer;
        }
    }
}
</style>