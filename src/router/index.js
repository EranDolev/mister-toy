import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from './../views/AboutView.vue'
import ToyIndex from './../views/ToyIndex.vue'
import ToyDetails from './../views/ToyDetails.vue'
import ToyEdit from './../views/ToyEdit.vue'
import login from './../views/Login.vue'
import map from './../components/ToyMap.vue'
import Chart from './../components/ToyChart.vue'
import userDetails from './../views/UserDetails.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/user',
      name: 'user-detials',
      component: userDetails,
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/toy',
      name: 'toy',
      component: ToyIndex,
      // children: [
      //   // {
      //   //   path: '/toy/edit/:toyId?',
      //   //   component: ToyEdit
      //   // },
      // ]
    },
    {
      path: '/toy/:toyId',
      component: ToyDetails,
    },
    {
      path: '/toy/edit/:toyId?',
      component: ToyEdit
    },
  ]
})

export default router
