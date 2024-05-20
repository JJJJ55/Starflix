import { localAxios } from '@/util/http-commons';

const local = localAxios();

async function listReview(param, response, error) {
  //리뷰 검색 (명소 or 유저아이디)
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.get(`/reviews`, param).then(response).catch(error);
}

async function writeReview(param, response, error) {
  //리뷰 등록
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.post('/reviews', param).then(response).catch(error);
}

async function modifyReview(param, response, error) {
  //리뷰 수정
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.put(`/reviews/${param.rno}`, param).then(response).catch(error);
}

async function deleteReview(rno, response, error) {
  //리뷰 삭제
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.delete(`comments/${rno}`).then(response).catch(error);
}

export { listReview, writeReview, modifyReview, deleteReview };
