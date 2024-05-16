import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginBefore/LoginView.vue';
import MainView from '@/views/LoginBefore/MainView.vue';
import SplashView from '@/views/LoginBefore/SplashView.vue';

// 홈화면
import HomeView from '@/views/LoginAfter/HomeView.vue';
// 별명소 지도

// 커뮤니티
import BoardView from '@/views/Board/BoardView.vue';
import BoardCRUD from '@/views/Board/BoardCRUD.vue';

// 찜리스트
import MyPickView from '@/views/Pick/MyPickView.vue';

// 마이페이지
import MyPageView from '@/views/MyPageView.vue';
import MyInfo from '@/component/MyPage/MyInfo.vue';
import MyPlace from '@/component/MyPage/MyPlace.vue';
import MyReview from '@/component/MyPage/MyReview.vue';

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
    {
      path: '/main/:type',
      name: 'loginRegist',
      component: LoginView,
    },
    // 여기까지 로그인 전

    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      //일반 게시판리스트
      path: '/board',
      name: 'boardList',
      component: BoardView,
    },
    {
      // 찜리스트
      path: '/pick',
      name: 'pick',
      component: MyPickView,
    },
    {
      path: '/mypage',
      name: 'mypage',
      redirect: '/mypage/userInfo',
      component: MyPageView,
      children: [
        {
          path: ':type',
          name: 'userInfo',
          component: MyInfo,
        },
        {
          path: ':type',
          name: 'myPlaces',
          component: MyPlace,
        },
        {
          path: ':type',
          name: 'myReviews',
          component: MyReview,
        },
      ],
    },
  ],
});

export default router;
