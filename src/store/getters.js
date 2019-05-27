/*
 * getters计算过滤操作
 * @Author: chenjiaxi
 * @Date: 2019-05-15 22:07:34
 * @Last Modified by: chenjiaxi
 * @Last Modified time: 2019-05-26 11:59:27
 */

const getters = {
    getMarkPointById: (state, getters) => (id) => {
        return state.markPoints.find(markPoints => markPoints.id === id);
    },
    getCardsMap: (state) => {
        return state.cardsMap;
    },
    getCardsByMarkPointId: (state) => (id) => {
        return state.cardsMap[id];
    }
};

export default getters;
