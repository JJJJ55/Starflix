<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// 지도 정보 받아오기
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { bestList, placeList } = storeToRefs(mapStore);
const { best, maplist } = mapStore;

// 날씨 정보 받아오기

const router = useRouter();

const param = ref({
  type: 'addr',
  keyword: '서울',
});

onMounted(async () => {
  if (sessionStorage.getItem('accessToken') != null) {
    await maplist(param.value); // 기본 대전
    await best();
    setTimeout(() => {
      router.push({ name: 'home' });
      console.log('이동');
    }, 2000);
  } else {
    router.push({ name: 'main' });
  }
});
</script>

<template>
  <div class="content">
    <img
      class="img-fluid logo"
      src="@/assets/img/ssafyPJ_logo.png"
      width="40%"
      height="20%"
      alt="logo"
    />
  </div>
</template>

<style scoped>
.content {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo {
  display: block;
}
</style>
