/*
 * token 管理，获取，验证
 * @Author: chenjiaxi
 * @Date: 2019-05-19 22:21:00
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-20 12:52:27
 */
import Config from '../config';
import $http from '../http/request';

class Token {
    constructor () {
        this.verifyUrl = Config.host + 'token/verify';
        this.tokenUrl = Config.host + 'token/user';
    }

    verify () {
        const token = wx.getStorageSync('token');
        if (!token) {
            this.getTokenFromServer();
        } else {
            this._verifyFromServer(token);
        }
    }

    // 从服务器获取 token
    getTokenFromServer (callback) {
        const _this = this;
        wx.login({
            success: async (res) => {
                const resData = await $http.post({url: _this.tokenUrl, data: {code: res.code}});
                if (resData.data.token) {
                    wx.setStorageSync('token', resData.data.token);
                    callback && callback(resData.data.token);
                } else {
                    wx.showToast({
                        title: '未获取token或token已失效',
                        icon: 'none',
                        duration: 1000
                    });
                }
            }
        });
    }

    // 携带令牌去服务器校验令牌
    async _verifyFromServer (token) {
        const _this = this;
        const resData = await $http.post({url: _this.verifyUrl, data: {token}});
        if (resData.data) {
            const valid = resData.data.isValid;
            if (!valid) {
                _this.getTokenFromServer();
            }
        } else {
            wx.showToast({
                title: '校验 token 失败',
                icon: 'none',
                duration: 1000
            });
        }
    }
}

export { Token };
