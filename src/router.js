import { createRouter, createWebHistory } from 'vue-router'

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
					path: '/contact',
					name: 'ContactCoach',
					component: () => import('./pages/requests/ContactCoach.vue'),
				},
			],
		},
		{
			path: '/register',
			name: 'CoachesRegistration',
			component: () => import('./pages/coaches/CoachRegistration.vue'),
		},
		{
			path: '/requests',
			name: 'RequestReceived',
			component: () => import('./pages/requests/RequestReceived.vue'),
		},
		{
			path: '/:notFound(.*)',
			name: 'NotFoundPage',
			component: () => import('./pages/NotFound.vue'),
		},
	],
})

export default router
