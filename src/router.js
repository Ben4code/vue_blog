import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Home from '@/views/Home'


Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'signup',
      path: '/signup',
      component: Signup
    }
  ]
})

export default router;