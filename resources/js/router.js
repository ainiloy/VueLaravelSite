import { createWebHistory, createRouter } from "vue-router";
import home from './pages/home.vue';
import courses from './pages/courses.vue';
import contact from './pages/contact.vue';
import faq from './pages/faq.vue';
import instructors from './pages/instructors.vue';

const  routes = [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    },
    {
        path: '/faq',
        name: 'faq',
        component: faq
    },
    {
        path: '/instructors',
        name: 'instructors',
        component: instructors
      },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ];

  const router = createRouter({
      history: createWebHistory(),
      routes});

export default router;
