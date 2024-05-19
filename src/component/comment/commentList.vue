<script setup>
import {
  modifyComment,
  deleteComment,
  writeComment,
  listComment,
} from '@/api/comment';
import { onMounted, ref } from 'vue';

const props = defineProps({
  bno: String,
});
const bno = props.bno;
const comment = ref([]);
const loginId = localStorage.getItem('userid');
const addComment = ref({
  bno: bno,
  writer: loginId,
  content: '',
});

const openIndexes = ref([]);

onMounted(() => {
  searchList();
});

const searchList = () => {
  listComment(
    bno,
    (resp) => {
      comment.value = resp.data;
    },
    (error) => {
      console.log(error);
    }
  );
};

const addc = () => {
  writeComment(
    addComment.value,
    (resp) => {
      searchList();
    },
    (error) => {
      console.log(error);
    }
  );
};

const modifyToggle = (index) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((i) => i !== index);
  } else {
    openIndexes.value.push(index);
  }
};

const Cmodify = (cno, index) => {
  const content = document.getElementById(`${cno}`).value;
  const mod = ref({
    cno,
    content,
  });
  console.log(mod.value);
  modifyComment(
    mod.value,
    (resp) => {
      alert('수정되었습니다.');
      searchList();
      modifyToggle(index);
    },
    (error) => {
      console.log(error);
    }
  );
};

const Cdelete = (val) => {
  deleteComment(
    val,
    (resp) => {
      alert('삭제되었습니다.');
      searchList();
    },
    (error) => {
      console.log(error);
    }
  );
};
</script>

<template>
  <div v-if="comment.length === 0">작성된 댓글이 없습니다.</div>
  <div v-for="(c, index) in comment" :key="c.cno">
    <span>{{ c.writer }}</span>
    <input class="list" type="text" :value="c.content" readonly />
    <span v-show="loginId === c.writer">
      <button @click="modifyToggle(index)">
        {{ openIndexes.includes(index) ? '닫기' : '수정' }}
      </button>
      <button @click="Cdelete(c.cno)">삭제</button>
    </span>
    <form v-show="openIndexes.includes(index)">
      <span>{{ c.writer }}</span>
      <input type="text" :value="c.content" :id="c.cno" />
      <button @click.prevent="Cmodify(c.cno, index)">댓글 수정</button>
    </form>
  </div>
  <section>
    <span>{{ loginId }}</span>
    <input type="text" v-model="addComment.content" />
    <button @click="addc">댓글 등록</button>
  </section>
</template>

<style scoped>
section {
  margin-top: 15px;
}
div {
  background-color: #f7f7f7;
  border-bottom: 1px solid lightgray;
}
span {
  display: inline-block;
  text-align: center;
  width: 100px;
  margin: 0 10px;
}
.list {
  background-color: #f7f7f7;
  width: 300px;
  margin: 0 10px;
  border: none;
  outline: none;
}
input {
  width: 300px;
  margin: 0 10px;
}
</style>
