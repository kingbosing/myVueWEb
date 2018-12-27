import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import=(file)=>{
    return () => import('@/views/' + file + '.vue')
}

import Layout from '../views/layout/Layout'
// import DefaultMain from '../views/layout/DefaultMain'

const constantRouterMap=[
    { path: '/login', component: () =>import('@/views/login/index'), hidden: true },
    {
        path: '/home',
        name: '首页',
        component: Layout,
        type: 'Chat',
        redirect:'/',
        children: [
          {
            path: 'index',
            component: _import('layout/index'),
            name: 'chat_index',
            hidden: false,
            meta: { title: 'Chat', icon: 'documentation', noCache: true }
          },
          {
            path: 'page',
            component: _import('layout/page'),
            name: 'chat_index',
            hidden: false,
            meta: { title: 'Chat', icon: 'documentation', noCache: true }
          }
        ]
      }
]

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })