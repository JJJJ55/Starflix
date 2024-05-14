<script setup></script>

<template>
  <div class="input">
    <input type="text" placeholder="검색어를 입력해주세요" />
    <img src="@/assets/img/inputSearch.png" alt="검색" />
  </div>
</template>

<style scoped>
@media (max-width: 925px) {
  .input {
    margin-top: 0px !important;
  }
}
.input {
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-left: 10px;
  width: 330px;
  height: 40px;
  background-color: #fff;
  border: none;
  margin-top: 50px;
}
input {
  width: 90%;
  border: none;
  outline: none;
}
img {
  cursor: pointer;
}
</style>
