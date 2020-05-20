import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Home from '@/views/Home'
import Store from '@/store/index'
import Article from '@/views/Article'
import CreateArticle from '@/views/CreateArticle'

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
    },
    {
      name: 'Article',
      path: '/article/:id',
      component: Article
    },
    {
      name: 'Create_Article',
      path: '/articles/create',
      component: CreateArticle,
      beforeEnter: (to, from, next) => {
        console.log(to, from)
        if(!Store.state.isAuth){
          return next({path: '/'});
        }
        next();
      }
    }
  ]
})

export default router;