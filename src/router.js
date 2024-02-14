import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './stores/store.js'

const CoachDetail = () => import('./pages/coaches/CoachDetail.vue')
const ContactCoach = () => import('./pages/requests/ContactCoach.vue')
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue')
const RequestReceived = () => import('./pages/requests/RequestReceived.vue')
const UserAuth = () => import('./pages/auth/UserAuth.vue')
const NotFoundPage = () => import('./pages/NotFound.vue')

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
			component: CoachDetail,
			children: [
				{
					path: 'contact',
					name: 'ContactCoach',
					component: ContactCoach,
				},
			],
		},
		{
			path: '/register',
			name: 'CoachesRegistration',
			component: CoachRegistration,
			meta: { requireAuth: true },
		},
		{
			path: '/requests',
			name: 'RequestReceived',
			component: RequestReceived,
			meta: { requireAuth: true },
		},
		{
			path: '/auth',
			name: 'UserAuth',
			component: UserAuth,
			meta: { requireUnauth: true },
		},
		{
			path: '/:notFound(.*)',
			name: 'NotFoundPage',
			component: NotFoundPage,
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
