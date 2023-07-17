import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/dashboard.vue'
import user from '../views/user.vue'
import post from '../views/post.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/post',
    name: post,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/post.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
