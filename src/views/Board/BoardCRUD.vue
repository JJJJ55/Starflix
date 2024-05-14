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
      <div class="boardArea">
        <div>
          <input
            type="text"
            class="boardTitle"
            placeholder="제목을 입력하세요"
          />
          <input
            type="text"
            class="boardWriter"
            placeholder="작성자"
            readonly
          />
        </div>
        <textarea
          class="boardContent"
          placeholder="내용을 입력하세요"
        ></textarea>
      </div>
      <div class="btnArea">
        <div class="btns">
          <Btn class="col-sm-3" :sty="'redBtn'" :text="'좋아요'" />
          <Btn class="col-sm-3" :sty="'redBtn'" :text="'등록'" />
          <Btn class="col-sm-3" :sty="'blackBtn'" :text="'삭제'" />
          <Btn class="col-sm-3" :sty="'blackBtn'" :text="'이전'" />
        </div>
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
    top: 120px !important;
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
  /* text-align: center; */
}

.boardTitle {
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
.boardWriter {
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
.boardContent {
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
  min-width: 400px;
  margin: 0 auto 50px;
  border: 1px solid white;
}
.btns {
  float: right;
}
</style>
