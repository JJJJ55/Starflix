<script setup>
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  type: String,
});
const router = useRouter();
// const type = route.param.type; //폼 타입
const type = props.type;

const movePage = () => {
  router.push({ name: 'loginRegist', params: { type: 'regist' } });
};
</script>

<template>
  <form>
    <h1 class="formTitle" v-if="type !== 'Info'">
      {{ type === 'login' ? '로그인' : '회원가입' }}
    </h1>
    <input
      v-if="type === 'regist' || type === 'Info'"
      type="text"
      placeholder="사용자 이름"
    />
    <span v-if="type === 'regist' || type === 'Info'" class="warning"
      >경고문구</span
    >
    <input :class="type" type="text" placeholder="이메일 주소" />
    <span v-if="type === 'regist' || type === 'Info'" class="warning"
      >경고문구</span
    >
    <input :class="type" type="text" placeholder="비밀번호" />
    <span v-if="type === 'regist' || type === 'Info'" class="warning"
      >경고문구</span
    >
    <input
      v-if="type === 'regist' || type === 'Info'"
      type="text"
      placeholder="비밀번호 재입력"
    />
    <span v-if="type === 'regist' || type === 'Info'" class="warning"
      >경고문구</span
    >
    <input v-if="type === 'regist'" type="text" placeholder="핸드폰 번호" />
    <span v-if="type === 'regist'" class="warning">경고문구</span>
    <div></div>
    <button v-if="type !== 'Info'">
      {{ type === 'login' ? '로그인' : '회원가입' }}
    </button>
    <div v-if="type === 'login'" class="helpMsg">도움이 필요하신가요?</div>
    <a v-if="type === 'login'" class="registMsg" @click="movePage">
      스타플릭스 회원이 아닌가요? <b>지금 가입하세요.</b>
    </a>
  </form>
</template>

<style scoped>
form {
  /* border: 1px solid red; */
  margin: 0 auto;
  width: 80%;
  min-width: 300px;
  text-align: center;
}
.formTitle {
  color: #fff;
  width: 100%;
  font-weight: 900;
  text-align: left;
  margin-bottom: 30px;
}

input {
  display: inline-block;
  width: 70%;
  min-width: 200px;
  height: 50px;
  background-color: #333333;
  border: none;
  color: white;
  font-size: 20px;
  padding-left: 20px;
  border-radius: 15px;
  outline: none;
  margin-bottom: 5px;
}
input::placeholder {
  color: #d3d3d3;
}
.login {
  margin-bottom: 40px;
}

.warning {
  text-align: left;
  display: block;
  width: 70%;
  min-width: 200px;
  margin: 0 auto;
  color: #d30000;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 20px;
}

button {
  width: 70%;
  min-width: 200px;
  height: 50px;
  color: #fff;
  background-color: #d30000;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
}
.helpMsg {
  margin: 10px auto;
  width: 70%;
  min-width: 200px;
  text-align: right;
  color: #fff;
}
.registMsg {
  margin-top: 50px;
  color: #fff;
}
a {
  cursor: pointer;
}
</style>
