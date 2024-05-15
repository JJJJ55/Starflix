<script setup>
defineProps({
  title: String,
});
const test = 10;
</script>

<template>
  <div v-for="t in test">테스트</div>
</template>

<style scoped>
div {
  width: 95%;
  color: white;
  font-size: 20px;
  border-bottom: 1px solid white;
  margin: 5px auto;
}
</style>
