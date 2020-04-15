import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Foo from '../views/Foo.vue'
import Bar from '../views/Bar.vue'
import Categories from '../views/Categories.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo
  },
  {
    path: '/bar',
    name: 'Bar',
    component: Bar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
