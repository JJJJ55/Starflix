<script setup>
import { ref } from 'vue';

const test = ref(10);
</script>

<template>
  <span v-for="t in test">
    <div class="Img">
      <div class="title">제목</div>
    </div>
  </span>
</template>

<style scoped>
.Img {
  width: 250px;
  height: 200px;
  border: 1px solid #d30000;
  margin-right: 20px;
  position: relative;
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
</style>
