import Vue from 'vue';
import App from './App';
import store from './store/index';
import global from './components/global/global';

Vue.config.productionTip = false;
Vue.prototype.$globalData = global;
Vue.prototype.$store = store;
App.mpType = 'app';

const getEventData = (e) => {
    return e.mp.detail;
};
Vue.prototype.$eventData = getEventData;

const app = new Vue(App);
app.$mount();
