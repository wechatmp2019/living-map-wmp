<template>
  <div class="menu-container">
    <div class="profile">
        <open-data type="userAvatarUrl" lang="zh_CN"  class="profile__avatar"/>
        <open-data type="userNickName" lang="zh_CN" class="profile__nickname"/>
        <div class="profile__area">
            <open-data type="userProvince" lang="zh_CN"/>
            <open-data type="userCity" lang="zh_CN" />
        </div>
        <div class="profile__other-info">
            <open-data type="userGender"/>
            <div class="cuIcon-male" style="color: blue"></div>
            <div class="profile__campus"></div>
        </div>
    </div>

    <div class="menu">
        <i-cell-group>
            <i-cell title="我的卡包" is-link >
                <i-icon slot="icon" type="tasklist" size="28" />
            </i-cell>
            <i-cell title="我的订阅" is-link >
                <i-icon slot="icon" type="collection_fill" size="28" />
            </i-cell>
            <i-cell title="问题反馈" is-link>
                <i-icon slot="icon" type="group" size="28"/>
            </i-cell>
            <i-cell title="关于我们" is-link>
                <i-icon slot="icon" type="label" size="28"/>
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


</style>
