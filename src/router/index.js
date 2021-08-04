import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Home from '../pages/Home.vue'
import JobHome from '../pages/JobHome.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
    path: '/jobs',
    name: 'JobHome',
    component: JobHome
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
