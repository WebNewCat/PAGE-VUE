import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import AboutUs from '@/components/AboutUs'
import goodCases from '@/components/goodCases'
import Activities from '@/components/Activities'
import ContactUs from '@/components/ContactUs'
import coomFooter from '@/components/coomFooter'

Vue.use(Router)


export default new Router({
	          mode: 'history',
	              srcollBehavior(to,from,savedPosition){
	              if(to.hash){
	          return {
	      selector:to.hash
	         }
	          }
	
	          },
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
		{
			path: '/',
			name: 'Banner',
			component: Banner
		},
		{
			path: '/',
			name: 'AboutUs',
			component: AboutUs
		},
		{
			path: '/',
			name: 'goodCases',
			component: goodCases
		},
		{
			path: '/',
			name: 'ContactUs',
			component: ContactUs
		},
		{
			path: '/',
			name: 'coomFooter',
			component: coomFooter
		},
		{
			path: '/',
			name: 'Activities',
			component: Activities
		},
  ]
})
