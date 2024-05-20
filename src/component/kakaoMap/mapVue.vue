<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';
import { useRoute } from 'vue-router';
const route = useRoute();
const idx = route.query.idx;

const mapStore = useMapStore();
const { place, placeList, bestList, aroundList, isSearch, isResult, isAround } =
  storeToRefs(mapStore);
const coordinate = {
  lat: 33.450701,
  lng: 126.570667,
};
</script>

<template>
  <!-- 검색결과 상세보기 -->
  <!-- <div style="color: white">erer</div>
  <div style="color: white">{{ idx }}</div> -->
  <KakaoMap
    v-show="isSearch"
    :lat="place.placeInfo.lati"
    :lng="place.placeInfo.longj"
    :draggable="true"
    :level="5"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      :lat="place.placeInfo.lati"
      :lng="place.placeInfo.longj"
    ></KakaoMapMarker>
  </KakaoMap>
  <!-- 검색결과 주변리스트 -->
  <KakaoMap
    v-show="isAround"
    :lat="coordinate.lat"
    :lng="coordinate.lng"
    :draggable="true"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      v-for="a in aroundList"
      :lat="a.lat"
      :lng="a.lng"
      :image="{
        imageSrc: `@/assets/img/marker/${a.type}.png`,
        imageWidth: 64,
        imageHeight: 64,
        imageOption: {},
      }"
    ></KakaoMapMarker>
  </KakaoMap>
  <!-- 검색결과 리스트 -->
  <KakaoMap
    v-show="isResult"
    :lat="coordinate.lat"
    :lng="coordinate.lng"
    :draggable="true"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      :lat="coordinate.lat"
      :lng="coordinate.lng"
    ></KakaoMapMarker>
  </KakaoMap>
</template>

<style scoped></style>
