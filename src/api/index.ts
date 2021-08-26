import axios from '@/utils/axios'

import { CnodeParams } from '@/types'


export function fetchCnode(params: CnodeParams) {
  return axios({ url: '/api/v1/topics', method: 'get', params })
}
//---------User-API-----------
//登录
export function fetchLogin(data) {
  return axios({ url: '/api/v1/antd/login', method: 'post', data })
}
//添加用户
export function fetchAddUser(data) {
  return axios({ url: '/api/v1/antd/addUser', method: 'post', data })
}
//用户列表
export function fetchUserList(params) {
  return axios({ url: '/api/v1/getUserList', method: 'get', params })
}
//用户状态
export function fetchUserStatus(params) {
  return axios({ url: '/api/v1/antd/changeStatus', method: 'get', params })
}
//获取当前用户信息
export function fetchUserInfo(token) {
  return axios({
    url: '/api/v1/antd/getUserInfo',
    method: 'get',
    headers: { Authorization: token },
    params: {}
  })
}

// --------article-API-------
//下拉框选项
export function fetchCates(params) {
  return axios({ url: '/api/v1/antd/getCates', method: 'get', params })
}
//修改新增文章
export function fetchArticle(data) {
  return axios({ url: '/api/v1/antd/articleAddOrEdit', method: 'post', data })
}
//文章列表
export function fetchArticleList(params) {
  return axios({ url: '/api/v1/antd/articleList', method: 'get', params })
}
//文章信息
export function fetchArticleInfo(params) {
  return axios({ url: '/api/v1/antd/articleInfo', method: 'get', params })
}

