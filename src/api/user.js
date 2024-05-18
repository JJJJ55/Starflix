import { localAxios } from '@/util/http-commons';

const local = localAxios();

async function userLogin(param, success, fail) {
  // 로그인
  await local.post(`/user/login`, param).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  // 회원정보 (강의에서 회원인증)
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.get(`/user/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  // ac 재발급
  await local.post(`user/refresh`, user).then(success).catch(fail);
}

async function userlogout(id, success, fail) {
  // 로그아웃
  const params = {
    userId: id,
  };
  // await local.get(`/user/logout?userId=${id}`).then(success).catch(fail);
  await local.get(`/user/logout`, { params }).then(success).catch(fail);
}

async function userInsert(user, success, fail) {
  //회원정보 수정
  await local.post(`/user`, user).then(success).catch(fail);
}

async function userUpdate(userid, success, fail) {
  //회원정보 수정
  await local.put(`/user/${userid}`).then(success).catch(fail);
}

async function userDelete(userid, success, fail) {
  // 회원정보 삭제
  await local.delete(`/user/${userid}`).then(success).catch(fail);
}

async function jjimDelete(param, success, fail) {
  //회원정보 수정
  await local
    .post(`/user/${param.userid}/unJjim`, param)
    .then(success)
    .catch(fail);
}

async function jjimList(userid, success, fail) {
  //회원정보 수정
  await local.get(`/user/${userid}/starPlaces`).then(success).catch(fail);
}

export {
  userLogin,
  findById,
  tokenRegeneration,
  userlogout,
  userInsert,
  userUpdate,
  userDelete,
  jjimDelete,
  jjimList,
};
