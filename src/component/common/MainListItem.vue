<script setup>
import { ref } from 'vue';

const test = ref(6);
</script>

<template>
  <span v-for="t in test">
    <div class="Img"></div>
    <div class="text">설명영역입니다. hover 추가</div>
  </span>
</template>

<style scoped>
.Img {
  width: 250px;
  height: 200px;
  border: 1px solid red;
  margin-right: 20px;
}
.text {
  color: white;
  backdrop-filter: #d30000;
}
</style>
