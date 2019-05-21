<template>
    <div class="home-card-drawer">
        <div class="notice-bar">
            <i-notice-bar icon="systemprompt" closable loop  
                background-color="#fff" color="#999">
                {{notice}}
            </i-notice-bar>
        </div>
        <div class="home-card-list">
            <div class="list__item" v-for="(item, index) in list" :key="index">
                <home-card :title="item.title" :type="index === 0 ? 'place' : 'tip'"
                    :detail="item.detail"/>
            </div>
        </div>
    </div>
</template>

<script>
import HomeCard from '../homeCard/HomeCard';

export default {
    name: 'home-card-drawer',
    components: {
        HomeCard
    },
    props: {
        place: {
            type: String,
            default: ''
        },
        notice: {
            type: String,
            default: ''
        },
        list: {
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
.home-card-drawer {
    padding: 0 8px;
    background:rgb(255,255,255,0);
    position: fixed;
    z-index:99;
    top:60vh;
    width: 100%;
}
.notice-bar, .list__item {
    padding-bottom: 8px;
}
</style>
