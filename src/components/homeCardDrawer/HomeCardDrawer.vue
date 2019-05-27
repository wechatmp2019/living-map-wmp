<template>
    <movable-area class="cards-movable-area" :style="movableAreaStyle">
        <movable-view class="home-card-drawer" :style="cardDrawerStyle"
            @touchmove.stop="handleTouchMove" @touchstart="handleTouchStart"
            direction="vertical"
            :out-of-bounds="true"
            @change="handleViewChange">
            <div id="cardList">
                <div class="notice-bar" :style="{display: list.length > 0 ? 'block' : 'none'}">
                    <i-notice-bar icon="systemprompt" closable loop  
                        background-color="#fff" color="#999">
                        {{notice}}
                    </i-notice-bar>
                </div>
                <div class="home-card-list" >
                    <div class="list__item" v-for="(item, index) in list" :key="item.id+index">
                        <home-card :title="item.title"
                            :detail="item.detail"/>
                    </div>
                </div>
            </div>
        </movable-view>
    </movable-area>
</template>

<script>
import HomeCard from '../homeCard/HomeCard';

export default {
    name: 'home-card-drawer',
    components: {
        HomeCard
    },
    data () {
        return {
            listTop: -1,
            touchPoint: 0,
            curListHeight: 0,
            backupListHeight: 0,
            listVisibility: 'visible',
            listOpacity: 1,
            showMovableArea: false
        };
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
        cardDrawerStyle () {
            return this.$styles({
                height: this.curListHeight + 'px',
                visibility: this.listVisibility,
                opacity: this.listOpacity
            });
        },
        movableAreaStyle () {
            return this.$styles({
                display: this.showMovableArea ? 'block' : 'none'
            });
        }
    },
    watch: {
        list () {
            setTimeout(() => {
                this.resetCardListHeight();
                this.showCardsList();
            }, 100);
        },
        touchPoint (newVal, oldVal) {
            if (oldVal !== -1) {
                const moveDistance = Math.abs(newVal - oldVal) > 50 ? (newVal - oldVal) : 0;
                // const direction = moveDistance > 0; // true 为向下，false向上
                // this.cardListElement.exec((rect) => {
                //     if (direction) { // 向下滑动
                //         if (rect[0].top > 399) {
                //             this.listTop += moveDistance;
                //         }
                //     } else { // 向上滑动
                //         if (rect[0].bottom < 0) {
                //             this.listTop += moveDistance;
                //         }
                //     }
                // });
                this.listTop += moveDistance;
            }
        }
    },
    methods: {
        handleViewChange (e) {
            const offsetY = e.y;
            console.log(offsetY);
            if (offsetY > 20) {
                this.hideCardsList();
            }
        },
        handleTouchMove (e) {
            // clientY 是距离可显示区域的垂直距离，pageY 是距离文件顶部的垂直距离（大）
            // this.touchPoint = e.touches[0].clientY;
        },
        handleTouchStart (e) {
            // this.getCardListTop('listTop');
        },
        handleTouchEnd (e) {
            console.log('end', e);
        },
        resetCardListHeight () {
            wx.createSelectorQuery().select('#cardList').boundingClientRect().exec((rect) => {
                this.curListHeight = rect[0].height;
                console.log(this.curListHeight);
            });
        },
        hideCardsList () {
            this.showMovableArea = false;
            // this.backupListHeight = this.curListHeight;
            // this.curListHeight = 0;
            this.listVisibility = 'hidden';
            this.listOpacity = 0;
        },
        showCardsList () {
            this.showMovableArea = true;
            // this.curListHeight = this.backupListHeight;
            this.listVisibility = 'visible';
            this.listOpacity = 1;
        }
    },
    mounted () {
    },
    onLoad () {
    }
};
</script>

<style scoped>
.cards-movable-area {
    position: fixed;
    width:100vw;
    height: 40vh;
    top: 60vh;
}
.home-card-drawer {
    padding: 0 8px;
    background:rgb(255,255,255,0);
    width: 96%;
    transition: all .5s linear;
    /* overflow: hidden; */
    /* position: fixed; */
    /* top: 0vh;   */
    /* height: 150px; */
}
.notice-bar, .list__item {
    padding-bottom: 8px;
}
</style>
