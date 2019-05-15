import Vue from 'vue';
import App from './App';
import global from './components/global/global';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();
Vue.prototype.globalData = global;
