import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/main_page/Main.vue'
import Notice from '../views/my-page/Notice.vue'
import Reserves from '../views/my-page/Reserves.vue'
import NoticeDetail from '../views/my-page/NoticeDetail.vue'
import NewSignUp from '../views/sign/NewSignUp.vue'
import Login from '../views/sign/Login.vue'
import AllProducts from '../views/price_list/AllProducts.vue'
import DietProducts from '../views/price_list/DietProducts.vue'
import HealthProducts from '../views/price_list/HealthProducts.vue'
import VLineProducts from '../views/price_list/VLineProducts.vue'
import PriceDetail from '../views/detail_page/PriceDetail.vue'
import DynamicDetail from '../views/detail_page/DynamicDetail.vue'
import Brand from '../views/contents/Brand.vue'
import RegularDelivery from '../views/contents/RegularDelivery.vue'
import FAQ from '../views/my-page/FAQ.vue'
import Review from '../views/my-page/Review.vue'
import ShoppingBasket from '../views/basket/ShoppingBasket.vue'
import ProductInterest from '../views/basket/ProductInterest.vue'
import OrderInquiry from '../views/my-page/OrderInquiry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Reserves',
      name: 'Reserves',
      component: Reserves
    },
    {
      path: '/NoticeDetail',
      name: 'NoticeDetail',
      component: NoticeDetail
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/Review',
      name: 'Review',
      component: Review
    },
    {
      path: '/NewSignUp',
      name: 'NewSignUp',
      component: NewSignUp
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AllProducts',
      name: 'AllProducts',
      component: AllProducts
    },
    {
      path: '/DietProducts',
      name: 'DietProducts',
      component: DietProducts
    },
    {
      path: '/HealthProducts',
      name: 'HealthProducts',
      component: HealthProducts
    },
    {
      path: '/VLineProducts',
      name: 'VLineProducts',
      component: VLineProducts
    },
    {
      path: '/PriceDetail',
      name: 'PriceDetail',
      component: PriceDetail
    },
    {
      path: '/DynamicDetail/:id',
      name: 'DynamicDetail',
      component: DynamicDetail,
      props: true
    },
    {
      path: '/Brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/RegularDelivery',
      name: 'RegularDelivery',
      component: RegularDelivery
    },
    {
      path: '/ShoppingBasket',
      name: 'ShoppingBasket',
      component: ShoppingBasket
    },
    {
      path: '/ProductInterest',
      name: 'ProductInterest',
      component: ProductInterest
    },
    {
      path: '/OrderInquiry',
      name: 'OrderInquiry',
      component: OrderInquiry
    },
  ]
})

export default router
