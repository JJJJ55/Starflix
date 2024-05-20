<script setup>
import Btn from '@/component/common/Btn.vue';
// import Editor from '@/component/board/Editor.vue';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user';
import { useBoardStore } from '@/stores/boardStore';

const boardStore = useBoardStore();
const memberStore = useUserStore();
const { userInfo } = memberStore;
const { write } = boardStore;

const boardWrite = async () => {
  await write(board.value);
};

// 여기부터 토스트
import { onMounted, ref, defineProps, defineEmits } from 'vue';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const editorRef = ref(null);
let editorValid = null;
const testHtml = ref('');
const text = ref('');

const board = ref({
  // 추가
  title: '',
  writer: userInfo.userId,
  content: '',
});

//마운트될때 Editor 생성
onMounted(() => {
  editorValid = new Editor({
    el: editorRef.value,
    height: '500px',
    //'wysiwyg', 'markdown' 택 1
    initialEditType: 'wysiwyg',
    events: {
      change: () => emit('update:modelValue', editorValid.getMarkdown()),
    },
  });
});

//작성한 내용 불러와서 html 적용
const testValid = () => {
  if (editorValid !== null) {
    testHtml.value = editorValid.getHTML();
  }
};
const addBoard = () => {
  if (editorValid !== null) {
    // text.value = editorValid.getHTML();
    board.value.content = editorValid.getHTML();
  }
  // console.log(text.value);

  boardWrite();
};

// 여기까지 토스트

const router = useRouter();
const movePage = (val) => {
  router.push({ name: val });
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
          v-model="board.title"
        />
        <input
          type="text"
          class="bWriter"
          placeholder="작성자"
          v-model="userInfo.userId"
          readonly
        />
      </div>
      <div class="bContent">
        <img class="loding" src="../../assets/img/loding.gif" alt="로딩" />
        <div class="textBox" ref="editorRef" />
      </div>
    </div>
    <div class="btnArea">
      <Btn :sty="'redBtn'" :text="'등록'" @click="addBoard" />
      <Btn :sty="'blackBtn'" :text="'이전'" @click="movePage('list')" />
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 500px) {
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
.loding {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
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
  border: 5px solid red;
  height: 100%;
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
  position: relative;
  width: 80%;
  min-width: 300px;
  height: 500px;
  background-color: #333333;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 0 auto;
  color: white;
  text-align: start;
}

.textBox {
  height: 480px !important;
  color: white !important;
}
</style>
