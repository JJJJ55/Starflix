<template>
  <div class="contentDiv" @click="openModal">
    <div
      class="weather"
      v-for="(weather, index) in weatherList[0]"
      :key="weather.region"
    >
      <p ref="weatherText">
        {{ weather.region }} 날씨 {{ weather.weatherState }}
      </p>
    </div>
  </div>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <ul>
        <li>오늘날씨</li>
        <li>내일날씨</li>
        <li>모레날씨</li>
        <li>금일 천문박명</li>
      </ul>
      <div class="weatherContent">
        <div class="box w1">1</div>
        <div class="box w2">2</div>
        <div class="box w3">3</div>
        <div class="box w4">4</div>
        <div class="box w5">5</div>
        <div class="box w6">6</div>
        <div class="box w7">7</div>
        <div class="box w8">8</div>
        <div class="box w9">9</div>
        <div class="box w10">10</div>
        <div class="box w11">11</div>
        <div class="box w12">12</div>
        <div class="box w13">13</div>
        <div class="box w14">14</div>
        <div class="box w15">15</div>
        <div class="box w16">16</div>
        <div class="box w17">17</div>
      </div>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useEtcStore } from '@/stores/etcStore';
const etcStore = useEtcStore();

const { weatherList } = storeToRefs(etcStore);

const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

onMounted(() => {
  // 자동 스크롤 애니메이션을 위한 스크롤링 함수 호출
  autoScroll();
});

function autoScroll() {
  setInterval(() => {
    const contentDiv = document.querySelector('.contentDiv');
    if (contentDiv) {
      // contentDiv의 스크롤 탑 위치를 가져옴
      let scrollTop = contentDiv.scrollTop;

      // contentDiv의 높이를 가져옴
      const contentDivHeight = contentDiv.clientHeight;

      // contentDiv의 자식 요소 개수를 가져옴
      const weatherItems = contentDiv.querySelectorAll('.weather');

      // 모든 날씨 요소의 높이를 동일하게 맞춰줌
      let maxWeatherHeight = 0;
      weatherItems.forEach((item) => {
        const height = item.clientHeight;
        maxWeatherHeight = Math.max(maxWeatherHeight, height);
      });
      weatherItems.forEach((item) => {
        item.style.height = `${maxWeatherHeight}px`;
      });

      // contentDiv의 자식 요소 개수를 가져옴
      const weatherItemsCount = weatherItems.length;

      // 현재 보여지는 마지막 자식 요소의 높이를 가져옴
      const lastItemHeight = maxWeatherHeight;

      // 마지막 자식 요소까지 스크롤될 때마다 스크롤 탑 위치를 0으로 초기화
      if (scrollTop >= (weatherItemsCount - 1) * lastItemHeight) {
        scrollTop = 0;
      } else {
        // 아니면 다음 자식 요소의 높이만큼 스크롤 탑 위치를 증가시킴
        scrollTop += lastItemHeight;
      }

      // contentDiv에 애니메이션 효과를 주어 스크롤링 시각적으로 보여줌
      contentDiv.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  }, 2000); // 1초 간격으로 자동 스크롤링 실행
}
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
}
li {
  font-size: 12px;
  margin-left: 20px;
  width: 70px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  background-color: #d7d7d7;
  cursor: pointer;
}
.box {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  position: absolute;
}

.w1 {
  top: 20px;
  left: 100px;
}
.w2 {
  top: 20px;
  left: 300px;
}
.w3 {
  top: 120px;
  left: 200px;
}
.w4 {
  top: 180px;
  left: 40px;
}
.w5 {
  top: 300px;
  left: 100px;
}
.w6 {
  top: 400px;
  left: 140px;
}
.w7 {
  top: 400px;
  left: 50px;
}
.w8 {
  top: 370px;
  left: 220px;
}
.w9 {
  top: 270px;
  left: 290px;
}
.w10 {
  top: 190px;
  left: 350px;
}
.w11 {
  top: 240px;
  left: 150px;
}
.w12 {
  top: 170px;
  left: 120px;
}
.w13 {
  bottom: 50px;
  right: 100px;
}
.w14 {
  bottom: 120px;
  right: 40px;
}
.w15 {
  bottom: 190px;
  right: 20px;
}
.w16 {
  bottom: 0px;
  left: 100px;
}
.w17 {
  top: 70px;
  left: 150px;
}
.contentDiv {
  width: 200px;
  height: 40px;
  border: 1px solid red;
  position: absolute;
  right: 50px;
  cursor: pointer;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  overflow: hidden; /* 스크롤바를 보이지 않게 함 */
  line-height: 40px;
}

.weather {
  margin: 0;
  padding: 0;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5); /* 배경을 반투명하게 */
}

.modal-content {
  min-width: 500px;
  width: 500px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.weatherContent {
  position: relative;
  width: 100%;
  border: 1px solid red;
  background-image: url('../../assets/img/weather.png');
  height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
