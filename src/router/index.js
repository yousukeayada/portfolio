import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/components/Home'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
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
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
