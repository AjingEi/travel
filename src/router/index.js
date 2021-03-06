import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

// 导出一组路由配置项
export default new Router({
  // 当你访问根路径时，对应home组件
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
