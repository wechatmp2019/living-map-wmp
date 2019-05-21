<template>
    <div class="map-mark" :style="style">
        <i-icon type="coordinates_fill" :size="size" :custom="icon" :color="color"/>
    </div>
</template>

<script>

export default {
    name: 'map-mark',
    components: {
    },
    props: {
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
            default: '#B2D0EA'
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

</style>
