import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = resolve => require(['../components/index/index'], resolve)
const Test = resolve => require(['../components/test/test'], resolve)

let AppRouter = new Router({
	mode: 'history',
	routes: [{
		path: '/',
		redirect: '/index',
		component: Index
	}, {
		path: '/index',
		component: Index
	}, {
		path: '/test',
		component: Test
	}]
})

/**
 * [AppRouter 处理路由]
 * @param  {[object]} (to, from, next)
 * @JD [如果未匹配到路由，默认重定向到首页或404页面处理]
 */
AppRouter.beforeEach((to, from, next) => {
	if (to.matched.length === 0) {
		next({
			path: '/index',
			query: {
				redirect: to.fullPath
			}
		})
	} else {
		next()
	}
})

export default AppRouter;