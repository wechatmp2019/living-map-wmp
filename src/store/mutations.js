/*
 * mutations 修改状态
 * @Author: chenjiaxi
 * @Date: 2019-05-15 22:08:05
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-17 10:35:00
 */

import * as types from './mutationTypes';
const matations = {
    /**
    * state:当前状态树
    * payload: 提交matations时传的参数
    */
    [types.SET_OPEN_ID] (state, payload) {
        state.openId = payload;
    }
};

export default matations;
