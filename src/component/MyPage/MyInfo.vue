<script setup>
import LoginRegistForm from '../common/LoginRegistForm.vue';
import Btn from '@/component/common/Btn.vue';
</script>

<template>
  <div class="InfoBox">
    <LoginRegistForm :type="'Info'" class="InfoDiv" />
    <div>
      <Btn :text="'수정하기'" :sty="'redBtn'" />
      <Btn :text="'회원탈퇴'" :sty="'blackBtn'" />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 530px) {
  .InfoBox {
    flex-direction: column;
  }
  .InfoDiv {
    width: 100% !important;
    min-width: 0px !important;
    margin: 0 auto !important;
  }
}

.InfoBox {
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
}
.InfoDiv {
  width: 40%;
  min-width: 350px;
  margin: 0;
}
</style>
