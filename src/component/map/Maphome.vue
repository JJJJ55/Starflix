<script setup>
import AroundItem from '@/component/map/AroundItem.vue';
import PickItem from '../pick/PickItem.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const router = useRouter();

const test = 20; //주변정보 더미데이터
const pick = 10;

const type = route.params.type;
const activeMenu = ref(type); // 메뉴 클릭시 효과 변수

function setActiveMenu(menu) {
  // 메뉴함수
  // router.push({ name: menu, params: { type: menu } });
  activeMenu.value = menu;
}
</script>

<template>
  <section class="mapContent">
    <div class="textArea">
      <h2 class="title">별자리를 확인하고 공유해보세요.</h2>
      <p class="text">명소 주변정보와 리뷰도 한눈에 확인할 수 있습니다.</p>
    </div>
    <div class="aroundDiv container-fluid">
      <h2 class="title">내가 찜한 명소</h2>
      <div class="wrap row">
        <PickItem v-for="t in test" class="col-12 col-sm-6 col-md-4" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 580px) {
  .aroundMenu {
    font-size: 10px !important;
  }
}

.mapContent {
  width: 90%;
  height: 100%;
  border: 1px solid yellow;
  margin: 20px auto 0;
}
/* 아래는 홈 */

/* 주변 정보 */
.aroundDiv {
  height: 470px;
  border: 1px solid white;
  overflow: auto;
}
.title,
.text {
  color: white;
}
.title {
  font-weight: bold;
}
</style>
