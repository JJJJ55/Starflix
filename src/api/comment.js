import { localAxios } from '@/util/http-commons';

const local = axiosSetting();

function listComment(param, response, error) {
  local.get(`/comments/list/${param}`).then(response).catch(error);
}

function writeComment(param, response, error) {
  console.log(param);
  local.post('/comments', param).then(response).catch(error);
}

function modifyComment(param, response, error) {
  local.put(`/comments/${param.cno}`, param).then(response).catch(error);
}

function deleteComment(param, response, error) {
  local.delete(`comments/${param}`).then(response).catch(error);
}

export { listComment, writeComment, modifyComment, deleteComment };
