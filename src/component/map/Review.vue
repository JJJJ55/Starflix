<script setup>
import AroundItem from '@/component/map/AroundItem.vue';
import Btn from '@/component/common/Btn.vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMapStore } from '@/stores/mapStore';

const mapStore = useMapStore();
const { place } = mapStore;

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
    text.value = editorValid.getHTML();
  }
  console.log(text.value);
};

// 여기까지 토스트

const route = useRoute();
const router = useRouter();
</script>

<template>
  <section class="mapContent">
    <h1 class="title">{{ place.placeInfo.title }}</h1>
    <h5 class="text">{{ place.placeInfo.addr }}</h5>
    <div class="textBox">
      <input class="rTitle" type="text" placeholder="제목을 입력하세요" />
      <div class="rContent">
        <div class="Editor" ref="editorRef" />
      </div>
    </div>
    <div class="btnArea">
      <Btn :sty="'redBtn'" :text="'등록'" @click="addBoard" />
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1000px) {
  .textBox {
    /* margin: 10px; */
    width: 100% !important;
    height: fit-content;
  }
  .rTitle {
    width: 100% !important;
    /* min-width: 220px;
    height: 45px;
    background-color: #333333;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    margin: 0 auto 20px;
    color: white; */
  }
  .rContent {
    width: 100% !important;
  }
}
.mapContent {
  width: 90%;
  height: 100%;
  border: 1px solid yellow;
  margin: 20px auto 30px;
}

/* 아래는 리뷰작성 */
.title,
.text {
  color: white;
}
.title {
  font-weight: bold;
}
.textBox {
  text-align: center;
}
.rTitle {
  width: 90%;
  min-width: 220px;
  height: 45px;
  background-color: #333333;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin: 0 auto 20px;
  color: white;
}
.rContent {
  width: 90%;
  min-width: 200px;
  height: 520px;
  background-color: #333333;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 0 auto 20px;
  color: white;
  text-align: start;
}

.Editor {
  height: 500px !important;
  color: white !important;
}
</style>
