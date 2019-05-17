/*
 * @Author: chenjiaxi
 * @Date: 2019-05-15 19:49:36
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-15 21:57:10
 */

import config from '@/config';
import Fly from 'flyio/dist/npm/wx';
const fly = new Fly();

fly.config.timeout = 2000;
fly.config.baseURL = config.host;

// 添加请求拦截器
fly.interceptors.request.use((request) => {
    wx.showLoading({
        title: '加载中...',
        mask: true
    });
    // 给所有请求添加自定义 header
    request.headers = {
        'X-Tag': 'flyio',
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
    };

    return request;
});

// 添加响应拦截器,在 then/catch 之前处理
fly.interceptors.response.use(
    (response) => {
        wx.hideLoading();
        return response.data;
    },
    (err) => {
        console.log(err);
        wx.hideLoading();
        if (err) {
            wx.showToast({
                title: '请求失败',
                icon: 'none',
                duration: 1000
            });
            return 'request failed';
        }
    });

export default fly;
