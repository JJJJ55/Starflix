import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginBefore/LoginView.vue';
import MainView from '@/views/LoginBefore/MainView.vue';
import SplashView from '@/views/LoginBefore/SplashView.vue';

// 홈화면
import HomeView from '@/views/LoginAfter/HomeView.vue';
// 별명소 지도
import MapView from '@/views/MapView.vue';
import AddPlace from '@/component/map/AddPlace.vue';
import MapInfoDiv from '@/component/map/MapInfoDiv.vue';
import Around from '@/component/map/Around.vue';
import AroundItem from '@/component/map/AroundItem.vue';
import Maphome from '@/component/map/Maphome.vue';
import PlaceInfo from '@/component/map/PlaceInfo.vue';
import Review from '@/component/map/Review.vue';
import ReviewList from '@/component/map/ReviewList.vue';
import ReadReview from '@/component/map/ReadReview.vue';

// 커뮤니티
import BoardView from '@/views/Board/BoardView.vue';
import List from '@/component/board/List.vue';
import Write from '@/component/board/Write.vue';
import Read from '@/component/board/Read.vue';

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
      redirect: '/board/list',
      component: BoardView,
      children: [
        {
          path: 'list',
          name: 'list',
          component: List,
        },
        {
          path: 'write',
          name: 'write',
          component: Write,
        },
        {
          path: 'read',
          name: 'read',
          component: Read,
        },
      ],
    },
    {
      // 찜리스트
      path: '/pick',
      name: 'pick',
      component: MyPickView,
    },
    {
      //마이페이지
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
    {
      path: '/map',
      name: 'map',
      redirect: '/map/mapInfo',
      component: MapView,
      children: [
        {
          path: ':root',
          name: 'mapInfo',
          redirect: '/map/mapInfo/mapHome',
          component: MapInfoDiv,
          children: [
            {
              path: ':type',
              name: 'mapHome',
              component: Maphome,
            },
            {
              path: ':type',
              name: 'placeInfo',
              component: PlaceInfo,
            },
            {
              path: ':type',
              name: 'Review',
              component: Review,
            },
            {
              path: ':type',
              name: 'placeReview',
              component: ReviewList,
            },
            {
              path: ':type',
              name: 'placeAround',
              redirect: '/map/mapInfo/placeAround/tour',
              component: Around,
              children: [
                {
                  path: ':content',
                  name: 'tour',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'culture',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'festival',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'travel',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'Leisure',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'sleep',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'shop',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'food',
                  component: AroundItem,
                },
                {
                  path: ':content',
                  name: 'camp',
                  component: AroundItem,
                },
              ],
            },
            {
              path: ':type/:id',
              name: 'readReview',
              component: ReadReview,
            },
          ],
        },
        {
          path: ':root',
          name: 'addplace',
          component: AddPlace,
        },
      ],
    },
  ],
});

export default router;
