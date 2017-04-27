import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import logout from '@/components/logout'
import usrinfo from '@/components/usrinfo'
import root from '@/components/root'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'root',
    component: root
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/usr/:usrname',
    name: 'usrinfo',
    component: usrinfo,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout,
    meta: {
      requiresAuth: true
    }
  }]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这地方需要验证
    if (/^\/usr\//.test(to.path)) {
      let param = to.path.replace(/^\/usr\//, '')
      if (store.state.usr.usrAccount && store.state.usr.usrAccount !== '' && store.state.usr.usrAccount === param) {
        next()
      } else {
        next({
          path: '/'
        })
      }
    } else {
      if (store.state.usr.usrAccount && store.state.usr.usrAccount !== '') {
        next()
      } else {
        next({
          path: '/'
        })
      }
    }
  } else {
    next()
  }
})
export default router
