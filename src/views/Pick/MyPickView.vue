<script setup>
import Header from '@/component/common/Header.vue';
import InputBox from '@/component/common/InputBox.vue';
import PickItem from '@/component/pick/PickItem.vue';
import Weather from '@/component/common/Weather.vue';

import { ref } from 'vue';
const test = 10;
</script>

<template>
  <div class="content">
    <Header />
    <section class="PageTitle container-fruid">
      <Weather />
      <div class="titleBox row">
        <div class="col-12 col-sm-7">
          <h1 class="title">나의 찜리스트</h1>
          <p class="text">
            사용자가 찜 버튼으로 등록한 리스트들을 보여드립니다.
          </p>
        </div>
        <InputBox class="col-12 col-sm-5" />
      </div>
    </section>
    <section class="container-fluid">
      <div class="conetntBox row">
        <PickItem v-for="t in test" class="col-12 col-sm-6 col-md-3" />
      </div>
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
    width: 100% !important;
    top: 80px !important;
    left: 0px !important;
  }
  table {
    font-size: 10px !important;
  }
  .btnArea {
    flex-direction: column;
  }
}
.content {
  min-height: 100vh;
  /* background-image: url('@/assets/img/homeImg.png'); */
  background-image: url('@/assets/img/pickImg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  overflow: auto;
}
.PageTitle {
  height: 350px;
}
.titleBox {
  width: 90%;
  padding-left: 20px;
  border: 1px solid red;
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 230px;
  left: 60px;
}
.title {
  color: white;
  font-weight: bold;
}
.text {
  color: white;
}
section {
  border: 3px solid white;
  width: 100%;
  margin-bottom: 20px;
}

/*  */
.conetntBox {
  border: 6px solid green;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 40px;
}
</style>
