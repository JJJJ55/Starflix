<script setup>
import { ref, onMounted } from 'vue';
import mainTitle from '@/assets/img/main_title.png';
import mainSubTitle from '@/assets/img/main_subtitle.png';
import smallLogo from '@/assets/img/smallLogo.png';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { myLocation, mapInfo } = storeToRefs(mapStore);

const router = useRouter();
const location = ref(null);
onMounted(() => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        myLocation.value = {
          latitude,
          longitude,
        };
        mapInfo.value = myLocation.value;
        console.log(latitude, longitude);
        // Google Maps Geocoding API를 호출하여 위도와 경도를 주소로 변환
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.results && data.results[0]) {
              location.value = data.results[0].formatted_address;
              myLocation.value = {
                //pinia에 저장
                location: location.value,
                latitude,
                longitude,
              };
            } else {
              console.error('주소를 가져오는 데 실패했습니다.');
            }
          })
          .catch((error) => {
            console.error('주소를 가져오는 데 실패했습니다.', error);
          });
      },
      (error) => {
        // 위치 정보를 가져오는 데 실패한 경우
        console.error('위치 정보를 가져오는 데 실패했습니다.', error);
      }
    );
  } else {
    console.error('이 브라우저는 Geolocation API를 지원하지 않습니다.');
  }
});

const movePage = (val) => {
  if (val === 'login') {
    router.push({ name: 'login', query: { type: val } });
  } else if (val === 'regist')
    router.push({ name: 'regist', query: { type: val } });
};
</script>

<template>
  <div class="content">
    <header>
      <img class="logo" :src="smallLogo" alt="smallLogo" />
    </header>
    <img class="titleImg img-fluid" :src="mainTitle" alt="title1" width="40%" />
    <img class="sub img-fluid" :src="mainSubTitle" alt="title2" width="25%" />
    <div class="btnBox container row sm-12 md-6 lg-6">
      <button @click="movePage('login')">로그인</button>
      <button @click="movePage('regist')">회원가입</button>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
}
.logo {
  display: block;
  margin-left: 50px;
  width: 10%;
  min-width: 100px;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/img/main_Img.png');
  background-repeat: none;
  background-position: center center;
  overflow: auto;
}

.titleImg {
  margin-bottom: 30px;
  min-width: 300px;
}
.sub {
  min-width: 250px;
}

.btnBox {
  margin-top: 50px;
  width: 60%;
  display: flex;
  justify-content: space-around;
}

button {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin: 10px;
  background-color: #db0000;
  border: none;
  color: white;
  font-size: 20px;
  font-family: '프리텐더';
}
</style>
