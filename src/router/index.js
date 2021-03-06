import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  // routes: [{
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // }]
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      }
    ]
  }]
})
