import Mock from 'mockjs'
var template01 = {
  'data|1-4': [{
    'title': '@title',
    'article': '@article'
  }]
}
Mock.mock('/api/home', template01)
