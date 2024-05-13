import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginBefore/LoginView.vue';
import MainView from '@/views/LoginBefore/MainView.vue';
import SplashView from '@/views/LoginBefore/SplashView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView,
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
    {
      path: '/main/:type',
      name: 'loginRegist',
      component: LoginView,
    },
  ],
});

export default router;
