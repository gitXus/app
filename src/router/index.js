/* eslint-disable import/prefer-default-export,no-var,prefer-arrow-callback,func-names */
import Router from 'vue-router';
import receiveAddress from '../pages/receive-address';
import addReceiveAddress from '../pages/add-receive-address';
import revReceiveAddress from '../pages/rev-receive-address';
import loginReg from '../pages/loginReg';
import homePage from '../pages/homePage';
import mall from '../pages/mall';
import repayment from '../pages/repayment';
import loan from '../pages/loan';
import details from '../pages/details';
import cart from '../pages/cart';
import order from '../pages/order';
import killing from '../pages/killing';
import myOrder from '../pages/myOrder';
import search from '../pages/search';
import searchMain from '../pages/searchMain';

import login from '../components/login';
import register from '../components/register';
import home from '../components/home';

const routes = [
  { path: '/', redirect: '/auth/home' },
  { path: '/receive-address', meta: { requireAuth: true, needHeader: '收货地址', needFooter: '地址' }, name: 'receive-address', component: receiveAddress },
  { path: '/add-receive-address', meta: { requireAuth: true, needHeader: '添加收货地址', needFooter: false }, name: 'add-receive-address', component: addReceiveAddress },
  { path: '/rev-receive-address', meta: { requireAuth: true, needHeader: '修改收货地址', needFooter: false }, name: 'rev-receive-address', component: revReceiveAddress },
  { path: '/mall', name: 'mall', component: mall },
  { path: '/repayment', name: 'repayment', component: repayment },
  { path: '/loan', name: 'loan', component: loan },
  { path: '/details', name: 'details', component: details },
  { path: '/cart', name: 'cart', component: cart },
  { path: '/order', name: 'order', component: order },
  { path: '/killing', name: 'killing', component: killing },
  { path: '/myOrder', name: 'myOrder', component: myOrder },
  { path: '/search', name: 'search', component: search },
  { path: '/searchMain', name: 'searchMain', component: searchMain },
  {
    path: '/auth',
    component: loginReg,
    redirect: '/auth/register',
    children:
      [
        { path: 'login', component: login },
        { path: 'register', component: register },
      ],
  },
  {
    path: '/auth',
    component: homePage,
    redirect: '/auth/home',
    children:
      [
        { path: 'home', component: home },
      ],
  },
];
export const router = new Router({
  routes,
});

var isLogin = true; // 代表是否登录
router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth) {
    // 检查有没有权限
    // 如果没有就跳转到login
    if (isLogin) {
      next();
    } else {
      next('/auth/login');
    }
  } else {
    next(); // 路由放行
  }
});
