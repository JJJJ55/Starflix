<!-- <script setup>
import { ref, onMounted } from 'vue';
const { VITE_KAKAO_MAP_SERVICE_KEY } = import.meta.env;

const mapContainer = ref(null);

onMounted(() => {
  loadKakaoMap(mapContainer.value);

  var geocoder = new kakao.maps.services.Geocoder();

  // 주소로 좌표를 검색합니다
  geocoder.addressSearch('조치원', function (result, status) {
    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      var infowindow = new kakao.maps.InfoWindow({
        content:
          '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
    }
  });
});

const loadKakaoMap = (container) => {
  const script = document.createElement('script');
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${VITE_KAKAO_MAP_SERVICE_KEY}&autoload=false`;
  document.head.appendChild(script);

  script.onload = () => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
        level: 3, // 지도 확대 레벨
        maxLevel: 5, // 지도 축소 제한 레벨
      };

      const mapInstance = new window.kakao.maps.Map(container, options); // 지도 생성
    });
  };
};
</script> -->
<template>
  <!-- 지도를 표시할 div -->
  <div id="map" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { onMounted } from 'vue';
const { VITE_KAKAO_MAP_SERVICE_KEY } = import.meta.env;
onMounted(() => {
  // Kakao 지도 API 스크립트를 동적으로 로드합니다.
  const script = document.createElement('script');
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_KAKAO_MAP_SERVICE_KEY}&libraries=services,clusterer,drawing`;
  script.onload = () => {
    // Kakao 지도 API 스크립트가 로드된 후 실행할 코드를 작성합니다.
    kakao.maps.load(() => {
      setupMap();
    });
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색하고 결과값으로 받은 위치를 지도에 표시하는 함수
    const searchAddress = (address) => {
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        } else {
          console.log('주소-좌표 변환 실패:', status);
        }
      });
    };

    // 주소로 좌표를 검색하여 지도에 표시
    searchAddress('세종시');
  };
  document.head.appendChild(script);
});

const setupMap = () => {
  const mapContainer = document.getElementById('map');
  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };
};
</script>
