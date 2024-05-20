<script setup>
import Btn from '../common/Btn.vue';
import { useRoute, useRouter } from 'vue-router';
const movePage = () => {};
</script>

<template>
  <div class="Item" @click="movePage()">
    <div class="Img">
      <div class="title">제목</div>
    </div>
    <div class="btns">
      <Btn :sty="'redBtn'" style="margin: 0" :text="'상세보기'" />
      <Btn :sty="'blackBtn'" style="margin: 0" :text="'삭제하기'" />
    </div>
  </div>
</template>

<style scoped>
.Item {
  margin-top: 20px;
}
.Img {
  position: relative;
  /* width: 300px; */
  height: 300px;
  border: 1px solid blue;
  margin-bottom: 20px;
  cursor: pointer;
}
.Img:hover .title {
  opacity: 1; /* 마우스를 올렸을 때 보이도록 변경 */
}
.title {
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #d30000;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
  transition: opacity 0.3s ease; /* 투명도 변경 시 애니메이션 효과 추가 */
  opacity: 0; /* 초기에는 숨김 */
}
.btns {
  /* width: 300px; */
  border: 1px solid orange;
  display: flex;
  justify-content: space-between;
}
</style>
