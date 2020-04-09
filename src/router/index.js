
import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/Home')
const List = () => import('@/pages/list/List')
const Detail = () => import('@/pages/detail/Detail')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})