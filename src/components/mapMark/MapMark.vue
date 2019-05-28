<template>
    <div class="map-mark" :style="style" @click="clickHandler">
        <!-- <i-icon :size="size" :custom="icon" :color="color"/> -->
        <image :src="icon" class="mark-image" mode="aspectFit"/>
    </div>
</template>

<script>

export default {
    name: 'map-mark',
    components: {
    },
    props: {
        clickHandler: {
            type: Function
        },
        icon: {
            type: String,
            default: ''
        },
        place: {
            type: String,
            default: ''
        },
        position: {
            type: Array,
            default: [10, 10]
        },
        size: {
            type: String,
            default: '66'
        },
        color: {
            type: String,
            default: '#fff'
        }
    },
    computed: {
        style () {
            return this.$styles({
                left: this.position[0] + 'vw',
                top: this.position[1] + 'vh'
            });
        }
    },
    methods: {
    }
};
</script>

<style scoped>
.map-mark {
    position: absolute;
}
.mark-image {
    width: 50px;
    height: 50px;
}
.mark-image--big {
    width: 110px;
    height: 110px;
}
.zhulou {
    width: 75px;
    height: 75px;
}
.tushuguan, .xueshi {
    width: 90px;
    height: 90px;
}
</style>
