<template>
    <div class="my-card-container">
        <div class="my-card__title">我的卡包</div>
        <div v-if="isEmpty" class="my-card--empty">
            <image src="/static/images/icon/emptyCard.png" style="width:110px;height:100px;margin-bottom:4px"/>
            <div>暂无收藏的卡片<br>或下拉试试</div>
        </div>
        <scroll-view v-else scroll-y :enable-back-to-top="true" class="scroll-container">
            <div class="card-list">
                <div class="card-list__item" v-for="(mycard, mIndex) in list" :key="mycard.id+mIndex">
                    <my-card :title="mycard.title" :cardId="mycard.id"
                        :detail="JSON.parse(mycard.detail)" :cardData="mycard"/>
                </div>
            </div>
        </scroll-view>

        <i-message id="message" />
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import MyCard from '@/components/carddetails/MyCard';

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
        }),
        isEmpty () {
            return this.list.length === 0;
        }
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
                    this.$forceUpdate();
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
    },
    onShareAppMessage () {
        return {
            title: '校园里有你不知道的信息吗？快来看看吧~',
            path: '/pages/index/main',
            imageUrl: 'https://beiyouxianyu.cn/image/Logoshare.jpg'
        };
    }
};
</script>
<style scoped>
.my-card--empty {
    text-align: center;
    color: #999;
    padding: 32px;
}
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
