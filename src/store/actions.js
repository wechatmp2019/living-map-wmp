/*
 * store actions 文件，异步修改状态
 * @Author: chenjiaxi
 * @Date: 2019-05-15 22:06:14
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-23 22:32:10
 */

import $http from '@/http/request';
import Config from '@/config';
import * as types from './mutationTypes';

const actions = {

    getMap: async (context, payload) => {
        const resData = await $http.get({
            url: `/api/map/${Config.buptMapId}`,
            data: payload
        });
        if (resData.success) {
            context.commit(types.SET_CURRENT_MAP, resData.data);
            context.commit(types.SET_MARK_POINT, resData.data.markpoints);
        }
    }
};

export default actions;
