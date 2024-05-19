<!-- <script setup>
import Btn from '@/component/common/Btn.vue';
import { useRoute, useRouter } from 'vue-router';

import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useBoardStore } from '@/stores/boardStore';

const boardStore = useBoardStore();
const memberStore = useUserStore();
const { board } = storeToRefs(boardStore);
const { userInfo } = memberStore;
const { modify } = boardStore;

const route = useRoute();
const bno = route.query.bno; // 내가 읽은 글의 bno

const boardModify = async () => {
  await modify(boardInfo.value);
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

const boardInfo = ref({
  // 추가
  title: '',
  writer: userInfo.userId,
  content: '',
});

//마운트될때 Editor 생성
onMounted(async () => {
  editorValid = new Editor({
    el: editorRef.value,
    height: '500px',
    //'wysiwyg', 'markdown' 택 1
    initialEditType: 'wysiwyg',
    events: {
      change: () => emit('update:modelValue', editorValid.getMarkdown()),
    },
  });
  // await read(bno);
  boardInfo.value = board.value;
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

  boardModify();
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
          v-model="boardInfo.title"
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
        <div class="textBox" ref="editorRef" />
      </div>
    </div>
    <div class="btnArea">
      <Btn :sty="'redBtn'" :text="'등록'" @click="addBoard" />
      <Btn :sty="'blackBtn'" :text="'이전'" @click="movePage('list')" />
    </div>
  </section>
</template> -->

<template>
  <section class="container-fluid">
    <div class="boardArea">
      <div>
        <input
          type="text"
          class="bTitle"
          placeholder="제목을 입력하세요"
          v-model="boardInfo.title"
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
        <!-- Toast UI Editor를 담을 요소 -->
        <div class="textBox" ref="editorRef" />
      </div>
    </div>
    <div class="btnArea">
      <Btn :sty="'redBtn'" :text="'등록'" @click="addBoard" />
      <Btn :sty="'blackBtn'" :text="'이전'" @click="movePage('list')" />
    </div>
  </section>
</template>

<script setup>
import Btn from '@/component/common/Btn.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, nextTick, watch } from 'vue'; // 변경된 부분
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useBoardStore } from '@/stores/boardStore';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const boardStore = useBoardStore();
const memberStore = useUserStore();
const { board } = storeToRefs(boardStore);
const { userInfo } = memberStore;
const { modify } = boardStore;

const route = useRoute();
const bno = route.query.bno;

const boardModify = async () => {
  await modify(boardInfo.value);
};

const editorRef = ref(null);
let editorInstance = null;

const boardInfo = ref({
  bno: bno,
  title: '',
  writer: userInfo.userId,
  content: '',
});

const router = useRouter();
const movePage = (val) => {
  router.push({ name: val });
};

onMounted(() => {
  editorInstance = new Editor({
    el: editorRef.value,
    height: '500px',
    initialEditType: 'wysiwyg',
  });
  boardInfo.value = board.value;

  watch(
    boardInfo,
    () => {
      if (editorInstance) {
        nextTick(() => {
          editorInstance.setMarkdown(boardInfo.value.content);
        });
      }
    },
    { immediate: true }
  );
});

const addBoard = () => {
  if (editorInstance !== null) {
    boardInfo.value.content = editorInstance.getHTML();
    console.log(boardInfo.value);
  }
  boardModify();
};
</script>

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
