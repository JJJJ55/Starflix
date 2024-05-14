<script setup>
import homeImg from '@/assets/img/homeImg.png';
import smallLogo from '@/assets/img/smallLogo.png';
import searchIcon from '@/assets/img/searchIcon.png';
</script>

<template>
  <header class="container-fluid">
    <div class="row headerDiv">
      <div class="col-sm-12 col-md-1 col-lg-1 imgBox">
        <img class="logo" :src="smallLogo" alt="smallLogo" />
      </div>
      <nav class="col-sm-10 col-md-10 col-lg-8">
        <ul class="navMenu row">
          <li class="col-12 col-sm-3">별명소 지도</li>
          <li class="col-12 col-sm-3">내가 찜한 곳</li>
          <li class="col-12 col-sm-3">유저 커뮤니티</li>
          <li class="col-12 col-sm-3">마이페이지</li>
        </ul>
      </nav>
      <div class="col-sm-1 col-md-1 col-lg-3 searchBox">
        <img :src="searchIcon" alt="검색" />
      </div>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 790px) {
  .navMenu {
    font-size: 15px !important;
  }
}
@media (max-width: 576px) {
  .searchBox {
    width: 50px;
    position: absolute;
    right: 0px;
  }
}
header {
  width: 100%;
  height: 100%;
  min-height: 80px;
  border: 1px solid white;
  padding: 0;
  display: flex;
  align-items: center;
}
.headerDiv {
  position: relative;
  width: 100%;
  border: 1px solid orange;
  margin: 0;
}
.imgBox {
  border: 1px solid blue;
}
.logo {
  display: block;
  margin-left: 50px;
  width: 10%;
  min-width: 100px;
  border: 1px solid red;
  margin: 0 auto;
}
.navMenu {
  color: white;
  font-size: 20px;
  list-style: none;
  display: flex;
  line-height: 40px;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
.navMenu > li {
  text-align: center;
}
.searchBox {
  text-align: right;
  padding-right: 40px;
}
</style>
