/* eslint-disable no-new,import/extensions */
// css reset 重置样式
import 'normalize.css';
import 'lib-flexible';
import Vue from 'vue';
import Router from 'vue-router';
import Vant from 'vant';
// import BScroll from 'better-scroll';
import 'vant/lib/index.css';
import store from './vuex';
import App from './App';
import apis from './http';
import { router } from './router';
import appHeader from './public/appHeader';
import elDialog from './public/el-dialog';
import './demo/iconfont.css';

import '../src/vant.scss';

Vue.use(Vant);
Vue.use(appHeader);
Vue.use(elDialog);
Vue.use(Router);
Vue.use(apis);
// Vue.use(BScroll);

new Vue({
  // el: '#app',
  // el: '#app',
  render: h => h(App),
  router,
  store,
}).$mount('#app');
