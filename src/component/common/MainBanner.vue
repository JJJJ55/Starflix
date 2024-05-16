<script setup></script>

<template>
  <!-- 홈화면 배너 기준으로 함, 나중에 게시판 기준 및 나머지 게시판으로 구현해야함 -->
  <section class="PageTitle">
    <div class="titleBox">
      <h1 class="ImgTitle">화악산 별빛공원</h1>
      <button class="titleInfo">상세정보</button>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 790px) {
  .PageTitle {
    height: 250px !important;
  }
  .titleBox {
    top: 120px !important;
    left: 0px !important;
  }
}

.PageTitle {
  height: 350px;
}
.titleBox {
  width: 300px;
  text-align: center;
  border: 1px solid red;
  position: relative;
  top: 230px;
  left: 60px;
}
.ImgTitle {
  color: white;
  font-weight: bold;
}
.titleInfo {
  width: 170px;
  height: 50px;
  border-radius: 10px;
  background-color: #5a5e5f;
  border: none;
  color: white;
  margin: 10px;
}
/* section {
  border: 3px solid white;
  width: 100%;
  margin-bottom: 50px;
} */
</style>
