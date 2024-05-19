<script setup>
import Btn from '@/component/common/Btn.vue';
import commentList from '../comment/commentList.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useBoardStore } from '@/stores/boardStore';

const boardStore = useBoardStore();
const memberStore = useUserStore();
const { board, likeFlag, unlikeFlag } = storeToRefs(boardStore);
const { userInfo } = memberStore;
const { read, delBoard, checkLike, like, unlike } = boardStore;

const route = useRoute();
const router = useRouter();

const likeText = ref('좋아요');

const bno = route.query.bno; // 내가 읽은 글의 bno
const boardInfo = ref({});
onMounted(async () => {
  console.log('받을 글 ' + bno);
  await read(bno);
  boardInfo.value = board.value;
  await checkLike(bno, userInfo.userId);
  if (likeFlag.value) {
    likeText.value = '해제';
  }
});
const movePage = (val) => {
  if (val === 'modify') {
    router.push({ name: val, query: { bno: bno } });
  } else {
    router.push({ name: val });
  }
};
const deleteBoard = () => {
  const flag = confirm('정말로 삭제하시겠습니까?');
  if (flag) {
    delBoard(bno);
  }
};

const btnAction = () => {
  console.log('동작');
  if (likeFlag.value) {
    unlike(bno, userInfo.userId);
    likeFlag.value = !likeFlag.value;
    unlikeFlag.value = !unlikeFlag.value;
    likeText.value = '좋아요';
  } else {
    like(bno, userInfo.userId);
    likeFlag.value = !likeFlag.value;
    unlikeFlag.value = !unlikeFlag.value;
    likeText.value = '해제';
  }
};
</script>

<template>
  <section class="container-fluid">
    <div class="boardArea">
      <div>
        <input
          type="text"
          class="bTitle"
          placeholder="제목을 입력하세요"
          v-model="boardInfo.title"
          readonly
        />
        <input
          type="text"
          class="bWriter"
          placeholder="작성자"
          readonly
          v-model="boardInfo.writer"
        />
      </div>
      <div
        class="bContent"
        placeholder="내용을 입력하세요"
        v-html="boardInfo.content"
      ></div>
    </div>
    <div class="btnArea">
      <Btn
        :sty="{ redBtn: unlikeFlag, blackBtn: likeFlag }"
        :text="likeText"
        @click="btnAction"
      />
      <Btn
        :sty="'redBtn'"
        :text="'수정'"
        v-if="userInfo.userId === boardInfo.writer"
        @click="movePage('modify')"
      />
      <Btn
        :sty="'blackBtn'"
        :text="'삭제'"
        v-if="userInfo.userId === boardInfo.writer"
        @click="deleteBoard"
      />
      <Btn :sty="'blackBtn'" :text="'이전'" @click="movePage('list')" />
    </div>
  </section>
  <commentList />
</template>

<style scoped>
@media (max-width: 790px) {
  .btnArea {
    flex-direction: column;
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
.boardArea + div {
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
  margin: 0 auto;
  text-align: start;
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
