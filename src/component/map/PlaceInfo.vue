<script setup>
import AroundItem from '@/component/map/AroundItem.vue';
import Btn from '@/component/common/Btn.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';
const mapStore = useMapStore();
const { place, isSearch, isAround, isResult } = storeToRefs(mapStore);
const { info } = mapStore;

const route = useRoute();
const router = useRouter();

const idx = route.query.idx;

onMounted(async () => {
  await info(idx);
  isSearch.value = true;
  isResult.value = false;
  isAround.value = false;
});

const movePage = (val) => {
  router.push({ name: val, query: { type: val, idx } });
};
</script>

<template>
  <section class="mapContent">
    <div
      class="img"
      :style="{ backgroundImage: `url(${place.placeInfo.img})` }"
    ></div>
    <div class="placeBox">
      <div class="textArea">
        <h2 class="title">{{ place.placeInfo.title }}</h2>
        <p class="text">{{ place.placeInfo.addr }}</p>
      </div>
      <div class="btnArea">
        <Btn :sty="'redBtn'" :text="'♥'" />
        <Btn :sty="'redBtn'" :text="'리뷰작성'" @click="movePage('Review')" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 790px) {
  .btnArea {
    margin: 10px;
    width: 40% !important;
    height: fit-content;
  }
}
@media (max-width: 480px) {
  .placeBox {
    flex-direction: column;
  }
  .btnArea {
    margin: 10px;
    width: 80% !important;
    height: fit-content;
  }
}
.mapContent {
  width: 90%;
  height: 500px;
  border: 1px solid yellow;
  margin: 20px auto 0;
}
/* 아래는 명소정보 */
.img {
  width: 80%;
  height: 300px;
  border: 1px solid red;
  margin: 10px auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.placeBox {
  width: 90%;
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.title,
.text {
  color: white;
}
.title {
  font-weight: bold;
}
.btnArea {
  border: 1px solid white;
  width: fit-content;
  height: fit-content;
  margin: 0;
}
</style>
