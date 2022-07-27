import stayApp from '../views/stay-app.vue'
import stayDetails from '../views/stay-details.vue'
import loginPage from '../views/login-signup.vue'
import chat from '../views/chat.vue'
// import stayEdit from '../views/stay-edit.vue'
// import signupPage from '../views/signup-page.vue'
// import userDetails from '../views/user-details.vue'
// import reviewPage from '../views/review-page.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'stay-app',
			component: stayApp,
		},
		{
			path: '/stay/:id?',
			name: 'stay-details',
			component: stayDetails,
		},
		{
			path: '/chat',
			name: 'chat',
			component: chat
		},
		{
			path: '/login',
			name: 'login-page',
			component: loginPage,
		},
		// {
		// 	path: '/user',
		// 	name: 'user-details',
		// 	component: userDetails,
		// },
		// {
		// 	path: '/review',
		// 	name: 'review-page',
		// 	component: reviewPage,
		// },
	],
})

export default router
