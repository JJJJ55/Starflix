<script setup>
import Header from '@/component/common/Header.vue';
import InputBox from '@/component/common/InputBox.vue';
import Btn from '@/component/common/Btn.vue';
import Weather from '@/component/common/Weather.vue';
import List from '@/component/board/List.vue';
import Write from '@/component/board/Write.vue';
import Read from '@/component/board/Read.vue';
import WriteQuill from '@/component/board/WriteQuill.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const test = 10;
</script>

<template>
  <div class="content">
    <Header />
    <section class="PageTitle container-fruid">
      <Weather />
      <div class="titleBox row">
        <div class="col-12 col-sm-7">
          <h1 class="title">유저 커뮤니티</h1>
          <p class="text">
            별자리 정보 및 다양한 정보들을 공유하는 게시판입니다.
          </p>
        </div>
        <InputBox class="col-12 col-sm-5" />
      </div>
    </section>
    <!-- <List /> -->
    <!-- <Write /> -->
    <!-- <Read /> -->
    <RouterView />
    <!-- <WriteQuill /> -->
  </div>
</template>

<style scoped>
@media (max-width: 790px) {
  .content {
    background-size: 300% !important;
  }
  .PageTitle {
    height: 280px !important;
  }
  .text {
    font-size: 12px !important;
  }
  .titleBox {
    width: 100% !important;
    top: 120px !important;
    left: 0px !important;
  }
  table {
    font-size: 10px !important;
  }
}

@media (max-width: 910px) {
  .PageTitle {
    height: 300px !important;
  }
  .titleBox {
    /* width: 100% !important; */
    top: 155px !important;
    left: 0px !important;
  }
}
.content {
  min-height: 100vh;
  background-image: url('@/assets/img/boardImg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  overflow: auto;
}
.PageTitle {
  height: 350px;
}
.titleBox {
  width: 90%;
  padding-left: 20px;
  border: 1px solid red;
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 230px;
  left: 60px;
}
.title {
  color: white;
  font-weight: bold;
}
.text {
  color: white;
}
section {
  border: 3px solid white;
  width: 100%;
  margin-bottom: 20px;
}

/*  */

.boardArea {
  width: 100%;
  text-align: center;
  margin: 0 auto 20px;
  border: 1px solid red;
}
.boardArea > div {
  margin: 0 auto;
  width: 100%;
  border: 1px solid yellow;
}

.bTitle {
  width: 65%;
  min-width: 220px;
  height: 45px;
  background-color: #333333;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  color: white;
}
.bWriter {
  width: 13%;
  min-width: 80px;
  height: 45px;
  margin-left: 2%;
  text-align: center;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
}
.bContent {
  width: 80%;
  min-width: 300px;
  height: 313px;
  background-color: #333333;
  border-radius: 10px;
  border: none;
  padding: 10px;
  color: white;
}
.btnArea {
  width: 80%;
  margin: 0 auto 50px;
  border: 1px solid white;
  display: flex;
  justify-content: end;
}
.btns {
  border: 3px solid blue;
}
</style>
