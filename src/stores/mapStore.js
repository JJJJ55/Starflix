import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import {
  onPublic,
  onPrivate,
  listPlace1,
  listPlace2,
  addPlace,
  infoPlace,
  deletePlace,
  aroundPlace,
  aroundCamp,
  bestPlace,
} from '@/api/map';

import { httpStatusCode } from '@/util/http-status';

export const useMapStore = defineStore(
  'mapStore',
  () => {
    const router = useRouter();

    const placeList = ref([]);
    const bestList = ref([]);
    const place = ref(null);

    const maplist = async (param) => {
      // 이거 파라미터 들어가야함
      if (param === '') {
        console.log('파라미터없음');
        await listPlace1(
          (resp) => {
            if (resp.status === httpStatusCode.OK) {
              placeList.value = resp.data;
              console.log('성공');
            } else {
              console.log('실행 중 에러');
            }
          },
          (error) => {
            console.log('실패');
            console.log(error);
          }
        );
      } else {
        console.log('검색');
        await listPlace2(
          param,
          (resp) => {
            if (resp.status === httpStatusCode.OK) {
              placeList.value = resp.data;
              console.log('성공');
            } else {
              console.log('실행 중 에러');
            }
          },
          (error) => {
            console.log('실패');
            console.log(error);
          }
        );
      }
    };

    const add = async (place) => {
      await addPlace(
        place,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            alert('명소가 등록되었습니다.');
            // router.replace({ name: 'map' });
            console.log('성공');
          } else {
            alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
            console.log('실행 중 에러');
          }
        },
        (error) => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
          console.log('실패');
          console.log(error);
        }
      );
    };

    const info = async (idx) => {
      await infoPlace(
        idx,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            console.log('성공');
            place.value = resp.data;
          } else {
            console.log('실행 중 에러');
          }
        },
        (error) => {
          console.log('실패');
          console.log(error);
        }
      );
    };
    const delPlace = async (idx) => {
      await deletePlace(
        idx,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            console.log('성공');
            alert('삭제되었습니다.');
            // router.replace({ name: 'boardList' });
          } else {
            alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
            console.log('실행 중 에러');
          }
        },
        (error) => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
          console.log('실패');
          console.log(error);
        }
      );
    };

    const travel = async (idx, type) => {
      const param = {
        idx,
        type,
      };
      await aroundPlace(
        param,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            console.log('성공');
          } else {
            alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
            console.log('실행 중 에러');
          }
        },
        (error) => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
          console.log('실패');
          console.log(error);
        }
      );
    };

    const camp = async (idx) => {
      await aroundCamp(
        idx,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            console.log('성공');
          } else {
            alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
            console.log('실행 중 에러');
          }
        },
        (error) => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
          console.log('실패');
          console.log(error);
        }
      );
    };

    const best = async () => {
      await bestPlace(
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            console.log('성공');
            bestList.value = resp.data;
          } else {
            alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
            console.log('실행 중 에러');
          }
        },
        (error) => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
          console.log('실패');
          console.log(error);
        }
      );
    };

    const isPublic = async (idx) => {
      await onPublic(
        idx,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            console.log('성공');
          } else {
            alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
            console.log('실행 중 에러');
          }
        },
        (error) => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
          console.log('실패');
          console.log(error);
        }
      );
    };
    const isPrivate = async (idx) => {
      await onPrivate(
        idx,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            console.log('성공');
          } else {
            alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
            console.log('실행 중 에러');
          }
        },
        (error) => {
          alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
          console.log('실패');
          console.log(error);
        }
      );
    };

    return {
      placeList,
      bestList,
      place,
      maplist,
      add,
      info,
      delPlace,
      travel,
      camp,
      best,
      isPublic,
      isPrivate,
    };
  },
  { persist: { storage: localStorage } }
);
