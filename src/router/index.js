import { createRouter, createWebHashHistory } from 'vue-router'
import { authService } from '@/api/authService'

import GretingPage from '@/views/GreetingView.vue'
import HomePage from '@/views/HomepageView.vue'
import AuthPage from '@/views/AuthView.vue'
import LoginPage from '@/views/LoginView.vue'
import RegistrationPage from '@/views/RegistrationView.vue'

const routes = [
  { path: '/', component: GretingPage, name: 'greeting' },
  { path: '/map', component: HomePage, name: 'homepage' },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage, name: 'login' },
      { path: 'registration', component: RegistrationPage, name: 'registration' }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory('/IT-traveller/'),
  routes
})

// router.beforeEach((to, from, next) => {
//   const authRoutes = ['login', 'registration']
//   const { name } = to

//   if (authService.isLoggedIn() && authRoutes.includes(name)) {
//     next({ name: 'homepage' })
//   } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })
