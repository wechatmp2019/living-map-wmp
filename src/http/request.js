/*
 * @Author: chenjiaxi
 * @Date: 2019-05-15 19:50:37
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-16 17:26:37
 */

import fly from './config';
import qs from 'qs';
import config from '../config';

const host = config.host;

const request = {
    get: (params) => {
        return fly.get(`${host}${params.url}`);
    },
    post: (params) => {
        return fly.post(`${host}${params.url}`, qs.stringify(params.data));
    },
    // 封装的登录请求，根据后台接收方式选择是否加qs.stringify
    login: (params) => {
        return fly.post('/login', params);
    }
};

export default request;
