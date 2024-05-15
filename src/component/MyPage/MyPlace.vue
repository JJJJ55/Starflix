<script setup>
import PickItem from '@/component/pick/PickItem.vue';

const test = 10;
</script>

<template>
  <section class="container-fluid">
    <div class="conetntBox row">
      <PickItem v-for="t in test" class="col-12 col-sm-6 col-md-3" />
    </div>
  </section>
</template>

<style scoped>
.conetntBox {
  border: 6px solid green;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 40px;
}
</style>
