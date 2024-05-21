<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';
import { useRoute } from 'vue-router';
import '../../assets/img/marker/12.png';
const route = useRoute();
const idx = route.query.idx;

function getImageUrl(name) {
  return new URL(`../../assets/img/marker/${name}.png`, import.meta.url).href;
}
const mapStore = useMapStore();
const {
  myLocation,
  place,
  placeList,
  bestList,
  searchList,
  aroundList,
  mapInfo,
  isSearch,
  isResult,
  isAround,
} = storeToRefs(mapStore);
const coordinate = {
  lat: myLocation.value.latitude,
  lng: myLocation.value.longitude,
};

// const panTo = () => {
//   if (map.value) {
//     // 지도 중심을 부드럽게 이동시킵니다
//     // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
//     map.value.panTo(new kakao.maps.LatLng(mapInfo.latitude, mapInfo.longitude));
//   }
// };
</script>

<template>
  <!-- 검색결과 상세보기 -->
  <!-- <div style="color: white">erer</div>
  <div style="color: white">{{ idx }}</div> -->
  <!-- <KakaoMap
    v-show="isSearch"
    :lat="place.placeInfo.lati"
    :lng="place.placeInfo.longj"
    :draggable="true"
    :level="10"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      :lat="place.placeInfo.lati"
      :lng="place.placeInfo.longj"
    ></KakaoMapMarker>
    <template v-if="isAround">
      <KakaoMapMarker
        v-for="a in aroundList"
        :lat="a.lati"
        :lng="a.longj"
        :image="{
          imageSrc: getImageUrl(a.type),
          imageWidth: 32,
          imageHeight: 32,
          imageOption: {},
        }"
      ></KakaoMapMarker>
    </template>
  </KakaoMap> -->
  <KakaoMap
    v-show="isSearch"
    :lat="coordinate.lat"
    :lng="coordinate.lng"
    :draggable="true"
    :level="10"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      :lat="coordinate.lat"
      :lng="coordinate.lng"
    ></KakaoMapMarker>
    <template v-if="isAround">
      <KakaoMapMarker
        v-for="a in aroundList"
        :lat="a.lati"
        :lng="a.longj"
        :image="{
          imageSrc: getImageUrl(a.type),
          imageWidth: 32,
          imageHeight: 32,
          imageOption: {},
        }"
      ></KakaoMapMarker>
    </template>
  </KakaoMap>
  <!-- 검색결과 리스트 -->
  <KakaoMap
    v-if="isResult"
    :lat="mapInfo.latitude"
    :lng="mapInfo.longitude"
    :draggable="true"
    :level="8"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      v-for="s in searchList"
      :lat="s.lati"
      :lng="s.longj"
    ></KakaoMapMarker>
  </KakaoMap>
</template>

<style scoped></style>
