<template>
  <div>
    <!-- 顶栏和抽屉菜单 -->
      <div class="top-bar">
        <span  @click="toggleMine">
            <i-icon type="mine" size="44" color="#fff"/>
        </span>
    
        <span class="top-bar__title">{{currentMark}}</span>

        <span class="top-bar__sub-menu">
            <span @click="handleSubMenuClick">
                <i-icon type="other" size="44" color="#fff" />
            </span>
        </span>
      </div>

      <i-drawer mode="left" :visible="showMine" @close="toggleMine">
        <div class="mine-container">
            <aside-menu></aside-menu>
        </div>
      </i-drawer>

    <!-- 地图主体和卡片列表 -->
    <div class="main-map">
        <campus-map @markClick="handleMarkClick" :mapMarks="markPoints"/>
        <home-card-drawer :list="currentCardsList" place="信息化中心"
            notice="mpvue v-for循环特别卡" :clickId="clickId"/>
        <!-- <home-card :detail="[111,222,333]" title="23423"/>-->
    </div>
  </div>
</template>

<script lang="js">
import { mapState, mapActions, mapGetters } from 'vuex';
import HomeCard from '@/components/homeCard/HomeCard';
import AsideMenu from '@/components/asideMenu/AsideMenu';
import HomeCardDrawer from '@/components/homeCardDrawer/homeCardDrawer';
import CampusMap from '@/components/mapMark/CampusMap.vue';

export default {
    data () {
        return {
            currentMark: 'BUPT',
            currentCardsList: [],
            showMine: false,
            clickId: 0,
            mockData: {
                homeCardDrawer: [
                    {
                        title: 'aaaaa',
                        detail: [111, 222, 333]
                    }, {
                        title: 'bbbbb',
                        detail: [111, 222, 333]
                    }, {
                        title: 'ccccc',
                        detail: [111, 222, 333]
                    }, {
                        title: 'dddddd',
                        detail: [111, 222, 333]
                    }
                ]
            }
        };
    },

    components: {
        HomeCard,
        AsideMenu,
        HomeCardDrawer,
        CampusMap
    },
    computed: {
        ...mapState([
            'markPoints'
        ]),
        ...mapGetters({
            getCards: 'getCardsByMarkPointId',
            getMarkPointById: 'getMarkPointById',
            getCardsMap: 'getCardsMap'
        })
    },
    methods: {
        ...mapActions([
            'getMap'
        ]),
        toggleMine (e) {
            this.showMine = !this.showMine;
        },
        bindViewTap () {
            const url = '../logs/main';
            if (mpvuePlatform === 'wx') {
                mpvue.switchTab({ url });
            } else {
                mpvue.navigateTo({ url });
            }
        },
        handleMarkClick (markId, markName) {
            this.currentMark = markName;
            this.clickId++;
            const currentCards = this.getCards(markId);
            if (currentCards) {
                this.currentCardsList = currentCards;
            } else {
                this.currentCardsList = [];
            }
        }
    },

    created () {
    // let app = getApp();
    },
    onLoad () {
        // this.getMap();
    }
};
</script>

<style scoped>
.top-bar {
  height: 40px;
  background: #B2D0EA;
  color: #fff;
  font-weight: 500;
  padding: 0 10px;
  font-size:20px;
  display: flex;
  justify-content: space-between;
}
.top-bar__title {
  height: 100%;
  text-align: center;
  line-height: 44px;
}
.top-bar__sub-menu {
  text-align: right;
}
.mine-container {
  width:65vw;
  height:100vh;
  background:#fff;
}
.main-map {
    position: relative;
}
</style>
