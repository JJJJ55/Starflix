<script setup>
import Header from '@/component/common/Header.vue';
import MainList from '@/component/common/MainList.vue';
</script>

<template>
  <div class="content">
    <Header />
    <!-- <section class="container-fluid">
      <MainList />
    </section> -->
  </div>
</template>

<style scoped>
@media (max-width: 790px) {
  .content {
    background-size: 300% !important;
  }
}
.content {
  min-height: 100vh;
  /* background-image: url('@/assets/img/homeImg.png'); */
  background-image: url('@/assets/img/homeImg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  overflow: auto;
}
section {
  border: 3px solid white;
  width: 100%;
}
</style>
