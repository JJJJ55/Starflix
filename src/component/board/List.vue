<script setup>
import Btn from '@/component/common/Btn.vue';
import ListItem from '@/component/board/ListItem.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useBoardStore } from '@/stores/boardStore';

const test = 10;
const router = useRouter();

const boardStore = useBoardStore();
const { boardList } = storeToRefs(boardStore);
const { blist } = boardStore;

onMounted(() => {
  blist('');
});

const movePage = (val) => {
  router.push({ name: val });
};
</script>

<template>
  <section class="tableDiv container-fluid">
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
    <div class="noList" v-if="boardList.length == 0">작성된 글이 없습니다.</div>
    <table v-else class="board">
      <tr>
        <th class="t1"></th>
        <th class="t2"></th>
        <th class="t3"></th>
        <th class="t4"></th>
        <th class="t5"></th>
      </tr>
      <!-- 높이 400 -->
      <!-- <tbody>
        <tr v-for="t in test">
          <td class="t1">1</td>
          <td class="t2">제목</td>
          <td class="t3">작성자</td>
          <td class="t4">100</td>
          <td class="t5">100</td>
        </tr>
      </tbody> -->
      <ListItem :test="boardList" />
    </table>
    <div class="btnArea">
      <Btn :text="'글쓰기'" :sty="'redBtn'" @click="movePage('write')" />
    </div>
  </section>
</template>

<style>
@media (max-width: 790px) {
  table {
    font-size: 10px !important;
  }
  .tableDiv {
    background-color: #000;
  }
}
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

.noList {
  height: 400px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  padding-top: 50px;
}

.board > tbody > tr {
  border-bottom: 1px solid #fff;
  height: 40px;
}
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
