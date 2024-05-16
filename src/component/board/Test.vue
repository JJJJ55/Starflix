<template>
  <div>
    <div ref="editor"></div>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Quill from 'quill';

export default {
  setup() {
    const editor = ref(null);
    let quill = null;

    onMounted(() => {
      quill = new Quill(editor.value, {
        theme: 'snow', // 테마 설정
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
          ],
        },
      });
    });

    const submit = () => {
      console.log(quill.root.innerHTML);
    };

    return {
      editor,
      submit,
    };
  },
};
</script>

<style>
/* 적절한 스타일링 추가 */
</style>
