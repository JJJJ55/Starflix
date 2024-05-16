<script setup>
import { useRoute, useRouter } from 'vue-router';
defineProps({
  test: String,
});

const router = useRouter();
const movePage = (val) => {
  console.log(val);
  router.push({ name: 'read' });
};
</script>

<template>
  <tbody>
    <tr class="boardItem" v-for="index in test" @click="movePage(index)">
      <td class="t1">1</td>
      <td class="t2">제목</td>
      <td class="t3">작성자</td>
      <td class="t4">100</td>
      <td class="t5">100</td>
    </tr>
  </tbody>
</template>

<style scoped>
.boardItem {
  cursor: pointer;
}
</style>
