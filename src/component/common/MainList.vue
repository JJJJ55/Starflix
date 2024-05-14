<script setup>
import MainListItem from './MainListItem.vue';

defineProps({
  title: String,
});
</script>

<template>
  <h2>{{ title }}</h2>
  <div class="wrap">
    <MainListItem class="" />
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  color: white;
}
.wrap {
  display: flex;
  flex-direction: row;
  overflow-y: auto;
}
</style>
