<script setup>
import { ref } from 'vue';

const test = ref(6);
</script>

<template>
  <span v-for="t in test" class="col-md-2 col-lg-2">
    <div class="Img"></div>
    <div class="text">설명영역입니다. hover 추가</div>
  </span>
</template>

<style scoped>
.Img {
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
.text {
  color: white;
  backdrop-filter: #d30000;
}
</style>
