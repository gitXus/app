import appHeader from './app-header';

export default {
  install(Vue) {
    Vue.component(appHeader.name, appHeader);
  },
};
