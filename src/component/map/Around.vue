<script setup>
import AroundItem from '@/component/map/AroundItem.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const router = useRouter();

const test = 20; //주변정보 더미데이터

const type = route.query.type;
const content = route.query.content;
const activeMenu = ref(content); // 메뉴 클릭시 효과 변수

function setActiveMenu(menu) {
  // 메뉴함수
  router.push({ name: menu, query: { type: type, content: menu } });
  activeMenu.value = menu;
}
</script>

<template>
  <section class="mapContent">
    <ul class="aroundMenu">
      <li
        :class="{ active: activeMenu === 'tour' }"
        @click="setActiveMenu('tour')"
      >
        관광
      </li>
      <li
        :class="{ active: activeMenu === 'culture' }"
        @click="setActiveMenu('culture')"
      >
        문화
      </li>
      <li
        :class="{ active: activeMenu === 'festival' }"
        @click="setActiveMenu('festival')"
      >
        축제
      </li>
      <li
        :class="{ active: activeMenu === 'travel' }"
        @click="setActiveMenu('travel')"
      >
        여행
      </li>
      <li
        :class="{ active: activeMenu === 'Leisure' }"
        @click="setActiveMenu('Leisure')"
      >
        레포츠
      </li>
      <li
        :class="{ active: activeMenu === 'sleep' }"
        @click="setActiveMenu('sleep')"
      >
        숙박
      </li>
      <li
        :class="{ active: activeMenu === 'shop' }"
        @click="setActiveMenu('shop')"
      >
        쇼핑
      </li>
      <li
        :class="{ active: activeMenu === 'food' }"
        @click="setActiveMenu('food')"
      >
        음식
      </li>
      <li
        :class="{ active: activeMenu === 'camp' }"
        @click="setActiveMenu('camp')"
      >
        캠핑
      </li>
    </ul>
    <div class="aroundDiv container-fluid">
      <div class="wrap row">
        <AroundItem class="col-6 col-sm-2" v-for="t in test" />
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
  height: 500px;
  border: 1px solid yellow;
  margin: 20px auto 0;
}
/* 아래는 주변메뉴 */
.aroundMenu {
  width: 95%;
  margin: 0 auto;
  list-style: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  border: 1px solid red;
}
.aroundMenu > li {
  margin-right: 10px;
  cursor: pointer;
  color: #757575;
}
.active {
  color: white !important;
  border-bottom: 4px solid #d30000;
}

/* 주변 정보 */
.aroundDiv {
  height: 470px;
  border: 1px solid white;
  overflow: auto;
}
</style>
