<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push({ name: 'main' });
    console.log('이동');
  }, 2000);
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
