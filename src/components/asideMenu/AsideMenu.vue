<template>
  <div class="menu-container">
    <div class="profile">
        <open-data type="userAvatarUrl" lang="zh_CN"  class="profile__avatar"/>
        <open-data type="userNickName" lang="zh_CN" class="profile__nickname"/>
        <div class="profile__area">
            <open-data type="userProvince" lang="zh_CN"/>
            <span>&nbsp;</span>
            <open-data type="userCity" lang="zh_CN" />
        </div>
        <div class="profile__other-info">
            <div class="profile__campus"></div>
        </div>
    </div>

    <div class="menu">
        <i-cell-group>
            <i-cell title="我的卡包" is-link :url="naviUrl.myCards">
                <image slot="icon" src="/static/images/icon/mycards.png" class="menu__icon"/>
            </i-cell>
            <i-cell title="我的订阅" is-link @click="handleSubscribeClick">
                <image slot="icon" src="/static/images/icon/mysubscribe.png" class="menu__icon"/>
            </i-cell>
            <i-cell title="问题反馈" is-link :url="naviUrl.feedback">
                <image slot="icon" src="/static/images/icon/feedback.png" class="menu__icon"/>
            </i-cell>
            <i-cell title="关于我们" is-link :url="naviUrl.aboutUs">
                <image slot="icon" src="/static/images/icon/aboutus.png" class="menu__icon"/>
            </i-cell>
        </i-cell-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'aside-menu',
    data () {
        return {
            naviUrl: {
                myCards: '/pages/mycard/main',
                mySubscription: '/pages/mysubscription/main',
                feedback: '/pages/feedback/main',
                aboutUs: '/pages/contactus/main'
            }
        };
    },
    props: {
        full: {
            type: Boolean,
            default: false
        }
    },
    computed: {
    },
    methods: {
        handleSubscribeClick () {
            wx.showToast({
                title: '功能正在开发中~',
                icon: 'loading'
            });
        }
    }
};
</script>

<style scoped>
.menu-container {
    padding: 24px 12px;
}
.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0 36px;
}
.profile__area {
    font-size: 12px;
    color: #666;
}
.profile__avatar {
    width: 64px;
    height: 64px;
    margin: auto;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #fff;  
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); 
}
.profile__nickname {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding: 6px 0 4px;
}
.menu__icon {
    height: 20px;
    width: 18px;
}


</style>
