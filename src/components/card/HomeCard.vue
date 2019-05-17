<template>
  <div :class="['i-card', full ? 'i-card-full' : '']">
    <div class="i-card-header">
        <div class="i-card-header-content">
            <image class="i-card-header-thumb" :src="thumb" mode="aspectFit" v-if="thumb" />
            {{ title }}
        </div>
        <div class="i-card-header-extra" v-if="extra">{{ extra }}</div>
    </div>
    <div class="i-card-body"><slot name="content"></slot></div>
    <div class="i-card-footer"><slot name="footer"></slot></div>
</div>

</template>

<script>
export default {
    name: 'home-card',
    props: {
        full: {
            type: Boolean,
            default: false
        },
        thumb: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        extra: {
            type: String,
            default: ''
        }
    },
    computed: {
    },
    methods: {

    }
};
</script>

<style>
.i-card {
    margin: 0 16px;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    background: #fff;
    border: 1rpx solid #dddee1;
    border-radius: 5px
}
.i-card-full {
    margin: 0;
    border-left: none;
    border-right: none;
    border-radius: 0
}
.i-card-header {
    display: flex;
    padding: 6px 16px;
    align-items: center
}
.i-card-header-content {
    flex: 1;
    text-align: left
}
.i-card-header-thumb {
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
.i-card-header-title {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: #1c2438
}
.i-card-header-extra {
    flex: 1;
    text-align: right;
    font-size: 14px;
    color: #80848f
}
.i-card-body {
    position: relative;
    padding: 6px 16px;
    color: #495060;
    font-size: 14px
}
.i-card-body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    border: 0 solid #e9eaec;
    border-top-width: 1px
}
.i-card-footer {
    position: relative;
    padding: 6px 16px;
    color: #80848f;
    font-size: 12px
}
</style>
