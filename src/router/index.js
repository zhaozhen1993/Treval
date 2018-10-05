import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
		path: '/',
		name: 'home',
		component: home
    },
    {
		path: '/city',
		name: 'City',
		component: City
    },
    {
		path: '/detail/:id',
		name: 'Detail',
		component: Detail
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
  	return savedPosition || { x: 0, y: 0 }
  }
})
