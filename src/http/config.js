/*
 * @Author: chenjiaxi
 * @Date: 2019-05-15 19:49:36
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-20 17:29:09
 */

import config from '@/config';
import Fly from 'flyio/dist/npm/wx';
import { Token } from '../utils/token';
const fly = new Fly();

fly.config.timeout = 2000;
fly.config.baseURL = config.host;
fly.noRefetch = false; // noRefetch 为 true 时，不做未授权重试机制

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
        // token 重试机制
        const httpCode = err.status.toString();
        if (httpCode === '403') { // 或 401
            if (!fly.noRefetch) {
                const requset = err.request;
                _refetch({
                    url: requset.url,
                    data: requset.body,
                    options: {method: requset.method}
                });
            }
        }
        if (fly.noRefetch || httpCode !== '403') {
            wx.hideLoading();
            if (err) {
                wx.showToast({
                    title: '请求失败',
                    icon: 'none',
                    duration: 1000
                });
            }
        }
    });

const _refetch = (params) => {
    const token = new Token();
    fly.noRefetch = true; // 避免陷入重发循环
    token.getTokenFromServer((token) => {
        fly.request(params.url, params.data, params.options)
            .then(() => {
                fly.noRefetch = false; // 重置 noRefetch 状态
            })
            .catch((e) => {
                wx.showToast({
                    title: '令牌服务器故障',
                    icon: 'none',
                    duration: 1000
                });
            });
    });
};

export default fly;
