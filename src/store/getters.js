/*
 * getters计算过滤操作
 * @Author: chenjiaxi
 * @Date: 2019-05-15 22:07:34
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-23 22:35:20
 */

const getters = {
    getCardsByMarkPointId: (state, getters) => (id) => {
        return state.markPoints.find(markPoints => markPoints.id === id);
    }
};

export default getters;
