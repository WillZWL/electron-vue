export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/test',
    name: 'Test',
    component: require('./components/TestView')
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
  }
]
