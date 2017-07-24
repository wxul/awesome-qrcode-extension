<template>
    <div class="x-select" :class="{active:active}" @click.stop="ck">
        <div class="select-box">
            <span class="tip" v-show="tip">{{tip}}:&nbsp;</span>{{choosed_item.text}}
        </div>
        <collapse-transition>
            <div class="selection" v-show="active">
                <div class="select-item" v-for="(item,i) in items" :key="item.value" @click.stop="choose(item)">{{item.text}}</div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
import { once } from '@utils';
import CollapseTransition from '@components/collapse-transition';
export default {
    name: 'xSelect',
    components: {
        CollapseTransition
    },
    data() {
        return {
            active: false,
            choosed_item: {}
        };
    },
    props: ['items', 'value', 'tip'],
    watch: {
        value: function (v) {
            this.change(v);
        },
        items: function (v) {
            this.change();
        }
    },
    created() {
        this.change();
    },
    methods: {
        ck() {
            if (typeof window !== 'undefined' && !this.active) {
                once(document, 'click', e => {
                    this.active = false;
                })
            }
            this.active = !this.active;
        },
        choose(item) {
            this.choosed_item = item;
            this.$emit('input', item.value);
            this.active = false;
        },
        change(v) {
            var sl = v || this.value;
            this.choosed_item = this.items.find(e => {
                return e.value == sl;
            }) || {};
        }
    }
};
</script>
<style lang="less">
.x-select {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    .select-box {
        box-sizing: border-box;
        border: 1px solid #ff6200;
        padding: 4px 8px;
        height: 27px;
        line-height: 18px;
        cursor: pointer;
        &:after {
            content: '\f0d7';
            position: absolute;
            right: 6px;
            top: 6px;
            color: #ff6200;
            font: normal normal normal 14px/1 FontAwesome;
            transition: all .2s;
        }
        .tip {
            color: #999;
        }
    }
    &.active {
        .select-box:after {
            transform: rotate(90deg);
        }
    }

    .selection {
        position: absolute;
        left: 0;
        top: 26px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #ff6200;
        border-top: 0;
        background-color: #fff;
        transition: all .2s;
        .select-item {
            display: block;
            box-sizing: border-box;
            padding: 4px 8px;
            height: 27px;
            line-height: 18px;
            cursor: pointer;
            &:hover {
                background-color: #f3f3f3;
            }
        }
    }
}
</style>