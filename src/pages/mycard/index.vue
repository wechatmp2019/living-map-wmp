<template>
    <div class="my-card-container">
        <div class="my-card__title">我的卡包</div>
        <scroll-view scroll-y :enable-back-to-top="true" class="scroll-container">
            <div class="card-list">
                <div class="card-list__item" v-for="item in list" :key="item.id">
                    <my-card :title="item.title" :cardId="item.id"
                        :detail="JSON.parse(item.detail)" :cardData="item"/>
                </div>
            </div>
        </scroll-view>

        <i-message id="message" />
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import MyCard from '@/components/carddetails/MyCard';

// const { $Message } = require('@/static/iview/base/index');
export default {
    components: {
        MyCard
    },
    data () {
        return {
            list: []
        };
    },
    computed: {
        ...mapGetters({
            getMarkPointById: 'getMarkPointById'
        })
    },
    methods: {
        ...mapActions([
            'getUserCards'
        ]),
        handleClick () {
        },
        _getUserCards () {
            this.getUserCards({
                callback: (res) => {
                    const cards = res.map((item) => {
                        return item.collectionable;
                    });
                    cards.forEach((item) => {
                        const markName = this.getMarkPointById(item.markpoint_id).name;
                        item.markName = markName;
                    });
                    this.list = cards;
                    wx.stopPullDownRefresh();
                }
            });
        }
    },
    onLoad () {
        this._getUserCards();
    },
    onPullDownRefresh () {
        this._getUserCards();
    }
};
</script>
<style scoped>
.my-card__title {
    font-size:24px;
    font-weight:500;
    color:#666;
    padding: 16px 16px 0 42px;
;
}
.card-list {
    padding:10px 10px;
}
.card-list__item {
    padding-bottom: 4px;
}
.scroll-container {
    height: 92vh;
}
.timecontainer{
    padding: 1vh;
    text-align:right;
    color:gray;
    font-style: italic;
    font-size: medium;
    font-weight: bold;
}
</style>
