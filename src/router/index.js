import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/school',
    name: 'school',
    component: () => import('../views/school/school'),
    children: [
      {
        path: 'base',
        component: () => import('../views/school/base/base')
      },
      {
        path: 'info',
        component: () => import('../views/school/info/info')
      },
      {
        path: 'target',
        component: () => import(('../views/school/target/target'))
      },
      {
        path: 'rank',
        component: () => import('../views/school/rank/rank')
      }
    ]
  },
  {
    path: '/hasMajorInSchool',
    name: 'hasMajorInSchool',
    component: () => import('../views/hasMajorInSchool/hasMajorInSchool')
  }
]

const router = new VueRouter({
  routes
})

export default router
