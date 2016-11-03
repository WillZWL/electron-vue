export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/register',
    name: 'register-page',
    component: require('./components/RegisterPageView')
  },
  {
    path: '/login',
    name: 'login-page',
    component: require('./components/LoginPageView')
  },
  {
    path: '/dashboard',
    name: 'dashboard-page',
    component: require('./components/DashboardView')
  }
]
