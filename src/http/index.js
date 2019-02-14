/* eslint-disable no-param-reassign,eol-last */
/*
* created by Administrator on 2018/12/26
* 好的代码像粥一样,是得用时间和精力熬的。
*/
import { apis } from './api';

export default {
  install(Vue) {
    Vue.prototype.$apis = apis;
  },
};
