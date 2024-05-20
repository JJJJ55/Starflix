<script setup>
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  info: Object,
});
const router = useRouter();
const route = useRoute();
// const type = route.param.type; //폼 타입
const type = ref(route.query.type);

const memberStore = useUserStore();

const { isLogin, isLoginError, newInfo } = storeToRefs(memberStore);
const { login, getUserInfo, regist } = memberStore;

const user = ref({
  userId: '',
  userPw: '',
  CheckPw: '',
  userName: '',
  userEmail: '',
});

watch(
  //동적라우팅 화면전환 안되는 부분 watch로 해결
  () => route.query.type,
  (nv, ov) => {
    console.log('??' + ov, nv);
    type.value = nv;
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  console.log('등장');
  console.log(props.type);
  console.log(props.info);
  if (props.info != null) {
    user.value.userName = props.info.userName;
    user.value.userEmail = props.info.userEmail;
    user.value.userPw = props.info.userPw;
    newInfo.value = user.value;
    // user.value = props.info;
    console.log(user.value);
  }
});

const userlogin = async () => {
  await login(user.value);
  let token = sessionStorage.getItem('accessToken');
  console.log('가져온 토큰 ' + token);
  if (isLogin.value) {
    getUserInfo(token);
    router.replace({ name: 'splash' });
  }
};

const userRegist = async () => {
  await regist(user.value);
};

const changeInfo = () => {
  newInfo.value = user.value;
};

const onSubmit = () => {
  if (type.value === 'login') {
    //로그인
    // console.log(user.value);
    // console.log('로그인');
    userlogin();
  } else if (type === 'regist') {
    //회원가입
    // console.log(user.value);
    // console.log('회원가입');
    userRegist();
  } else if (type === 'info') {
    const flag = confirm('수정하시겠습니까?');
    if (flag) {
      //수정
    }
  }
};

const movePage = () => {
  router.push({ name: 'regist', query: { type: 'regist' } });
};
</script>

<template>
  <form>
    <h1 class="formTitle" v-if="type !== 'userInfo'">
      {{ type === 'login' ? '로그인' : '회원가입' }}
    </h1>
    <span v-if="type === 'userInfo'" class="inputTitle">사용자 이름</span>
    <input
      v-if="type === 'regist' || type === 'userInfo'"
      type="text"
      placeholder="사용자 이름"
      v-model="user.userName"
      @change="changeInfo()"
    />
    <span v-if="type === 'regist' || type === 'userInfo'" class="warning"
      >경고문구</span
    >
    <input
      v-if="type === 'regist' || type === 'login'"
      :class="type"
      type="text"
      placeholder="아이디"
      v-model="user.userId"
    />
    <span v-if="type === 'userInfo'" class="inputTitle">이메일 주소</span>
    <span v-if="type === 'regist'" class="warning">경고문구</span>
    <input
      v-if="type === 'regist' || type === 'userInfo'"
      type="text"
      placeholder="이메일 주소"
      v-model="user.userEmail"
    />
    <span v-if="type === 'regist' || type === 'userInfo'" class="warning"
      >경고문구</span
    >
    <span v-if="type === 'userInfo'" class="inputTitle">비밀번호</span>
    <input
      :class="type"
      type="text"
      placeholder="비밀번호"
      v-model="user.userPw"
    />
    <span v-if="type === 'regist' || type === 'userInfo'" class="warning"
      >경고문구</span
    >
    <span v-if="type === 'userInfo'" class="inputTitle">비밀번호 재입력</span>
    <input
      v-if="type === 'regist' || type === 'userInfo'"
      type="text"
      placeholder="비밀번호 재입력"
      v-model="user.CheckPw"
    />
    <span v-if="type === 'regist' || type === 'userInfo'" class="warning"
      >경고문구</span
    >
    <div></div>
    <button v-if="type !== 'userInfo'" @click.prevent="onSubmit">
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

.inputTitle {
  text-align: left;
  display: block;
  width: 70%;
  min-width: 200px;
  margin: 0 auto;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
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
