import { createRouter, createWebHistory } from 'vue-router'

// 导入Home组件
const Home = () => import('@/components/content/home/Home')

// 导入Category组件
const Category = () => import('@/components/content/category/Category')

// 导入Shopcart组件
const Shopcart = () => import('@/components/content/shopcart/Shopcart')

// 导入Profile组件
const Profile = () => import('@/components/content/profile/Profile')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
