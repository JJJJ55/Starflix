import { ref } from 'vue';
import { defineStore } from 'pinia';
import { asteInfo, weatherInfo, gptReview } from '@/api/etc';

import { httpStatusCode } from '@/util/http-status';

export const useEtcStore = defineStore(
  'etcStore',
  () => {
    const weatherList = ref([]);
    const asteList = ref([]);
    const gptReview = ref(null);

    const aste = async (date) => {
      await asteInfo(
        date,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            asteList.value = resp.data;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    };

    const weather = async (date) => {
      await weatherInfo(
        date,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            weatherList.value = resp.data;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    };

    const gpt = async (idx) => {
      await gptReview(
        idx,
        (resp) => {
          if (resp.status === httpStatusCode.OK) {
            gptReview.value = resp.data;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    };

    return { weatherList, asteList, gptReview, aste, weather, gpt };
  },
  { persist: { storage: localStorage } }
);
