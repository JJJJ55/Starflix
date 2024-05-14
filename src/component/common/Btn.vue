<script setup>
defineProps({
  text: String,
  sty: String,
});
</script>

<template>
  <button :class="sty">{{ text }}</button>
</template>

<style scoped>
.redBtn {
  color: white;
  background-color: #d30000;
  width: 120px;
  height: 55px;
}
.blackBtn {
  color: white;
  background-color: black;
  border: 1px solid white;
  width: 120px;
  height: 55px;
}
</style>
