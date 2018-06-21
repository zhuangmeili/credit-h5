import Vue from 'vue'
import Router from 'vue-router'

//组件引入
const Home=()=> import('./views/Home.vue');
const About=()=> import('./views/About.vue');

//组件引入
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
