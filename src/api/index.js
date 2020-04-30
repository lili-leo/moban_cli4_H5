/*
 * @Author: your name
 * @Date: 2020-04-29 10:12:46
 * @LastEditTime: 2020-04-30 10:13:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cli4\src\api\index.js
 */

import $axios from './http.js'
import qs from 'qs'
$axios.interceptors.request.use((req) => {
  if (req.method === 'post') {
    req.data = qs.stringify(req.data);
  }
  return req;
}, (error) => Promise.reject(error));

// const base = 'api';
const base = 'http://api.k780.com/?app=weather.today&weaid=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json';
// // $axios.defaults.baseURL = 'http://182.254.146.100:8899/api/'

export const requestLogin = params => { return $axios.get(`${base}`, params)};

export const getUserList = params => { return $axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return $axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return $axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return $axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return $axios.post(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return $axios.get(`${base}/user/add`, { params: params }); };

// export default caipiao;
// import requestLogin from "@/utils/request";