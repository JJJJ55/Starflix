<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useReviewStore } from '@/stores/review';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const reivewStore = useReviewStore();
const { userInfo } = storeToRefs(userStore);
const { reviewList } = storeToRefs(reivewStore);
const { userReview } = reivewStore;

onMounted(async () => {
  await userReview(userInfo.value.userId);
});
</script>

<template>
  <div v-for="r in reviewList">{{ r.title }}</div>
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
