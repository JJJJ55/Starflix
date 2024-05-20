<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const contentId = ref(route.query.content);
watch(
  () => route.query.content,
  (newValue, oldValue) => {
    // URL의 type 파라미터가 변경되면 호출되는 로직을 여기에 구현합니다.
    // newValue에는 변경된 값이, oldValue에는 이전 값이 전달됩니다.
    contentId.value = newValue;
    console.log('URL의 type이 변경되었습니다.', newValue);
  }
);
// const contentId = route.query.content;
console.log(contentId);
</script>

<template>
  <div class="Item">
    <div class="Img">
      <div class="title">{{ contentId }}</div>
    </div>
  </div>
</template>

<style scoped>
.Item {
  margin-top: 20px;
}
.Img {
  position: relative;
  width: 100%;
  height: 100px;
  border: 1px solid blue;
  margin-bottom: 20px;
  cursor: pointer;
}
.Img:hover .title {
  opacity: 1; /* 마우스를 올렸을 때 보이도록 변경 */
}
.title {
  height: 30px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #d30000;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
  line-height: 30px;
  transition: opacity 0.3s ease; /* 투명도 변경 시 애니메이션 효과 추가 */
  opacity: 0; /* 초기에는 숨김 */
}
.btns {
  /* width: 300px; */
  border: 1px solid orange;
  display: flex;
  justify-content: space-between;
}
</style>
