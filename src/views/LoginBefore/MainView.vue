<script setup>
import mainTitle from '@/assets/img/main_title.png';
import mainSubTitle from '@/assets/img/main_subtitle.png';
import smallLogo from '@/assets/img/smallLogo.png';
</script>

<template>
  <div class="content">
    <header><img class="logo" :src="smallLogo" alt="" /></header>
    <img
      class="titleImg img-fluid"
      :src="mainTitle"
      alt="title1"
      width="50%"
      height="20%"
    />
    <img
      class="img-fluid"
      :src="mainSubTitle"
      alt="title2"
      width="40%"
      height="20%"
    />
    <div class="btnBox container row sm-12 md-6 lg-6">
      <button>로그인</button>
      <button>회원가입</button>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
}
.logo {
  display: block;
  margin-left: 50px;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/img/main_Img.png');
  background-repeat: none;
  background-position: center center;
}

.titleImg {
  margin-bottom: 20px;
}

.btnBox {
  margin-top: 80px;
  width: 60%;
  display: flex;
  justify-content: space-around;
}

button {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin: 10px;
  background-color: #db0000;
  border: none;
  color: white;
  font-size: 20px;
  font-family: '프리텐더';
}
</style>
