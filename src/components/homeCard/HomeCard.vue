<template>
    <div class="home-card">
        <div class="home-card-content">
            <div class="home-card-header">
                <div class="home-card-header-content">
                    <image class="home-card-header-thumb" :src="thumb" mode="aspectFit" v-if="thumb" />
                    {{ title }}
                </div>
            </div>
            <div class="home-card-body">
                <div class="home-card-body__item" v-for="(item, index) in detail" :key="index">
                    {{item}}
                </div>
            </div>
        </div>
        <div class="home-card-operation">
            <card-operation :type="type"/>
        </div>
    </div>
</template>

<script>
import CardOperation from './CardOperation';

export default {
    name: 'home-card',
    components: {
        CardOperation
    },
    props: {
        thumb: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        type: {
            validator: (value) => {
                return ['place', 'tip'].indexOf(value) !== -1;
            },
            default: 'tip'
        },
        detail: {
            type: Array,
            default: []
        }
    },
    computed: {
    },
    methods: {

    }
};
</script>

<style scoped>
.home-card {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    overflow: hidden;
    background: #fff;
    border: 1rpx solid #dddee1;
    padding: 8px 16px;
}
.home-card-header {
    display: flex;
    padding: 6px 16px;
    align-items: center
}
.home-card-header-content {
    flex: 1;
    text-align: left
}
.home-card-header-thumb {
    display: inline-block;
    width: 64px;
    height: 64px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    background-size: cover;
    vertical-align: middle
}
.home-card-header-title {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: #1c2438
}
.home-card-body {
    position: relative;
    padding: 6px 16px;
    color: #495060;
    font-size: 14px
}
.home-card-footer {
    position: relative;
    padding: 6px 16px;
    color: #80848f;
    font-size: 12px
}
.home-card-operation {
    align-self: center;
}
</style>
