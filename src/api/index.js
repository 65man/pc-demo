import '@/utils/mock.js'
import axios from 'axios'

/**
 * 获取首页默认地址
 */

export const getHome = () => axios.get('/api/home').then(res => res.data)
// 产品列表
export const getOrderList = () => axios.get('/api/getOrderList').then(res => res.data)
// 新闻列表
export const getNewsList = () => axios.get('/api/getNewsList').then(res => res.data)
// 轮播图图片
export const getSwiper = () => axios.get('/api/getSwiper').then(res => res.data)
// 产品模块信息
export const getBoardList = () => axios.post('/api/getBoardList', {data: 1}).then(res => res.data)
