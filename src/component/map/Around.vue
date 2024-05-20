<script setup>
import AroundItem from '@/component/map/AroundItem.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { aroundList } = storeToRefs(mapStore);
const { travel, camp } = mapStore;
const route = useRoute();
const router = useRouter();
const contentId = ref(route.query.contentId);

onMounted(async () => {
  if (contentId.value === '40') {
    await camp(idx);
  } else {
    await travel(idx, contentId.value);
  }
});

watch(
  () => contentId.value,
  (newValue, oldValue) => {
    contentId.value = newValue;
    if (newValue == '40') {
      camp(idx);
    } else {
      travel(idx, newValue);
    }
  }
);

const type = route.query.type;
const idx = route.query.idx;
const activeMenu = ref(contentId); // 메뉴 클릭시 효과 변수

function setActiveMenu(menu, id) {
  // 메뉴함수
  router.push({ name: menu, query: { type: type, idx, contentId: id } });
  activeMenu.value = id;
}
</script>

<template>
  <section class="mapContent">
    <ul class="aroundMenu">
      <li
        :class="{ active: activeMenu === '12' }"
        @click="setActiveMenu('tour', '12')"
      >
        관광
      </li>
      <li
        :class="{ active: activeMenu === '14' }"
        @click="setActiveMenu('culture', '14')"
      >
        문화
      </li>
      <li
        :class="{ active: activeMenu === '15' }"
        @click="setActiveMenu('festival', '15')"
      >
        축제
      </li>
      <li
        :class="{ active: activeMenu === '25' }"
        @click="setActiveMenu('travel', '25')"
      >
        여행
      </li>
      <li
        :class="{ active: activeMenu === '28' }"
        @click="setActiveMenu('Leisure', '28')"
      >
        레포츠
      </li>
      <li
        :class="{ active: activeMenu === '32' }"
        @click="setActiveMenu('sleep', '32')"
      >
        숙박
      </li>
      <li
        :class="{ active: activeMenu === '38' }"
        @click="setActiveMenu('shop', '38')"
      >
        쇼핑
      </li>
      <li
        :class="{ active: activeMenu === '39' }"
        @click="setActiveMenu('food', '39')"
      >
        음식
      </li>
      <li
        :class="{ active: activeMenu === '40' }"
        @click="setActiveMenu('camp', '40')"
      >
        캠핑
      </li>
    </ul>
    <div class="aroundDiv container-fluid">
      <div class="wrap row">
        <AroundItem
          class="col-6 col-sm-2"
          v-for="around in aroundList"
          :key="around.idx"
          :data="around"
        />
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
