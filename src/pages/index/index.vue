<template>
  <div>
    <!-- 顶栏和抽屉菜单 -->
    <i-row>
      <div class="top-bar">
        <i-col span="4">
            <div  @click="toggleMine">
                <i-icon type="mine" size="44" color="#fff"/>
            </div>
        </i-col>
        <i-col span="16" class="top-bar__title">{{currentMark}}</i-col>
        <i-col span="4" class="top-bar__sub-menu">
            <div @click="handleSubMenuClick">
                <i-icon type="other" size="44" color="#fff" />
            </div>
        </i-col>
      </div>

      <i-drawer mode="left" :visible="showMine" @close="toggleMine">
        <div class="mine-container">
            <aside-menu></aside-menu>
        </div>
      </i-drawer>
    </i-row>

    <!-- 地图主体和卡片列表 -->
    <div class="main-map">
        <campus-map />
        <home-card-drawer :list="mockData.homeCardDrawer" place="信息化中心"
            notice="mpvue v-for循环特别卡"/>
        <!-- <home-card :detail="[111,222,333]" title="23423"/>-->
    </div>
  </div>
</template>

<script lang="js">
import HomeCard from '@/components/homeCard/HomeCard';
import AsideMenu from '@/components/asideMenu/AsideMenu';
import HomeCardDrawer from '@/components/homeCardDrawer/homeCardDrawer';
import CampusMap from '@/components/mapMark/CampusMap.vue';

export default {
    data () {
        return {
            currentMark: '一米校园',
            showMine: false,
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

    methods: {
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
        }
    },

    created () {
    // let app = getApp();
    },
    onLoad () {
    }
};
</script>

<style scoped>
.top-bar {
  height: 44px;
  background:rgba(178,208,234,1);
  opacity:0.9;
  color: #6A9BC6;
  padding: 0 10px;
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
