import { createRouter, createWebHistory } from 'vue-router'
import store from './stores/store.js'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/coaches' },
		{
			path: '/coaches',
			name: 'CoachesList',
			component: () => import('./pages/coaches/CoachesList.vue'),
		},
		{
			path: '/coaches/:id',
			name: 'CoachDetail',
			props: true,
			component: () => import('./pages/coaches/CoachDetail.vue'),
			children: [
				{
					path: 'contact',
					name: 'ContactCoach',
					component: () => import('./pages/requests/ContactCoach.vue'),
				},
			],
		},
		{
			path: '/register',
			name: 'CoachesRegistration',
			component: () => import('./pages/coaches/CoachRegistration.vue'),
			meta: { requireAuth: true },
		},
		{
			path: '/requests',
			name: 'RequestReceived',
			component: () => import('./pages/requests/RequestReceived.vue'),
			meta: { requireAuth: true },
		},
		{
			path: '/auth',
			name: 'UserAuth',
			component: () => import('./pages/auth/UserAuth.vue'),
			meta: { requireUnauth: true },
		},
		{
			path: '/:notFound(.*)',
			name: 'NotFoundPage',
			component: () => import('./pages/NotFound.vue'),
		},
	],
})
router.beforeEach((to, _from, next) => {
	if (to.meta.requireAuth && !store.getters.isAuthenticated) {
		next('/auth')
	} else if (to.meta.requireUnauth && store.getters.isAuthenticated) {
		next('/coaches')
	} else {
		next()
	}
})

export default router
