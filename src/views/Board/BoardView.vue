<script setup>
import Header from '@/component/common/Header.vue';
import InputBox from '@/component/common/InputBox.vue';
import Btn from '@/component/common/Btn.vue';
import { ref } from 'vue';

const test = 10;
</script>

<template>
  <div class="content">
    <Header />
    <section class="PageTitle container-fruid">
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
    <section class="container-fluid">
      <table class="boardTitle">
        <tr>
          <th class="t1">글번호</th>
          <th class="t2">제목</th>
          <th class="t3">작성자</th>
          <th class="t4">조회수</th>
          <th class="t5">좋아요</th>
        </tr>
      </table>
      <div class="hr"></div>
      <table class="board">
        <tr>
          <th class="t1"></th>
          <th class="t2"></th>
          <th class="t3"></th>
          <th class="t4"></th>
          <th class="t5"></th>
        </tr>
        <tbody>
          <tr v-for="t in test">
            <td class="t1">1</td>
            <td class="t2">제목</td>
            <td class="t3">작성자</td>
            <td class="t4">100</td>
            <td class="t5">100</td>
          </tr>
        </tbody>
      </table>
      <div class="btnArea">
        <Btn :text="'글쓰기'" :sty="'redBtn'" />
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 790px) {
  .content {
    background-size: 300% !important;
  }
  .PageTitle {
    height: 250px !important;
  }
  .titleBox {
    width: 100% !important;
    top: 80px !important;
    left: 0px !important;
  }
  table {
    font-size: 10px !important;
  }
}
.content {
  min-height: 100vh;
  /* background-image: url('@/assets/img/homeImg.png'); */
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

.boardTitle {
  color: white;
  margin: 0 auto;
  width: 80%;
  text-align: center;
}
.hr {
  width: 90%;
  margin: 10px auto 0px;
  border-bottom: 5px double #fff;
}

.board {
  color: white;
  margin: 0 auto;
  width: 80%;
  text-align: center;
}

.board > tbody > tr {
  border-bottom: 1px solid #fff;
  height: 40px;
}

/* tr {
  height: 40px;
} */

.t1,
.t4,
.t5 {
  width: 100px;
}
.t3 {
  width: 150px;
}
.t2 {
  width: 400px;
  text-align: left;
  padding-left: 20px;
}
.btnArea {
  width: 80%;
  margin: 20px auto 50px;
  border: 1px solid white;
  display: flex;
  justify-content: end;
}
</style>
