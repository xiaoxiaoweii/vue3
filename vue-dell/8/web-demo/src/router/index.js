import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import home from '../views/home/home.vue'
import login from '../views/login/login.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: home
},
{
  path: '/login',
  name: 'login',
  component: login,
  beforeEnter (to, from, next) {
    const {
      isLogin
    } = localStorage
    if (isLogin) {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  }
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const {
    isLogin
  } = localStorage
  isLogin || to.name === 'login' ? next() : next({
    name: 'login'
  })
})

export default router
