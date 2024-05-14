<script setup>
import MainListItem from './MainListItem.vue';
</script>

<template>
  <h1>제목</h1>
  <div class="row">
    <MainListItem class="" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
  color: white;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
