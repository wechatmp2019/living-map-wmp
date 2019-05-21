<template>
    <div class="campus-map" >
        <image src="/static/images/mockMap.jpg" mode="widthFix" class="campus-map__img"/>
        <map-mark :position="[6, 6]"/>
        <map-mark :position="[20, 20]"/>
        <map-mark :position="[50, 50]"/>
    </div>
</template>

<script>
import MapMark from './MapMark';

export default {
    name: 'campus-map',
    components: {
        MapMark
    },
    props: {
        campus: {
            type: String,
            default: 'bupt'
        },
        mapMarks: {
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
.campus-map {
    position: relative;
}
.campus-map__img {
    width: 100vw;
}
</style>
