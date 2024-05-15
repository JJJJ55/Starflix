<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div>{{ title }}</div>
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
