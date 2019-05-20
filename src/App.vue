<script>
import { mapState, mapActions } from 'vuex';

export default {
    data () {
        return {
            global: {}
        };
    },
    computed: {
        ...mapState([
            'openId'
        ])
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        _login () {
            wx.login({
                success: (res) => {
                    if (res.code) {
                        console.log('wx.login success,code:', res.code);
                        this.login(res.code);
                    } else {
                        this.$tips.toast('微信登录失败');
                    }
                }
            });
        }
    },
    created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

        let logs;
        if (mpvuePlatform === 'my') {
            logs = mpvue.getStorageSync({key: 'logs'}).data || [];
            logs.unshift(Date.now());
            mpvue.setStorageSync({
                key: 'logs',
                data: logs
            });
        } else {
            logs = mpvue.getStorageSync('logs') || [];
            logs.unshift(Date.now());
            mpvue.setStorageSync('logs', logs);
        }
    },
    mounted () {
    // 自定义导航栏
    // wx.getSystemInfo({
    //   success: e => {
    //     this.global.StatusBar = e.statusBarHeight;
    //     let custom = wx.getMenuButtonBoundingClientRect();
    //     this.global.Custom = custom;
    //     this.global.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
    //   }
    // });
    },

    onLaunch () {
        wx.checkSession({
            success: () => {
                console.log('session success');
            },
            fail: () => {
                this._login();
            }
        });
    }

};
</script>

<style>
@import "../static/colorui/main.wxss";
@import "../static/colorui/icon.wxss";

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>

