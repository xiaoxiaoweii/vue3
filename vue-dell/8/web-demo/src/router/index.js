import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import home from '../views/home/home.vue'
import login from '../views/login/login.vue'
import register from '../views/register/register.vue'
const routes = [{
  path: '/',
  name: 'home',
  component: home
},
{
  path: '/register',
  name: 'register',
  component: register
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
  const {
    name
  } = to
  const isLoginOrRegister = (name === 'login' || name === 'register')
  isLogin || isLoginOrRegister ? next() : next({
    name: 'login'
  })
})

export default router
