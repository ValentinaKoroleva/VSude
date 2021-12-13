import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'Внутри суда'},
  },
  {
    path: '/about',
    name: 'About',
    meta: {title: 'О нас'},
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/article/:category',
    name: 'Article',
    meta: {title: 'Внутри суда'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue'),
    props: true
  },
  {
    path: '/questionList/:category',
    name: 'QuestionList',
    meta: {title: 'Вопросы'},
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionList.vue'),
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/what-is-court-monitoring',
    name: 'WhatIsCourtMonitoring',
    meta: {title: 'Судебный мониторинг'},

    component: () => import(/* webpackChunkName: "about" */ '../views/WhatIsCourtMon.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: {title: 'Контакты'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
  {
    path: '/glossary',
    name: 'Glossary',
    meta: {title: 'Глоссарий'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Glossary.vue'),
    // props: true,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/documents',
    name: 'Documents',
    meta: {title: 'Шаблоны документов'},

    component: () => import(/* webpackChunkName: "about" */ '../views/Documents.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
