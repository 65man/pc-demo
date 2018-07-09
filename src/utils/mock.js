import Mock from 'mockjs'
const template01 = {
  'data|1-4': [{
    'title': '@title',
    'article': '@article'
  }]
}
const getOrderList = {
  'pc': {
    'title': 'PC产品',
    'list|4': [{
      'name': '@cword(4)',
      'url': '@domain',
      'hot|1-2': true
    }]
  },
  'app': {
    'title': '手机应用类',
    'list|4': [{
      'name': '@cword(4)',
      'url': '@domain',
      'hot|1-2': true
    }]
  }
}

const getNewsList = {
  'data|4': [{
    'id|+1': 1,
    'title': '@ctitle(5)',
    'url': 'http://starcraft.com'
  }]
}

const getSwiper = {
  'data|4': [{
    imgUrl: '../assets/slideShow/pic1.jpg'
  }]
}

Mock.mock('/api/home', template01)
// 全部产品
Mock.mock('/api/getOrderList', getOrderList)
// 新闻列表
Mock.mock('/api/getNewsList', getNewsList)
// 轮播图图片
Mock.mock('/api/getSwiper', getSwiper)
