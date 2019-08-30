import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53738de7 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _7601aa90 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages_blog" */))
const _4744847a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _a1ba445e = () => interopDefault(import('..\\pages\\playground.vue' /* webpackChunkName: "pages_playground" */))
const _0ade300a = () => interopDefault(import('..\\pages\\work\\index.vue' /* webpackChunkName: "pages_work_index" */))
const _3b5ed399 = () => interopDefault(import('..\\pages\\work\\agrimanager.vue' /* webpackChunkName: "pages_work_agrimanager" */))
const _732b68ac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _53738de7,
      name: "about"
    }, {
      path: "/blog",
      component: _7601aa90,
      name: "blog"
    }, {
      path: "/contact",
      component: _4744847a,
      name: "contact"
    }, {
      path: "/playground",
      component: _a1ba445e,
      name: "playground"
    }, {
      path: "/work",
      component: _0ade300a,
      name: "work"
    }, {
      path: "/work/agrimanager",
      component: _3b5ed399,
      name: "work-agrimanager"
    }, {
      path: "/",
      component: _732b68ac,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
