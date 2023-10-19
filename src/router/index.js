import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    
    {
    path: '/方塊一',
      name: '方塊一',
      component: () => import('../views/方塊一.vue')
    },
    {
      path: '/方塊二',
      name: '方塊二',
      component: () => import('../views/方塊二.vue')
    },
    {
      path: '/disert',
      name: 'disert',
      component: () => import('../views/disert.vue')
    },
    {
      path: '/components/NetHomePage',
      name: '/components/NetHomePage',
      component: () => import('../components/NetHomePage.vue')
    },
    {
      path: '/components/houseHeader',
      name: '/components/houseHeader',
      component: () => import('../components/houseHeader.vue')
    },
    

    {
      path: '/實驗',
      name: '實驗',
      component: () => import('../views/實驗.vue')
    },

    {
      path: '/components/BlogHeader',
      name: '/components/BlogHeader',
      component: () => import('../components/BlogHeader.vue')
    },

    {
      path: '/Fandi/FandiHome',
      name: '/Fandi/FandiHome',
      component: () => import('../views/Fandi/FandiHome.vue')
    },
    {
      path: '/Fandi/Otoiawa',
      name: '/Fandi/Otoiawa',
      component: () => import('../views/Fandi/Otoiawa.vue')
    },
    {
      path: '/Fandi/FandiRoguin',
      name: '/Fandi/FandiRoguin',
      component: () => import('../views/Fandi/FandiRoguin.vue')
    },
    {
      path: '/Fandi/person',
      name: '/Fandi/person',
      component: () => import('../views/Fandi/person.vue')
    },
    {
      path: '/Fandi/Sagasu',
      name: '/Fandi/Sagasu',
      component: () => import('../views/Fandi/Sagasu.vue')
    },
    {
      path: '/Fandi/bukken',
      name: '/Fandi/bukken',
      component: () => import('../views/Fandi/bukken.vue')
    },
    {
      path: '/Fandi/fanlist',
      name: '/Fandi/fanlist',
      component: () => import('../views/Fandi/fanlist.vue')
    },
    {
      path: '/components/BOKELAIHeader',
      name: '/components/BOKELAIHeader',
      component: () => import('../components/BOKELAIHeader.vue')
    },
  ]
})

export default router
