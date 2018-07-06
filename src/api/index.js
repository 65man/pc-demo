import '@/utils/mock.js'
import axios from 'axios'

/**
 * 获取首页默认地址
 */

export const getHome = () => axios.get('/api/home').then(res => res.data)
