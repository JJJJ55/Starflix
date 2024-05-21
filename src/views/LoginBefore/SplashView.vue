<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// 지도 정보 받아오기
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';
import { useEtcStore } from '@/stores/etcStore';

const mapStore = useMapStore();
const etcStore = useEtcStore();
const { bestList, placeList } = storeToRefs(mapStore);
const { weatherList, asteList } = storeToRefs(etcStore);
const { weather, aste } = etcStore;
const { best, maplist } = mapStore;

// 날씨 정보 받아오기

const router = useRouter();

const param = ref({
  type: 'addr',
  keyword: '서울',
});

onMounted(async () => {
  const today = new Date(); // 년도
  const year = today.getFullYear(); // 월
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); //일
  const day = today.getDate().toString().padStart(2, '0');
  const date = ref(`${year}${month}${day}`);

  if (sessionStorage.getItem('accessToken') != null) {
    await weather(date.value);
    await aste(date.value);
    await maplist(param.value); // 기본 대전
    await best();
    // setTimeout(() => {
    //   router.push({ name: 'home' });
    //   console.log('이동');
    // }, 2000);
    router.push({ name: 'home' });
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
