// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';
// import $http from '@/http/request';

Vue.use(Vuex);

const store = new Vuex.Store({
    namespace: true,
    state: {
        count: 0
    },
    getters: {
        count: state => state.count
    },
    mutations: {
        increment: (state, payload) => {
            const obj = state;
            obj.count += payload;
        },
        decrement: (state, payload) => {
            const obj = state;
            obj.count -= payload;
        }
    },
    actions: {
        getCount: async (context, payload) => {
            // const res =  await $http.get('api/...');
            // context.commit('increment', res.data);
        }
    }
});

export default store;
