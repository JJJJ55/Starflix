<script setup>
import { ref } from 'vue';
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import { isKakaoMapApiLoaded } from 'vue3-kakao-maps/@utils';
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
  isResultDetail,
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
  <!-- 찜 및 메인화면의 정보 결과 상세보기 -->
  <!-- <div style="color: white">erer</div>
  <div style="color: white">{{ idx }}</div> -->
  <KakaoMap
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
  </KakaoMap>
  <!-- 검색결과 리스트 -->
  <KakaoMap
    v-if="isResult"
    :lat="mapInfo.latitude"
    :lng="mapInfo.longitude"
    :draggable="true"
    :level="5"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      v-for="s in searchList"
      :lat="s.lati"
      :lng="s.longj"
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
  <!-- 지도 검색 후 결과 -->
  <KakaoMap
    v-if="isResultDetail"
    :lat="mapInfo.latitude"
    :lng="mapInfo.longitude"
    :draggable="true"
    :level="5"
    :width="100 + '%'"
  >
    <KakaoMapMarker
      :lat="mapInfo.latitude"
      :lng="mapInfo.longitude"
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
</template>

<style scoped></style>
