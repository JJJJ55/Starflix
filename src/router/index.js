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
import Modify from '@/component/board/Modify.vue';

// 찜리스트
import MyPickView from '@/views/Pick/MyPickView.vue';

// 마이페이지
import MyPageView from '@/views/MyPageView.vue';
import MyInfo from '@/component/MyPage/MyInfo.vue';
import MyPlace from '@/component/MyPage/MyPlace.vue';
import MyReview from '@/component/MyPage/MyReview.vue';

import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';
import { useUserStore } from '@/stores/user';
import { useBoardStore } from '@/stores/boardStore';

const isArrowAround = (val) => {
  const mapStore = useMapStore();
  const { isAround } = storeToRefs(mapStore);

  if (val) {
    isAround.value = true;
  } else {
    isAround.value = false;
  }
};
const isArrowSearch = (val) => {
  const mapStore = useMapStore();
  const { isSearch } = storeToRefs(mapStore);

  if (val) {
    isSearch.value = true;
  } else {
    isSearch.value = false;
  }
};
const isArrowResult = (val) => {
  const mapStore = useMapStore();
  const { isResult } = storeToRefs(mapStore);

  if (val) {
    isResult.value = true;
  } else {
    isResult.value = false;
  }
};

// const userStore = useUserStore();
// const boardStore = useBoardStore();

// const { place, isSearch, isAround, isResult } = storeToRefs(mapStore);

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
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/regist',
      name: 'regist',
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
        {
          path: 'modify',
          name: 'modify',
          component: Modify,
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
          path: 'userInfo',
          name: 'userInfo',
          component: MyInfo,
        },
        {
          path: 'myPlaces',
          name: 'myPlaces',
          component: MyPlace,
        },
        {
          path: 'myReviews',
          name: 'myReviews',
          component: MyReview,
        },
      ],
    },
    {
      path: '/map',
      name: 'map',
      redirect: '/map/mapHome',
      component: MapView,
      children: [
        {
          path: 'mapHome',
          name: 'mapHome',
          component: Maphome,
          beforeEnter: (to, from, next) => {
            // 페이지 이동 전에 수행할 작업
            isArrowResult(true);
            isArrowSearch(false);
            console.log('지도검색');

            // 작업 완료 후 페이지 이동
            next();
          },
        },
        {
          path: 'mapInfo',
          name: 'mapInfo',
          redirect: '/map/mapInfo/placeInfo',
          component: MapInfoDiv,
          children: [
            {
              path: 'placeInfo',
              name: 'placeInfo',
              component: PlaceInfo,
            },
            {
              path: 'Review',
              name: 'Review',
              component: Review,
            },
            {
              path: 'placeReview',
              name: 'placeReview',
              component: ReviewList,
            },
            {
              path: 'placeAround',
              name: 'placeAround',
              redirect: '/map/mapInfo/placeAround/tour',
              beforeEnter: (to, from, next) => {
                // 페이지 이동 전에 수행할 작업
                isArrowAround(true);
                console.log('주변관광');

                // 작업 완료 후 페이지 이동
                next();
              },
              component: Around,
              children: [
                {
                  path: 'tour',
                  name: 'tour',
                  component: AroundItem,
                },
                {
                  path: 'culture',
                  name: 'culture',
                  component: AroundItem,
                },
                {
                  path: 'festival',
                  name: 'festival',
                  component: AroundItem,
                },
                {
                  path: 'travel',
                  name: 'travel',
                  component: AroundItem,
                },
                {
                  path: 'Leisure',
                  name: 'Leisure',
                  component: AroundItem,
                },
                {
                  path: 'sleep',
                  name: 'sleep',
                  component: AroundItem,
                },
                {
                  path: 'shop',
                  name: 'shop',
                  component: AroundItem,
                },
                {
                  path: 'food',
                  name: 'food',
                  component: AroundItem,
                },
                {
                  path: 'camp',
                  name: 'camp',
                  component: AroundItem,
                },
              ],
            },
            {
              path: 'readReview',
              name: 'readReview',
              component: ReadReview,
            },
          ],
        },
        {
          path: 'addplace',
          name: 'addplace',
          component: AddPlace,
        },
      ],
    },
  ],
});

export default router;
