import Vue from 'vue'
import VueRouter from 'vue-router'
import newsList from '../components/NewsList.vue'
import relatedNews from '../views/RelatedNews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'newsList',
    component: newsList
  },
  {
    path: '/relatedNews',
    name: 'relatedNews',
    component: relatedNews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
