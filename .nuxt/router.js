import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a185e40a = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _3a194060 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _302c685f = () => interopDefault(import('..\\pages\\quote2.vue' /* webpackChunkName: "pages/quote2" */))
const _303a7fe0 = () => interopDefault(import('..\\pages\\quote3.vue' /* webpackChunkName: "pages/quote3" */))
const _3e0be70c = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _c5d34c66 = () => interopDefault(import('..\\pages\\summary.vue' /* webpackChunkName: "pages/summary" */))
const _8c060324 = () => interopDefault(import('..\\pages\\quote\\default.vue' /* webpackChunkName: "pages/quote/default" */))
const _4fa66578 = () => interopDefault(import('..\\pages\\quote\\galvo.vue' /* webpackChunkName: "pages/quote/galvo" */))
const _b5841a2c = () => interopDefault(import('..\\pages\\quote\\galvo2.vue' /* webpackChunkName: "pages/quote/galvo2" */))
const _72902641 = () => interopDefault(import('..\\pages\\quote\\list.vue' /* webpackChunkName: "pages/quote/list" */))
const _65923d59 = () => interopDefault(import('..\\pages\\quote\\qandr.vue' /* webpackChunkName: "pages/quote/qandr" */))
const _3381ffb1 = () => interopDefault(import('..\\pages\\quotes\\all.vue' /* webpackChunkName: "pages/quotes/all" */))
const _17aec1fd = () => interopDefault(import('..\\pages\\users\\manage\\all.vue' /* webpackChunkName: "pages/users/manage/all" */))
const _0e455596 = () => interopDefault(import('..\\pages\\quotes\\confirmation\\_id.vue' /* webpackChunkName: "pages/quotes/confirmation/_id" */))
const _ef6baa00 = () => interopDefault(import('..\\pages\\quotes\\edit\\_id.vue' /* webpackChunkName: "pages/quotes/edit/_id" */))
const _af59f4d4 = () => interopDefault(import('..\\pages\\users\\manage\\_id.vue' /* webpackChunkName: "pages/users/manage/_id" */))
const _77b3796c = () => interopDefault(import('..\\pages\\quotes\\_id.vue' /* webpackChunkName: "pages/quotes/_id" */))
const _1b1a36c4 = () => interopDefault(import('..\\pages\\user\\_profile.vue' /* webpackChunkName: "pages/user/_profile" */))
const _194bbcb9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a185e40a,
    name: "dashboard"
  }, {
    path: "/login",
    component: _3a194060,
    name: "login"
  }, {
    path: "/quote2",
    component: _302c685f,
    name: "quote2"
  }, {
    path: "/quote3",
    component: _303a7fe0,
    name: "quote3"
  }, {
    path: "/register",
    component: _3e0be70c,
    name: "register"
  }, {
    path: "/summary",
    component: _c5d34c66,
    name: "summary"
  }, {
    path: "/quote/default",
    component: _8c060324,
    name: "quote-default"
  }, {
    path: "/quote/galvo",
    component: _4fa66578,
    name: "quote-galvo"
  }, {
    path: "/quote/galvo2",
    component: _b5841a2c,
    name: "quote-galvo2"
  }, {
    path: "/quote/list",
    component: _72902641,
    name: "quote-list"
  }, {
    path: "/quote/qandr",
    component: _65923d59,
    name: "quote-qandr"
  }, {
    path: "/quotes/all",
    component: _3381ffb1,
    name: "quotes-all"
  }, {
    path: "/users/manage/all",
    component: _17aec1fd,
    name: "users-manage-all"
  }, {
    path: "/quotes/confirmation/:id?",
    component: _0e455596,
    name: "quotes-confirmation-id"
  }, {
    path: "/quotes/edit/:id?",
    component: _ef6baa00,
    name: "quotes-edit-id"
  }, {
    path: "/users/manage/:id?",
    component: _af59f4d4,
    name: "users-manage-id"
  }, {
    path: "/quotes/:id?",
    component: _77b3796c,
    name: "quotes-id"
  }, {
    path: "/user/:profile?",
    component: _1b1a36c4,
    name: "user-profile"
  }, {
    path: "/",
    component: _194bbcb9,
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
