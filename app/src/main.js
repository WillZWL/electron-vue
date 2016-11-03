'use strict'
import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import VueAuth from '@websanova/vue-auth'
global.$ = global.jQuery = require('jquery')
// console.log($)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'metismenu/dist/metisMenu.min.css'
require('metismenu')
require('bootstrap')
require('./assets/js/custom.js')

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)

Vue.config.debug = true

const router = new Router({
  // scrollBehavior: () => ({ y: 0 }),
  routes
})

Vue.use(VueAuth, {
  router: router,
  rolesVar: 'roles'
})
// Http
// Vue.http.options.root = 'http://vanguard/'

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
