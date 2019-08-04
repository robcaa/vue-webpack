import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Foo from 'pages/Foo'
import NotFound404 from 'pages/NotFound404'

Vue.use(Router)

const routes = [
	{ path: '/', component: Home },
	{ path: '/home', component: Home },
	{ path: '/foo', component: Foo },
	{ path: '*', component: NotFound404 },
]

export default new Router({
	linkExactActiveClass: 'active',
	routes
})