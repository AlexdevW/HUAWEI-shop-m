import Footer from '@/components/HwFooter'

const Home = () => import('@/views/Home')
const Mall = () => import('@/views/Mall')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const ProductList = () => import('@/views/ProductList')
const Detail = () => import('@/views/Detail')
const Login = () => import('@/views/Login')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {}
  },
  {
    path: '/home',
    // 了解重定向
    // alias: '/',
    name: 'home',
    components: {
      default: Home,
      footer: Footer
    },
    meta: {
      isTabbar: true,
      title: '首页',
      icon: '&#xe612;',
      headerBackShow: false,
      isAuthRequired: false
    }
  },
  {
    path: '/mall',
    name: 'mall',
    components: {
      default: Mall,
      footer: Footer
    },
    meta: {
      isTabbar: true,
      title: '商城',
      icon: '&#xe611;',
      headerBackShow: false,
      isAuthRequired: false
    },
    children: [
      {
        path: ':proId',
        name: 'productlist',
        component: ProductList,
        meta: {
          title: '商城',
          isAuthRequired: false
        }
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      footer: Footer
    },
    meta: {
      isTabbar: true,
      title: '购物车',
      icon: '&#xe607;',
      headerBackShow: false,
      isAuthRequired: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      footer: Footer
    },
    meta: {
      isTabbar: true,
      title: '我的',
      icon: '&#xe616;',
      headerBackShow: false,
      isAuthRequired: false
    }
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      default: Detail
    },
    meta: {
      headerBackShow: true,
      title: '详情',
      isAuthRequired: false
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    },
    meta: {
      headerBackShow: true,
      isAuthRequired: false,
      title: '登录'
    }
  }
]
