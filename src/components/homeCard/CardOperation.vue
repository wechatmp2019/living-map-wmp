<template>
    <div class="card-operation" @click="toggleCardOperation">
        <block v-if="type === 'place'">
            <div class="card-operation-icon">
                <i-icon type="flag_fill" size="36" v-if="hasSaved"/>
                <i-icon type="flag" size="36" v-else/>
            </div>
            <div class="card-operation-status">
                <text v-if="hasSaved">已订阅</text>
                <text v-else>订阅</text>
            </div>
        </block>
        <block v-else>
            <div class="card-operation-icon">
                <i-icon type="service_fill" size="36" v-if="hasSaved"/>
                <i-icon type="service" size="36" v-else/>
            </div>
            <div class="card-operation-status">
                <text v-if="hasSaved">已加入卡包</text>
                <text v-else>加入卡包</text>
            </div>
        </block>
    </div>

</template>

<script>
export default {
    name: 'card-operation',
    data () {
        return {
            hasSaved: false
        };
    },
    props: {
        type: {
            type: String,
            default: 'tip'
        }
    },
    computed: {
    },
    methods: {
        toggleCardOperation () {
            this.hasSaved = !this.hasSaved;
        }
    }
};
</script>

<style scoped>
.i-card {
    margin: 4px 8px;
    font-size: 14px;
    overflow: hidden;
    background: #fff;
    border: 1rpx solid #dddee1;
}

</style>
