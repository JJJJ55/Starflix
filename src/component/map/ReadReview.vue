<script setup>
import AroundItem from '@/component/map/AroundItem.vue';
import Btn from '@/component/common/Btn.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<template>
  <section class="mapContent">
    <h1 class="title">삼성화재 유성캠퍼스</h1>
    <h5 class="text">대전 유성구 동서대로 98-39</h5>
    <div class="textBox">
      <input class="rTitle" type="text" placeholder="제목을 입력하세요" />
      <div class="rContent">
        <div class="testDiv"></div>
      </div>
    </div>
    <div class="btnArea">
      <Btn :sty="'redBtn'" :text="'수정'" @click="addBoard" />
      <Btn :sty="'redBtn'" :text="'삭제'" @click="addBoard" />
      <Btn :sty="'blackBtn'" :text="'이전'" @click="addBoard" />
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1000px) {
  .textBox {
    /* margin: 10px; */
    width: 100% !important;
    height: fit-content;
  }
  .rTitle {
    width: 100% !important;
    /* min-width: 220px;
    height: 45px;
    background-color: #333333;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    margin: 0 auto 20px;
    color: white; */
  }
  .rContent {
    width: 100% !important;
  }
}
.mapContent {
  width: 90%;
  height: 100%;
  border: 1px solid yellow;
  margin: 20px auto 30px;
}

/* 아래는 리뷰작성 */
.title,
.text {
  color: white;
}
.title {
  font-weight: bold;
}
.textBox {
  text-align: center;
}
.rTitle {
  width: 80%;
  min-width: 220px;
  height: 45px;
  background-color: #333333;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin: 0 auto 20px;
  color: white;
}
.rContent {
  width: 80%;
  min-width: 200px;
  height: 520px;
  background-color: #333333;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 0 auto 20px;
  color: white;
  text-align: start;
  overflow: auto;
}
.testDiv {
  width: 100%;
  height: 1000px;
  background-color: aquamarine;
}
</style>
