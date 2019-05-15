<template>
  <div>
    <!-- 顶栏和抽屉菜单 -->
    <i-row>
      <div class="top-bar">
        <i-col span="4" i-class="top-bar__mine">
          <i-icon type="mine" size="44" color="#fff" @click="toggleMine"/>
        </i-col>
        <i-col span="16" class="top-bar__title">{{currentMark}}</i-col>
        <i-col span="4" class="top-bar__sub-menu">
          <i-icon type="other" size="44" color="#fff" @click="handleSubMenuClick"/>
        </i-col>
      </div>

      <i-drawer mode="left" :visible="showMine" @close="toggleMine">
        <div class="mine-container">
            单击遮罩层关闭
        </div>
      </i-drawer>
    </i-row>

    <!-- 地图主题和卡片列表 -->
    <i-row i-class="main">
      <home-card title="cccccc" extra="ddddd">
        <div slot="content">slot content</div>
        <div slot="footer">slot footer</div>
      </home-card>
    </i-row>
  </div>
</template>

<script lang="js">
import HomeCard from '@/components/card/HomeCard';

export default {
  data () {
    return {
      currentMark: '一米校园',
      showMine: false
    };
  },

  components: {
    HomeCard
  },

  methods: {
    toggleMine () {
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
</style>
