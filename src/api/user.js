import { localAxios } from '@/util/http-commons';

const local = localAxios();

async function userLogin(param, success, fail) {
  // 로그인
  await local.post(`/users/login`, param).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  // 회원정보 (강의에서 회원인증)
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.get(`/users/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  // ac 재발급
  await local.post(`users/refresh`, user).then(success).catch(fail);
}

async function userlogout(id, success, fail) {
  // 로그아웃
  const params = {
    userId: id,
  };
  // await local.get(`/user/logout?userId=${id}`).then(success).catch(fail);
  await local.get(`/users/logout`, { params }).then(success).catch(fail);
}

async function userInsert(user, success, fail) {
  //회원정보 수정
  await local.post(`/users`, user).then(success).catch(fail);
}

async function userUpdate(user, success, fail) {
  //회원정보 수정
  await local.put(`/users/${user.userId}`, user).then(success).catch(fail);
}

async function userDelete(userid, success, fail) {
  // 회원정보 삭제
  await local.delete(`/users/${userid}`).then(success).catch(fail);
}

export {
  userLogin,
  findById,
  tokenRegeneration,
  userlogout,
  userInsert,
  userUpdate,
  userDelete,
};
