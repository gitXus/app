/* eslint-disable prefer-const,import/prefer-default-export,import/no-mutable-exports,eol-last,max-len */
/*
* created by Administrator on 2018/12/26
* 好的代码像粥一样,是得用时间和精力熬的。
*/
import http from './request';

// 获取验证码
export const getValidCode = () => http.get('/validCode');
// 注册
let register = data => http.put('/register', data);
// 登录
let login = params => http.post('/login', params);
// 添加收获地址
let getAddr = data => http.put('/addr', data);
// 获取收获地址
let saveAddr = () => http.get('/addr');
// 删除收获地址
let delAddress = data => http.delete('/addr', { params: data });
// 修改收获地址
let revAddress = data => http.post('/addr', data);
// 获取商品
let obtainCommodity = data => http.get('/prod', { params: data });
// 获取秒杀商品
let seckills = data => http.get('/seckill', { params: data });
// 轮播图
let addBanner = () => http.get('/banner');
// 添加商品到购物车
let addCart = data => http.put('/cart', data);
// 获取购物车商品
let saveCart = () => http.get('/cart');
// 更新购物车商品数量
let updateShop = data => http.post('/cart', data);
// 获取购物车商品数量
let shopNumber = () => http.get('/cartCount');
// 删除购物车商品
let deleteCart = data => http.post('/delcart', { cartids: data });
// 商品搜索
let search = data => http.get('/searchProd', { params: data });
// 创建订单
let order = data => http.put('./order', data);
// 支付
let payShop = data => http.post('/pay', { orderid: data });

export let apis = { login,
  register,
  getValidCode,
  getAddr,
  saveAddr,
  delAddress,
  revAddress,
  addBanner,
  obtainCommodity,
  seckills,
  addCart,
  saveCart,
  deleteCart,
  updateShop,
  shopNumber,
  order,
  payShop,
  search,
};

