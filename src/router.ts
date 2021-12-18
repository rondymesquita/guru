import { createRouter, createWebHashHistory } from 'vue-router';
import PageHome from './components/pages/PageHome.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: PageHome,
    },
  ],
});
