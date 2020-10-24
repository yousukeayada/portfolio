import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Item1 from '@/components/Item1'
import Item2 from '@/components/Item2'
import Item3 from '@/components/Item3'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/item1',
      name: 'item1',
      component: Item1
    },
    {
      path: '/item2',
      name: 'item2',
      component: Item2
    },
    {
      path: '/item3',
      name: 'item3',
      component: Item3
    },
  ]
})
