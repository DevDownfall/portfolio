import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eba7df26 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _40cd297c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3cd9ce5a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _75365fcb = () => interopDefault(import('..\\pages\\users\\manage\\all.vue' /* webpackChunkName: "pages/users/manage/all" */))
const _05daa364 = () => interopDefault(import('..\\pages\\users\\manage\\_id.vue' /* webpackChunkName: "pages/users/manage/_id" */))
const _7dc4cd28 = () => interopDefault(import('..\\pages\\user\\_profile.vue' /* webpackChunkName: "pages/user/_profile" */))
const _15f1c82b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _eba7df26,
    name: "dashboard"
  }, {
    path: "/login",
    component: _40cd297c,
    name: "login"
  }, {
    path: "/register",
    component: _3cd9ce5a,
    name: "register"
  }, {
    path: "/users/manage/all",
    component: _75365fcb,
    name: "users-manage-all"
  }, {
    path: "/users/manage/:id?",
    component: _05daa364,
    name: "users-manage-id"
  }, {
    path: "/user/:profile?",
    component: _7dc4cd28,
    name: "user-profile"
  }, {
    path: "/",
    component: _15f1c82b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
