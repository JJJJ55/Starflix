<script setup>
import Header from '@/component/common/Header.vue';
import MainList from '@/component/common/MainList.vue';
import MainBanner from '@/component/common/MainBanner.vue';
import Weather from '@/component/common/Weather.vue';
import { ref } from 'vue';
import WeatherVue from '@/component/common/Weather.vue';

const sub1 = 'BEST 별자리 명소';
const sub2 = ref('OOO님의 지역명소');
</script>

<template>
  <div class="content">
    <Header />
    <section class="PageTitle">
      <Weather />
      <div class="titleBox">
        <h1 class="ImgTitle">화악산 별빛공원</h1>
        <button class="titleInfo">상세정보</button>
      </div>
    </section>
    <!-- 아래 메인배너 컴포넌트화는 나중에 하기로 -->
    <!-- <MainBanner />  -->
    <section class="container-fluid">
      <MainList :title="sub1" />
    </section>
    <section class="container-fluid">
      <MainList :title="sub2" />
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 790px) {
  .content {
    background-size: 300% !important;
  }
  .PageTitle {
    height: 250px !important;
  }
  .titleBox {
    top: 120px !important;
    left: 0px !important;
  }
}
.content {
  min-height: 100vh;
  /* background-image: url('@/assets/img/homeImg.png'); */
  background-image: url('@/assets/img/homeImg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  overflow: auto;
}
.PageTitle {
  height: 350px;
}
.titleBox {
  width: 300px;
  text-align: center;
  border: 1px solid red;
  position: relative;
  top: 230px;
  left: 60px;
}
.ImgTitle {
  color: white;
  font-weight: bold;
}
.titleInfo {
  width: 170px;
  height: 50px;
  border-radius: 10px;
  background-color: #5a5e5f;
  border: none;
  color: white;
  margin: 10px;
}
section {
  border: 3px solid white;
  width: 100%;
  margin-bottom: 50px;
}
</style>
