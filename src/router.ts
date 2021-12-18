import { createRouter, createWebHashHistory } from 'vue-router';
import PageHome from './components/pages/PageHome.vue';
import PageLuckDay from './components/pages/PageLuckDay.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: PageHome,
    },
    {
      path: '/luck-day',
      component: PageLuckDay,
    },
  ],
});
