<script setup>
import Btn from '../common/Btn.vue';
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
  <div v-if="reviewList.length == 0" class="text">
    등록한 리뷰가 존재하지 않습니다.
  </div>
  <template v-else>
    <div v-for="r in reviewList">{{ r.title }}</div>
  </template>
</template>

<style scoped>
div {
  width: 95%;
  color: white;
  font-size: 20px;
  border-bottom: 1px solid white;
  margin: 5px auto;
}
.text {
  color: white;
}
</style>
