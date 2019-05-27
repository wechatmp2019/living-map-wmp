<template>
    <div class="campus-map" >
        <scroll-view scroll-y :enable-back-to-top="true" class="map-scroll-container">
            <image :src="currentMap ? currentMap.imageUrl : loadingUrl" mode="widthFix" class="campus-map__img"/>
            <map-mark v-for="(item,index) in mapMarks" :key="item.id+index" 
                :icon="item.image_url"
                :position="[item.latitude, item.longitude]" 
                :clickHandler="handleMapMarkClick(item.id, item.name)"/>
        </scroll-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import MapMark from './MapMark';

export default {
    name: 'campus-map',
    components: {
        MapMark
    },
    data () {
        return {
            loadingUrl: 'https://image.weilanwl.com/gif/loading-white.gif'
        };
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
        ...mapState([
            'currentMap'
        ])
    },
    methods: {
        handleMapMarkClick (markId, markName) {
            return () => {
                this.$emit('markClick', markId, markName);
            };
        }
    },
    onLoad () {
    }
};
</script>

<style scoped>
.campus-map {
    position: relative;
}
.map-scroll-container {
    height: 100vh;
}
.campus-map__img {
    width: 100vw;
}
</style>
