<script setup>
import Header from '@/component/common/Header.vue';
import MyInfo from '@/component/MyPage/MyInfo.vue';
import MyReview from '@/component/MyPage/MyReview.vue';
import MyPlace from '@/component/MyPage/MyPlace.vue';
import { useRoute, useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
const test = 10;
const route = useRoute();
const router = useRouter();

const activeMenu = ref('userInfo');

function setActiveMenu(menu) {
  router.push({ name: menu });
  activeMenu.value = menu;
}
</script>

<template>
  <div class="content">
    <Header />
    <section class="PageTitle container-fruid">
      <div class="titleBox row">
        <div class="col-12 col-sm-7">
          <h1 class="title">마이 페이지</h1>
          <p class="text">
            회정원보 관리 및 사용자가 작성한 콘텐츠를 확인합니다.
          </p>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <ul class="myMenu">
        <li
          :class="{ active: activeMenu === 'userInfo' }"
          @click="setActiveMenu('userInfo')"
        >
          회원 정보 관리
        </li>
        <li
          :class="{ active: activeMenu === 'myPlaces' }"
          @click="setActiveMenu('myPlaces')"
        >
          등록한 별 명소
        </li>
        <li
          :class="{ active: activeMenu === 'myReviews' }"
          @click="setActiveMenu('myReviews')"
        >
          등록한 명보 리뷰
        </li>
      </ul>
      <div class="hr"></div>
      <RouterView />
      <!-- <MyInfo />
      <MyPlace />
      <MyReview v-for="t in test" :title="'이곳보다 좋은 곳은 없습니다.'" /> -->
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 550px) {
  .myMenu {
    flex-direction: column;
    text-align: center;
  }
}
@media (max-width: 750px) {
  .myMenu > li {
    font-size: 20px !important;
  }
}
@media (max-width: 790px) {
  .content {
    background-size: 300% !important;
  }
  .PageTitle {
    height: 250px !important;
  }
  .titleBox {
    width: 100% !important;
    top: 120px !important;
    left: 0px !important;
  }
  table {
    font-size: 10px !important;
  }
  .btnArea {
    flex-direction: column;
  }
}
.content {
  min-height: 100vh;
  /* background-image: url('@/assets/img/homeImg.png'); */
  background-image: url('@/assets/img/mypageImg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  overflow: auto;
}
.PageTitle {
  height: 350px;
}
.titleBox {
  width: 90%;
  padding-left: 20px;
  border: 1px solid red;
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 230px;
  left: 60px;
}
.title {
  color: white;
  font-weight: bold;
}
.text {
  color: white;
}
section {
  border: 3px solid white;
  width: 100%;
  margin-bottom: 20px;
}

/*  */

.myMenu {
  width: 95%;
  margin: 0 auto;
  list-style: none;
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  border: 1px solid red;
}
.myMenu > li {
  margin-right: 30px;
  cursor: pointer;
  color: #757575;
}
.active {
  color: white !important;
}
.hr {
  width: 95%;
  margin: 10px auto;
  border: 2px solid white;
}
</style>
