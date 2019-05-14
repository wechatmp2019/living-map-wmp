<template>
  <div>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <div>
      <i-button >新的按钮</i-button>
      <i-icon type="activity" size="28" color="#80848f"></i-icon>
    </div>
  </div>
</template>

<script lang="js">

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    };
  },

  components: {
  },

  methods: {
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
    // let app = getApp()
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
