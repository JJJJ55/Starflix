<script setup>
import AroundItem from '@/component/map/AroundItem.vue';
import PickItem from '../pick/PickItem.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const router = useRouter();

const movePage = (val) => {
  router.push({ name: 'readReview', query: { type: 'readReview', id: val } });
};

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
      <table class="titleTable">
        <tr>
          <th class="c1">제목</th>
          <th class="c2">작성자</th>
          <th class="c3">날짜</th>
        </tr>
      </table>
    </div>
    <div class="aroundDiv">
      <table class="titleTable">
        <tr class="contentTable" v-for="(t, index) in test">
          <td class="c1 clickTitle" @click="movePage(index)">제목</td>
          <td class="c2" style="text-align: center">작성자</td>
          <td class="c3" style="text-align: center">날짜</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 790px) {
  .titleTable {
    font-size: 20px !important;
  }
  .contentTable {
    font-size: 15px !important;
  }
}

.mapContent {
  width: 90%;
  height: 100%;
  border: 1px solid yellow;
  margin: 20px auto 0;
}
/* 아래는 홈 */

/* 리뮤목록 */
.aroundDiv {
  height: 470px;
  border: 1px solid white;
  overflow: auto;
}
.aroundDiv::-webkit-scrollbar {
  display: none;
}

.titleTable {
  color: white;
  font-size: 30px;
  margin: 0 auto;
}

th {
  border: 1px solid red;
  text-align: center;
}

.c1 {
  width: 400px;
}
.c2 {
  width: 150px;
}
.c3 {
  width: 200px;
}

.clickTitle {
  cursor: pointer;
}

.contentTable {
  height: 50px;
  font-size: 20px;
  border-bottom: 1px solid white;
}
</style>
