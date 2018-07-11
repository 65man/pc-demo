import Mock from 'mockjs'

var Random = Mock.Random
Mock.setup({
  timeout: 800 // 设置延迟响应，模拟向后端请求数据
})

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
    'title': '@ctitle(20)',
    'url': 'http://starcraft.com'
  }]
}

const getSwiper = {
  'data|4': [{
    'href': 'www.baidu.com',
    'src': Random.image('900x506', '#894FC4', '#FFF', 'png', '@cword(4)'),
    'title': '@cword(4)'
  }]
}

const getBoardList = {
  'data': [{
    'title': '开放产品',
    'description': '开放产品是一款开放产品',
    'id': 'car',
    'toKey': 'analysis',
    'saleout': false
  }, {
    'title': '品牌营销',
    'description': '品牌营销帮助你的产品更好地找到定位',
    'id': 'earth',
    'toKey': 'count',
    'saleout': false
  },
  {
    'title': '使命必达',
    'description': '使命必达快速迭代永远保持最前端的速度',
    'id': 'loud',
    'toKey': 'forecast',
    'saleout': true
  },
  {
    'title': '勇攀高峰',
    'description': '帮你勇闯高峰，到达事业的顶峰',
    'id': 'hill',
    'toKey': 'publish',
    'saleout': false
  }]
}

const login = {
  'data': {
    'userName': 'admin'
  }
}

Mock.mock('/api/home', template01)
// 全部产品
Mock.mock('/api/getOrderList', getOrderList)
// 新闻列表
Mock.mock('/api/getNewsList', getNewsList)
// 轮播图图片
Mock.mock('/api/getSwiper', getSwiper)
// board的数据
Mock.mock('/api/getBoardList', 'post', getBoardList)
// 登录的api
Mock.mock('/api/login', 'post', login)
