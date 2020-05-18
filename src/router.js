import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Home from '@/views/Home'
import Store from '@/store/index'


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
      component: Login,
      beforeEnter: (to, from, next) => {
        console.log(to, from)
        if(Store.state.isAuth){
          return next({path: '/'});
        }
        next();
      }
    },
    {
      name: 'signup',
      path: '/signup',
      component: Signup,
      beforeEnter: (to, from, next) => {
        console.log(to, from)
        if(Store.state.isAuth){
          return next({path: '/'});
        }
        next();
      }
    }
  ]
})

export default router;