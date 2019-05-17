/*
 * store actions 文件，异步修改状态
 * @Author: chenjiaxi
 * @Date: 2019-05-15 22:06:14
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-17 10:20:30
 */

import $http from '@/http/request';
import * as types from './mutationTypes';
const actions = {

    login: async (context, payload) => {
        try {
            const resData = await $http.login(payload);
            if (toString(resData.returnCode).charAt(0) === '2') {
                context.commit(types.SET_OPEN_ID, resData.data.openId);
            }
        } catch (err) {
            console.log(err);
            wx.showToast({
                title: '登录失败',
                icon: 'none',
                duration: 1000
            });
        }
    }
};

export default actions;
