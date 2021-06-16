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
  component: login
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
