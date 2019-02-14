/* eslint-disable import/no-mutable-exports,prefer-const,eol-last */
/*
* created by Administrator on 2018/12/26
* 好的代码像粥一样,是得用时间和精力熬的。
*/
import axios from 'axios';// 通用配置

let http = axios.create({
  baseURL: 'http://129.204.112.231:8000',
  timeout: 5000,
  withCredentials: true,
});

export default http;
