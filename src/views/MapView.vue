<script setup>
import Header from '@/component/common/Header.vue';
import InputBox from '@/component/common/InputBox.vue';
import Btn from '@/component/common/Btn.vue';
import SelectBox from '@/component/common/SelectBox.vue';
import Around from '@/component/map/Around.vue';
import Review from '@/component/map/Review.vue';
import PlaceInfo from '@/component/map/PlaceInfo.vue';
import Maphome from '@/component/map/Maphome.vue';
import ReviewList from '@/component/map/ReviewList.vue';
import Weather from '@/component/common/Weather.vue';
import List from '@/component/board/List.vue';
import Write from '@/component/board/Write.vue';
import Read from '@/component/board/Read.vue';
import AddPlace from '@/component/map/AddPlace.vue';
import MapInfoDiv from '@/component/map/MapInfoDiv.vue';
import mapVue from '@/component/kakaoMap/mapVue.vue';
import { useRoute, useRouter } from 'vue-router';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const movePage = (val) => {
  router.push({ name: val, query: { root: val } });
};

const options = ref([
  { value: '', text: '검색조건' },
  { value: 'addr', text: '주소' },
  { value: 'keyword', text: '검색어' },
]);

const searchParam = ref(''); //검색조건

const changeKey = (val) => {
  // 검색조건 함수
  searchParam.value = val;
};

const type = route.params.type;
const activeMenu = ref(type); // 메뉴 클릭시 효과 변수

function setActiveMenu(menu) {
  // 메뉴함수
  router.push({ name: menu, params: { type: menu } });
  activeMenu.value = menu;
}
</script>

<template>
  <div class="content">
    <Header />
    <section class="mainContent">
      <div class="mapBox">
        <div class="seaechBox">
          <SelectBox :options="options" @onKeySelect="changeKey" />
          <InputBox class="inputBox" />
        </div>
        <!-- <div class="map"></div> -->
        <mapVue class="map" />
        <div class="Info">
          <div>
            <h1 class="InfoTitle">잔국 별자리 명소 검색</h1>
            <p class="InfoText">
              사용자가 임의로 별 명소를 등록 및 공유할 수 있습니다.
            </p>
          </div>
          <div class="Area">
            <Btn :sty="'redBtn'" :text="'추가'" @click="movePage('addplace')" />
            <Btn :sty="'blackBtn'" :text="'이전'" />
          </div>
        </div>
      </div>
      <RouterView />
      <!-- <AddPlace />
      <MapInfoDiv /> -->
      <!-- <MapInfoDiv /> -->
      <!-- <div class="menuBox">
        <ul class="myMenu">
          <li
            :class="{ active: activeMenu === 'mapHome' }"
            @click="setActiveMenu('mapHome')"
          >
            홈
          </li>
          <li
            :class="{ active: activeMenu === 'placeInfo' }"
            @click="setActiveMenu('placeInfo')"
          >
            명소 정보
          </li>
          <li
            :class="{ active: activeMenu === 'placeAround' }"
            @click="setActiveMenu('placeAround')"
          >
            주변 정보
          </li>
          <li
            :class="{ active: activeMenu === 'placeReview' }"
            @click="setActiveMenu('placeReview')"
          >
            명소 리뷰
          </li>
        </ul>
        <RouterView />
      </div> -->
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 790px) {
  .content {
    background-size: 300% !important;
  }
  .Area {
    margin: 10px;
    width: 40% !important;
    height: fit-content;
  }
}

@media (max-width: 480px) {
  .map {
    height: 400px !important;
  }
  .Info {
    flex-direction: column;
  }
  .InfoText {
    font-size: 12px !important;
  }
  .Area {
    width: 80% !important;
    height: fit-content;
  }
  .seaechBox {
    font-size: 12px;
  }
  .inputBox {
    width: 60% !important;
  }
}

@media (max-width: 1000px) {
  .mainContent {
    flex-direction: column;
  }
  .Area {
    flex-direction: row !important;
  }
  .menuBox {
    margin: 0 auto;
  }
}
@media (max-width: 1324px) {
  .Area {
    display: flex;
    flex-direction: column;
  }
}

.content {
  min-height: 100vh;
  background-image: url('@/assets/img/mapImg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  overflow: auto;
}
.mainContent {
  width: 100%;
  height: 100%;
  border: 3px solid red;
  margin: 0;
  padding: 0;
  display: flex;
}
.mapBox {
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  position: relative;
  padding: 20px;
}
.seaechBox {
  width: fit-content;
  border: 1px solid red;
  display: flex;
}

.inputBox {
  margin: 0 0 0 10px;
}

.map {
  width: 100% !important;
  height: 500px !important;
  border: 1px solid orange;
  margin: 20px 0;
}

.Info {
  border: 1px solid yellow;
  display: flex;
  justify-content: space-between;
}
.InfoTitle {
  color: white;
  font-weight: bold;
}
.InfoText {
  color: white;
}
.Area {
  position: relative;
}

/* 오른쪽 */
.menuBox {
  width: 100%;
  height: 100%;
  border: 3px solid green;
  margin-top: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
}

.myMenu {
  width: 95%;
  margin: 0 auto;
  list-style: none;
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  border: 1px solid red;
}
.myMenu > li {
  margin-right: 30px;
  cursor: pointer;
  color: #757575;
}
.active {
  color: white !important;
  border-bottom: 4px solid #d30000;
}

/* .mapContent {
  width: 90%;
  height: 100%;
  border: 1px solid yellow;
  margin: 20px auto 0;
} */
</style>
