<script setup>
import mainTitle from '@/assets/img/main_title.png';
import mainSubTitle from '@/assets/img/main_subtitle.png';
import smallLogo from '@/assets/img/smallLogo.png';
import { useRouter } from 'vue-router';

const router = useRouter();
const movePage = (val) => {
  if (val === 'login') {
    router.push({ name: 'login', query: { type: val } });
  } else if (val === 'regist')
    router.push({ name: 'regist', query: { type: val } });
};
</script>

<template>
  <div class="content">
    <header>
      <img class="logo" :src="smallLogo" alt="smallLogo" />
    </header>
    <img class="titleImg img-fluid" :src="mainTitle" alt="title1" width="40%" />
    <img class="sub img-fluid" :src="mainSubTitle" alt="title2" width="25%" />
    <div class="btnBox container row sm-12 md-6 lg-6">
      <button @click="movePage('login')">로그인</button>
      <button @click="movePage('regist')">회원가입</button>
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
  width: 10%;
  min-width: 100px;
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
  overflow: auto;
}

.titleImg {
  margin-bottom: 30px;
  min-width: 300px;
}
.sub {
  min-width: 250px;
}

.btnBox {
  margin-top: 50px;
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
