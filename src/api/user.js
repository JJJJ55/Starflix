import { localAxios } from '@/util/http-commons';

const local = localAxios();

async function userLogin(param, success, fail) {
  // 로그인
  await local.post(`/user/login`, param).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  // ac 토큰 유효성 검사
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.get(`/user/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  // ac토큰 재발급
  await local.post(`user/refresh`, user).then(success).catch(fail);
}

async function userlogout(userid, success, fail) {
  // 로그아웃
  await local.get(`/user/logout`, userid).then(success).catch(fail);
}

export { userLogin, findById, tokenRegeneration, userlogout };
