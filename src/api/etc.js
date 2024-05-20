import { localAxios } from '@/util/http-commons';

const local = localAxios();

async function asteInfo(date, response, error) {
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.get(`/aste?date=${date}`).then(response).catch(error);
}

async function weatherInfo(date, response, error) {
  local.defaults.headers['Authorization'] =
    sessionStorage.getItem('accessToken');
  await local.get(`/weather?date=${date}`).then(response).catch(error);
}

export { asteInfo, weatherInfo };
