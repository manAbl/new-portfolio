import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _53738de7 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _7601aa90 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages_blog" */))
const _de660ee0 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages_projects" */))
const _732b68ac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

const scrollBehavior = () => ({ x: 0, y: 0 })

export function createRouter() {
  return new Router({
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
      path: "/projects",
      component: _de660ee0,
      name: "projects"
    }, {
      path: "/",
      component: _732b68ac,
      name: "index"
    }],

    fallback: false
  })
}
